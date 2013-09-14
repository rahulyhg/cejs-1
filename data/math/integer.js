
/**
 * @name	CeL integer function
 * @fileoverview
 * 本檔案包含了整數 (integer) 的 functions。<br />
 * 藉由原生計算功能，盡可能提供高效的大數計算。<br />
 * integer 大數基本上即為 Integer.BASE 進位制之數字系統。
 *
 * @example
 * <code>
 * CeL.run('data.math.integer');
 * var integer = new CeL.integer('654561264556287547824234523');
 * CeL.log(integer.add('096527893048039647894'));
 * </code>
 *
 * @since	2013/9/8 13:42:58
 */


/*
TODO:

need to 去 exponent?

http://msdn.microsoft.com/zh-tw/library/system.numerics.biginteger.aspx
http://docs.oracle.com/javase/7/docs/api/java/math/BigInteger.html


https://github.com/silentmatt/javascript-biginteger
https://github.com/peterolson/BigInteger.js
https://github.com/peterolson/BigRational.js
https://github.com/cwacek/bigint-node/blob/master/lib/bigint.js

http://www.leemon.com/crypto/BigInt.html
http://www-cs-students.stanford.edu/~tjw/jsbn/
http://java.sun.com/javase/6/docs/api/java/math/BigInteger.html

*/



'use strict';
if (typeof CeL === 'function')
	CeL.run(
	{
		name: 'data.math.integer',
		require: 'data.code.compatibility|data.math.GCD|data.math.factorization',
		code: function (library_namespace) {

			//	requiring
			var GCD, factorization;
			eval(this.use());

			var KEY_BASE = 'base',
			// sign. true: *this* is negative, false/undefined: positive.
			KEY_NEGATIVE = 'negative',
			// 科學記數法指數 in 10。default 0.
			KEY_EXPONENT = 'exponent',
			// this[KEY_FACTORS] = {safe integer}scalar純量。default 0.
			// this[KEY_FACTORS] = [ {safe integer}scalar, {safe integer}scalar, ..]
			KEY_FACTORS = 'factors',
			// this[KEY_LARGE_FACTORS] = [ Integer, Integer, Integer, .. ]
			KEY_LARGE_FACTORS = 'large factors',
			// instance[KEY_CACHE][base] = string in base;
			KEY_CACHE = 'cache',
			// https://en.wikipedia.org/wiki/Operation_(mathematics)
			KEY_OP = {
				'+': add,
				'-': subtract,
				'*': multiply,
				'/': divide,
				'%': modulus
			},

			// 0: 做處置。
			// 1: 盡可能僅添加 copy，不做處置。
			COPY_ONLY = 1,
			// 2: 盡可能僅添加 reference，不做處置。
			REFERENCE_ONLY = 2,

			// see for_each_digit()
			MIN_BASE = 0,
			// assert: MAX_BASE * MAX_BASE < Number.MAX_SAFE_INTEGER + 2
			// see merge_integer_factors(), change_base_to(), for_each_digit()
			//	為方便乘法處理，因此取自乘不致 overflow ( > Number.MAX_SAFE_INTEGER) 之值，預防 overflow 用。
			MAX_BASE = Math.floor(Math.sqrt(Number.MAX_SAFE_INTEGER + 1))
			;

			while ((Number.MAX_SAFE_INTEGER / ++MIN_BASE | 0) < 0);

			/**
			 * 轉換指定進位的數字文字，成為純量。
			 *
			 * @param	{String|Number}number	輸入數值(value/number)大小。
			 *
			 * @return	可確認 value 為 scalar 純量/純數值時，回傳整數 (integer)。否則為 flase。
			 *
			 * @example <code>
			 * var i = to_integer('1000000000000000');
			 * </code>
			 *
			 * @inner
			 * @_memberOf	_module_
			 */
			function to_integer(number) {
				var value = Math.floor(number);
				return number == value
					//
					&& Number.isSafeInteger(value)
					//
					&& value;
			}

			function do_modified(integer) {
				delete integer[KEY_CACHE];
			}

			// 超過此界限，與元素(Integer digit)相乘時即有可能超過 Number.MAX_SAFE_INTEGER。
			// boundary(base+2)<Number.MAX_SAFE_INTEGER
			function multiplication_boundary(base) {
				//assert: return > 1
				return MIN_BASE <= base ? Math.floor((Number.MAX_SAFE_INTEGER + 1) / base) : MULTIPLICATION_BOUNDARY;
			}

			// 若為準確次方，則回傳次方數。
			// number = base ^ count_exponent(number, base)
			function count_exponent(number, base) {
				if (number < base)
					return -count_exponent(base, number);

				var exponent = 0;
				while (number !== 0 && 0 === number % base)
					number /= base, exponent++;
				// 1: (any number) ^ 0
				if (number === 1)
					return exponent;
			}

			//============================================================================
			// digit Array 工具函數


			// digit Array 工具函數
			// scalar to digit Array
			//assert: 0 <= scalar inside module
			//assert: 1 < base
			function to_digit_Array(scalar, base, set_fraction) {
				if (typeof scalar !== 'number')
					// 已經是 digit Array 了？
					return scalar;
				else if (!scalar || !isFinite(scalar))
					return [scalar];

				var digit_Array = [];
				//digit_Array[KEY_BASE] = base;
				if (scalar < 0)
					scalar = -scalar, digit_Array[KEY_NEGATIVE] = true;

				if (scalar !== Math.floor(scalar))
					if (set_fraction) {
						// 當 base_now === 0，表示系統已無法處理較這更小的數字，再保留這之下的數值已無意義。
						for (var base_now = 1, reminder = scalar % 1; reminder && (base_now /= base) ;)
							digit_Array.unshift((reminder *= base) | 0), reminder %= 1;
						digit_Array[KEY_EXPONENT] = -digit_Array.length;
						scalar = Math.floor(scalar);
					} else
						//test only
						// 有小數部分
						library_namespace.warn('to_digit_Array: Number has a fractional part: [' + scalar + '].');
				else if (!Number.isSafeInteger(scalar))
					library_namespace.warn('to_digit_Array: Number is too large: [' + scalar + '].');

				while (0 < scalar) {
					digit_Array.push(scalar % base);
					scalar = Math.floor(scalar / base);
				}
				return digit_Array;
			}

			// 清理高數位的 0。
			function trim_0(digit_Array, preserve) {
				var index = digit_Array.length;
				// 1 < index: 直接保留最後一個，省得麻煩。
				if (preserve === undefined)
					preserve = 1;
				//assert: digit_Array[index] is integer
				while (preserve < index-- && digit_Array[index] === 0);
				digit_Array.length = index + 1;
				return digit_Array;
			}

			// digit Array 工具函數
			// 將 digit_Array 自低位依 callcack() 處理至高位，
			//結果存至 target_Array[跳過 target_shift 個] || digit_Array。
			// 可自動處理進退位。無法處理 overflow 問題。
			// assert: callcack() 任一回傳，皆 isSafeInteger() === true。
			// target_Array: target digit_Array
			function for_each_digit(digit_Array, callcack, base, target_Array, target_shift) {
				if (!base)
					base = BASE;
				if (!target_Array)
					target_Array = digit_Array;
				target_shift |= 0;
				var carry = 0, length = digit_Array.length, index = 0, digit;

				for (; index < length || carry !== 0 ; index++)
					// 當 index >= length，僅作進位處理。
					if (typeof (digit = index < length ? callcack(digit_Array[index] || 0, carry, index)
						// 當 digit_Array 皆 callcack() 過後，僅處理進退位。
						: carry + (target_Array[index + target_shift] || 0)) === 'number') {
						if (digit < 0 && index < length) {
							// 處理退位。
							carry = digit / base | 0;
							if ((digit %= base) < 0)
								carry--, digit += base;
						} else if (base <= digit) {
							// 處理進位。
							// assert: 0 < (digit / base | 0)
							// MIN_BASE: 因為用 `|0`，故 base < 5 會出現問題:
							// (Number.MAX_SAFE_INTEGER / 4 | 0) < 0, 0 < (Number.MAX_SAFE_INTEGER / 5 | 0)
							carry = digit / base | 0;
							digit %= base;
						} else
							carry = 0;
						target_Array[index + target_shift] = digit;
					} else
						carry = 0;

				trim_0(target_Array);

				if (carry)
					library_namespace.warn('for_each_digit: carry [' + scalar + '] left.');
				return carry;
			}

			// digit Array 工具函數
			//http://en.wikipedia.org/wiki/Change_of_base
			//http://en.wikipedia.org/wiki/Base_conversion
			function change_base_to(digit_Array, from_base, to_base, get_copy) {
				if (!to_base)
					to_base = BASE;
				if (!from_base)
					from_base = BASE;
				if (to_base === from_base
					//shortcut
					|| digit_Array.length <= 1 && (digit_Array[0] <= 1 || !isFinite(digit_Array[0])))
					return get_copy ? digit_Array.slice() : digit_Array;

				var exponent = count_exponent(to_base, from_base);
				if (exponent) {
					// 增加效率。
					var to_digit_Array = [], scalar = 0,
					// 1: (any number) ^ 0
					base_now = 1;
					if (0 < exponent) {
						// e.g., 10 → 100
						digit_Array.forEach(function (digit, index) {
							scalar += digit * base_now;
							if ((index + 1) % exponent === 0)
								to_digit_Array.push(scalar), scalar = 0, base_now = 1;
							else
								base_now *= from_base;
						});
						if (scalar)
							to_digit_Array.push(scalar);
					} else {
						// e.g., 100 → 10
						exponent = -exponent;
						digit_Array.forEach(function (digit, index) {
							for (var i = 0; i < exponent; i++)
								to_digit_Array.push(digit % to_base), digit = digit / to_base | 0;
						});
						trim_0(to_digit_Array);
					}
					return to_digit_Array;
				}

				var number = new Integer(0, null, null, to_base), to_digit_Array = merge_integer_factors(number, true),
				//
				boundary = multiplication_boundary(to_base), value = 0, base_now = 1, index = digit_Array.length,
				multiply_add = function () {
					for_each_digit(to_digit_Array, function (digit, carry, index) {
						// 除了積本身，這邊可能出現 value<=(boundary-1), carry<=(base-1)。
						// (base-1)*boundary+(boundary-1)+(base-1) <= Number.MAX_SAFE_INTEGER
						// This is also the limit of from_base, therefore:
						// MAX_BASE<=Math.sqrt(Number.MAX_SAFE_INTEGER+2),
						// boundary<=(Number.MAX_SAFE_INTEGER+2)/base-1,
						return digit * base_now + carry + (index ? 0 : value);
					}, to_base);
					//reset
					value = 0, base_now = 1;
				};

				if (0 === to_digit_Array.length)
					to_digit_Array.push(0);
				while (0 < index--) {
					base_now *= from_base;
					value = value * from_base + digit_Array[index];
					if (boundary < base_now * from_base || index === 0)
						multiply_add();
				}
				return to_digit_Array;
			}


			/**
			 * 測試大小/比大小
			 * @param number2	the second integer
			 * @return	{Number}	0:==, <0:<, >0:>
			 * @_name	_module_.prototype.compare_to
			 */
			// return < 0 : number1 < number2
			// return === 0 : number1 === number2
			// return > 0 : number1 > number2
			function compare_amount(number1, number2) {
				var i1 = number1 instanceof Integer, i2 = number2 instanceof Integer;
				if (!i1 && !i2)
					return Math.abs(number1) < Math.abs(number2);

				if (i1 && i2) {
					if ((number1[KEY_BASE] || BASE) !== (number2[KEY_BASE] || BASE))
						//換底。
						//number2 = new Integer(number2, null, number2[KEY_EXPONENT], number2[KEY_BASE]);
						number2[KEY_LARGE_FACTORS][0] = change_base_to(merge_integer_factors(number2 = new Integer(number2), true), number2[KEY_BASE], number1[KEY_BASE]);
				} else {
					if (!i1)
						number1 = new Integer(number1, null, null, i2 && number2[KEY_BASE]);
					if (!i2)
						number2 = new Integer(number2, null, null, i1 && number1[KEY_BASE]);
				}

				number1 = merge_integer_factors(number1, true);
				number2 = merge_integer_factors(number2, true);
				i2 = number2.length;
				if (i2 !== number1.length)
					return number1.length - number2.length;

				for (; 0 < i2--;)
					if (i1 = (number1[i2] || 0) - (number2[i2] || 0))
						break;
				return i1;
			}

			function compare(number1, number2) {
				if (number1[KEY_NEGATIVE] ^ number2[KEY_NEGATIVE])
					return number1[KEY_NEGATIVE] ? -1 : 1;

				var c = compare_amount(number1, number2);
				return number1[KEY_NEGATIVE] ? -c : c;
			}


			//============================================================================
			//	definition of module integer


			/**
			 * 任意大小、帶正負號的整數。integer instance.
			 *
			 * @param	{Number|String|Array}factors 因數、輸入數值(value/number)大小。
			 * @param	{natural number|String|Array}[base]	輸入數值採用之進位制基底/數字 digit 字集。區分大小寫。
			 * @param	{Integer}[exponent]	輸入數值標記之科學記數法指數。
			 * @param	{natural number}[to_base]	內採基底/進位制。
			 *
			 * @example
			 * <code>
			 * CeL.log((new CeL.integer('876567896')).op('*','6456789976545678'));
			 * </code>
			 *
			 * @class	integer 的 constructor
			 * @constructor
			 */
			function Integer(factors, base, exponent, to_base) {
				// this[KEY_BASE] 此次設定完後，除非歸零，否則不可再改變!
				var set_base = function (base) {
					if (MIN_BASE <= (base = to_integer(base)) && base <= MAX_BASE && base !== BASE)
						this[KEY_BASE] = base;
				}.bind(this);

				if (factors instanceof Integer) {
					// factors, clone, deep_copy; 將把 base 當作 to_base。
					set_base(base);
					this.copy(factors, base);
					return;
				}


				set_base(to_base);

				if (exponent = to_integer(exponent))
					this[KEY_EXPONENT] = exponent;

				this[KEY_LARGE_FACTORS] = [];
				if (typeof factors === 'string') {
					this[KEY_FACTORS] = [];
					// 以 parse_string() 取得。
					parse_string(factors, base, this);
					return;
				}

				if (Array.isArray(factors) && 0 < factors.length)
					// TODO: if negative
					this[KEY_FACTORS] = factors;
				else if (typeof factors === 'number' && isFinite(factors)) {
					this[KEY_FACTORS] = [];
					// value/scalar純量
					this.set_single_value(factors);
				} else
					library_namespace.err('Invalid number: [' + factors + '].');
			}

			//	class public interface	---------------------------

			// .clone()
			// WARNING: will delete [KEY_FACTORS], [KEY_LARGE_FACTORS]! 參照將無效!
			function copy(integer, base) {
				[KEY_EXPONENT, KEY_NEGATIVE, KEY_CACHE].forEach(function (key) {
					if (key in integer)
						this[key] = integer[key];
				});

				if ((integer[KEY_BASE] || BASE) === (base || BASE)) {
					this[KEY_FACTORS] = integer[KEY_FACTORS].slice();
					this[KEY_LARGE_FACTORS] = integer[KEY_LARGE_FACTORS].slice();
					return this;
				}

				var digit_Array = merge_integer_factors(integer);
				if (typeof digit_Array === 'number') {
					this[KEY_FACTORS] = [digit_Array];
					this[KEY_LARGE_FACTORS] = [];
				} else {
					this[KEY_FACTORS] = [];
					this[KEY_LARGE_FACTORS] = [change_base_to(digit_Array, integer[KEY_BASE], base)];
				}
				return this;
			}

			// 僅設定單一值。
			//assignment
			function set_single_value(number, amount_only) {
				do_modified(this);
				// 對於非數字，無法斷定。
				if (typeof number === 'number')
					if (number < 0)
						number = -number,
						this[KEY_NEGATIVE] = true;
					else
						delete this[KEY_NEGATIVE];
				else if (!amount_only)
					this[KEY_NEGATIVE] = !!number[KEY_NEGATIVE];

				// {Array} 元素(Integer digit) Array: must be Array, NO Integer!
				this[KEY_LARGE_FACTORS].length = 0;
				// 因數: must be Array
				this[KEY_FACTORS].length = 0;

				var base = this[KEY_BASE] || BASE;
				if (typeof number === 'number' && (number < base ||
					//NaN, Infinity, -Infinity
				!isFinite(number))) {
					// 僅設定scalar純量部份。
					if (number !== Math.floor(number))
						library_namespace.warn('set_single_value: Number has a fractional part: [' + number + '].');
					this[KEY_FACTORS].push(number);
				} else
					this[KEY_LARGE_FACTORS].push(to_digit_Array(number, base));
				return this;
			}

			// 簡化/合併 integer[KEY_FACTORS], integer[KEY_LARGE_FACTORS];
			function merge_integer_factors(integer, force_to_digit_Array) {
				var factors = integer[KEY_FACTORS], large_factors = integer[KEY_LARGE_FACTORS],
				//
				base = integer[KEY_BASE] || BASE;

				if (factors.length + large_factors.length < 2) {
					//僅存單一元素。無須簡化/合併
					if (force_to_digit_Array && large_factors.length === 0)
						integer.set_single_value(to_digit_Array(factors[0], base), true);
					return large_factors.length === 0 ? factors[0] : large_factors[0];
				}

				var digit_Array = large_factors.pop().slice() || [], value, index,
				//
				boundary = multiplication_boundary(integer[KEY_BASE]);

				factors.forEach(function (scalar) {
					if (scalar < boundary)
						//assert: 0 < scalar
						for_each_digit(digit_Array, function (digit, carry) {
							return digit * scalar + carry;
						}, base);
					else
						//	稍後再處理。
						large_factors.push(to_digit_Array(scalar, base));
				});

				large_factors.forEach(function (digits) {
					var target_digit_Array = [];
					//	scalar * digit_Array，結果放在 target_digit_Array。
					// assert: scalar 與 digit_Array 任一元素相乘，皆 isSafeInteger() === true。
					digits.forEach(function (scalar, shift) {
						for_each_digit(digit_Array, function (digit, carry, index) {
							// assert: target_digit_Array[] is natural number < base
							// 除了積本身，這邊可能出現 carry<=(base-2), target_digit_Array[]<=(base-1), 共 (2*base-3)。
							// assert: Number.isSafeInteger(base*base-2)
							// therefore: base<=Math.sqrt(Number.MAX_SAFE_INTEGER+2)
							return digit * scalar + carry + (target_digit_Array[index + shift] || 0);
						}, base, target_digit_Array, shift);
					});
					//回存。
					digit_Array = target_digit_Array;
				});

				//預防中空跳號。
				for (index = digit_Array.length; 0 < index--;)
					if (!(index in digit_Array))
						digit_Array[index] = 0;

				if (!force_to_digit_Array)
					for (value = 0, index = digit_Array.length; 0 < index--;)
						if (!Number.isSafeInteger(value = value * base + digit_Array[index])) {
							value = undefined;
							break;
						}
				integer.set_single_value(value === undefined ? digit_Array : value);
				return digit_Array;
			}

			//和
			function add(addend, is_subtract) {
				if (!addend || (addend instanceof Integer) && 0 === addend.is_safe_integer(true))
					return this;

				do_modified(this);

				// 不能使手段。
				var digit_Array = merge_integer_factors(this, true),
				//
				digit, addend_digit, addend_digit_Array,
				//
				base = this[KEY_BASE] || BASE;

				// 強制轉成同底的 digit Array 再處理。
				addend = new Integer(addend, null, null, base);
				addend_digit_Array = merge_integer_factors(addend, true);

				//abs(this) < abs(addend)，需要反向，將 addend 放在前項，改成 this = (addend - this)。
				var reverse = (is_subtract ^= this[KEY_NEGATIVE] ^ addend[KEY_NEGATIVE])
				&& compare_amount(this, addend) < 0,
				//
				op = reverse ? function () { digit = addend_digit - digit; }
				: is_subtract ? function () { digit -= addend_digit; }
				: function () { digit += addend_digit; };

				if (reverse)
					this[KEY_NEGATIVE] = !this[KEY_NEGATIVE];

				for_each_digit(addend_digit_Array, function (nd, carry, index) {
					addend_digit = nd;
					digit = digit_Array[index] || 0;
					op();
					return digit + carry;
				}, base, digit_Array);

				return this;
			}

			//差
			function subtract(number) {
				return this.add(number, true);
			}


			// number multiplier

			// test:
			// check base & value: Integer (test if .is_safe_integer(true)===0, +-1, NaN)
			// show error and exit: NaN, +-Infinity
			// exit: 1
			// set sign and exit: -1
			// set value and exit: 0
			// translate to Integer: safe integer(e.g., 123), 1.23e123, '123'+'4'.repeat(400), '123'+'4'.repeat(16); the string type & negative
			// has a fractional part (有小數部分): .123, 1.123, 1903719924734991.36479887; the string type & negative; '123'+'4'.repeat(16)+'.1234'

			function multiply(number, preserve_factors) {
				var base = this[KEY_BASE] || BASE, value;

				if (typeof number === 'string')
					number = new Integer(number);
				else if ((number instanceof Integer) && (number[KEY_BASE] || BASE) !== base)
					// 強制轉成同底的 digit Array 再處理。
					number = new Integer(number, null, null, base);

				if (number instanceof Integer ?
					// test if `number` is NaN
					isNaN(value = number.is_safe_integer(true))
					// assert: typeof number === 'number'
					: typeof number !== 'number' || !isFinite(value = number)) {
					library_namespace.err('Invalid number: [' + number + '].');
					this.set_single_value(this.is_safe_integer(true) * value);
					return this;
				}

				if (this.is_safe_integer(true) === ABSORBING_ELEMENT)
					return this;

				//assert: number instanceof Integer || typeof number === 'number'
				//assert: typeof value === 'number', value 為可能之 safe integer
				if (value < 0) {
					this[KEY_NEGATIVE] = !this[KEY_NEGATIVE];
					value = -value;
					if (value === MULTIPLICATIVE_IDENTITY)
						do_modified(this);
				}

				if (value === MULTIPLICATIVE_IDENTITY)
					return this;

				if (value === ABSORBING_ELEMENT) {
					this.set_single_value(ABSORBING_ELEMENT);
					return this;
				}

				// 至此特殊值處理完畢。
				do_modified(this);

				if (typeof number === 'number')
					if (number === Math.floor(number)) {
						if (preserve_factors && Number.isSafeInteger(number)) {
							this[KEY_FACTORS].push(number);
							return this;
						}
						number = new Integer(number);
					} else {
						// Number has a fractional part. 有小數部分
						number = new Integer(number);
					}
				else if (number[KEY_EXPONENT]) {
					// Number has a fractional part. 有小數部分
					library_namespace.warn('Number has a fractional part.');

				} else if (preserve_factors) {
					// copy factors only
					Array.prototype.push.apply(this[KEY_FACTORS], number[KEY_FACTORS]);
					Array.prototype.push.apply(this[KEY_LARGE_FACTORS], number[KEY_LARGE_FACTORS]);
					return this;
				}

				this[KEY_LARGE_FACTORS].push(merge_integer_factors(number, true));

				merge_integer_factors(this);

				return this;
			}

			// this → remainder,
			// return {digit Array}quotient
			function division(denominator) {
				if (typeof denominator === 'number' && denominator !== Math.floor(denominator)) {
					// for number has a fractional part, number is not a integer.
					library_namespace.warn('division: denominator [' + denominator + '] has a fractional part. Truncate to [' + Math.floor(denominator) + '].');
					denominator = Math.floor(denominator);
				}

				var is_negative;
				if (denominator) {
					if (!(denominator instanceof Integer) || (denominator[KEY_BASE] || BASE) !== (this[KEY_BASE] || BASE))
						// 強制轉成同底的 digit Array 再處理。
						denominator = new Integer(denominator, null, null, this[KEY_BASE]);
					is_negative = denominator[KEY_NEGATIVE];
					denominator = trim_0(change_base_to(merge_integer_factors(denominator, true), denominator[KEY_BASE], this[KEY_BASE]), 0);
					if (denominator.length === 0)
						denominator = 0;
				}

				if (!denominator) {
					library_namespace.err('division: Invalid number: [' + denominator + '].');
					//do simulation
					var numerator = this.is_safe_integer(true);
					if (typeof numerator !== 'number')
						numerator = 1;
					this.set_single_value(numerator % denominator);
					return numerator / denominator;
				}

				// (dividend or numerator) ÷ (divisor or denominator) = quotient + remainder / denominator
				var numerator = merge_integer_factors(this, true), quotient = [], base = this[KEY_BASE] || BASE,
				// N: the highest digits of numerator.
				// D: the highest digits of denominator.
				N, NI, D, DI, Q;

				//When denominator is bigger than numerator, the quotient will be 0 and the remainder will be numerator itself.
				while (0 < (DI = denominator.length) && DI <= (NI = numerator.length)) {
					// Get ths first non zero digit D of denominator.
					//assert: top digit of denominator is not 0.
					D = denominator[--DI];

					// Get ths first digits N of numerator.
					N = numerator[--NI];
					while (N < D && 0 < NI && DI <= NI) {
						// 首位為 0
						//quotient[NI-DI] = 0;

						// 多取一位 numerator，確保 N >= D。
						N = N * base + numerator[--NI];
					}
					if (NI < DI || N < D)
						break;
					//assert: N >= D, NI >= DI

					//決定 Q = thie next digit of quotient
					// assert: (N + 1) / D | 0 === Math.floor((N + 1) / D)
					if (DI === 0)
						//There is no digits of denominator lefting. The quotient digit has no other possibility.
						Q = N / D | 0;
					else
						//考慮兩個因素:
						//N, D 將在 Number.isSafeInteger() 的範圍內，一直乘到 N/(D+1)|0===(N+1)/D|0 為止。此兩數為當前 quotient 最高位數之可能值範圍。
						while (((Q = N / (D + 1) | 0) < ((N + 1) / D | 0))
							//
							&& 0 < DI && Number.isSafeInteger(N * base)) {
							N = N * base + numerator[--NI];
							D = D * base + denominator[--DI];
						}

					// 通常發生在 numerator 極為接近 denominator 之 Q 或 Q+1 倍時，會無法判別應該用 Q 或 Q+1。
					if (Q === 0) {
						// assert: numerator, denominator 前面幾位大小相同。
						// assert: index of quotient Array === NI - DI，尚未 borrowed。
						// 確認 numerator, denominator 孰大孰小。
						while (0 < DI && numerator[--NI] === denominator[--DI]);
						if (numerator[NI] < denominator[DI])
							if (--NI < DI)
								// numerator now (= reminder) < denominator
								break;
							else
								Q = base - 1;
						else
							// 剛好足夠減一。
							Q = 1;
					}

					//NI → index of quotient Array, the diff of numerator and denominator.
					NI -= DI;
					quotient[NI] = (quotient[NI] || 0) + Q;

					//numerator → reminder
					// numerator -= Q * denominator * base ^ (index of quotient Array = NI)
					for_each_digit(denominator, function (digit, carry, index) {
						return carry + (numerator[index + NI] || 0) - Q * digit;
					}, base, numerator, NI);

				}

				if (is_negative) {
					// remainder 不受 denominator 正負影響。
					// quotient 受 denominator 正負影響。
					if (1 < quotient.length
						// 0 || NaN
						|| quotient[0]) {
						//e.g., 4/-5
						quotient[KEY_NEGATIVE] = this[KEY_NEGATIVE] ^ denominator[KEY_NEGATIVE];
					}
				}

				// this → remainder,
				// return {digit Array}quotient
				return quotient;
			}

			function divide(denominator) {
				return this.set_single_value(this.division(denominator));
			}

			function modulus(denominator) {
				this.division(denominator);
				return this;
			}


			// http://en.wikipedia.org/wiki/Elementary_arithmetic
			/**
			 * 四則運算加減乘除 + - * / (+-×÷)**[=]
			 * @param operator	operator
			 * @param number	the second integer
			 * @return	計算後的結果
			 * @see
			 * <a href="http://www.javaworld.com.tw/jute/post/view?bid=35&amp;id=30169&amp;tpg=1&amp;ppg=1&amp;sty=1&amp;age=0#30169" accessdate="2010/4/16 20:47">JavaWorld@TW Java論壇 - post.view</a>
			 * @_name	_module_.prototype.op
			 */
			function operate(operator, number) {
				var target;
				if (operator.slice(-1) === '=')
					target = this, operator = operator.slice(0, -1);
				else
					target = new Integer(this);

				if (operator in KEY_OP)
					KEY_OP[operator].call(target, number);
				else
					library_namespace.err('Invalid operator [' + operator + ']!');

				return target;
			}

			// 以最小成本嘗試可否轉為 safe integer。
			function is_safe_integer(get_value) {
				var factors = this[KEY_FACTORS], large_factors = this[KEY_LARGE_FACTORS], index = factors.length, value = MULTIPLICATIVE_IDENTITY,
				digit_Array, scalar, base = this.base || BASE;
				while (0 < index--)
					if (!Number.isSafeInteger(value *= factors[index]))
						return;
				if (!value || !isFinite(value))
					return get_value ? value : true;

				if (false) {
					var max_length = 0;
					index = value;
					while (Number.isSafeInteger(index *= base))
						// 看可以允許 base 的幾個次方。
						max_length++;
					index = large_factors.length;
					while (0 < index--)
						if ((max_length -= large_factors[index].length - 1) < 0)
							return;
				}

				index = large_factors.length;
				while (0 < index--) {
					scalar = 0;
					length = (digit_Array = large_factors[index]).length;
					while (0 < length--)
						if (!Number.isSafeInteger(scalar = scalar * base + digit_Array[length]))
							return;
					if (!Number.isSafeInteger(value *= scalar))
						return;
				}
				return this[KEY_NEGATIVE] ? -value : value;
			}

			function valueOf() {
				var value = merge_integer_factors(this);
				if (typeof value !== 'number') {
					var index = value.length, digit_Array = value, base = this[KEY_BASE] || BASE;
					for (value = 0; 0 < index--;) {
						if (!isFinite(value * base)) {
							value = Math.log10(value) + Math.log10(base) * (index + 1);
							value = Math.pow(10, value % 1) + 'e+' + (value | 0);
							break;
						}
						value = value * base + digit_Array[index];
					}
				}
				return this[KEY_NEGATIVE] ? typeof value === 'number' ? -value : '-' + value : value;
			}

			function toString(base) {
				if (!(MIN_RADIX <= base && base <= MAX_RADIX))
					base = DEFAULT_RADIX;
				if (this[KEY_CACHE] && this[KEY_CACHE][base])
					return this[KEY_CACHE][base];

				//because MIN_BASE = 4 > MIN_RADIX = 2
				var base_used = MIN_BASE <= base ? base : base * base,
				//
				value = change_base_to(merge_integer_factors(this, true), this[KEY_BASE], base_used, true);
				if (base !== DEFAULT_RADIX)
					base_used = base_used !== base,
					//
					(value = value.slice()).forEach(function (digit, index) {
						digit = digit.toString(base);
						if (base_used && digit.length === 1)
							//padding
							digit = DEFAULT_DIGITS[0] + digit;
						value[index] = digit;
					});

				if (this[KEY_NEGATIVE])
					value.push('-');
				value.reverse();
				if (!this[KEY_CACHE])
					this[KEY_CACHE] = [];
				return this[KEY_CACHE][base] = value.join('') || '0';
			}

			//	instance public interface	-------------------
			library_namespace.extend({
				// 下面全部皆為 assignment，例如 '+' 實為 '+='
				'+': add,
				'-': subtract,
				'*': multiply,
				'/': divide,
				'%': modulus,
				// add_assignment
				add: add,
				// subtract_assignment
				subtract: subtract,
				// multiply_assignment
				multiply: multiply,
				// divide_assignment
				divide: divide,
				modulus: modulus,
				// 至此為 assignment。

				division: division,
				compare_amount: compare_amount,

				//	setup toString function

				copy: copy,
				set_single_value: set_single_value,
				is_safe_integer: is_safe_integer,
				op: operate,
				valueOf: valueOf,
				toString: toString
			}, Integer.prototype);

			library_namespace.extend({
				to_digit_Array: to_digit_Array,
				for_each_digit: for_each_digit,
				change_base_to: change_base_to
			}, Integer);

			//============================================================================

			/**
			 * 轉換 ['a','b','c'] → {a:0,b:1,c:2}。
			 *
			 * @param	{Array}[base]	輸入數值採用之進位制基底/數字 digit 字集。
			 *
			 * @return	回傳 cache 物件。
			 *
			 * @inner
			 */
			function digit_cache(base) {
				var digits = library_namespace.null_Object();
				base.forEach(function (digit, index) {
					if (digit.length !== 1)
						library_namespace.err('Invalid digit: [' + digit + '].');
					else if (digit in digits)
						library_namespace.err('Digit already exists: [' + digit + '] = ' + digits[digit]);
					else
						digits[digit] = index;
				});
				return digits;
			}

			var
			//	[ full , sign, integer part 整數部分, fractional part 小數部分, exponent 指數 ]
			PATTERN_NUMBER = /([+\-]?)([\da-z]*)(?:\.([\da-z]+))?(?:[eE]([+\-]?\d+))?/,

			DECIMAL_BASE = (1 + '0'.repeat(Math.log10(Number.MAX_SAFE_INTEGER) >> 1)) | 0,

			//	default base.
			//	每個位數存放 {safe integer} 0 ~ BASE-1，大於等於 BASE 即須進位。
			BASE = DECIMAL_BASE,
			MULTIPLICATION_BOUNDARY = multiplication_boundary(BASE),

			/**
			 * parseInt( , radix) 可處理之最大 radix，
			 * 與 Number.prototype.toString ( [ radix ] )
			 * 可用之最大基數 (radix, base)。<br />
			 * 10 Arabic numerals + 26 Latin alphabet.
			 *
			 * @inner
			 * @see
			 * <a href="http://en.wikipedia.org/wiki/Hexadecimal" accessdate="2013/9/8 17:26">Hexadecimal</a>
			 */
			MAX_RADIX = 0,
			//
			MIN_RADIX = 0,
			// 應與 parseInt() 一致。
			DEFAULT_RADIX = parseInt('10', undefined),
			// 數字過大，parseInt() 無法獲得精確數值時使用 DEFAULT_DIGITS。不分大小寫。應與 parseInt() 一致。
			// assert: DEFAULT_DIGITS.length === MAX_RADIX
			// assert: DEFAULT_DIGITS.toLowerCase() === DEFAULT_DIGITS
			DEFAULT_DIGITS = '',
			DEFAULT_DIGITS_CACHE,
			// 乘法單位元素
			// https://en.wikipedia.org/wiki/Identity_element
			MULTIPLICATIVE_IDENTITY = 1,
			// http://en.wikipedia.org/wiki/Absorbing_element
			ABSORBING_ELEMENT = 0;

			while (isNaN(parseInt('1', ++MIN_RADIX)));
			try {
				for (; ;) {
					//console.log(MAX_RADIX + ' ' + DEFAULT_DIGITS);
					// will be '0123456789abcdefghijklmnopqrstuvwxyz'
					DEFAULT_DIGITS += MAX_RADIX.toString(1 < ++MAX_RADIX ? MAX_RADIX : undefined);
				}
			} catch (e) { }
			// 將轉成小寫。
			DEFAULT_DIGITS = DEFAULT_DIGITS.toLowerCase();
			DEFAULT_DIGITS_CACHE = digit_cache(DEFAULT_DIGITS.split(''));

			/**
			 * 轉換指定進位的數字文字，成為純量或 integer factor 物件。
			 *
			 * @param	{String}value	輸入數值(value/number)大小。
			 * @param	{natural number|String|Array}[base]	輸入數值採用之進位制基底/數字 digit 字集。區分大小寫。
			 * @param	{Integer}[exponent]	輸入數值標記之科學記數法指數。
			 * @param	{natural number}[to_base]	內採基底/進位制。
			 *
			 * @return	回傳 integer 物件，請用 integer.to_base() 傳回所欲之 base
			 *
			 * @example <code>
			 * var i=parse_string('1000000000000000');
			 * if(!i)
			 * 	library_namespace.err('bad input!');
			 * else
			 * 	library_namespace.debug(''+i);
			 * </code>
			 *
			 * @inner
			 * @_memberOf	_module_
			 * @see
			 * <a href="http://en.wikipedia.org/wiki/Numerical_digit" accessdate="2010/4/16 20:47">Numerical digit</a>
			 */
			function parse_string(value, base, to_base) {
				// if(!num) num = 0;

				if (typeof value === 'number') {
					// TODO
				} else if (typeof value !== 'string') {
					library_namespace.err('Invalid number: [' + value + '].');
					return;
				}

				if (Array.isArray(base)) {
					base.forEach(function (digit) {
						if (digit.length !== 1)
							library_namespace.err('Invalid digit: [' + digit + '].');
					});
					base = base.join('');
				}
				if (typeof base === 'string' && DEFAULT_DIGITS.startsWith(base.toLowerCase()))
					// 使用 DEFAULT_DIGITS。
					base = base.length;

				var number;
				if (base) {
					if (MIN_RADIX <= (number = to_integer(base)) && number <= MAX_RADIX)
						base = number;
					else if (typeof base !== 'string' || base.length < 2) {
						library_namespace.err('Invalid base: [' + base + ']');
						base = undefined;
					}
				} else
					base = undefined;

				// digits: do cache
				var digits;

				value = value.trim();
				if (!base || typeof base === 'number') {
					if (Number.isSafeInteger(number = base ? parseInt(value, base) : parseFloat(value))) {
						if (to_base instanceof Integer)
							to_base.set_single_value(number);
						return number;
					}
					// 數字過大，parseInt() 無法獲得精確數值時使用 DEFAULT_DIGITS。不分大小寫。基本上應與 parseInt() 一致。

					// 將轉成小寫。
					//	[ full , sign, integer part 整數部分, fractional part 小數部分, decimal exponent 指數 ]
					number = value.toLowerCase().match(PATTERN_NUMBER);
					if (!number) {
						library_namespace.err('Invalid value: [' + number + '].');
						return;
					}

					if (number[3]) {
						number[4] = (number[4] | 0) - number[3].length;
						number[2] += number[3];
					}
					value = number[2];
					if (to_base instanceof Integer) {
						to_base[KEY_EXPONENT] = (to_base[KEY_EXPONENT] | 0) + (number[4] | 0);
						if (number[1] === '-')
							to_base[KEY_NEGATIVE] = true;
						to_base = (number = to_base)[KEY_BASE];
						//number.set_single_value(0);
					} else
						number = new Integer(number[1] === '-' ? -0 : 0, null, number[4], to_base);

					if (!base)
						base = DEFAULT_RADIX;
					digits = DEFAULT_DIGITS_CACHE;

				} else if (typeof base === 'string') {
					// 初始設定欲回傳之 number。
					if (to_base instanceof Integer)
						//(number = to_base).set_single_value(0);
						number = to_base;
					else
						number = new Integer(0, null, null, to_base);
					digits = digit_cache(base.split('')), base = base.length;
				}

				var digit_Array = value.split('');
				digit_Array.reverse();
				digit_Array.forEach(function (digit, index) {
					digit_Array[index] = digits[digit];
				});

				number.set_single_value(change_base_to(digit_Array, base, to_base), true);

				return number;
			}

			return Integer;
		}

	});


if (typeof test === true) (function () {

	CeL.run('data.math.integer');

	//some example
	CeL.assert([new CeL.integer(123).add(2).toString(), '125']);
	CeL.assert([new CeL.integer(123).add(-2).toString(), '121']);
	var v;
	v = '654561264556287547824234523'; CeL.assert(Math.abs(parseInt(v) / new CeL.integer(v).valueOf() - 1) < 1e15);
	v = '76350768902347890756892374607'; CeL.assert([new CeL.integer(v).toString(), v]);
	v = '46545343687545453441534'; CeL.assert([new CeL.integer(v).add('100000000000000000000').toString(), '46645343687545453441534']);
	v = '46545343687545453441534'; CeL.assert([new CeL.integer(v).add('-100000000000000000000').toString(), '46445343687545453441534']);
	v = '102030405060708090'; CeL.assert([new CeL.integer(v).multiply(2).toString(), '204060810121416180']);
	v = '102030405060708090'; CeL.assert([new CeL.integer(v).multiply('2000000000').toString(), '204060810121416180000000000']);
	v = '102030405060708090'; CeL.assert([new CeL.integer(v).modulus(20).toString(), '10']);


	CeL.assert([new CeL.integer('1.37').add('.64').toString(), '2.01']);

	//正常測試案例
	a = b = 0;
	var BASE = (1 + '0'.repeat(Math.log10(Number.MAX_SAFE_INTEGER) >> 1)) | 0,
	MAX_BASE = Math.floor(Math.sqrt(Number.MAX_SAFE_INTEGER + 1)),
	_OP = '+,-,*,/,%'.split(','), OP = {},
	normal_test_case = [0, 1,
	//.64,1.37,
	2, 12, 16, 17, 32, 1000, 1024, 1024 * 1024,
	//BASE - 1, BASE, BASE + 1,//BASE-.9,BASE+.1,BASE+1.1,
	//MAX_BASE - 1, MAX_BASE, MAX_BASE + 1,//MAX_BASE-.9,MAX_BASE+.1,MAX_BASE+1.1,
	//Math.floor(Number.MAX_SAFE_INTEGER / 2)
	],

	do_test = function () {
		for (var op in OP) {
			//CeL.log(m);
			var v = '' + OP[op](+a, +b), m = '(' + typeof a + ')' + a + ' ' + op + '= (' + typeof b + ')' + b + ' !== ' + v + '; i=new CeL.integer(' + a + ');i.op("/=",' + b + ');i.toString();', i;
			try {
				i = new CeL.integer(a);
				i = i.op(op + '=', b);
				i = i.toString();
			} catch (e) {
				console.error('throw @ ' + m + ':');
				throw e;
			}
			CeL.assert([i, v], m);

			m = '(' + typeof a + ')' + a + ' ' + op + ' (' + typeof b + ')' + b;
			try {
				i = new CeL.integer(a);
				i = i.op(op, b);
				i = i.toString();
			} catch (e) {
				console.error('throw @ ' + m + ':');
				throw e;
			}
			CeL.assert([i, v], m);
		}
	};

	_OP.forEach(function (op, index) {
		OP[op] = new Function('a', 'b', 'return Math.floor(a' + op + 'b)');
	});

	normal_test_case.forEach(function (va) {
		[va, -va].forEach(function (va) {
			[va, '' + va].forEach(function (va) {
				normal_test_case.forEach(function (vb) {
					[vb, -vb].forEach(function (vb) {
						[vb, '' + vb].forEach(function (vb) {
							a = va, b = vb, do_test();
						});
					});
				});
			});
		});
	});

	CeL.info('All ' + normal_test_case.length * 2 * 2 * normal_test_case.length * 2 * 2 * _OP.length + ' tests OK');

})();
