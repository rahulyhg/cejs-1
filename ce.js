
/*
	Localized messages in CeL.
	本檔案為自動生成，請勿手動編輯！
	This file is auto created from _structure\structure.js, base.js, module.js, dependency_chain.js, initialization.js
		by auto-generate tool: build(.js) @ 2015.
*/


'use strict';

if (typeof CeL !== 'function') {



/**
 * <code>
TODO
將 module_name 改成 arguments
http://threecups.org/?p=129

listen language change event
play board

use <a href="http://prototyp.ical.ly/index.php/2007/03/01/javascript-design-patterns-1-the-singleton/" accessdate="2010/4/25 0:23" title="prototyp.ical.ly &amp;raquo; Javascript Design Patterns - 1. The Singleton">Singleton pattern</a>,
Module 模式或單例模式（<a href="http://zh.wikipedia.org/wiki/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F" accessdate="2010/4/25 0:25" title="单例模式">Singleton</a>）<a href="http://www.comsharp.com/GetKnowledge/zh-CN/TeamBlogTimothyPage_K950.aspx" accessdate="2010/4/25 0:24" title="那些相见恨晚的 JavaScript 技巧 - 基于 COMSHARP CMS">為 Douglas Crockford 所推崇</a>，並被大量應用在 Yahoo User Interface Library YUI。

http://wiki.forum.nokia.com/index.php/JavaScript_Performance_Best_Practices
http://ioio.name/core-javascript-pitfalls.html

CommonJS
http://www.heliximitate.cn/studyblog/archives/tag/commonjs





</code>
 */



/**
 * <code>
// TODO
// 2011/7/31 21:18:01




//module

//typeof CeL_id === 'string' && typeof this[CeL_id] === 'function' &&
typeof CeL === 'function' && CeL.run({
name:[module_name],
require:[function_name,module_name],

code:function(CeL){

var private_value=1;

function module_function_1(arg) {
	;
}
module_function_1.required='';


function module_class_1(arg) {
	;
}

function get_value(){
	return private_value;
}

module_class_1.prototype.print=function(){};
module_class_1.print=function(){};


return {module_function_1,module_class_1};

}

});



</code>
 */



// void(
// typeof CeL !== 'function' &&
(
/**
 * We can redefine native values only for undefined.<br />
 * http://weblogs.asp.net/bleroy/archive/2006/08/02/Define-undefined.aspx<br />
 * <br />
 * Will speed up references to undefined, and allows redefining its name. (from
 * jQuery)<br />
 * <br />
 * 用在比較或是 return undefined<br />
 * 在舊的 browser 中，undefined 可能不存在。
 */
function (global) {

	if (false)
		if (typeof global !== 'function')
			throw new Error('No global object specified!');

	var
		// https://developers.google.com/closure/compiler/docs/js-for-compiler
		/** @const */ library_name = 'CeL',

		/**
		 * library version
		 * 
		 * @type {String}
		 * @ignore
		 */
		library_version = '2.0',


		/**
		 * default debug level
		 * 
		 * @type {Integer}
		 * @ignore
		 */
		debug = 0,
		// 原生 console。
		// typeof console !== 'undefined' && console
		has_console = typeof console === 'object'
		//
		&& (typeof console.log === 'function'
		// in IE 8, typeof console.log === 'object'.
		|| typeof console.log === 'object')
		&& typeof console.error === typeof console.log,


		old_namespace,

		// default not_native_keyword.
		KEY_not_native = 'not_native',

		// _base_function_to_extend,

		function_name_pattern;


	// members of library -----------------------------------------------


	// define 'undefined'
	try {
		eval('if(undefined!==undefined){throw 1;}');
	} catch (e) {
		// or: undefined=void 0
		eval('undefined=this.undefined;');
	}


	/**
	 * Global Scope object<br />
	 * 於 CeL.eval_code 使用.<br />
	 * 
	 * TODO:<br />
	 * Function constructor evaluates in a scope of that function, not in a
	 * global scope.<br />
	 * http://perfectionkills.com/global-eval-what-are-the-options/
	 * 
	 * @ignore
	 * @see <a
	 *      href="http://stackoverflow.com/questions/3277182/how-to-get-the-global-object-in-javascript"
	 *      accessdate="2011/8/6 10:7">How to get the Global Object in
	 *      JavaScript? - Stack Overflow</a>
	 */
	// var global = Function('return this')(); // isWeb()?window:this;
	// (function(){return this;})()

	try {
		old_namespace = global[library_name];
	} catch (e) {
		// throw { message: '' };
		throw new Error(library_name + ': Cannot get the global scope object!');
	}



	if (false) {
		_Global.JustANumber = 2;
		var _GlobalPrototype = _Global.constructor.prototype;
		_GlobalPrototype.JustANumber = 2;
	}

	// 若已經定義過，跳過。因為已有對 conflict 的對策，因此跳過。
	if (false)
		if (global[library_name] !== undefined)
			return;


	/**
	 * Will speed up references to DOM: window, and allows redefining its name.
	 * (from jQuery)
	 * 
	 * @ignore
	 */
	// window = this;


	/**
	 * 本 JavaScript framework 的框架基本宣告。<br />
	 * base name-space declaration of JavaScript library framework
	 * 
	 * @name CeL
	 * @class Colorless echo JavaScript kit/library: library base name-space
	 */
	function _() {
		/**
		 * function CeL: library root<br />
		 * declaration for debug
		 */
		// this.global = arguments[0] || arguments.callee.ce_doc;
		return new (this.init.apply(global, arguments));
	};

	// if (typeof _.prototype !== 'object')
	_// JSDT:_module_
	.
	/**
	 * framework main prototype definition for JSDT: 有 prototype 才會將之當作 Class
	 */
	prototype = {
	};

	_.library_version = library_version;
	_.build_date = new Date("Thu Aug 13 15:48:32 UTC+0800 2015");

	// name-space 歸屬設定

	_// JSDT:_module_
	.
	get_old_namespace = function () {
		return old_namespace;
	};

	_// JSDT:_module_
	.
	recover_namespace = function () {
		if (old_namespace === undefined)
			delete global[library_name];
		else
			global[library_name] = old_namespace;
		return _;
	};



	_// JSDT:_module_
	.
	/**
	 * JavaScript library framework main class name.
	 * 
	 * @see <a
	 *      href="http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf">ECMA-262</a>:
	 *      Object.Class: A string value indicating the kind of this object.
	 * @constant
	 */
	Class = library_name;



	var is_WWW = typeof window === 'object'
		&& global === window
		// 由條件嚴苛的開始。
		&& typeof navigator === 'object'
			// Internet Explorer 6.0 (6.00.2900.2180),
			// Internet Explorer 7.0 (7.00.5730.13) 中，
			// navigator === window.navigator 不成立！
			&& navigator == window.navigator
		&& typeof location === 'object'
			&& location === window.location
		// object || function
		&& typeof setTimeout !== 'undefined'
			&& setTimeout === window.setTimeout
		&& typeof document === 'object'
			&& document === window.document
		// 下兩個在 IE5.5 中都是 Object
		// && library_namespace.is_type(window, 'global')
		// && library_namespace.is_type(document, 'HTMLDocument')

		// && navigator.userAgent
	,
	is_W3CDOM =
		is_WWW
		// W3CDOM, type: Object @ IE5.5
		&& document.createElement
		// &&!!document.createElement
		// type: Object @ IE5.5
		&& document.getElementsByTagName,
	script_host = !is_WWW && typeof WScript === 'object';

	_// JSDT:_module_
	.
	/**
	 * Are we in a web environment?
	 * 
	 * @param {Boolean}
	 *            W3CDOM Test if we are in a World Wide Web Consortium (W3C)
	 *            Document Object Model (DOM) environment.
	 * 
	 * @return We're in a WWW environment.
	 * 
	 * @since 2009/12/29 19:18:53
	 * @see use lazy evaluation / lazy loading
	 * @_memberOf _module_
	 */
	is_WWW = function (W3CDOM) {
		return W3CDOM ? is_W3CDOM : is_WWW;
	};


	_// JSDT:_module_
	.
	/**
	 * 本 library 專用之 evaluate()。
	 * 
	 * 若在 function 中 eval 以獲得 local variable，在舊 browser 中須加 var。<br />
	 * e.g., 'var local_variable=' + ..<br />
	 * 不加 var 在舊 browser 中會變成 global 變數。
	 * 
	 * @param {String}code
	 *            script code to evaluate
	 * 
	 * @returns value that evaluate process returned
	 * @see window.eval === window.parent.eval
	 *      http://stackoverflow.com/questions/3277182/how-to-get-the-global-object-in-javascript
	 *      http://perfectionkills.com/global-eval-what-are-the-options/
	 */
	eval_code = global.execScript ?
	function (code) {
		// 解決 CeL.run() 在可以直接取得 code 的情況下，於舊版 JScript 可能會以 eval() 來 include，
		// 這將造成 var 的值不會被設定到 global。

		// use window.execScript(code, "JavaScript") in JScript:
		// window.execScript() 將直接使用全局上下文環境，
		// 因此，execScript(Str)中的字符串Str可以影響全局變量。——也包括聲明全局變量、函數以及對象構造器。

		// window.execScript doesn’t return a value.
		return global.execScript(code, "JavaScript");
	}
	:
	function eval_code(code) {
		/**
		 * JSC eval() takes an optional second argument which can be 'unsafe'.<br />
		 * Mozilla/SpiderMonkey eval() takes an optional second argument which
		 * is the scope object for new symbols.
		 */
		if(false) {
			this.debug(global.eval, 2);
			this.debug(global.eval && global.eval !== arguments.callee);
		}
		// NO global.eval.call(global, code) :
		// http://perfectionkills.com/global-eval-what-are-the-options/

		// TODO: 似乎不總是有用。見 era.htm。
		return global.eval && global.eval !== eval_code ? global.eval(code)
			// 這種表示法 Eclipse Kepler (4.3.2) SR2 之 jsdoc 尚無法處理。
			: (0, eval)(code);
	};


	_// JSDT:_module_
	.
	/**
	 * evaluate @ Global scope.<br />
	 * 
	 * By the ECMA-262, new Function() will 'Pass in the Global Environment as
	 * the Scope parameter.'<br />
	 * 
	 * copy from jQuery core.js
	 * 
	 * @param {String}code
	 *            script code to evaluate
	 * 
	 * @returns value that evaluate process returned
	 * @see <a
	 *      href="http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context"
	 *      accessdate="2011/8/6 8:56">Eval JavaScript in a global context |
	 *      Java.net</a> use execScript on Internet Explorer
	 */
	global_eval = new Function('code', 'return '
			+ (
					typeof execScript === 'function' ? 'execScript('
					: is_WWW ? 'window.eval(' : 'eval.call(null,'
			)
			+ 'code)');

	/**
	 * 取得裸 Object (naked Object)。<br />
	 * 預防 Object.prototype 有東西，並消除 .toString() 之類。<br />
	 * 
	 * 注意: '' + Object.create(null) 會 throw TypeError: Cannot convert object to
	 * primitive value
	 * 
	 * @returns 裸 Object (naked Object)。
	 * 
	 * @see <a href="http://hax.iteye.com/blog/1663476" accessdate="2013/1/8
	 *      20:17">如何创建一个JavaScript裸对象 - hax的技术部落格 - ITeye技术网站</a>
	 * 
	 */
	var null_Object = function () {
		return Object.create(null);
	};

	try {
		null_Object();
	} catch (e) {
		null_Object = function () {
			return {};
		};
	}

	// export.
	_.null_Object = null_Object;

	var modify_function_hash = null_Object();

	_// JSDT:_module_
	.
	/**
	 * simple evaluates to get the value of specified variable identifier name.
	 * 
	 * 不使用 eval() 的方法，一層一層 call name-space。
	 * 
	 * BUG: 無論是不是相同 name_space，只要 variable_name 相同，即會執行 modify_function。<br />
	 * 以記憶體空間換取時間效率，會增加記憶體空間之使用。
	 * 
	 * 在兩個子層(a.b.c)下，這樣作效率較差@Chrome/5.0.375.29:<br />
	 * function(v){try{return(new Function('return('+v+')'))();}catch(e){}}
	 * 
	 * TODO:<br />
	 * 不存在時 throw.
	 * 
	 * @param {String}variable_name
	 *            variable identifier name. e.g., /[a-z\d$_]+(.[a-z\d_]+)+/i
	 * @param {Function}[modify_function]
	 *            註冊: 當以 .set_value() 改變時，順便執行此函數:<br />
	 *            modify_function(value, variable_name).
	 * @param {Object|Function}[name_space]
	 *            initialize name-space. default: global.
	 * @param [value]
	 *            設定 variable 為 value.
	 * 
	 * @returns value of specified variable identifier name
	 * 
	 * @since 2010/1/1 18:11:40
	 * @note 'namespace' 是 JScript.NET 的保留字。
	 */
	value_of = function (variable_name, modify_function, name_space, value) {
		var variable_name_array;
		if (Array.isArray(variable_name) && variable_name.length)
			variable_name_array = variable_name,
			variable_name = variable_name.join('.');
			// 在 Object("") 的情況下，typeof this==='object'。此時不可用 typeof。
		else if (typeof variable_name === 'string' && variable_name)
			variable_name_array = variable_name.split('.');
		else
			// return variable_name: 預防 value_of(null/undefined/NaN)
			return variable_name;

		// this.debug('get value of [' + variable_name + ']');
		if (_.is_Function(modify_function)) {
			if (variable_name in modify_function_hash)
				modify_function_hash[variable_name].push(modify_function);
			else
				modify_function_hash[variable_name] = [modify_function];
		}

		var i = 0,
		// TODO:
		// 可處理如:
		// obj1 . obj2 [ ' obj3.4 * \[ ' ] [''] . obj5 [ " obj6 \" \' \] . " ]
		// or detect obj1 .. obj2
		l = variable_name_array.length,
		v = name_space ||
			// this.env.global
			global,
		// do set value
		do_set = arguments.length > 3;
		if (false)
			this.debug('global.' + this.Class + ' = ' + this.env.global[this.Class]);

		if (do_set)
			l--;

		try {
			while (i < l) {
				// this.debug('to [' + variable_name_array[i] + ']: ' +
				// v[variable_name_array[i]]),
				if (variable_name_array[i] in v)
					v = v[variable_name_array[i++]];
				else
					throw 1;
			}

			if (do_set) {
				v[variable_name_array[i]] = value;
				do_set = modify_function_hash[variable_name];
				if (do_set)
					for (i in do_set)
						try {
							do_set[i](value, variable_name);
						} catch (e) {
							// TODO: handle exception
						}
			}

		} catch (e) {
			variable_name_array[i] = '<em>' + variable_name_array[i] + '</em><span class="debug_weaken">';
			if (false)
				alert(this.log.buffer.length + ',' + this.log.max_length + '\n'
						+ this.debug);
			this.debug('Cannot ' + (do_set ? 'set' : 'get') +
					' variable [<span title="' + variable_name + '">' + variable_name_array.join('.') + '</span></span>]!', 2, 'value_of');
			// throw
			return undefined;
		}

		return v;
	};


	_// JSDT:_module_
	.
	/**
	 * simple evaluates to set value of specified variable identifier name.<br />
	 * 不使用 eval().
	 * 
	 * @param {String}variable_name
	 *            variable identifier name. e.g., /[a-z\d$_]+(.[a-z\d_]+)+/i
	 * @param [value]
	 *            設定 variable 為 value.
	 * @param {Object|Function}[name_space]
	 *            initialize name-space. default: global.
	 * 
	 * @returns name-space of specified variable identifier name.<br />
	 *          e.g., return a.b.c when call .set_value('a.b.c.d').
	 * @since 2011/8/27 15:43:03
	 */
	set_value = function (variable_name, value, name_space) {
		return _.value_of(variable_name, null, name_space, value);
	};


	_// JSDT:_module_
	.
	/**
	 * 取得執行 script 之 path, 在 .hta 中取代 WScript.ScriptFullName。
	 * 
	 * @returns {String} 執行 script 之 path。
	 * @returns '' Unknown environment
	 */
	get_script_full_name = function () {
		return is_WWW && unescape(window.location.pathname)
			//
			|| script_host && WScript.ScriptFullName
			// for node.js
			|| typeof __filename === 'string' && __filename
			// for jslibs
			|| _.is_Object(old_namespace) && old_namespace.loader_script
			// Unknown environment
			|| '';
	};

	_// JSDT:_module_
	.
	/**
	 * 取得執行 script 之名稱(不包括 .js 等 extension).
	 * 
	 * @returns {String} 執行 script 之 名稱。
	 * @returns '' unknown environment
	 */
	get_script_name = function (get_file_name) {
		var full_path = _.get_script_full_name(), m = full_path.match(/[^\\\/]*$/);
		return get_file_name ? m[0] : m[0].replace(/\.[^.]*$/, '');
	};

	if (false)
		_// JSDT:_module_
		.
		deprecated_get_script_name = function () {
			// deprecated
			var n, i, j;

			if (script_host) {
				n = WScript.ScriptName;
				i = n.lastIndexOf('.');
				return i == -1 ? n : n.slice(0, i);
			}

			if (is_WWW) {
				n = unescape(window.location.pathname), j = n.lastIndexOf('.');
				if (!(i = n.lastIndexOf('\\') + 1))
					// location.pathname 在 .hta 中會回傳 '\' 形式的 path
					i = n.lastIndexOf('/') + 1;
				// return window.document.title;
				return i < j ? n.slice(i, j) : n.slice(i);
			}
		};



	_// JSDT:_module_
	.
	/**
	 * is index 用, only digits. 整數 >= 0.<br />
	 * cf. Number.isInteger()
	 * 
	 * @param value
	 *            value to test
	 * @returns if value only digits.
	 */
	is_digits = function (value) {
		// value == value | 0
		return /^\d+$/.test(value);
	};


	if (false)
		if (!global.is_digits)
			global.is_digits = _.is_digits;


	/**
	 * 測試各 type:
	 * 
	 * undefined:<br />
	 * 變數值存在且變數 'undefined' 存在時: variable === undefined<br />
	 * 否則: typeof(variable) === 'undefined'
	 * 
	 * TODO:<br />
	 * void(1) === void(0) === undefined
	 * 
	 * number, boolean, string:<br />
	 * typeof(variable) === '~'<br />
	 * 
	 * TODO:<br />
	 * NaN<br />
	 * int/float
	 * 
	 * object:<br />
	 * null
	 * 
	 * 不同 frame 中的 Array 擁有不同的 constructor
	 */
	/**
	 * A cache to the function we use to get the type of specified value.<br />
	 * Get the [[Class]] property of this object.<br />
	 * 不使用 Object.toString() 是怕被 overridden
	 * 
	 * @type {Function}
	 * @inner
	 */
	var get_object_type = Function.prototype.bind
		? Function.prototype.call.bind(Object.prototype.toString)
		: function (o) { return Object.prototype.toString.call(o); };

	_.get_object_type = get_object_type;

	_// JSDT:_module_
	.
	/**
	 * 判斷為何種 type。主要用在 Error, DOMException 等 native methods / native objects /
	 * built-in objects 之判別。
	 * 
	 * @param value
	 *            variable or class instance to test
	 * @param {String}[want_type]
	 *            type to compare: number, string, boolean, undefined, object,
	 *            function
	 * @param {Boolean}[get_Class]
	 *            get the class name of a class(function) instance.
	 * 
	 * @returns {Boolean} The type is matched.
	 * @returns {String} The type of value
	 * @returns {undefined} error occurred
	 * 
	 * @example<code>
	 * CeL.is_type(value_to_test, 'Array');
	 * </code>
	 * 
	 * @since 2009/12/14 19:50:14
	 * @see <a
	 *      href="http://lifesinger.org/blog/2009/02/javascript-type-check-2/"
	 *      accessdate="2009/12/6 19:10">JavaScript类型检测小结（下） - 岁月如歌</a><br />
	 *      <a
	 *      href="http://thinkweb2.com/projects/prototype/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/"
	 *      accessdate="2009/12/6 19:10">Perfection kills &raquo; `instanceof`
	 *      considered harmful (or how to write a robust `isArray`)</a>
	 */
	is_type = function is_type(value, want_type, get_Class) {
		var type;
		if (want_type && (type = typeof want_type) !== 'string')
			want_type = type;

		type = value === null ? String(value) : typeof value;

		if (get_Class)
			try {
				if (type === 'function' && value.Class)
					// get the class name of a class
					// 若 value 為 function 時，測試其本身之 Class。
					type = value.Class;
				else if (type === 'function' || type === 'object')
					if (('constructor' in value) && (get_Class = value.constructor).Class)
						// get the class name of a class instance
						// 若 value 為 function 且無 Class，或為 object 時，測試其
						// constructor 之 Class。
						type = get_Class.Class;
					else if (get_Class = this.get_function_name(get_Class))
						// get Class by function name
						type = get_Class;
			} catch (e) {
				this.err(this.Class + '.is_type: Fault to get ths class name of value!');
			}

		if (type !== 'object')
			// type maybe 'unknown' or 'date'!
			return want_type ? type === want_type.toLowerCase() : type;

		try {
			get_Class = get_object_type(value);
		} catch (e) {
			this.err(this.Class + '.is_type: Fault to get object type of value!');
			get_Class = '';
		}

		if (want_type)
			return get_Class === (want_type.charAt(0) === '[' ? want_type
					: '[object ' + want_type + ']');

		want_type = get_Class.match(/^\[object ([^\]]+)\]$/);
		if (want_type)
			return want_type[1];

		return type;
	};


	_// JSDT:_module_
	.
	/**
	 * get a type test function
	 * 
	 * @example<code>
	 * // 大量驗證時，推薦另外在本身 scope 中造出捷徑：
	 * this.OtS = Object.prototype.toString;
	 * var is_Person = CeL.type_tester('Person', 'OtS');
	 * // test
	 * if(is_Person(value))
	 *  // it's really a Person object
	 *  ;
	 * </code>
	 * 
	 * @param {String}want_type
	 *            object type to compare
	 * @param {String}[toString_reference]
	 *            a reference name to Object.prototype.toString
	 * 
	 * @returns {Function} type test function
	 * @since 2009/12/20 08:38:26
	 */
	type_tester = function type_tester(want_type, toString_reference) {
		var t = '[object ' + want_type + ']';

		if (false)
		return new Function('v', 'return "' + t + '"==='
				+ (toString_reference ||
				// 在 Google Chrome 中，
				// 'Object.prototype.toString' 可以與其 reference 同速度，
				// 但其他的 reference 會快些。
				'Object.prototype.toString'
				)
				+ '.call(v);');

		return typeof toString_reference === 'string'
			&& toString_reference ?
				new Function('v', 'return "' + t
					+ '"===' + toString_reference + '.call(v);')

				// slow@Chrome
				: function (v) { return t === get_object_type(v); };
				// faster@Chrome
				// : new Function('v', 'return "' + t +
				// '"===Object.prototype.toString.call(v);');

	};

	_// JSDT:_module_
	.
	/**
	 * Test if the value is a native Function.
	 * 
	 * @param v
	 *            value to test
	 * @returns {Boolean} the value is a native Function.
	 * @since 2009/12/20 08:38:26
	 */
	is_Function =
		// _.type_tester('Function');
		function is_Function(v) {
		// typeof 比 Object.prototype.toString 快，
		// 不過得注意有些 native object 可能 type 是 'function'，但不具有 function 特性。
		return get_object_type(v) === '[object Function]';

		// 須注意，在 firefox 3 中，
		// typeof [object HTMLObjectElement] 之外的 HTMLElement 皆 ===
		// 'function'，

		// 因此光用 typeof() === 'function' 而執行下去會得出
		// [XPCWrappedNative_NoHelper] Component is not available

		if (false)
			return typeof v === 'function'
					|| get_object_type(v) === '[object Function]';
	};


	_// JSDT:_module_
	.
	/**
	 * Test if the value is a native ECMAScript Object.<br />
	 * 去除 null, undefined。 TODO:<br />
	 * test null<br />
	 * BUG: IE8 中 is_Object(ELEMENT_NODE) === true！
	 * 
	 * @param v
	 *            value to test
	 * @returns {Boolean} the value is a native Object.
	 * @since 2009/12/20 08:38:26
	 */
	is_Object =
		// MSIE 6.0 - 9.0 (JScript 9.0.16450):
		// Object.prototype.toString.call(undefined) === '[object Object]'
		// Object.prototype.toString.call(null) === '[object Object]'
		get_object_type(null) === '[object Object]' || get_object_type(undefined) === '[object Object]' ?
		function (v) {
			// &&: 除非為必要條件，否則越難達到、評估成本越小的應擺前面。
			return get_object_type(v) === '[object Object]'
					// && typeof v !== 'undefined' && v !== null
					&& v;
		}
		:
		// _.type_tester('Object');
		function (v) {
			// 非如此不得與 jQuery 平起平坐…
			return get_object_type(v) === '[object Object]';
		};

	_.is_RegExp = _.type_tester('RegExp');

	// Object.getPrototypeOf
	_.is_Date = false && (new Date).__proto__ === Date.prototype ? function(value) {
		return value && value.__proto__ === Date.prototype;
	} : _.type_tester('Date');


	// for JScript: 在 IE8, IE9 中，get_object_type(WScript) 為 '[object Object]' !!
	if (script_host = script_host && (!_.is_Object(WScript) || String(WScript) == 'Windows Script Host') && WScript.FullName)
		_// JSDT:_module_
		.
		/**
		 * the fully qualified path of the host executable.<br />
		 * 'cscript' || 'wscript'
		 * 
		 * @see http://msdn.microsoft.com/en-us/library/z00t383b(v=vs.84).aspx
		 * @_memberOf _module_
		 */
		script_host = script_host = script_host.replace(/^(.+)\\/, '').toLowerCase().replace(/\.exe$/, '');

	// ----------------------------------------------------------------------------------------------------------------------------------------------------------//

	/**
	 * 檢測 Web browser / engine 相容性。
	 * 
	 * @param {String|Object}key
	 *            Web browser / engine name.
	 * @param {Number}[version]
	 *            最低版本。
	 * @param {Boolean}[exactly]
	 *            需要準確相同。
	 * 
	 * @returns {Boolean} 相容
	 */
	function platform(key, version, exactly) {
		// CeL.platform({name: version}, exactly);
		if (_.is_Object(key)) {
			for ( var n in key) {
				if (platform(n, key[n], version))
					return true;
			}
			return false;
		}
	
		key = String(key).toLowerCase();
		// CeL.platform(name, version, exactly);
		if (platform.browser.toLowerCase() === key
				&& (!version || (exactly ? platform.version == version
						: platform.version >= version)))
			return true;
	
		if (platform.engine.toLowerCase() === key
				&& (!version || (exactly ? platform.engine_version == version
						: platform.engine_version >= version)))
			return true;
	
		return false;
	};

	if (is_WWW)
		(function() {
			// e.g., 'Win32'
			platform.OS = navigator.platform;
	
			var userAgent = String(navigator.userAgent), matched, tmp;
			platform.mobile = /mobile/i.test(userAgent);

			// 特別的網頁瀏覽器放前面。
			if (matched = userAgent
					.match(/(Chromium|Chrome|Opera|Safari|Firefox|(?:MS)?IE)[\/ ](\d+\.\d+)/i)) {
				platform.browser = matched[1];
				platform.version = +matched[2];
			} else if (matched = userAgent.match(/rv:(\d+\.\d+)/)) {
				// http://msdn.microsoft.com/zh-tw/library/ie/hh869301%28v=vs.85%29.aspx
				// 依賴使用者代理字串的網站應該更新為使用現代技術，例如功能偵測、調適型配置以及其他現代做法。
				// 瀏覽器版本現在由新的修訂版 ("rv") 權杖報告。
				// The revision token indicates the version of IE11
				platform.browser = 'MSIE';
				platform.version = +matched[1];
			}
	
			// Web browser layout engine.
			tmp = navigator.product;
			if (matched = userAgent
					.match(/(Gecko|WebKit|Blink|KHTML|Presto|Trident)[\/ ](\d+(?:\.\d+))/i)) {
				if (tmp && tmp !== matched[1] && has_console)
					// e.g., IE 11
					console.error('platform: navigator engine error! [' + tmp
							+ '] != [' + matched[1] + ']');
				platform.engine = matched[1];
				platform.engine_version = +matched[2];
			} else
				// Firefox: Gecko
				platform.engine = tmp;
		})();
	
	platform.toString = function() {
		return platform.browser + ' ' + platform.version;
	};

	_.platform = platform;


	// ----------------------------------------------------------------------------------------------------------------------------------------------------------//
	// 環境變數處理。


	_// JSDT:_module_
	.
	/**
	 * 取得/設定環境變數 enumeration<br />
	 * （雖然不喜歡另開 name-space，但以 2009 當下的 JsDoc Toolkit 來說，似乎沒辦法創造 enumeration。）
	 * 
	 * @class 環境變數 (environment variables) 與程式會用到的 library 相關變數 / configuration。
	 * 
	 * @param {String}name
	 *            環境變數名稱
	 * @param value
	 *            環境變數之值
	 * 
	 * @returns 舊環境變數之值
	 * @_memberOf _module_
	 */
	env = function env(name, value) {
		if (!name)
			// return;
			return undefined;

		var _s = env, v = _s[name];

		if (arguments.length > 1) _s[name] = value;
		// if (typeof value !== 'undefined') _s[name] = value;

		// return isNaN(v) ? String(v) : v;
		return v;
	};


	_// JSDT:_module_
	.
	/**
	 * Setup environment variables
	 * 
	 * @param {String}[OS_type]
	 *            type of OS
	 * @param {Boolean}[reset]
	 *            reset the environment variables
	 * 
	 * @returns {Object} environment variables set
	 */
	reset_env = function (OS_type, reset) {
		if (reset)
			this.env = null_Object();

		var OS, env = this.env;

		/**
		 * library main file base name
		 * 
		 * @name CeL.env.main_script_name
		 * @type String
		 */
		env.main_script_name = 'ce';

		/**
		 * default extension of script file.<br />
		 * setup_extension @ CeL.get_script_base_path() 可能會再設定一次，偵測為 .txt 的情況。
		 * @type String
		 * @see <a
		 *      href="http://soswitcher.blogspot.com/2009/05/blogger-host-javascript-file-for-free.html"
		 *      accessdate="2010/3/11 23:30">Blogger - Host Javascript File for
		 *      Free - Blogger,Javascript - Blogger Blog by Switcher</a>
		 * @name CeL.env.script_extension
		 */
		env.script_extension = '.js';

		/**
		 * library main file name<br />
		 * setup_extension @ CeL.get_script_base_path() 可能會再設定一次，偵測為 .txt 的情況。
		 * 
		 * full path: {@link CeL.env.registry_path} +
		 * {@link CeL.env.main_script}
		 * 
		 * @example<code>
		 * CeL.log('full path: [' + CeL.env.registry_path + CeL.env.main_script + ']');
		 * </code>
		 * 
		 * @name CeL.env.main_script
		 * @type String
		 */
		env.main_script = env.main_script_name + env.script_extension;

		/**
		 * module 中的這 member 定義了哪些 member 不被 extend。
		 * 
		 * @name CeL.env.not_to_extend_keyword
		 * @type String
		 */
		env.not_to_extend_keyword = 'no_extend';

		/**
		 * 非 native 的 method (native methods / native objects / built-in
		 * objects)， 可由 .not_native ([not_native_keyword]) 來判別是否為 native method。<br />
		 * e.g., use Object.defineProperty.not_native to test if the browser
		 * don't have native support for Object.defineProperty().
		 * 
		 * @name CeL.env.not_to_extend_keyword
		 * @type String
		 */
		env.not_native_keyword = KEY_not_native;

		/**
		 * 本 library source 檔案使用之 encoding。<br />
		 * 不使用會產生語法錯誤!
		 * 
		 * @name CeL.env.source_encoding
		 * @type String
		 */
		env.source_encoding = 'UTF-16';

		/**
		 * creator group / 組織名稱 organization name
		 * 
		 * @name CeL.env.organization
		 * @type String
		 */
		env.organization = 'Colorless echo';

		/**
		 * default global object. 有可能為 undefined!
		 * 
		 * @name CeL.env.global
		 * @type Object
		 */
		env.global = global;

		/**
		 * nodejs version.<br />
		 * Node.js 有比較特殊的 global scope 處理方法。<br />
		 * 有可能為 undefined!
		 * 
		 * @name CeL.env.global
		 * @type String
		 */
		env.nodejs =
				// global 已被覆蓋。
				// typeof global === 'object' &&
				typeof require === 'function'
				//
				&& typeof process === 'object' && typeof process.versions === 'object'
				//
				&& process.versions.node;

		/**
		 * 在 registry 中存放 library 資料的 base path
		 * 
		 * @name CeL.env.registry_base
		 * @type String
		 */
		env.registry_base = 'HKCU\\Software\\' + env.organization + '\\' + this.Class
					+ '\\';
		/**
		 * 在 registry 中存放 library 在 File System 中的 base path 的 key name
		 * 
		 * @name CeL.env.registry_base
		 * @type String
		 */
		env.registry_path_key_name = env.registry_base + 'path';
		// if(typeof WScript === 'object')
		try {
			// WScript.Echo(env.registry_path_key_name);

			/**
			 * 存放在 registry 中的 path，通常指的是 library 在 File System 中的 base path。
			 * 
			 * @name CeL.env.registry_path
			 * @type String
			 */
			env.registry_path = (WScript.CreateObject("WScript.Shell"))
				.RegRead(env.registry_path_key_name)
			// 去除 filename
			// .replace(/[^\\\/]+$/, '')
			;
			// this.debug(env.registry_path);
		} catch (e) {
			// this.warn(e.message);
		}


		// 條件式編譯(条件コンパイル) for version>=4, 用 /*@ and @*/ to 判別。
		// http://msdn.microsoft.com/en-us/library/ie/8ka90k2e(v=vs.94).aspx
		/**
		 * Conditional compilation is not supported in Internet Explorer 11
		 * Standards mode and Windows Store apps. Conditional compilation is
		 * supported in Internet Explorer 10 Standards mode and in all earlier
		 * versions.
		 */
/**
 * <code>
/*@cc_on
@if(@_PowerPC||@_mac)
OS='Mac';
@else
@if(@_win32||@_win64||@_win16)
OS='Windows';
@else
OS='UNIX'; // unknown
@end
@end@
 */

		/**
		 * 本次執行所在 OS 平台。
		 * 
		 * @name CeL.env.OS
		 * @type String
		 */
		env.OS = OS = OS_type || OS ||
				// 假如未設定則由 path 判斷。
				(_.get_script_full_name().indexOf('\\') !== -1 ? 'Windows' : 'UNIX');

		/**
		 * 文件預設 line separator / NewLine / line delimiter。<br />
		 * in VB: vbCrLf
		 * 
		 * @name CeL.env.line_separator
		 * @type String
		 */
		env.line_separator =
				OS === 'UNIX' ? '\n' : OS === 'Mac' ? '\r' : '\r\n';

		/**
		 * file system 預設 path separator。<br />
		 * platform-dependent path separator character, 決定目錄(directory)分隔。
		 * 
		 * @name CeL.env.path_separator
		 * @type String
		 */
		env.path_separator =
				OS === 'UNIX' ? '/' : '\\';

		/**
		 * library 之外部檔案 (external source files) 放置地。 純目錄名，不加目錄分隔。
		 * 
		 * @name CeL.env.external_directory_name
		 * @type String
		 */
		env.external_directory_name = 'external';

		/**
		 * library 之資源文件 (resource files) 放置地。 純目錄名，不加目錄分隔。
		 * 
		 * @name CeL.env.resource_directory_name
		 * @type String
		 */
		env.resource_directory_name = 'resource';

		/**
		 * 預設 module name separator。
		 * 
		 * @name CeL.env.module_name_separator
		 * @type String
		 */
		env.module_name_separator = '.';
		/**
		 * path_separator in 通用(regular)運算式。
		 * 
		 * @name CeL.env.path_separator_RegExp
		 * @type RegExp
		 */
		env.path_separator_RegExp = this.to_RegExp_pattern ?
				this.to_RegExp_pattern(env.path_separator)
				: (env.path_separator === '\\' ? '\\' : '') + env.path_separator;
		/**
		 * 預設語系。<br />
		 * 0x404:中文-台灣,<br />
		 * 0x0411:日文-日本
		 * 
		 * @name CeL.env.locale
		 * @see <a
		 *      href="http://msdn.microsoft.com/zh-tw/library/system.globalization.cultureinfo(VS.80).aspx">CultureInfo
		 *      類別</a>
		 * @type Number
		 */
		env.locale = 0x404;

		/**
		 * script name.
		 * 
		 * @name CeL.env.script_name
		 * @type String
		 */
		env.script_name = this.get_script_name();
		/**
		 * base path of script.
		 * 
		 * TODO:<br />
		 * 以 reg 代替
		 * 
		 * @name CeL.env.script_base_path
		 * @type String
		 */
		env.script_base_path = this.get_script_full_name()
			// 去除 filename
			.replace(/[^\\\/]+$/, '');

		/**
		 * Legal identifier name in RegExp.<br />
		 * 這 pattern 會佔去兩個筆紀錄: first letter, and least.<br />
		 * .replace(/_/ [g],'for first letter')<br />
		 * .replace(/\\d/,'for least')<br />
		 * 這邊列出的只是合法 identifier 的*子集*，且未去除 reserved words!<br />
		 * 請注意實際判別須加入 ^..$
		 * 
		 * 不用 \d 而用 0-9 是因為 \d 還包括了 MATHEMATICAL BOLD DIGIT。<br />
		 * <a href="http://blog.est.im/archives/3229" accessdate="2010/11/16
		 * 20:6">基于正则的URL匹配安全性考虑</a>
		 * 
		 * @name CeL.env.identifier_RegExp
		 * @see ECMA-262 7.6 Identifier Names and Identifiers
		 * @type RegExp
		 */
		env.identifier_RegExp = /([a-zA-Z$_]|\\u[0-9a-fA-F]{4})([a-zA-Z$_0-9]+|\\u[0-9a-fA-F]{4}){0,63}/;

		/**
		 * Legal identifier name in String from env.identifier_RegExp.
		 * 
		 * @name CeL.env.identifier_String
		 */
		env.identifier_String = env.identifier_RegExp.source;

		// test for-of statement (IterationStatement)
		try {
			eval('for(var i of [7])env.has_for_of=i===7;');
		} catch (e) { }

		// ** 亦即，所有預先設定 (configuration) 應該放置於 CeL.env 之下。
		// 把 old_namespace.env 下原先的環境設定 copy 過來。
		// 例如用在直接讀取檔案內容並 eval()，要設定 env.script_extension, env.main_script 的情況。
		if (_.is_Object(old_namespace) && _.is_Object(old_namespace.env)) {
			Object.assign(env, old_namespace.env);
		}

		return env;
	};


	_// JSDT:_module_
	.
	// TODO
	get_identifier_RegExp = function (pattern, flag, add_for_first_letter, add_for_all_letter) {
		var s = this.env.identifier_String;
		if (add_for_first_letter)
			s = s.replace(/_/g, add_for_first_letter);
		if (add_for_all_letter)
			s = s.replace(/0-9/g, add_for_all_letter);

		return new RegExp(
				(get_object_type(pattern) === '[object RegExp]' ? pattern.source : pattern)
					.replace(/$identifier/g, s), flag || '');
	};


	// ----------------------------------------------------------------------------------------------------------------------------------------------------------//

	/**
	 * setting pair.<br />
	 * 提供給函數設定 flag / optional argument 處理用。
	 * 
	 * @example <code>
	 * var setting = setting_pair({});
	 * </code>
	 * 
	 * @param default_setting
	 *            預設 setting.
	 * 
	 * @returns {Function}
	 */
	function setting_pair(default_setting) {
		var setting_now = default_setting || null_Object(),
		setting_handle = function (name, value) {
			if (_.is_Object(name)) {
				// setter
				for (var i in name) {
					// _.debug('[' + i + ']=[' + name[i] + ']'),
					if (typeof name[i] !== 'undefined')
						setting_now[i] = name[i];
					else if (i in setting_now)
						delete setting_now[i];
				}
				return setting_now;
			}

			if (Array.isArray(name)) {
				// getter
				var r = [];
				name.forEach(function (n, i) {
					if (n in setting_now)
						r[i] = setting_now[n];
				});
				return r;
			}

			if (false)
				if (arguments.length > 1)
					_.debug('[' + name + ']=[' + value + ']');
			return arguments.length > 1 ? (setting_now[name] = value)
					: name ? setting_now[name] : setting_now;
		};
		setting_handle.reset = function (setting) {
			return setting_now = setting || null_Object();
		};

		// additional setting.
		for (var i = 1, length = arguments.length, o; i < length; i++)
			if (_.is_Object(o = arguments[i]))
				setting_handle(o);

		return setting_handle;
	}


	/**
	 * <code>

	setting_pair.prototype.handle = function(name, value) {
		var setting_now = this.setting_now;

		if (_.is_Object(name)) {
			// setter
			for ( var i in name) {
				//_.debug('[' + i + ']=[' + name[i] + ']'),
				if(typeof name[i] !== 'undefined')
					setting_now[i] = name[i];
				else if(i in setting_now)
					delete setting_now[i];
			}
			return setting_now;
		}

		if (Array.isArray(name)) {
			// getter
			var i, r = [], n;
			for (i in name) {
				n = name[i];
				if (n in setting_now)
					r[i] = setting_now[n];
			}
			return r;
		}

		//if(arguments.length > 1) _.debug('[' + name + ']=[' + value + ']');
		return arguments.length > 1 ? (setting_now[name] = value)
				: setting_now[name];
	};
	setting_pair.prototype.reset = function(setting) {
		return this.setting_now = setting || null_Object();
	};

	</code>
	 */


	_// JSDT:_module_
	.
	setting_pair = setting_pair;

	// ----------------------------------------------------------------------------------------------------------------------------------------------------------//
	// for debug & log.


	_// JSDT:_module_
	.
	/**
	 * Tell if it's now debugging.
	 * 
	 * @param {Integer}[debug_level]
	 *            if it's now in this debug level.
	 * 
	 * @returns {Boolean} It's now in specified debug level.
	 * @returns {Number} It's now in what debug level (Integer).
	 */
	is_debug = function (debug_level) {
		return typeof debug_level === 'undefined' ? debug || 0
				: debug >= debug_level;
	};

	_// JSDT:_module_
	.
	/**
	 * Set debugging level
	 * 
	 * @param {Integer}[debug_level]
	 *            The debugging level to set.
	 * 
	 * @type Integer
	 * @returns {Number} debugging level now
	 */
	set_debug = function (debug_level) {
		if (!isNaN(debug_level))
			debug = Math.max(0, debug_level);

		else if (typeof debug_level === 'undefined' && !debug)
			debug = 1;

		return debug;
	};





	_// JSDT:_module_
	.
	/**
	 * Get the hash key of text.
	 * 
	 * @param {String}text
	 *            text to test
	 * 
	 * @returns {String} hash key
	 */
	_get_hash_key = function (text) {
		// text = String(text);
		// text = '' + text;
		var l = text.length, take = 30, from = .3;
		from = Math.floor(l * from);
		if (false)
			this.log(from + '~' + l + ': '
					+ (l - from < take ? text : text.substr(from, take)));
		return l - from < take ? text : text.substr(from, take);
	};

	/**
	 * <code>

	Chrome/22.0.1229.64
	fast->slow:
	(1000000*Math.random())>>>0
		but int32 only
	parseInt(1000000*Math.random())
	Math.floor(1000000*Math.random())

	</code>
	 */



	// for JScript<=5
	try {
		// ^\s*: JScript 6-9 native object 需要這個。
		function_name_pattern = new RegExp('^\s*function[\\s\\n]+(\\w+)[\\s\\n]*\\(');
	} catch (e) {
		function_name_pattern = function emulate_function_name(fs) {
			fs = String(fs);
			var l = 'function ', r, s;

			if (fs.indexOf(l) === 0) {
				l = l.length;
				s = {
					' ': 1,
					'\n': 1,
					'\r': 1,
					'\t': 1
				};
				while (fs.charAt(l) in s)
					l++;
				r = fs.indexOf('(', l);
				while (fs.charAt(--r) in s) { }

				return [, fs.slice(l, r + 1)];
			}
		};
		// TODO
		if (typeof RegExp != 'object')
			global.RegExp = function () { };
	}

	/**
	 * 獲得函數名
	 * 
	 * @param {Function}fr
	 *            function reference
	 * @param {String}ns
	 *            name-space
	 * @param {Boolean}force_load
	 *            force reload this name-space
	 * 
	 * @returns
	 * @see 可能的話請改用 {@link CeL.native.parse_function}(F).funcName
	 * @since 2010/1/7 22:10:27
	 */
	function get_function_name(fr, ns, force_load) {
		if (!fr)
			try {
				fr = arguments.caller;
			} catch (e) {
				if (!fr)
					return '';
			}

		if (fr.name)
			return fr.name;

		var
		// 初始化變數 'm'。
		// 不用 insteadof 是怕傳入奇怪的東西，例如 {String} script code.
		m = typeof fr,
		// function body text (函數的解譯文字)
		ft, b, load, k, i;

		if (m === 'function') {
			// 勿更改傳入之 argument
			if(false){
				if ('toString' in fr) {
					m = fr.toString;
					delete fr.toString;
				}
				ft = String(fr);
				if (m)
					fr.toString = m;
			}

			// TODO: cache Function.prototype.toString
			ft = Function.prototype.toString.call(fr);
		} else if (m === 'string')
			// typeof fr === 'string'
			ft = fr;
		else
			return '';

		// 以函數的解譯文字獲得函數名
		m = _.is_RegExp(function_name_pattern) ?
				// 包含引數: + '(' + (f ? m[2] : '') + ')';
				((m = ft.match(function_name_pattern)) && m[1] || /^[a-zA-Z_\d.]{1,30}$/.test(ft) && ft || 0)
				: function_name_pattern instanceof Function ?
					function_name_pattern(ft)
					: 0;
		if (m) {
			// this.debug('matched ' + m, 1, this.Class + '.get_function_name');
			return m;
		}
		// 無法從 function code 本身得到 name 之資訊。
		// 匿名函數?

		// 查詢是否是已註冊之 function。
		b = get_function_name.b;
		if (b)
			load = get_function_name.ns;
		else
			get_function_name.b = b = null_Object(), get_function_name.ns = load = null_Object();

		if (!ns)
			ns = this;

		// cache functions
		if ((_.is_Function(ns) || _.is_Object(ns)) && ns.Class
						&& (force_load || !load[ns.Class])) {
			for (i in ns)
				if (typeof ns[i] === 'function') {
					k = this._get_hash_key(String(ns[i]));
					m = ns.Class + this.env.module_name_separator + i;
					// this.debug(m + ': ' + k + (', ' + ns[i]).slice(0, 200));
					if (!(m in load)) {
						load[m] = 1;
						if (!b[k])
							b[k] = [];
						b[k].push([m, ns[i]]);
					}
				}
			load[ns.Class] = 1;
		}

		// 將函數與 cache 比對以獲得函數名。
		// TODO: Array.prototype.indexOf()
		m = b[this._get_hash_key(ft)];
		if (m)
			for (i = 0; i < m.length; i++) {
				b = m[i][1];
				if (// typeof fr === 'function' &&
						fr === b || ft === String(b))
					return m[i][0];
			}

		return '';// '(unknown)';
	};

	_// JSDT:_module_
	.
	get_function_name = get_function_name;


	_// JSDT:_module_
	.
	null_function =
		// new Function;
		function () { };


	_// JSDT:_module_
	.
	constant_function = function constant_function(value) {
		value = String(value);

		if (!(value in constant_function)
			// true/false/Number/null/undefined/global variables only!
			// && ((value in global) || !isNaN(value))
			) {
			constant_function[value] = new Function('return(' + value + ')');
		}
		return constant_function[value];
	};


	// Initialization

	// temporary decoration of debug console,
	// in case we call for nothing and raise error
	if (has_console) {
		// 利用原生 console 來 debug。
		// 不直接指定 console.*: 預防 'Uncaught TypeError: Illegal invocation'.

		_.log = function (message, clear) {
			if (clear && console.clear)
				console.clear();
			// IE8 中，無法使用 console.log.apply()。
			// return console.log.apply(console, arguments);
			return console.log(message);
		};
		// warning
		_.warn = function (message, clear) {
			if (clear && console.clear)
				console.clear();
			// return console.warn.apply(console, arguments);
			return console.warn(message);
		};
		// info
		if (console.info)
			_.info = function (message, clear) {
				if (clear && console.clear)
					console.clear();
				// return console.info.apply(console, arguments);
				return console.info(message);
			};
		_.err = function (message, clear) {
			if (clear && console.clear)
				console.clear();
			// return console.error.apply(console, arguments);
			return console.error(message);
		};
		_.debug = function (message, level, from) {
			if (_.is_debug(level))
				// return console.info.call(console, (from ?
				// _.get_function_name(from) + ': ' : '') + message);
				return console.info((from ? _.get_function_name(from) + ': ' : '') + message);
		};

	} else {
		_.err = _.warn = _.log = function (message) {
			/**
			 * 請注意:<br />
			 * _.log.buffer === this.log.buffer !== log.buffer<br />
			 * 
			 * 在 WScript 中 需要用 _.log，其他則可用 log。<br />
			 * 因此應該將所有類似的值指定給雙方，並注意非[常數]的情況。
			 */			var _s = _.log;
			// _s.function_to_call.apply(null,arguments);
			// _s.function_to_call.apply(global, arguments);

			_s.buffer.push(message);

			if (!_s.max_length)
				_s.max_length = 0;

			if (
				// 沒加 'debug &&' 在 IE 中會跳出大量 alert.
					debug &&
					_s.buffer.length > _s.max_length) {
				_s.function_to_call.call(global, _s.buffer.join('\n\n'));
				_s.buffer = [];
			}
		};

		_.debug = function (message, level, from) {
			if (_.is_debug(level))
				return _.log((from && (from = _.get_function_name(from)) ? from + ': ' : '[debug] ') + message);
		};

		/**
		 * test:<br />
		 * var k=function l(){alert(l.m);};k.m=1;alert(l.m+','+k.m);k();
		 * 
		 * JScript 中<br />
		 * k();<br />
		 * 為 undefined, 其他會把 "l." 代換成 "k."？
		 * 
		 * @inner
		 */
		// _.debug.buffer = _.err.buffer = _.warn.buffer =
		_.log.buffer = [];


		// _.debug.max_length = _.err.max_length = _.warn.max_length =
		_.log.max_length = 0;
		// if(!isNaN(CeL.log.max_length)) CeL.log.max_length = 20;


		var max_log_length = 1000,
		prepare_message = function (message) {
			message = String(message);
			if (message.length > 2 * max_log_length)
				message = message.slice(0, max_log_length) + '\n\n..\n\n' + message.slice(-max_log_length);
			return message;
		};

		// _.debug.function_to_call = _.err.function_to_call =
		// _.warn.function_to_call =

		_.log.function_to_call =
			// console 已在前面特別處理，以作美化。
			// typeof JSalert === 'function' ? JSalert :
			script_host ?
				function (message) { WScript.Echo(prepare_message(message)); } :
			// for jslibs
			typeof _configuration === 'object' && typeof _configuration.stdout === 'function' ?
				function (message) { _configuration.stdout(prepare_message(message) + '\n'); } :
			// for JSDB
			typeof writeln === 'function' ?
				function (message) { writeln(prepare_message(message)); } :
			// 預設以訊息框代替。
			typeof alert === 'object' || typeof alert === 'function' ?
				function (message) { alert(prepare_message(message)); } :
			// 無任何可用之反映管道。
			_.null_function;
	}

	// cache
	_.debug_console = function debug_console() {};
	_.debug_console.log = _.log;
	_.debug_console.warn = _.warn;
	_.debug_console.err = _.err;
	_.debug_console.debug = _.debug;

	// ---------------------------------------------------------------------//
	// 補強 (shim, polyfill) 用的 functions。
	// setup Object.defineProperty()

	/**
	 * 修改/加入屬性 propertyKey 至物件 object。<br />
	 * shim for 先前過舊的版本。
	 * 
	 * @param {Object|Function}object
	 *            要加入或修改屬性的目標物件。
	 * @param {String}propertyKey
	 *            屬性名稱。
	 * @param {Object}attributes
	 *            屬性的描述元。
	 * @returns 目標物件 object。
	 * 
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
	 */
	function defineProperty(object, propertyKey, attributes) {
		if ('value' in attributes)
			object[propertyKey] = attributes.value;

		else if (typeof attributes.get === 'function') {
			object[propertyKey] = attributes.get();
			if (_.is_debug(2))
				_.warn('Object.defineProperty: 將設定成 get() 所得之值 ['
						+ object[propertyKey] + ']！');
			// ignore .set
		}
		// else: nothing to set.

		return object;
	}
	defineProperty[KEY_not_native] = true;

	if (typeof Object.defineProperty !== 'function')
		// 會動到原來的 Object.defineProperty。
		Object.defineProperty = defineProperty;
	else
		try {
			(function () {
				// workaround for Object.defineProperty @ IE8
				// http://kangax.github.com/es5-compat-table/
				// In Internet Explorer 8 Object.defineProperty only accepts DOM
				// objects (MSDN reference).
				// http://blogs.msdn.com/b/ie/archive/2010/09/07/transitioning-existing-code-to-the-es5-getter-setter-apis.aspx
				// Trying to use Object.defineProperty() on native objects
				// throws an error.
				var o = {};
				if (Object.defineProperty({}, 'p', { value : o }).p !== o)
					throw 1;

			})();

		} catch (e) {
			// backup original Object.defineProperty.
			var _defineProperty = Object._defineProperty = Object.defineProperty;
			// copy from interact.DOM
			// for IE5-8
			(Object.defineProperty = function IE5_to_8_defineProperty(target, propertyKey, attributes) {
				if (Object.prototype.toString.call(target) === '[object Object]'
					// e.g., IE 5-8. 這種判別方法有漏洞!
					&& typeof target.nodeType === 'number')
					try {
						return _defineProperty(target, propertyKey, attributes);
					} catch (e) {
					}

				// 不作錯誤偵測: 不能設定，就直接 throw。
				return defineProperty(target, propertyKey, attributes);
			})[KEY_not_native] = true;
		}

	// 確認 Object.defineProperty() 是否能正確設值。
	if (!Object.defineProperty[KEY_not_native])
		try {
			(function() {
				var i, value = 7, old_value = value,
				//
				test_Funciton = function() {
				};
				Object.defineProperty(test_Funciton, 'size', {
					// enumerable : false,
					// configurable : false,
					get : function() {
						return value;
					},
					set : function(v) {
						if (value - 1 === v)
							value = v;
					}
				});
				for (i in test_Funciton)
					if (i === 'size')
						throw 1;
				try {
					test_Funciton.size = value + 1;
				} catch (e) {
				}
				try {
					delete test_Funciton.size;
				} catch (e) {
				}
				if (test_Funciton.size !== value)
					throw 1;
				test_Funciton.size = value - 1;
				if (test_Funciton.size !== value || test_Funciton.size === old_value)
					throw 1;
			})();

		} catch (e) {
			// Don't have standard Object.defineProperty()!
			Object.defineProperty[KEY_not_native] = true;
		}

	// ---------------------------------------------------------------------------//
	// 這裡添加本 library base 會用到的，或重要的，過於基本的 native function
	// (標準已規定，但先前版本未具備的內建物件功能)。

	// 添加 method, to add method, use set_method() or Object.defineProperties()
	// or Object.defineProperty()
	// 延展物件, to add property, use Object.assign()

	// 因為 set_method() 會用到 is_debug()，因此須先確保 is_debug() 已 loaded。

	// ^\s*: JScript 6-9 native object 需要這個。
	// console.log() @ node.js: "function () {..}"
	var native_pattern = /^\s*function\s(\w*)\s*\(\s*\)\s*{\s*\[native code\]\s*}\s*$/;

	_.is_native_Function = function(variable) {
		return typeof variable === 'function'
		//
		&& native_pattern.test(Function.prototype.toString.call(variable));
	};

	/**
	 * 若 variable 為 Standard Built-in ECMAScript Objects / native object /
	 * native ECMASCript object, 則回傳其 name。<br />
	 * 現行實作並未有標準支持！
	 * 
	 * @param variable
	 *            欲測試之 variable。
	 * @returns native object 之 name。
	 */
	function native_name(variable) {
		try {
			var value, match;

			// TODO: Function.prototype.bind 可能造成非 native Function 卻形如 "[native
			// code]" @ Firefox 20。
			// 注意: '' + Object.create(null) 會 throw TypeError: Cannot convert
			// object to primitive value
			if (typeof variable === 'function'
			//
			&& (match = Function.prototype.toString.call(variable).match(native_pattern)))
				return match[1];

			match = String(variable.constructor).match(native_pattern);
			if (match && (value = _.value_of(match[1])) && variable === value.prototype)
				return match[1] + '.prototype';

			if (variable === Math)
				// '' + Math === "[object Math]" @ Chrome/36
				return 'Math';

		} catch (e) {
			// TODO: handle exception
		}
	}

	_// JSDT:_module_
	.
	native_name = native_name;

	// need_to_check_in_for_in = undefined || { 'valueOf' : {}.valueOf,
	// 'toString' : {}.toString };
	var need_to_check_in_for_in = (function() {
		var key = {}, need_to_check = {
			_valueOf : key.valueOf,
			_toString : key.toString
		};
		for (key in {
			// IE8 中，以 for ( in ) 迭代，會漏掉 valueOf, toString 這兩個。
			valueOf : function() {
			},
			toString : function() {
			}
		})
			delete need_to_check['_' + key];

		for (key in need_to_check)
			return need_to_check;
	})();

	/**
	 * 設定物件方法:<br />
	 * extend properties to name_space.<br />
	 * 將 from_name_space 下的 variable_set 延展/覆蓋到 name_space。<br />
	 * Object.defineProperties() without overwrite extend properties to
	 * name_space.
	 * 
	 * @example <code>
	 * var o={a:0,b:1,c:'a',d:2,e:'g',f:4};
	 * CeL.set_method({a:1,b:2,c:3},o,[function(key){return !CeL.is_digits(o[key]);},'b','c','d','e','s']);
	 * // {a:1,b:1,c:3,d:2}
	 * </code>
	 * 
	 * @param {Object|Function}name_space
	 *            target name-space. extend to what name-space.
	 * @param {Object|Function}properties
	 *            欲延展那些 properties.
	 * @param {Undefined|Boolean|String|Array|Object|Function}[filter]
	 *            {Boolean} false: preserve NONE. overwrite even 衝突.<br />
	 *            {Boolean} true: preserve ALL. don't overwrite if 衝突.<br />
	 *            <br />
	 *            {Null} null: the same as false.<br />
	 *            undefined: default: if the target has the same key, preserve
	 *            the same type.<br />
	 *            {String} preserve type, should be this type. 若已存在此 type，或 eval
	 *            後回傳 true (function)，則不 overwrite。<br />
	 *            <br />
	 *            {Object} {key : 'preserve type'}<br />
	 *            {Array} [keys]: copy 所有 type 不同之 keys。<br />
	 *            {Function} filter(key, name_space, properties) return true:
	 *            preserve, false: copy the key.
	 * @param {Object}[attributes]
	 *            attributes used in Object.defineProperty()
	 * @returns target name-space
	 * @see
	 * @since 2014/5/5<br />
	 *        2014/5/6 rewrite
	 */
	function set_method(name_space, properties, filter, attributes) {
		if (!attributes)
			attributes = null_Object();

		if (!name_space) {
			_.debug('沒有指定擴展的對象，擴展到 set_method.default_target。', 1, 'set_method');
			if (!(name_space = set_method.default_target))
				if (name_space === null
				// && _.is_Object(properties)
				)
					return name_space;
				else
					name_space = null_Object();
		}

		if (name_space === properties) {
			_.debug('(' + properties + '): 目標與來源相同。', 2, 'set_method');
			return;
		}

		var key;
		// assert: 在 Array.isArray() 設定前，不可以使用 filter。
		if (filter && Array.isArray(filter)) {
			// filter: Array → Object
			key = filter;
			filter = null_Object();
			if (typeof key[0] === 'string')
				// set default value: overwrite.
				key.unshift(false);
			key.forEach(function(k, i, o) {
				if (i === 0)
					key = o[i];
				else
					filter[o[i]] = key;
			});
		}

		function setter() {
			// !_.is_Function()
			var value = filter;
			if (_.is_Object(filter))
				if (key in properties)
					value = filter[key];
				else
					// 僅考慮 filter 與 properties 皆包含的屬性。
					return;

			if (typeof value === 'function'
				//
				&& (value = value(key, name_space, properties)) === true)
					// 直接跳過，保留原值。
					return;

			if (typeof value === 'string')
				// _.is_type()
				value = typeof name_space[key] === value;
			else if (value)
				if (value === true)
					// 偵測是否已經存在 target name_space。
					value = key in name_space;
				else
					_.warn('set_method.setter: Unknown filter: [' + value + ']');
			else if (value !== false)
				// undefined, null, NaN
				value = typeof name_space[key] === typeof properties[key];

			if (value)
				return;

			attributes.value = value = properties[key];
			// Opera/9.80 中，set_method(Number, ..) 會造成：
			// Object.defineProperty: first argument not an Object
			try {
				Object.defineProperty(name_space, key, attributes);
			} catch (e) {
				name_space[key] = value;
			}

			// 放這邊，確保 not_native_keyword 一定會被設定。
			var name = native_name(name_space);
			if (name)
				try {
					Object.defineProperty(value,
					// 設定非 native 之 flag.
					_.env('not_native_keyword') || KEY_not_native, {
						value : true
					});
				} catch (e) {
					value[_.env('not_native_keyword') || KEY_not_native] = true;
				}

			// Warning: 由於執行時可能處於 log() stack 中，若 log() 會用到 set_method()，這邊又
			// call .debug()，可能會循環呼叫，造成 stack overflow。
			if (_.is_debug()) {
				// 若更動 native Object 等，則作個警示。
				_.debug((name || '(' + _.is_type(name_space) + ')')
						+ '.'
						+ key
						+ ' = ('
						+ (typeof value)
						+ ')'
						+ (_.is_debug(4) || typeof value !== 'function'
								&& typeof value !== 'object' ? ' [' + value + ']'
								: ''), name ? 1 : 3, 'set_method');
			}
		}

		// TODO: 若 {Function}properties 另外處理，依現行實作會出問題?
		for (key in (_.is_Object(filter) ? filter : properties))
			setter();

		if (need_to_check_in_for_in
			// Object 的情況，已經在前面處理完了。
			&& !_.is_Object(filter)) {
			if (!filter)
				filter = false;
			for (key in need_to_check_in_for_in)
				// assert: !== 須由左至右運算。
				// assert: i = 0; [ 1, 2 ][i] !== [ 2, 2 ][i = 1];
				if (need_to_check_in_for_in[key] !== properties[key = key.slice(1)])
					setter();
		}

		return name_space;
	}
	_.set_method = set_method;


	/**
	 * Test if the value is a native Array.
	 * 
	 * @param v
	 *            value to test
	 * @returns {Boolean} the value is a native Array.
	 * @since 2009/12/20 08:38:26
	 */
	set_method(Array, {
		isArray: // _.type_tester('Array');
		function isArray(v) {
			// instanceof 比 Object.prototype.toString 快
			return v instanceof Array
					|| get_object_type(v) === '[object Array]';
		}
	});


	set_method(Object, {
		// Object.defineProperties()
		defineProperties : function defineProperties(object, properties) {
			var key;
			for (key in properties)
				Object.defineProperty(object, key, properties[key]);
			if (need_to_check_in_for_in)
				for (key in need_to_check_in_for_in)
					// assert: !== 須由左至右運算。
					// assert: i = 0; [ 1, 2 ][i] !== [ 2, 2 ][i = 1];
					if (need_to_check_in_for_in[key] !== properties[key = key
							.slice(1)])
						Object.defineProperty(object, key, properties[key]);
			return object;
		},
		// 延展物件
		// to add property, use Object.assign()
		// application.debug.log use this.
		assign : function assign(target, source) {
			target = Object(target);
			for (var index = 1, length = arguments.length, key; index < length;) {
				source = Object(arguments[index++]);
				for (key in source)
					target[key] = source[key];
				if (need_to_check_in_for_in)
					for (key in need_to_check_in_for_in)
						// assert: !== 須由左至右運算。
						// assert: i = 0; [ 1, 2 ][i] !== [ 2, 2 ][i = 1];
						if (need_to_check_in_for_in[key] !== source[key = key
								.slice(1)])
							target[key] = source[key];
			}
			return target;
		}
	});

	set_method(Array.prototype, {
		// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/forEach
		forEach: function forEach(callbackfn, thisArg) {
			for (var index = 0, length = this.length,
				// 使用 Function.prototype.call。
					use_call = thisArg !== undefined && thisArg !== null
					&& typeof callbackfn.call === 'function';
				index < length; index++)
				// 為允許 delete，先作 check。
				if (index in this)
					if (use_call)
						callbackfn.call(thisArg, this[index], index, this);
					else
						// 少一道手續。
						callbackfn(this[index], index, this);
		}
	});


	// ----------------------------------------------------------------------------------------------------------------------------------------------------------//
	// for software verification(驗證) and validation(驗收).

	// _.preserve_verify_code = false;



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------//
	// 最終設定。

	if (false) {
		var test_obj = _(2, 'test: Initialization');

		test_obj.test_print('OK!');
	}

	if (false) {
		if (has_console) {
			console.log('global: ' + typeof global);
			console.log(library_name + ': ' + typeof global[library_name]);
		}
	}

	/**
	 * 能執行到最後都沒出錯才設定到 global。
	 * 
	 * @ignore
	 */
	global[library_name] = _;

	// test global.
	try {
		if (_ !== eval(library_name))
			throw 1;
		// TODO: test delete global object.
	} catch (e) {
		// 若失敗，表示其他對 global 的操作亦無法成功。可能因為 global 並非真的 Global，或權限被限制了？
		_.warn('無法正確設定 global object!');
	}


}
)(
	// In strict mode, this inside globe functions is undefined.
	// https://developer.mozilla.org/en/JavaScript/Strict_mode
	typeof window !== 'undefined' && window ||
	// http://nodejs.org/api/globals.html
	// node.js requires this method to setup REALLY global various:
	// require isn't actually a global but rather local to each module.
	Function('return this')()
)
// ) // void(
;









/*
TODO:

瘦身


等呼叫時才 initialization


http://headjs.com/#theory
Head JS :: The only script in your HEAD

Multiversion Support
http://requirejs.org/docs/api.html



<a href="http://msdn.microsoft.com/en-us/library/2b36h1wa.aspx" accessdate="2012/12/19 19:48">arguments Object</a>:
The arguments object is not available when running in fast mode, the default for JScript. To compile a program from the command line that uses the arguments object, you must turn off the fast option by using /fast-. It is not safe to turn off the fast option in ASP.NET because of threading issues.


*/


typeof CeL === 'function' &&
(function (_) {


	//var _// JSDT:_module_
	//= this;


if (false) {
	//IE8 中，以 for ( in ) 迭代，會漏掉這兩個。
	var need_check_toString  = (function() {
		var a, OK = 0;
		for (a in {
			valueOf: function(){},
			toString: function(){},
			p: 1
		})
			if (a === 'valueOf' || a === 'toString')
				OK++;
		return OK !== 2;
	})();


	/*
	CeL.extend(function f_name(){}, object || string, initial arguments);
	CeL.extend({name:function(){},.. }, object || string);
	CeL.extend([function1,function12,..], object || string);
	
	set .name
	*/

	/**
	 * 延展物件 (learned from jQuery):<br />
	 * extend variable_set to name_space.<br />
	 * 將 from_name_space 下的 variable_set 延展/覆蓋到 name_space。<br />
	 * 
	 * @remark
	 * MooTools 1.4.5 會 rewrite 此函數!
	 * 
	 * @param	{Object|Array|String}variable_set	欲延展之 variable set.
	 * @param	{Object|Function}name_space	target name-space. extend to what name-space.
	 * @param	{Object|Function}from_name_space	When inputing function names, we need a base name-space to search these functions.
	 * @param	{true|String|Function}reserve_type	若已存在此 type (true|String)，或 eval 後回傳 true (function)，則不 overwrite。
	 * @returns	target names-pace
	 * @see
	 * <a href="http://blog.darkthread.net/blogs/darkthreadtw/archive/2009/03/01/jquery-extend.aspx" accessdate="2009/11/17 1:24" title="jQuery.extend的用法 - 黑暗執行緒">jQuery.extend的用法</a>,<br />
	 * <a href="http://www.cnblogs.com/rubylouvre/archive/2009/11/21/1607072.html" accessdate="2010/1/1 1:40">jQuery源码学习笔记三 - Ruby's Louvre - 博客园</a>
	 * @since	2009/11/25 21:17:44
	 * @deprecated 2014/5/6 → CeL.set_method()
	 */
	var extend = function(variable_set, name_space, from_name_space, reserve_type) {

		if (typeof name_space === 'undefined' || name_space === null) {
			_.debug('沒有指定擴展的對象，擴展到 extend.default_target。', 3, 'extend');
			if (!(name_space = extend.default_target))
				if (name_space === null && typeof from_name_space === 'undefined'
					//&& _.is_Object(variable_set)
					)
					return variable_set;
				else
					name_space = {};
		}

		if (typeof from_name_space === 'undefined' || from_name_space === null)
			from_name_space = extend.default_target;
		else if (variable_set === null && _.is_Function(from_name_space))
			variable_set = from_name_space;

		var variable_name, setter = function (v) {
			if (!reserve_type || (
				//	true: any type.
					reserve_type === true ? !(variable_name in name_space)
					: typeof reserve_type === 'function' ? !reserve_type(name_space[variable_name], v)
					: !_.is_type(name_space[variable_name], reserve_type))) {

				//	Warning: 由於執行時可能處於 log() stack 中，若 log() 會用到 extend()，這邊又 call .debug()，可能會循環呼叫，造成 stack overflow。
				if (_.is_debug()) {
					var target_name = _.native_name(name_space);
					//	若更動 native Object 等，則作個警示。
					_.debug((target_name || '(' + _.is_type(name_space) + ')') + '.' + variable_name + ' = (' + (typeof v) + ')'
							+ (_.is_debug(4) || typeof v !== 'function' && typeof v !== 'object' ? ' [' + v + ']' : ''),
							target_name ? 1 : 3, 'extend.setter');
				}

				name_space[variable_name] = v;
			}
		};

		if (_.is_Object(variable_set)
			//	若 function 另外處理，依現行實作會出問題！
				|| _.is_Function(variable_set)
				) {
			if (need_check_toString) {
				if('valueOf' in variable_set)
					variable_set['. added_'+'valueOf'] = variable_set.valueOf;
				if('toString' in variable_set)
					variable_set['. added_'+'toString'] = variable_set.toString;
			}

			for (variable_name in variable_set) {
				if(need_check_toString)
					variable_name = variable_name.replace(/^\. added_/, '');
				if (from_name_space)
					if (variable_name in from_name_space)
						setter(from_name_space[variable_name]);
						//	這邊的處置可能不甚周延。
					else// if(variable_set[variable_name] in from_name_space)
						setter(from_name_space[variable_set[variable_name]]);
				else
					setter(variable_set[variable_name]);
			}

			if (need_check_toString) {
				if('valueOf' in variable_set)
					delete variable_set['. added_'+'valueOf'];
				if('toString' in variable_set)
					delete variable_set['. added_'+'toString'];
			}
		} else if (Array.isArray(variable_set)
					&& !Array.isArray(name_space)) {
			variable_set.forEach(function (o) {
				if (typeof o === 'object' || (o in from_name_space))
					extend(o, name_space, from_name_space, reserve_type);
			});

		} else if (typeof variable_set === 'string') {
			if (!from_name_space) {
				_.debug('預設從本 library 自身 extend to target name-space。', 3, 'extend');
				from_name_space = _;
			}

			if (name_space === from_name_space)
				_.debug('(' + variable_set + '): 目標與來源相同。', 2, 'extend');
			else if ((variable_name = variable_set) in from_name_space) {
				setter(from_name_space[variable_name]);
				_.debug('(' + (typeof from_name_space[variable_name]) + ') ' + variable_name + '\n=' + from_name_space[variable_name] + '\n\nto:\n' + name_space, 2, 'extend');
			} else
				try {
					setter(_.value_of(variable_name));
					_.debug('.' + variable_name + ' = ' + name_space[variable_name], 2, 'extend');
				} catch (e) {
					_.warn(_.Class + '.extend:\n' + e.message);
				}

		} else if (typeof variable_set === 'function') {
			if (_.parse_function) {
				//	TODO
				throw new Error(1, 'extend: Not Yet Implemented! (for function)');
			} else {
				_.warn(_.Class + '.extend: Warning: Please include ' + _.Class + '.parse_function() first!');
			}

		}

		return name_space;
	};

	//extend.default_target = _;

	_// JSDT:_module_
	.
	extend = extend;
}

	//	.object_hash 之類會用到。
	_.set_method(Array.prototype, {
		indexOf: function indexOf(element, index) {
			index = index > 1 ? Math.floor(index) : 0;
			for (var length = this.length; index < length; index++)
				if (index in this && this[index] === element)
					return index;
			return -1;
		}
	});


	_// JSDT:_module_
	.
	/**
	 * 設定 name_space 下的 function_name 待執行時換作 initializor 的 return。
	 * 換句話說，執行 name_space 下的 function_name (name_space[function_name]) 時把 name_space[function_name] 換成 new_function (initializor 的 return)。
	 * for Lazy Function Definition Pattern.
	 * 惰性求值（lazy evaluation or call-by-need），又稱懶惰求值、懶漢求值。
	 * TODO:
	 * 使用本函數不能完全解決先前已經指定 identifier 的情況。
	 * 因此對於會使用本函數的函數，盡量別使用 .use_function() 來 include，否則可能會出現問題!
	 * @example
	 * <code>
	 * library_namespace.set_initializor('function_name', function(function_name){return function(){};}, _);
	 * </code>
	 * 
	 * @param {String}function_name	function name to replace: name_space.function_name
	 * @param {Function}initializor	will return function identifier to replace with
	 * @param name_space	in which name-space
	 * @returns	new_function
	 * @see
	 * http://realazy.org/blog/2007/08/16/lazy-function-definition-pattern/,
	 * http://peter.michaux.ca/article/3556
	 */
	set_initializor = function (function_name, initializor, name_space) {
		var do_replace;
		if (arguments.length < 3 && _.is_Function(function_name)
				&& (do_replace = _.get_function_name(function_name)))
			//	e.g., library_namespace.set_initializor(get_HTA, _);
			name_space = initializor,
			initializor = function_name,
			function_name = do_replace
		//, _.debug('Get function name [' + function_name + '].')
		;

		if (!name_space)
			name_space = _;
		if (!initializor)
			initializor = name_space[function_name];

		do_replace = function () {
			//_.debug(name_space[function_name] === do_replace);
			//_.debug(name_space.Class + '[' + function_name + ']=' + name_space[function_name]);
			//_.debug('do_replace=' + do_replace);
			var old_function = name_space[function_name],
			new_function;
			if (old_function === do_replace) {
				try {
					new_function = initializor.call(_, function_name, arguments);
					//new_function = initializor.apply(_, arguments);
					//_.debug('new_function = [' + (typeof new_function) + ']' + new_function);
				} catch (r) {
					//	可能因時機未到，或是 initialization arguments 不合適。不作 replace。
					return r;
					//throw r;
				}

				if (typeof new_function !== 'function')
					//	確定會回傳 function 以供後續執行。
					initializor = new_function,
					new_function = function () {
						//_.debug('new function return [' + initializor + '].', 1, 'set_initializor');
						return initializor;
					};

				// searching for other extends
				if (_[function_name] === old_function)
					_.debug('Replace base name-space function [' + function_name + '].', 1, 'set_initializor'),
					_[function_name] = new_function;
				else
					_.debug('Base name-space function [' + function_name + ']: ' + _[function_name] + '.', 1, 'set_initializor');

				//	設定 name_space[function_name]。
				_.debug('Replace function [' + function_name + '].', 1, 'set_initializor');
				name_space[function_name] = new_function;
				//_.debug(name_space[function_name] === do_replace);
				//_.debug(name_space.Class+'['+function_name+']='+name_space[function_name]);
			} else {
				if (_.is_debug(2))
					_.warn('set_initializor: The function [' + function_name + '] had replaced with a new one.');
				new_function = old_function;
			}

			//_.debug('new function: ' + new_function);
			//_.debug('return ' + new_function.apply(_, arguments));
			return new_function.apply(_, arguments);
		};

		return name_space[function_name] = do_replace;
	};


	//----------------------------------------------------------------------------------------------------------------------------------------------------------//

	_.is_HTA = _.is_WWW()
		//	http://msdn.microsoft.com/en-us/library/ms536496(v=vs.85).aspx
		//	HTAs do not support the AutoComplete in HTML forms feature, or the window.external object.
		&& window.external === null
		&& window.ActiveXObject
		&& document.getElementsByTagName('APPLICATION').length === 1;


	function new_XMLHttpRequest() {
		return new XMLHttpRequest();
	}

	// 'Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'
	// 'Msxml2.XMLHTTP.6.0','Msxml2.XMLHTTP.5.0','Msxml2.XMLHTTP.4.0','Msxml2.XMLHTTP.3.0',["MSXML2", "Microsoft", "MSXML"].['XMLHTTP','DOMDocument'][".6.0", ".4.0", ".3.0", ""]
	function new_MS_XMLHTTP() {
		return new ActiveXObject('Microsoft.XMLHTTP');
	}

	/**
	 * 設定取得 XMLHttpRequest object 的方法。<br />
	 * The XMLHttpRequest object can't be cached.
	 * So we cache the method to get the XMLHttpRequest controller.<br />
	 * @inner
	 * @ignore
	 */
	//	在 HTA 中，XMLHttpRequest() 比 ActiveXObject('Microsoft.XMLHTTP') 更容易遇到拒絕存取。例如在同一目錄下的 .txt 檔。<br />
	//	但在 IE 中，ActiveXObject 可能造成主動式內容之問題。<br />
	//	jQuery: Microsoft failed to properly implement the XMLHttpRequest in IE7, so we use the ActiveXObject when it is available.
	if (_.is_HTA)
		try {
			_.new_XMLHttp = new_MS_XMLHTTP() && new_MS_XMLHTTP;
		} catch (e) {
		}

	if (!_.new_XMLHttp)
		try {
			// normal method to get a new XMLHttpRequest controller.
			// 相當於 new XMLHttpRequest()
			// Ajax 程式應該考慮到 server 沒有回應時之處置
			_.new_XMLHttp = new_XMLHttpRequest() && new_XMLHttpRequest;
		} catch (e) {
		}

	// _.is_HTA 的情況，已經測在前面試過了。
	if (!_.new_XMLHttp && !_.is_HTA)
		try {
			_.new_XMLHttp = new_MS_XMLHTTP() && new_MS_XMLHTTP;
		} catch (e) {
		}

	//	皆無：use XMLDocument.
	//	The document.all().XMLDocument is a Microsoft IE subset of JavaScript.
	//	http://www.bindows.net/
	//	http://www.java2s.com/Code/JavaScriptReference/Javascript-Properties/XMLDocument.htm

	if (_.new_XMLHttp) {

	} else if (typeof require === 'function'
	//	for node.js
	&& (_.new_XMLHttp = require('fs'))
	//
	&& typeof process === 'object' && typeof process.versions === 'object' && process.versions.node
	//
	&& typeof console === 'object' && typeof console.log === 'function') {
		_.platform = 'node ' + (_.is_node = process.versions.node);

		// TODO: https://github.com/driverdan/node-XMLHttpRequest/blob/master/lib/XMLHttpRequest.js
		var node_fs = _.new_XMLHttp = _.new_XMLHttp.readFileSync;

		// The encoding can be 'utf8', 'ascii', or 'base64'.
		// http://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options
		_.get_file = function (path, encoding) {
			//	for node.js
			var data, i, l, tmp;
			try {
				data = node_fs(path, encoding);
			} catch (e) {
				data = node_fs(path);
			}

			if (typeof data !== 'string') {
				// auto detect encoding
				l = data.length;
				tmp = [];
				if (data[0] === 255 && data[1] === 254) {
					_.debug(path + ': UTF-16LE', 4);
					// pass byte order mark (BOM), the first 2 bytes.
					i = 2;
					while (i < l)
						tmp.push(String.fromCharCode(data[i++] + 256 * data[i++]));
				} else if (data[0] === 254 && data[1] === 255) {
					_.debug(path + ': UTF-16BE', 4);
					// pass byte order mark (BOM), the first 2 bytes.
					i = 2;
					while (i < l)
						tmp.push(String.fromCharCode(256 * data[i++] + data[i++]));
				} else if (!encoding && data[0] === 239 && data[1] === 187 && data[2] === 191) {
					// 或許是存成了 UTF-8？
					// https://en.wikipedia.org/wiki/Byte_order_mark#Representations_of_byte_order_marks_by_encoding
					_.debug('get_file: Treat file as UTF-8: [' + path + ']', 2);
					tmp = null;
					// http://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options
					data = node_fs(path, 'utf8');
					// or:
					// http://hi.baidu.com/hellow3c/item/b699cd1d0170c56b3b176e7b
					//buffer.toString('utf8', 0, length);
				} else
					try {
						i = node_fs(path, 'utf8');
						_.debug('get_file: Treat file as UTF-8: [' + path + ']', 2);
						tmp = null;
						data = i;
					} catch (e) {
						//console.warn(e);
						if (l > 1)
							_.debug('get_file: Unknown byte order mark (BOM) of [' + path + ']: ' + data[0] + ',' + data[1]);
						//	當作 ASCII 處理。
						i = 0;
						while (i < l)
							// data.toString('utf-8', 0, length);
							tmp.push(String.fromCharCode(data[i++]));
					}
				if (tmp)
					data = tmp.join('');
			}

			return data;
		};

	} else if (typeof _configuration === 'object'
		//	for jslibs
		&& typeof File === 'function') {
		_.platform = 'jsio';
		LoadModule('jsio');
		_.get_file = function (path) {
			//_configuration.stderr(path);
			var c, i,
			data = new File(path).Open('r').Read(),
			l = data.length, tmp = [],
			next_code = function () {
				c = data.charCodeAt(i++);
				return c < 0 ? c + 256 : c;
			};

			_configuration.stderr(path + ': ' + data.charCodeAt(0) + ',' + data.charCodeAt(1));
			if (data.charCodeAt(0) === -1 && data.charCodeAt(1) === -2) {
				//_.debug(path + ': UTF-16LE');
				for (i = 2; i < l;)
					tmp.push(String.fromCharCode(next_code() + 256 * next_code()));
				data = tmp.join('');
			} else if (data.charCodeAt(0) === -2 && data.charCodeAt(1) === -1) {
				//_.debug(path + ': UTF-16BE');
				for (i = 2; i < l;)
					tmp.push(String.fromCharCode(next_code() * 256 + next_code()));
				data = tmp.join('');
			}

			return data;
		};

	} else if (typeof Stream === 'function') {
		//	for JSDB
		_.platform = 'JSDB';
		_.get_file = function (path) {
			//_.log('get_file: ' + path);
			try {
				return new Stream(path
						//, 'r'
						).readFile();
			} catch (e) {
				//_.log(e.message);
			}

			var data = new Stream(path, 'b'), tmp = [],
			//	The byte order mark (BOM).
			BOM = [data.readUInt8(), data.readUInt8()];
			if (BOM[0] === 255 && BOM[1] === 254) {
				// _.debug(path + ': UTF-16LE');
				while (!data.eof)
					tmp.push(String.fromCharCode(data.readUInt8() + 256 * data.readUInt8()));
			} else if (BOM[0] === 254 && BOM[1] === 255) {
				// _.debug(path + ': UTF-16BE');
				while (!data.eof)
					tmp.push(String.fromCharCode(data.readUInt8() * 256 + data.readUInt8()));
			} else {
				data.rewind();
				while (!data.eof)
					tmp.push(data.get());
			}
			data.close();
			return tmp.join('');
		};

	} else
		_.get_file = function () {
			// No XMLHttpRequest controller.

			var m = 'get_file: This scripting engine does not support XMLHttpRequest.';
			_.warn(m);
			throw new Error(m);
			// firefox: This function must return a result of type any.
			//return undefined;
		};


	_// JSDT:_module_
	.
	/**
	 * Ask privilege in mozilla projects: Firefox 2, 3.
	 * get_file() 遇到需要提高權限時使用。
	 * enablePrivilege 似乎只能在執行的 function 本身或 caller 呼叫才有效果，跳出函數即無效，不能 cache，因此提供 callback。
	 * 就算按下「記住此決定」，重開瀏覽器後需要再重新授權。
	 * @param {String|Error} privilege	privilege that asked 或因權限不足導致的 Error
	 * @param {Function|Array} callback|[callback,arguments]	Run this callback if getting the privilege. If it's not a function but a number(經過幾層/loop層數), detect if there's a loop or run the caller.
	 * @returns	OK / the return of callback
	 * @throws	error
	 * @since	2010/1/2 00:40:42
	 */
	require_netscape_privilege = function require_netscape_privilege(privilege, callback) {
		var _s = require_netscape_privilege, f, i,
		/**
		 * raise error.
		 * error 有很多種，所以僅以 'object' 判定。
		 * @inner
		 * @ignore
		 */
		re = function (m) {
			//_.debug('Error: ' + m);
			throw privilege && typeof privilege === 'object' ?
			//	Error object
			privilege :
			//	new Error (message)
				new Error(m);
		};

		if (!_s.enabled)
			re('Privilege requiring disabled.');

		//	test loop
		//	得小心使用: 指定錯可能造成 loop!
		if (!isNaN(callback) && callback > 0 && callback < 32) {
			try {
				//	@Firefox 4: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
				for (f = _s, i = 0; i < callback; i++) {
					f = f.caller;
					if (f)
						//	TODO: do not use arguments
						f = f.arguments.callee;
				}

				if (f === _s)
					// It's looped
					re('Privilege requiring looped.');

				callback = 1;

			} catch (e) {
				// TODO: handle exception
			}

		}

		f = _s.enablePrivilege;
		//_.debug('enablePrivilege: ' + f);
		// '我們需要一點權限來使用 XMLHttpRequest.open。\n* 請勾選記住這項設定的方格。'
		if (!f && !(_s.enablePrivilege = f =
						_.value_of('netscape.security.PrivilegeManager.enablePrivilege')))
			//	更改設定，預防白忙。
			_s.enabled = false,
			re('No enablePrivilege get.');

		if (_.is_type(privilege, 'DOMException')
						&& privilege.code === 1012)
			//	http://jck11.pixnet.net/blog/post/11630232
			//	Mozilla的安全機制是透過PrivilegeManager來管理，透過PrivilegeManager的enablePrivilege()函式來開啟這項設定。
			//	須在open()之前呼叫enablePrivilege()開啟UniversalBrowserRead權限。

			//	http://code.google.com/p/ubiquity-xforms/wiki/CrossDomainSubmissionDeployment
			//	Or: In the URL type "about:config", get to "signed.applets.codebase_principal_support" and change its value to true.

			//	由任何網站或視窗讀取私密性資料
			privilege = 'UniversalBrowserRead';

		else if (!privilege || typeof privilege !== 'string')
			re('Unknown privilege.');

		//_.debug('privilege: ' + privilege);
		try {
			//_.log(_.Class + '.require_netscape_privilege: Asking privilege [' + privilege + ']..');
			f(privilege);
		} catch (e) {
			if (privilege !== 'UniversalBrowserRead' || !_.is_local())
				_.warn(_.Class + '.require_netscape_privilege: User denied privilege [' + privilege + '].');
			throw e;
		}

		//_.debug('OK. Get [' + privilege + ']');


		if (callback === 1) {
			//_.debug('再執行一次 caller..');
			try {
				callback = _s.caller;
			} catch (e) {
				// TODO: handle exception
			}
			return callback.apply(_, callback.arguments);

			/*		i = callback.apply(_, callback.arguments);
					_.debug(('return ' + i).slice(0, 200));
					return i;
			*/
		} else if (_.is_Function(callback))
			// 已審查過，為 function
			return callback();
		else if (Array.isArray(callback))
			return callback[0].apply(_, callback[1]);
	};

	/**
	 * 當需要要求權限時，是否執行。（這樣可能彈出對話框）
	 * Firefox 5 之後，就算要求了，對 local 也沒用，甚至會 hang 住掛掉，因此取消了。
	 * @type	Boolean
	 */
	_// JSDT:_module_
	.
	require_netscape_privilege.enabled = false;


	//----------------------------------------------------------------------------------------------------------------------------------------------------------//

	var is_Opera = _.is_WWW(true) && navigator.appName === 'Opera';

	/**
	 * 以同時依序(synchronously)的方式，載入最基本之資源取得功能。<br />
	 * Get file resource by {@link XMLHttpRequest}.<br />
	 * 依序載入 resource，用於 include JavaScript 檔之類需求時，取得檔案內容之輕量級函數。<br />
	 * 除 Ajax，本函數亦可用在 CScript 執行中。<br />
	 * see also: .application.net.Ajax.get_URL()
	 * 
	 * @example
	 * //	get contents of [path/to/file]:
	 * var file_contents = CeL.get_file('path/to/file');
	 * @param	{String} path	URI / full path. <em style="text-decoration:line-through;">不能用相對path！</em>
	 * @param	{String} [encoding]	file encoding
	 * @returns	{String} data	content of path
	 * @returns	{undefined}	when error occurred: no Ajax function, ..
	 * @throws	uncaught exception @ Firefox: 0x80520012 (NS_ERROR_FILE_NOT_FOUND), <a href="http://www.w3.org/TR/2007/WD-XMLHttpRequest-20070227/#exceptions">NETWORK_ERR</a> exception
	 * @throws	'Access to restricted URI denied' 當 access 到上一層目錄時 @ Firefox
	 * @see
	 * <a href=http://blog.joycode.com/saucer/archive/2006/10/03/84572.aspx">Cross Site AJAX</a>,
	 * <a href="http://domscripting.com/blog/display/91">Cross-domain Ajax</a>,
	 * <a href="http://forums.mozillazine.org/viewtopic.php?f=25&amp;t=737645" accessdate="2010/1/1 19:37">FF3 issue with iFrames and XSLT standards</a>,
	 * <a href="http://kb.mozillazine.org/Security.fileuri.strict_origin_policy" accessdate="2010/1/1 19:38">Security.fileuri.strict origin policy - MozillaZine Knowledge Base</a>
	 * Chrome: <a href="http://code.google.com/p/chromium/issues/detail?id=37586" title="between builds 39339 (good) and 39344 (bad)">NETWORK_ERR: XMLHttpRequest Exception 101</a>
	 */
	function get_file(path, encoding, post_data) {
		if (_.is_Object(encoding)) {
			post_data = encoding;
			encoding = null;
		}
		if (_.is_Object(path)) {
			post_data = path.post || post_data;
			encoding = path.encoding || encoding;
		}

		var method = post_data ? 'POST' :'GET',
		/**
		 * The XMLHttpRequest object can't be cached.
		 * @inner
		 * @ignore
		 */
		object = _.new_XMLHttp();

		//	4096: URL 長度限制，與瀏覽器有關。
		if (typeof path === 'string' && path.length > 4096
				&& (post_data = path.match(/^([^?]{6,200})\?(.+)$/)))
			path = post_data[1], post_data = post_data[2], method = 'PUT';
		else
			post_data = null;

		try {
			//	IE 10 中，local file 光 .open() 就 throw 了。
			object.open(method, path, false);

			//	有些版本的 Mozilla 瀏覽器在伺服器送回的資料未含 XML mime-type 檔頭（header）時會出錯。為了避免這個問題，可以用下列方法覆寫伺服器傳回的檔頭，以免傳回的不是 text/xml。
			//	http://squio.nl/blog/2006/06/27/xmlhttprequest-and-character-encoding/
			//	http://www.w3.org/TR/XMLHttpRequest/	search encoding
			if (encoding && object.overrideMimeType)
				/*
				 * old: object.overrideMimeType('text/xml;charset=' + encoding);
				 * 但這樣會被當作 XML 解析，產生語法錯誤。
				 * TODO: try:
				 * object.overrideMimeType('text/plain;charset=' + encoding);
				 */
				object.overrideMimeType('application/json;charset=' + encoding);

			//	http://www.w3.org/TR/2007/WD-XMLHttpRequest-20070227/#dfn-send
			//	Invoking send() without the data argument must give the same result as if it was invoked with null as argument.

			//	若檔案不存在，會 throw。
			object.send(post_data);

			if(65533 === object.responseText.charCodeAt(0)
				// e.g., @ "Mozilla/5.0 (Windows NT 6.1; rv:29.0) Gecko/20100101 Firefox/29.0"
				&& navigator.userAgent.indexOf(' Gecko/2') !== -1) {
				_.env.same_origin_policy = true;
				throw new Error('get_file: Can not parse UTF-32 encoding of [' + path + '] @ Firefox!');
			}

			delete get_file.error;

		} catch (e) {
			if (e.number === -1072896658
				//|| e.message.indexOf('c00ce56e') !== -1
				)
				// http://support.microsoft.com/kb/304625
				throw new Error('指定的資源回傳了系統不支援的文字編碼，因此無法解碼資料。請檢查此網頁回傳之 header，確認系統可解碼 Content-Type 之 charset。');

			//	Chome: XMLHttpRequest cannot load file:///X:/*.js. Cross origin requests are only supported for HTTP.
			//	Opera 11.50: 不會 throw，但是 .responseText === ''。
			//	Apple Safari 3.0.3 may throw NETWORK_ERR: XMLHttpRequest Exception 101
			get_file.error = e;

			if (_.is_debug(2)) {
				_.warn(_.Class + '.get_file: Loading [' + path + '] failed!');
				_.err(e);
			}

			//e.object = o;	//	[XPCWrappedNative_NoHelper] Cannot modify properties of a WrappedNative @ firefox

			if (
				// 5: 系統找不到指定的資源。/存取被拒。
				//	IE 10 中，5: "存取被拒。"。same origin policy 下，即使是檔案存在，值一樣為 5，因此無法以資判別。
				//(e.number & 0xFFFF) !== 5 &&
					_.is_WWW() &&
					(_.is_local() || ((object = path.match(/:(\/\/)?([^\/]+)/))
							&& object[2] !== window.location.hostname))) {
				// 八九不離十: no Cross-site scripting (XSS).
				if (_.is_debug()) {
					_.warn('get_file: '
							+ (_.is_local() ? '呼叫了上層 local file' : '所要求檔案之 domain [' + object[2]
									+ '] 與所處之 domain [' + window.location.hostname + '] 不同')
							+ '！<br />\n您可能需要嘗試使用 ' + _.Class
							+ '.run()!\nSet up <a href="http://en.wikipedia.org/wiki/Same_origin_policy" accessdate="2012/12/2 18:19">same origin policy</a> flag.');
				}
				_.env.same_origin_policy = true;
				throw new Error('get_file: Different domain!');
			}

			object = _.require_netscape_privilege(e, [get_file, arguments]);
			//_.debug('require_netscape_privilege return [' + typeof (object) + ('] ' + object).slice(0, 200) + ' ' + (e === object ? '=' : '!') + '== ' + 'error (' + e + ')');
			if (e === object)
				throw e;

			return object;
		}

		//	workaround for Opera: Opera 11.50: 不會 throw，但是 .responseText === ''。
		if (object.responseText === '' && is_Opera)
			throw new Error('get_file: Nothing get @ Opera');

		//	當在 local 時，成功的話 status === 0。失敗的話，除 IE 外，status 亦總是 0。
		//	status was introduced in Windows Internet Explorer 7.
		//	http://msdn.microsoft.com/en-us/library/ms534650%28VS.85%29.aspx
		//	因此，在 local 失敗時，僅 IE 可由 status 探測，其他得由 responseText 判別。
		//_.debug('Get [' + path + '], status: [' + object.status + '] ' + object.statusText);

		// .responseXML
		return object.status === 400 ? [ object.status, object.responseText ] : object.responseText;
	}

	if (!_.get_file)
		_.get_file = get_file;


	//----------------------------------------------------------------------------------------------------------------------------------------------------------//

	// we only need simple JSON.parse @ .get_script_base_path
	var parse_JSON = function(text, reviver) {
		try {
			//	borrow from Google, jQuery
			//	TODO: 對 String 只是做簡單處理，勢必得再加強。
			var o = ((new Function("return({o:" + text + "\n})"))()).o, i, v, to_delete = [];
			if (_.is_Object(o)) {
				if (_.is_Function(reviver)) {
					for (i in o)
						if (typeof (v = reviver(i, o[i])) === 'undefined')
							// 在這邊 delete o[i] 怕會因不同實作方法影響到 o 的結構。
							to_delete.push(i);
						else if (o[i] !== v)
							o[i] = v;

					if (to_delete.length)
						for (i in to_delete)
							delete o[to_delete[i]];
				}
				return o;
			} else
				return {};
		} catch (e) {
			if (_.is_debug(2))
				_.err('parse_JSON: SyntaxError: [' + text + ']');
			//throw e;
		}
	};
	if (typeof JSON === 'object' && JSON.parse)
		(function() {
			var t;
			try {
				t = JSON.parse('{"V":"1","v":1}');
			} catch (e) {}
			if (_.is_Object(t) && t.V === '1' && t.v === 1)
				parse_JSON = JSON.parse;
			else
				// 未正確作動。
				_.err('It seems the JSON.parse() does not work properly');
		})();
	_.parse_JSON = parse_JSON;


	//	see Array.from of data.code.compatibility.
	function tag_list_default(tag, context) {
		//	必須考量輸入的可能是 document.styleSheets 的情況。
		//	須注意: @ IE8, false === CeL.is_NodeList(document.styleSheets);
		return tag && Array.prototype.slice.call(typeof tag === 'string' ? (context || document).getElementsByTagName(tag) : tag) || [];
	}
	function tag_list_compatible(tag, context) {
		var list = [], i = 0,
		nodes = typeof tag === 'string' ? (context || document).getElementsByTagName(tag) : tag,
		length = nodes && nodes.length || 0;
		while (i < length)
			list.push(nodes[i++]);
		return list;
	}
	_// JSDT:_module_
	.
	//	代替 .getElementsByTagName(), get <tag> nodes, 並將之轉成不變化的 native Array.
	get_tag_list = _.is_WWW(1) ? function (tag, context) {
		var list;
		try {
			//	一般做法。
			list = tag_list_default(tag, context);
			_.get_tag_list = tag_list_default;
		} catch (e) {
			//	Array.prototype.slice.call(document.getElementsByTagName('a'))
			//	Array.prototype.slice.call(document.getElementsByTagName('a'), 0)
			//	get error @ IE8 (Script engine: JScript 5.8.18702):
			//	Error 5014 [TypeError] (facility code 10): 必須要有 JScript 物件
			//	@ IE8: typeof document.getElementsByTagName('a') === 'object'
			list = tag_list_compatible(tag, context);
			//	成功才設定。
			if ((e.number & 0xFFFF) === 5014) {
				_.debug('get_tag_list: 使用舊的實現方法。');
				_.get_tag_list = tag_list_compatible;
			}
		}
		return list;
	} : function () {
		_.warn('get_tag_list: No method availed!');
		return [];
	};




	_// JSDT:_module_
	.
	/**
	 * 得知 script file 之相對 base path
	 * @param	{String} JSFN	script file name (NOT path name)
	 * @returns	{String} relative base path
	 * @example
	 * <script type="text/javascript" src="../baseFunc.js"></script>
	 * //	引數為本.js檔名。若是更改.js檔名，亦需要同時更動此值！
	 * var basePath = get_script_base_path('baseFunc.js');
	 * perl: use File::Basename;
	 */
	get_script_base_path = function (JSFN) {
		//alert('JSFN: '+JSFN);
		if (!JSFN)
			return (_.is_WWW() ?
					// unescape(window.location.pathname)
					unescape(window.location.href)
					: _.script_host ? WScript.ScriptFullName
					//	用在把檔案拉到此檔上時不方便
					//: typeof WshShell === 'object' ? WshShell.CurrentDirectory
					: '').replace(/[^\\\/]+$/, '');

		//	We don't use is_Object or so.
		//	通常會傳入的，都是已經驗證過的值，不會出現需要特殊認證的情況。
		//	因此精確繁複的驗證只用在可能輸入奇怪引數的情況。
		if (!_.is_WWW())
			return '';

		//	form dojo: d.config.baseUrl = src.substring(0, m.index);
		var i = 0, node = document.getElementById(_.env.main_script_name),
		// TODO: 若是有 id，則以 id 為主。
		o = node ? [node] : _.get_tag_list('script'), l = o.length, j, base_path, index;

		for (; i < l; i++)
			try {
			//	o[i].src 多是 full path, o[i].getAttribute('src') 僅取得其值，因此可能是相對的。
				j = node = o[i];
				j = j.getAttribute && j.getAttribute('src') || j.src;

				index = j.lastIndexOf(JSFN);
			//alert(j + ',' + JSFN + ',' + I);
				if (index !== -1) {
					//	正規化: URL 使用 '/' 而非 '\'
					//	TODO: 尚未完善。
					if (j.indexOf('/') === -1 && j.indexOf('\\') !== -1)
						j = j.replace(/\\/g, '/');

					if (setup_extension && JSFN === _.env.main_script_name)
						setup_extension(j.slice(index + JSFN.length), node);

					//	TODO: test 是否以 JSFN 作為結尾
					base_path = j.slice(0, index);
					break;
				}
			} catch (e) {
			}

		//_.log()

		//	base_path || './'
		return base_path || '';
	};

	//	TODO: modify the dirty hack.
	var setup_extension = function (extension, node) {
		if (extension === '.js' || extension === '.txt') {
			//	TODO: unload 時 delete .script_node
			//_.script_node = node;
			var env = _.env, config, matched;
			try {
				config = node.innerText || (config = node.firstChild) && config.nodeValue;
				//	IE8 沒有 .innerText || .nodeValue
				if (!config && typeof (config = node.innerHTML) === 'string')
					config = (matched = config.match(/^[\s\n]*<!--(.+?)-->[\s\n]*$/))
						? matched[1]
						: config.replace(/<!--([\s\S]*?)-->/g, '');
				if (config) {
					//	http://www.whatwg.org/specs/web-apps/current-work/multipage/scripting-1.html#inline-documentation-for-external-scripts
					//	If there is a src attribute, the element must be either empty or contain only script documentation that also matches script content restrictions.
					if (matched = config.match(/\/\*([\s\S]+?)\*\//))
						config = matched[1];
					if (config = parse_JSON(config.replace(/[\s\r\n]*\/\//g, '')))
						env.script_config = config;
				}
			} catch (e) {
				_.err('setup_extension: Invalid configuration: [' + node.outerHTML + ']');
				_.err(e);
			}

			env.main_script = env.main_script.replace(new RegExp('\\'
					+ env.script_extension + '$'), extension);
			env.script_extension = extension;

			//alert(env.main_script + '\n' + env.script_extension);

			//	done.
			setup_extension = null;
		}
	};

	//----------------------------------------------------------------------------------------------------------------------------------------------------------//


	_// JSDT:_module_
	.
	/**
	 * test 是否符合 module pattern.
	 * TODO: improve
	 * @param {String} test_string	string to test
	 * @returns	{Boolean}	是否符合 module pattern
	 */
	is_module_pattern = function (test_string) {
		var r = _.env.module_identifier_RegExp;
		if (!r) {
			//	initial module_identifier_RegExp
			r = _.env.identifier_RegExp.source;
			r = _.env.module_identifier_RegExp = new RegExp('^' + r
					+ '(\\.' + r + ')*$');
		}

		return r.test(test_string);
	};


	_// JSDT:_module_
	.
	/**
	 * test function.request 的項目是否為 module.
	 * 以 ./ 開頭可以確保必定是 path.
	 * TODO:
	 * 現在還有很大問題!
	 * @param {String} resource_string	resource to test
	 * @returns	{Boolean}	resource 是否為 module (true: is module, false: is URL?)
	 */
	match_module_name_pattern = function (resource_string) {
		return typeof resource_string !== 'string'
			|| resource_string.charAt(0) === '.'
			|| resource_string.charAt(0) === '/'
			|| resource_string.indexOf(':') !== -1
			// || resource_string.indexOf('%')!==-1
			|| /\.(js|css)$/i.test(resource_string) ?
				false
			: /\.$/.test(resource_string)
			|| _.is_module_pattern(resource_string);
	};



	/*
	sample to test:
	
	./a/b
	./a/b/
	../a/b
	../a/b/
	a/../b		./b
	a/./b		a/b
	/../a/b		/a/b
	/./a/b		/a/b
	/a/./b		/a/b
	/a/../b		/b
	/a/../../../b	/b
	/a/b/..		/a
	/a/b/../	/a/
	a/b/..		a
	a/b/../		a/
	a/..		.
	./a/b/../../../a.b/../c	../c
	../../../a.b/../c	../../../c
	
	*/

	//	2009/11/23 22:12:5 廢除!
	if (false)
		_// JSDT:_module_
		.
		deprecated_simplify_path = function (path) {
			if (typeof path === 'string') {
				//	去除前後空白. TODO: use String.prototype.trim()
				path = path.replace(/\s+$|^\s+/, '').replace(/\/\/+/g, '/');

				var p, is_absolute = '/' === path.charAt(0);

				while (path !== (p = path.replace(/\/\.(\/|$)/g, function ($0, $1) { return $1; })))
					path = p;
				_.debug('1. ' + p);

				while (path !== (p = path.replace(
						/\/([^\/]+)\/\.\.(\/|$)/g, function ($0, $1, $2) {
							alert([$0, $1, $2].join('\n'));
							return $1 === '..' ? $0 : $2;
				})))
					path = p;
				_.debug('2. ' + p);

				if (is_absolute)
					path = path.replace(/^(\/\.\.)+/g, '');
				else
					path = path.replace(/^(\.\/)+/g, '');
				_.debug('3. ' + p);

				if (!path)
					path = '.';
			}

			return path;
		};

	_// JSDT:_module_
	.
	/**
	 * 轉化所有 /., /.., //
	 * @since	2009/11/23 22:32:52
	 * @param {String} path	欲轉化之 path
	 * @returns	{String} path
	 */
	simplify_path = function (path) {
		if (typeof path === 'string') {
			var i, j, l, is_absolute, head;

			path = path
				.replace(/^([\w\d\-]+:\/\/|[a-zA-Z]:\\|\\\\([^\\\/]+))/, function ($0) {
					head = $0;
					return '';
				})
				//	去除前後空白. TODO: use String.prototype.trim()
				//.replace(/\s+$|^\s+/g,'')
				//.replace(/\/\/+/g,'/')
				.split(/[\\\/]/);

			i = 0;
			l = path.length;
			is_absolute = !path[0];

			for (; i < l; i++) {
				if (path[i] === '.')
					path[i] = '';

				else if (path[i] === '..') {
					j = i;
					while (j > 0)
						if (path[--j] && path[j] != '..') {
							// 相消。
							path[i] = path[j] = '';
							break;
						}
				}
			}

			if (!is_absolute && !path[0])
				path[0] = '.';

			path = path.join(_.env.path_separator)
				// 預防有些情況下需要 '//'。對 archive.org 之類的網站，不可以簡化 '//'。
				//.replace(/[\\\/]{2,}/g, _.env.path_separator)
				.replace(is_absolute ? /^([\\\/]\.\.)+/g : /^(\.[\\\/])+/g, '')
			;

			if (head)
				path = head + path;
			else if (!path)
				path = '.';

		}

		return path;
	};



	_// JSDT:_module_
	.
	/**
	 * 將輸入的 string 分割成各 module 單元。已去除 library name。<br />
	 * need environment_adapter()<br />
	 * ** 並沒有對 module 做完善的審核!
	 * @param {String} module_name	module name
	 * @returns	{Array}	module unit array
	 */
	split_module_name = function (module_name) {
		//_.debug('[' + module_name + ']→[' + module_name.replace(/\.\.+|\\\\+|\/\/+/g, '.').split(/\.|\\|\/|::/) + ']');
		if (typeof module_name === 'string')
			module_name = module_name
				//.replace(/\.\.+|\\\\+|\/\/+/g, '.')
				.replace(/[\\\/]+/g, '.')
				.split(/[.\\\/]|::/);

		if (Array.isArray(module_name) && module_name.length) {
			//	去除 library name。
			if (//module_name.length > 1 &&
					_.Class === module_name[0])
				module_name.shift();
			return module_name;
		} else
			return [''];
	};




	_// JSDT:_module_
	.
	/**
	 * 取得 module 之 name。以 library name 起始。
	 * @returns {String} module name start with library name
	 */
	to_module_name = function (module, separator) {
		if (_.is_Function(module))
			module = module.Class;
		else if (module === _.env.main_script_name)
			module = _.Class;

		if (typeof module === 'string')
			module = _.split_module_name(module);

		var name = '';
		if (Array.isArray(module)) {
			if (typeof separator !== 'string')
				separator = _.env.module_name_separator;
			if (module[0] !== _.Class)
				name = _.Class + separator;
			name += module.join(separator);
		}

		return name;
	};



	//----------------------------------------------------------------------------------------------------------------------------------------------------------//




	_// JSDT:_module_
	.
	is_local = function () {
		//	cache
		return (_.is_local = _.constant_function(!_.is_WWW() || window.location.protocol === 'file:'))();
	};



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------//


	_.reset_env();

}
	//	不用 apply()，因為比較舊的瀏覽器沒有 apply()。
)(CeL);








if (typeof CeL === 'function')
	(function(library_namespace) {

		/**
		 * 取得裸 Object (naked Object)。
		 * 
		 * @returns 裸 Object (naked Object)。
		 */
		var null_Object = library_namespace.null_Object,
		// const: 基本上與程式碼設計合一，僅表示名義，不可更改。(== -1)
		NOT_FOUND = ''.indexOf('_');

		// ---------------------------------------------------------------------//
		// 為一些比較舊的版本或不同瀏覽器而做調適。

		// @see data.code.compatibility.

		// cache.
		var Array_slice = Array.prototype.slice;

		/**
		 * Function.prototype.apply();<br />
		 * apply & call: after ECMAScript 3rd Edition.<br />
		 * 不直接用 value undefined: for JS5.
		 * 
		 * 傳回某物件的方法，以另一個物件取代目前的物件。
		 * apply是將現在正在執行的function其this改成apply的引數。所有函數內部的this指針都會被賦值為oThis，這可實現將函數作為另外一個對象的方法運行的目的.
		 * xxx.apply(oThis,arrayArgs): 執行xxx，執行時以 oThis 作為 this，arrayArgs作為
		 * arguments.
		 * 
		 * @param apply_this_obj
		 * @param apply_args
		 * @returns apply 後執行的結果。
		 * @see http://msdn.microsoft.com/en-us/library/4zc42wh1(VS.85).aspx
		 *      http://www.cnblogs.com/sunwangji/archive/2007/06/26/791428.html
		 *      http://www.cnblogs.com/sunwangji/archive/2006/08/21/482341.html
		 *      http://msdn.microsoft.com/en-us/library/4zc42wh1(VS.85).aspx
		 *      http://www.interq.or.jp/student/exeal/dss/ejs/3/1.html
		 *      http://blog.mvpcn.net/fason/
		 *      http://d.hatena.ne.jp/m-hiyama/20051017/1129510043
		 *      http://noir.s7.xrea.com/archives/000203.html
		 *      http://www.tohoho-web.com/js/object.htm#inheritClass
		 * 
		 * @since 2011/11/20
		 */
		function apply(apply_this_obj, apply_args) {
			var temp_apply_key, _arg_list = [], r, i = 0, l = apply_args
					&& apply_args.length;

			if (apply_this_obj !== null
					&& typeof apply_this_obj !== 'undefined')
				try {
					apply_this_obj[temp_apply_key = 'temp_apply'] = this;
				} catch (e) {
					temp_apply_key = null;
				}

			if (l) {
				for (; i < l; i++)
					_arg_list[i] = 'apply_args[' + i + ']';
				if (!temp_apply_key)
					apply_this_obj = this;
				r = eval('apply_this_obj'
						+ (temp_apply_key ? '.' + temp_apply_key : '') + '('
						+ _arg_list.join(',') + ')');
			} else
				r = temp_apply_key ? apply_this_obj[temp_apply_key]() : this();

			if (temp_apply_key)
				delete apply_this_obj[temp_apply_key];
			return r;
		}

		/**
		 * Function.prototype.call();<br />
		 * call 方法是用來呼叫代表另一個物件的方法。call 方法可讓您將函式的物件內容從原始內容變成由 thisObj 所指定的新物件。
		 * 如果未提供 thisObj 的話，將使用 global 物件作為 thisObj。
		 * 
		 * @see http://msdn.microsoft.com/library/CHT/jscript7/html/jsmthcall.asp
		 * @since 2011/11/20
		 */
		function call(this_obj) {
			// 因 arguments 非 instanceof Array，
			// arguments.slice(sp) → Array.prototype.slice.call(arguments, sp).
			return this.apply(this_obj, Array_slice.call(arguments, 1));
		}

		function copy_properties(from, to) {
			for ( var property in from)
				to[property] = from[property];
			return to;
		}
		library_namespace.copy_properties = copy_properties;

		/**
		 * Function.prototype.bind();
		 * 
		 * @since 2011/11/20
		 * @see <a
		 *      href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind"
		 *      accessdate="2012/2/4 16:39">bind</a>
		 */
		function bind(this_obj) {
			var func = this, args;
			if (arguments.length < 2)
				return this_obj === null || typeof this_obj === 'undefined' ? func
						: copy_properties(func, function() {
							if (false)
								library_namespace.debug('this_obj: ['
										+ this_obj + '],<br />\nfunction: ('
										+ typeof func + ') [' + func + ']', 1,
										'bind');
							return func.apply(this_obj, arguments);
						});

			args = Array_slice.call(arguments, 1);
			return copy_properties(func, function() {
				var counter = arguments.length, arg, i;
				if (!counter)
					return func.apply(this_obj, args);

				// TODO: TEST: 對於少量 arguments，將 arguments 添入於 .concat() 以加快速度。
				arg = args.concat();
				i = counter + args.length;
				while (counter--)
					arg[--i] = arguments[counter];
				return func.apply(this_obj, arg);
			});
		}

		// public interface.
		library_namespace.set_method(Function.prototype, {
			apply : apply,
			call : call,
			bind : bind
		});

		// ---------------------------------------------------------------------//
		// for Iterator

		// for the Iterator interface

		/**
		 * 
		 * @param object
		 *            object to iterate
		 * @param {String|Function}kind
		 *            kind (The possible values are: "key", "value",
		 *            "key+value"), or next function(index, Iterator, arguments)
		 */
		function create_list_iterator(object, kind, get_Array, use_origin) {
			var key, iterator;
			if (use_origin && Array.isArray(object))
				iterator = object;
			else
				for (key in (iterator = []))
					// delete any properties that can be iterated.
					delete iterator[key];
			// assert: Array.isArray(iterator)

			if (!kind && typeof kind !== 'function')
				kind = Array.isArray(object) ? 'value'
				// 當作 Object。視 for(in) 而定。
				: 'key';

			// define iterator
			if (typeof object.forEach === 'function')
				object.forEach(kind === 'value' ? function(value) {
					iterator.push(value);
				} : kind === 'key' ? function(value, key) {
					iterator.push(key);
				} : function(value, key) {
					iterator.push([ key, value ]);
				});
			else
				for (key in object)
					iterator.push(
					//
					kind === 'key' ? key
					//
					: kind === 'value' ? object[key]
					// "key+value"
					: [ key, object[key] ]);

			if (get_Array)
				return iterator;

			return new Array_Iterator(iterator, true);
		}

		// ---------------------------------------------------------------------//

		/**
		 * test code for Map, Set, Array.from():
		 * 
		 * TODO:<br />
		 * test: Array.from(Iterator, other arrayLike)
		 * 
		 * @example <code>

		var a = [1, 2, 3, 1],
			s = new Set(a),
			e = s.entries(),
			v = s.values(),
			m = new Map([
				[5, 1],
				[7, 1],
				[5, 2],
				[3, 1]
			]);
		// CeL.set_debug(6);
		CeL.assert(e.next().value.join() === "1,1", 'set.entries().value');
		CeL.assert(e.next().value.join() === "2,2", 'set.entries().value');
		CeL.assert(e.next().value.join() === "3,3", 'set.entries().value');
		CeL.assert(e.next().done, 'set.entries().done');
		CeL.assert(v.next().value === 1, 'set.values().value');
		CeL.assert(v.next().value === 2, 'set.values().value');
		CeL.assert(v.next().value === 3, 'set.values().value');
		CeL.assert(v.next().done, 'set.values().done');

		v = s.values();
		CeL.assert(v.next().value === 1, 'set.values().value');
		CeL.assert(v.next().value === 2, 'set.values().value');
		CeL.assert(v.next().value === 3, 'set.values().value');

		s.add(4);
		if (v.next().value !== 4)
			CeL.err('iterator 無法反映 Set 之更動！');
		CeL.assert(v.next().done, 'set.values().done');

		e = a.entries();
		CeL.assert(e.next().value.join() === "0,1", 'array.entries().value');
		CeL.assert(e.next().value.join() === "1,2", 'array.entries().value');
		CeL.assert(e.next().value.join() === "2,3", 'array.entries().value');
		CeL.assert(e.next().value.join() === "3,1", 'array.entries().value');
		CeL.assert(e.next().done, 'array.entries().done');

		e = m.entries();
		CeL.assert(e.next().value.join() === "5,2", 'map.entries().value');
		CeL.assert(e.next().value.join() === "7,1", 'map.entries().value');
		CeL.assert(e.next().value.join() === "3,1", 'map.entries().value');
		CeL.assert(e.next().done, 'map.entries().done');

		v = m.keys();
		CeL.assert(v.next().value === 5, 'map.keys().value');
		CeL.assert(v.next().value === 7, 'map.keys().value');
		CeL.assert(v.next().value === 3, 'map.keys().value');
		CeL.assert(v.next().done, 'map.keys().done');

		v = m.values();
		CeL.assert(v.next().value === 2, 'map.values().value');
		CeL.assert(v.next().value === 1, 'map.values().value');
		CeL.assert(v.next().value === 1, 'map.values().value');
		CeL.assert(v.next().done, 'map.values().done');

		//{String}string
		//string.split('')
		//Object(string)
		//Array.from(string)
		CeL.assert([ Array.from('abc').join(), "a,b,c" ], 'Array.from(String)');
		CeL.assert([ Array.from(5).join(), "" ], 'Array.from(Number)');
		CeL.assert([ Array.from(true).join(), "" ], 'Array.from(Boolean)');
		CeL.assert([ Array.from(a).join(), "1,2,3,1" ], 'Array.from(Array)');
		CeL.assert([ Array.from(a.entries()).join(';'), "0,1;1,2;2,3;3,1" ],
		'Array.from(array.entries())');
		CeL.assert([ Array.from({
		length : 4
		}, function(v, i) {
		return i * i;
		}).join(), "0,1,4,9" ], 'Array.from({length:\d})');
		CeL.assert([ Array.from(s).join(), "1,2,3,4" ], 'Array.from(Set)');
		CeL.assert([ Array.from(m).join(), "5,2,7,1,3,1" ], 'Array.from(Map)');
		CeL.assert([ Array.from(m.keys()).join(), "5,7,3" ], 'Array.from(map.keys())');
		CeL.info('All test of Array.from() passed. 測試通過。');

		 * </code>
		 * 
		 */

		// Array.from()
		function from(items, mapfn, thisArg) {
			var array, i, iterator = items
					&& !Array.isArray(items)
					// 測試是否有 iterator。
					&& (
					// items['@@iterator'] ||
					items.constructor === Set ? 'values'
							: (items.entries ? 'entries' : items.values
									&& 'values'));

			if (!iterator && typeof items.next === 'function')
				// items itself is an iterator.
				iterator = items;

			if (iterator) {
				array = [];

				// need test library_namespace.env.has_for_of
				// for(i of items) array.push(i);

				if (typeof iterator === 'function')
					iterator = iterator.call(items);
				else if (iterator && typeof items[iterator] === 'function')
					iterator = items[iterator]();
				else if (!iterator.next)
					throw new Error('Array.from: invalid iterator!');

				while (!(i = iterator.next()).done)
					array.push(i.value);
				return array;
			}

			if (typeof mapfn !== 'function')
				try {
					// for IE, Array.prototype.slice.call('ab').join() !== 'a,b'
					return typeof items === 'string' ? items.split('')
							: Array_slice.call(items);
				} catch (e) {
					if ((e.number & 0xFFFF) !== 5014)
						throw e;
					mapfn = null;
				}

			var length = items && items.length | 0;
			array = [];
			if (mapfn)
				for (i = 0; i < length; i++)
					array.push(thisArg ? mapfn.call(thisArg, items[i], i)
					// 不採用 .call() 以加速執行。
					: mapfn(items[i], i));
			else
				while (i < length)
					array.push(items[i++]);

			return array;
		}

		library_namespace.set_method(Array, {
			from : from
		});

		function Array_Iterator_next() {
			// this: [ index, array, use value ]
			library_namespace.debug(this.join(';'), 6, 'Array_Iterator.next');
			var index;
			while ((index = this[0]++) < this[1].length)
				if (index in this[1])
					return {
						value : this[2] ? this[1][index]
						//
						: [ index, this[1][index] ],
						done : false
					};

			// 已經 done 的不能 reuse。
			this[0] = NaN;
			return {
				value : undefined,
				done : true
			};
		}

		function Array_Iterator(array, use_value) {
			// library_namespace.debug(array);
			// reset index to next index.
			// define .next() function onto items.
			this.next = Array_Iterator_next.bind([ 0, array, use_value ]);
		}
		Array_Iterator.prototype.toString = function() {
			return "[object Array Iterator]";
		};

		// export.
		library_namespace.Array_Iterator = Array_Iterator;

		// ---------------------------------------------------------------------//
		// 測試是否具有標準的 ES6 Set/Map collections (ECMAScript 6 中的集合類型)。

		var is_Set, is_Map, has_Set, has_Map,
		//
		KEY_not_native = library_namespace.env.not_native_keyword,
		// use Object.defineProperty.not_native to test
		// if the browser don't have native support for Object.defineProperty().
		has_native_Object_defineProperty = !Object.defineProperty[KEY_not_native];

		try {
			has_Set = !!(new Set());
			has_Map = !!(new Map());

			is_Set = function(value) {
				return Object.prototype.toString.call(value) === "[object Set]";
			};
			is_Map = function(value) {
				return Object.prototype.toString.call(value) === "[object Map]";
			};

			// (new Map()).entries();
			(new Map()).forEach();

		} catch (e) {

			// browser 非標準 ES6 collections。
			// 想辦法補強。

			// TODO: WeakMap 概念驗證碼:
			// var _WeakMap=function(v){return function(){return eval('v');};};
			// var a={s:{a:3}},g=_WeakMap(a.s);
			// delete a.s;/* .. */alert(g());
			// https://code.google.com/p/es-lab/source/browse/trunk/src/ses/WeakMap.js

			if (!has_native_Object_defineProperty || !has_Set || !has_Map)
				(function() {
					library_namespace
							.debug('完全使用本 library 提供的 ES6 collections 實作功能。');

					// ---------------------------------------

					/**
					 * hash 處理。在盡可能不動到 value/object 的情況下，為其建立 hash。<br />
					 * 在 ES5 下，盡可能模擬 ES6 collections。<br />
					 * 在先前過舊的版本下，盡可能達到堪用水準。
					 * 
					 * @see <a
					 *      href="https://github.com/Benvie/harmony-collections/blob/master/harmony-collections.js"
					 *      accessdate="2012/12/12 17:0"
					 *      title="harmony-collections/harmony-collections.js at
					 *      master · Benvie/harmony-collections ·
					 *      GitHub">harmony-collections</a>
					 */
					var max_hash_length = 80,
					// operator
					ADD = 1, DELETE = 2,
					// id 註記。
					Map_id = 'Map id\n' + Math.random(),
					// Object.prototype.toString.call()
					get_object_type = library_namespace.get_object_type,
					// private operator, access/pass keys.
					// ** WARNING:
					// Should be Array (see forEach).
					// 只要是 object，會以 reference 傳遞，可以 "===" 判斷即可。
					OP_HASH = [],
					//
					OP_SIZE = [],
					//
					OP_KEYS = [], OP_VALUES = [], OP_ENTRIES = [],
					// 取得裸 Object (naked Object) 與屬性判別函數。
					new_hash_set = function new_hash_set() {
						var hash_map = Object.create(null);
						// [ hash_map, has_hash() ]
						return [ hash_map, function(key) {
							return key in hash_map;
						} ];
					};

					// 測試可否用 \0 作為 id。
					(function() {
						var o = {}, a = [], t = {}, id = '\0' + Map_id;
						o[id] = a[id] = t;
						if (o[id] === t && a[id] === t)
							Map_id = id;
					})();

					try {
						new_hash_set();

					} catch (e) {
						// 使用較原始的方法。
						new_hash_set = function() {
							var hash_map = {};
							return [
									hash_map,
									// has_hash()
									hash_map.hasOwnProperty ? function(key) {
										return hash_map.hasOwnProperty(key);
									}
											: Object.prototype ? function(key) {
												return key in hash_map
														&& hash_map[key] !== Object.prototype[key];
											}
													: function(key) {
														return key in hash_map;
													} ];
						};
					}

					/**
					 * 判別是否為 <a href="http://zh.wikipedia.org/wiki/-0"
					 * accessdate="2013/1/6 19:0" title="負零">−0</a>。
					 * 
					 * @see <a href="http://en.wikipedia.org/wiki/Signed_zero"
					 *      accessdate="2012/12/15 12:58">Signed zero</a>, <a
					 *      href="http://www.cnblogs.com/ziyunfei/archive/2012/12/10/2777099.html"
					 *      accessdate="2012/12/15 13:0">[译]JavaScript中的两个0 -
					 *      紫云飞 - 博客园</a>
					 */
					var is_negative_zero = Object.is && !Object.is(+0, -0)
					// Object.is() 採用 SameValue Algorithm。
					? function(value) {
						return Object.is(value, -0);
					}
					// 相容方法。
					: function(value) {
						return value === -0 && 1 / value === -Infinity;
					};
					library_namespace.is_negative_zero = is_negative_zero;

					/**
					 * 鍵值對。
					 * 
					 * TODO: comparator
					 * 
					 * @constructor
					 * 
					 * @see <a
					 *      href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Map"
					 *      accessdate="2012/12/10 7:48">Map - JavaScript | MDN</a>
					 */
					function Map(iterable, comparator) {
						if (this === null || this === undefined
								|| this === library_namespace.env.global) {
							// 採用 Map()，而非 new 呼叫。
							// called as a function rather than as a
							// constructor.
							return new Map(iterable, comparator);
						}

						var size,
						// {Object}map hash to key (object) Array.
						//
						// get hash map of (
						// hash → [value/object 1, value/object 2, ..]
						// )
						hash_map,
						// has this hash.
						has_hash,
						// {Object}value objects 的 id hash map。可用來維持插入順序。
						// value_of_id[
						// id: {String}hash + "_" + {Integral}index
						// ] = value.
						//
						// 在 Set 中 value_of_id={ id: key object }，
						// 因此可以更快的作 forEach()。
						value_of_id;

						// 快速處理法。
						Object.defineProperty(this, 'clear', {
							// enumerable : false,
							value : function clear() {
								// reset.
								var set = new_hash_set();
								hash_map = set[0];
								has_hash = set[1];
								value_of_id = null_Object();
								size = 0;
							}
						});
						// 初始化。
						this.clear();

						Object.defineProperty(this, 'size', {
							// enumerable : false,
							// configurable : false,
							get : function() {
								return size;
							},
							set : function(v) {
								if (Array.isArray(v) && v[1] === OP_SIZE)
									size = v[0];
							}
						});

						// 假扮的 interface（仮面）:
						// 借用標準 method 介面，
						// 若是傳入 OP_*，則表示為 private method，作出內部特殊操作。
						// 否則作出正常表現。
						//
						// 使用這方法以盡量減少多餘的 property 出現，
						// 並維持 private method 之私密特性。
						Object.defineProperty(this, 'values', {
							// enumerable : false,
							value : function values() {
								// arguments[0]: 隱藏版 argument。
								if (arguments[0] === OP_ENTRIES)
									// 傳入 OP_*，則表示為 private method。
									// 回傳 private property 以便操作。
									return [ hash_map, value_of_id ];
								if (arguments[0] === OP_VALUES)
									return create_list_iterator(value_of_id,
											'value', true);

								// 作出正常表現。
								return create_list_iterator(value_of_id,
										'value');
							}
						});

						// 為了能初始化 iterable，因此將設定函數放在 constructor 中。

						Object.defineProperty(this, 'has', {
							// enumerable : false,
							value : function has(key) {
								// arguments[1]: 隱藏版 argument。
								return arguments[1] === OP_HASH ?
								// 傳入 OP_HASH，則表示為 private method，回傳 has_hash()。
								has_hash(key) :
								// 作出正常表現。
								!!hash_of_key.call(this, key);
							}
						});

						if (iterable)
							// initialization. 為 Map 所作的初始化工作。
							try {
								if (Array.isArray(iterable))
									// "key+value"
									iterable.forEach(function(entry) {
										this.set(entry[0], entry[1]);
									}, this);
								else if (iterable.forEach)
									iterable.forEach(function(v, k) {
										this.set(k, v);
									}, this);
								else {
									throw 1;
									for ( var k in iterable)
										this.set(k, iterable[k]);
								}
							} catch (e) {
								throw new TypeError(
										'Input value is not iterable.');
							}
					}

					/**
					 * collections 之核心功能：get hash of specified value/object.<br />
					 * 所有對 hash_map 之變更皆由此函式負責。<br />
					 * 
					 * 本函式僅能以下列方式呼叫：<br />
					 * <code>
					 * hash_of_key.call(this, ..)
					 * </code>
					 * 
					 * TODO: hash collision DoS
					 * 
					 * @param key
					 *            key object
					 * @param {Integer}operator
					 *            操作
					 * @param value
					 *            value object
					 * 
					 * @private
					 * 
					 * @returns [ hash, index ]
					 */
					function hash_of_key(key, operator, value) {
						if (arguments.length === 0)
							return;

						var hash = this.values(OP_ENTRIES), type = typeof key, map = this,
						//
						hash_map = hash[0], value_of_id = hash[1],
						//
						add_size = has_native_Object_defineProperty ?
						// set inner 'size' property
						function(v) {
							map.size = [ map.size + v, OP_SIZE ];
						} : function(v) {
							map.size += v;
						},
						//
						add_value = function(no_size_change) {
							value_of_id[hash + '_' + index] = value;
							if (!no_size_change)
								add_size(1);
						},
						//
						delete_one = function() {
							delete value_of_id[hash + '_' + index];
							add_size(-1);
						};

						// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/typeof
						switch (type) {

						case 'string':
							hash = key;
							break;

						case 'number':
							if (is_negative_zero(key)) {
								// 直接避免紛爭。
								//
								// 實際應使用 SameValue Algorithm。
								// 因為本處實作採用 Array.prototype.indexOf()，
								// 而 indexOf() 採用嚴格相等運算符(===)；
								// 實際上應該處理所有 "===" 判斷為相等，
								// 但以 SameValue Algorithm 並不相等的值。
								hash = '-0';
								break;
							}

						case 'boolean':
						case 'undefined':
							hash = String(key);
							break;

						// 對以上純量，無法判別個別 instance。

						case 'function':
							if (library_namespace.is_Function(key)) {
								// 若設定 function.toString，僅能得到 key.toString()。
								hash = String(key);
								// 盡量增加 hash 能取得的特徵。
								hash = hash.length + '|' + hash;
								break;
							}
						case 'object':
							try {
								if (!(hash = key[Map_id])) {
									// 對於 Object/Arrry，在更改內容的情況下，可能無法得到相同的特徵碼，
									// 因此還是加個 id 註記比較保險。
									hash = String(Math.random());
									Object.defineProperty(key, Map_id, {
										// configurable : true,
										// writable : false,
										// enumerable : false,
										value : hash
									});
									if (hash !== key[Map_id])
										throw new Error('無法設定 hash id: .['
												+ Map_id + ']');
								}
								break;
							} catch (e) {
								// TODO: handle exception
							}

							// 警告:採用不保險的方法。
							if (Array.isArray(key)) {
								hash = (2 * key.length < max_hash_length ? key
										: key.slice(0, max_hash_length / 2))
										.toString();
								break;
							}

							if (library_namespace.is_Object(key)) {
								hash = '{';
								var i;
								for (i in key) {
									hash += i + ':' + key[i] + ',';
									// 不須過長。
									if (hash.length > max_hash_length) {
										i = null;
										break;
									}
								}
								if (i !== null)
									// 已完結的時候，加個 ending mark。
									hash += '}';
								break;
							}

							// TODO:
							// test DOM, COM object.

							// case 'xml':
							// case 'date':

						default:
							try {
								hash = get_object_type(key) + key;
							} catch (e) {
								hash = '[' + type + ']' + key;
							}
							break;
						}

						// assert: typeof hash === 'string'

						// 正規化 hash。
						hash = hash.slice(0, max_hash_length).replace(
								/_(\d+)$/, '-$1');
						if (library_namespace.is_debug(6)
								&& library_namespace.is_WWW())
							library_namespace.debug('hash: [' + hash + ']', 0,
									'hash_of_key');

						if (this.has(hash, OP_HASH)) {
							var list = hash_map[hash],
							// 實際上應該以 SameValue Algorithm 判斷。
							// NaN 等於 NaN, -0 不等於 +0.
							index = list.indexOf(key);
							if (library_namespace.is_debug(6)
									&& library_namespace.is_WWW())
								library_namespace.debug('index: [' + index
										+ ']', 0, 'hash_of_key');

							if (index === NOT_FOUND) {
								// 測試是否為本身與本身不相等的特殊情形。

								// TODO:
								// 偵測 ELEMENT_NODE.isSameNode,
								// Array 之深度檢測等。

								// incase NaN. 可用 Number.isNaN().
								// 但不可用 isNaN(key), 因為 isNaN(非數字) === true.
								if (key !== key) {
									for (var i = 0, length = list.length; i < length; i++)
										// 若具有所有可偵測的相同特徵(特徵碼相同+本身與本身不相等)，
										// 則判別為相同。
										if (list[i] !== list[i]) {
											index = i;
											break;
										}
								}

							}

							if (index === NOT_FOUND) {
								if (operator === ADD) {
									if (library_namespace.is_debug(5)
											&& library_namespace.is_WWW())
										library_namespace.debug(
												'衝突(collision) : ' + type
														+ ' @ hash [' + hash
														+ '], index ' + index
														+ ' / ' + list.length,
												0, 'hash_of_key');

									index = list.push(key) - 1;
									add_value();
								} else
									hash = undefined;

							} else if (operator === DELETE) {
								if (library_namespace.is_debug(6)
										&& library_namespace.is_WWW())
									library_namespace.debug('remove key: ['
											+ hash + ']', 0, 'hash_of_key');
								if (list.length < 2)
									// assert: list.length ===1 && list[0] ===
									// key.
									delete hash_map[hash];
								else
									// assert: list[index] === key.
									delete list[index];
								delete_one();
								return true;
							} else if (operator === ADD) {
								if (library_namespace.is_debug(6)
										&& library_namespace.is_WWW())
									library_namespace.debug('modify key: ['
											+ hash + ']', 0, 'hash_of_key');
								add_value(true);
							}

						} else if (operator === ADD) {
							// add new one.
							hash_map[hash] = [ key ];
							index = 0;
							add_value();
						} else
							hash = undefined;

						return operator === DELETE ? false : hash
								&& [ hash, index ];
					}

					function forEach(callbackfn, thisArg) {
						var id, match, key = this.values(OP_ENTRIES), value,
						//
						hash_map = key[0], value_of_id = key[1],
						//
						use_call = thisArg !== undefined && thisArg !== null
								&& typeof callback.call === 'function',
						//
						list = Array.isArray(callbackfn)
								&& (callbackfn === OP_ENTRIES ? function(v, k) {
									list.push([ k, v ]);
								} : callbackfn === OP_KEYS && function(v, k) {
									list.push(k);
								});

						if (list)
							callbackfn = list, list = [];

						for (id in value_of_id) {
							match = id.match(/^([\s\S]*)_(\d+)$/);
							// assert: match succeed.
							key = hash_map[match[1]][match[2] | 0];
							value = value_of_id[id];
							if (use_call)
								callbackfn.call(thisArg, value, key, this);
							else
								callbackfn(value, key, this);
						}

						if (list) {
							// 這裡可以檢測 size。
							// assert: size === list.length
							return new Array_Iterator(list, true);
						}
					}

					// public interface of Map.
					Object.assign(Map.prototype, {
						set : function set(key, value) {
							hash_of_key.call(this, key, ADD, value);
						},
						get : function get(key) {
							var hash = hash_of_key.call(this, key);
							if (hash)
								return this.values(OP_ENTRIES)[1][hash
										.join('_')];
						},
						'delete' : function Map_delete(key) {
							return hash_of_key.call(this, key, DELETE);
						},
						keys : function keys() {
							return this.forEach(OP_KEYS);
						},
						entries : function entries() {
							return this.forEach(OP_ENTRIES);
						},
						forEach : forEach,
						toString : function() {
							// Object.prototype.toString.call(new Map)
							// === "[object Map]"
							return '[object Map]';
						},
						// place holder for Map.prototype.values()
						// will reset runtime
						values : function() {
						}
					});

					// ---------------------------------------

					/**
					 * 一個不包含任何重複值的有序列表。<br />
					 * 
					 * NOTE:<br />
					 * 為了維持插入順序，因此將 Set 作為 Map 之下層 (Set inherits
					 * Map)。副作用為犧牲（加大了）空間使用量。
					 * 
					 * @constructor
					 */
					function Set(iterable, comparator) {
						if (this === null || this === undefined
								|| this === library_namespace.env.global) {
							// 採用 Set()，而非 new 呼叫。
							// called as a function rather than as a
							// constructor.
							return new Set(iterable, comparator);
						}

						var map = new Map(undefined, comparator);

						Object.defineProperty(this, 'size', {
							// enumerable : false,
							// configurable : false,
							get : function() {
								return map.size;
							},
							set : function(v) {
								if (Array.isArray(v) && v[1] === OP_SIZE)
									map.size = v[0];
							}
						});

						this.values = has_native_Object_defineProperty ?
						//
						function values() {
							// arguments[0]: 隱藏版 argument。
							return arguments[0] === OP_VALUES ?
							//
							map[arguments[1]](arguments[2], arguments[3])
							// 作出正常表現。
							// 用 values 會比 keys 快些。
							: map.values();
						}
						// 先前過舊的版本。
						: function values() {
							// arguments[0]: 隱藏版 argument。
							if (arguments[0] === OP_VALUES) {
								var r = map[arguments[1]](arguments[2],
										arguments[3]);
								this.size = map.size;
								return r;
							}

							// 作出正常表現。
							// 用 values 會比 keys 快些。
							return map.values();
						};

						if (iterable)
							// initialization. 為 Set 所作的初始化工作。
							try {
								if (iterable.forEach)
									iterable.forEach(function(v) {
										this.add(v);
									}, this);
								else
									for ( var i in iterable)
										this.add(iterable[i]);
							} catch (e) {
								throw new TypeError(
										'Input value is not iterable.');
							}
					}

					// public interface of Set.
					Object.assign(Set.prototype, {
						add : function add(value) {
							// 在 Set 中 value_of_id={ id: key object }，
							// 因此將 value 設成與 key 相同，可以更快的作 forEach()。
							return this.values(OP_VALUES, 'set', value, value);
						},
						// 對於 Map 已有的 function name，不能取相同的名稱。
						// 相同名稱的 function 在舊版 IE 會出問題：前面的會被後面的取代。
						// 因此無法使用 "function clear()"，
						// 僅能使用 "function Set_clear()"。
						// 餘以此類推。
						clear : function Set_clear() {
							return this.values(OP_VALUES, 'clear');
						},
						'delete' : function Set_delete(value) {
							return this.values(OP_VALUES, 'delete', value);
						},
						has : function Set_has(value) {
							return this.values(OP_VALUES, 'has', value);
						},
						entries : function Set_entries() {
							var entries = [];
							this.values(OP_VALUES, 'values', OP_VALUES)
									.forEach(function(value) {
										entries.push([ value, value ]);
									});
							return new Array_Iterator(entries, true);
						},
						// 在 JScript 10.0.16438 中，兩個 "function forEach()" 宣告，會造成
						// Map.prototype.forEach 也被設到 Set.prototype.forEach，但
						// Map.prototype.forEach !== Set.prototype.forEach。
						forEach : function Set_forEach(callbackfn, thisArg) {
							this.values(OP_VALUES, 'values', OP_VALUES)
									.forEach(callbackfn, thisArg);
						},
						toString : function() {
							// Object.prototype.toString.call(new Set)
							// === "[object Set]"
							return '[object Set]';
						},
						// place holder for Set.prototype.values()
						// will reset runtime
						values : function() {
						}
					});

					// ---------------------------------------

					// export.
					var global = library_namespace.env.global;
					(global.Set = library_namespace.Set = Set)[KEY_not_native] = true;
					(global.Map = library_namespace.Map = Map)[KEY_not_native] = true;

					if (false && Array.from === Array_from) {
						library_namespace
								.debug('做個標記，設定 Set.prototype[@@iterator]。');
						Set.prototype['@@iterator'] = 'values';
					}

					is_Set = function(value) {
						// value.__proto__ === Set.prototype
						return value && value.constructor === Set;
					};
					is_Map = function(value) {
						// value.__proto__ === Map.prototype
						return value && value.constructor === Map;
					};

				})();

			// ---------------------------------------------------------------------//

			// 現在只有 mozilla firefox 20 會執行到這。
			else if (library_namespace.env.has_for_of)

				// 現在只有 mozilla firefox 20 會需要這項補強。
				(function() {
					function collection_clear() {
						if (this.size > 0) {
							var list = [];
							this.forEach(function(v, k) {
								list.push(k);
							});
							list.forEach(function(k) {
								this['delete'](k);
							}, this);
							// last check.
							if (this.size > 0)
								library_namespace
										.warn('collection_clear: 仍有元素存在於 collection 中！');
						}
					}

					try {
						// 確定有 Set。
						var s = new Set(), a = [], Set_forEach;
						if (!s.forEach) {
							// shim (backward compatible) for
							// Set.prototype.forEach().
							// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Set

							// use eval() because for(..of..) is not supported
							// in current (2013) environment.
							eval('Set_forEach=function(callback,thisArg){var i,use_call=thisArg!==undefined&&thisArg!==null&&typeof callback.call==="function";for(i of this)if(use_call)callback.call(thisArg,i,i,this);else callback(i,i,this);}');
							s.add('2 ');
							s.add(1);
							Set_forEach.call(s, function(i) {
								a.push(i);
							});

							if (a.join('|') === '2 |1') {
								library_namespace
										.debug('採用 Set_forEach() 作為 Set.prototype.forEach()。');
								Object.defineProperty(Set.prototype, 'forEach',
										{
											// enumerable : false,
											value : Set_forEach
										});
							}
						}

						if (!Set.prototype.clear)
							Object.defineProperty(Set.prototype, 'clear', {
								// enumerable : false,
								value : collection_clear
							});

						if (typeof Set.prototype.size === 'function') {
							var Set_size = Set.prototype.size;
							Object.defineProperty(Set.prototype, 'size', {
								// enumerable : false,
								get : Set_size
							});
						}

					} catch (e) {
					}

					try {
						// 確定有 Map。
						var m = new Map(), a = [], Map_forEach;
						if (!m.forEach) {
							// use eval() because for(..of..) is not supported
							// in current (2013) environment.
							eval('Map_forEach=function(callback,thisArg){var k,v,use_call=thisArg!==undefined&&thisArg!==null&&typeof callback.call==="function";for([k,v] of this)if(use_call)callback.call(thisArg,v,k,this);else callback(v,k,this);}');
							m.set('1 ', 2);
							m.set(' 3', 4);
							Map_forEach.call(m, function(v, k) {
								a.push(k, v);
							});
							if (a.join('|') === '1 |2| 3|4') {
								library_namespace
										.debug('採用 Map_forEach() 作為 Map.prototype.forEach()。');
								Object.defineProperty(Map.prototype, 'forEach',
										{
											// enumerable : false,
											value : Map_forEach
										});
							}
						}

						if (!Map.prototype.clear)
							Object.defineProperty(Map.prototype, 'clear', {
								// enumerable : false,
								value : collection_clear
							});

						if (typeof Map.prototype.size === 'function') {
							var Map_size = Map.prototype.size;
							Object.defineProperty(Map.prototype, 'size', {
								// enumerable : false,
								get : Map_size
							});
						}

					} catch (e) {
					}

					// TODO: .size

				})();

		}

		// IE11 無法使用 new Set([ , ])，但 firefox 23 可以。
		var Set_from_Array = new Set([ 1, 2 ]);
		library_namespace.Set_from_Array = Set_from_Array =
		//
		Set_from_Array.size === 2 ? function(array) {
			return new Set(array);
		} : function(array) {
			var set = new Set;
			if (typeof array.forEach === 'function')
				array.forEach(function(value) {
					set.add(value);
				});
			else
				set.add(array);
			return set;
		};

		// e.g., IE 11 has no Set.prototype.values()
		if (typeof Set.prototype.values !== 'function'
		//
		&& typeof Set.prototype.forEach === 'function')
			Set.prototype.values = function Set_prototype_values() {
				var values = [];
				this.forEach(function(v) {
					values.push(v);
				});
				return new Array_Iterator(values, true);
			};

		library_namespace.is_Set = is_Set;
		library_namespace.is_Map = is_Map;

		// ---------------------------------------------------------------------//

		var
		// 計數用。
		CONST_COUNT = 0,

		// const: 程序處理方法。
		// {Integer} PARALLEL (平行處理), SEQUENTIAL (循序/依序執行, in order).
		PARALLEL = 0, SEQUENTIAL = 1,

		// const: major status of object.
		// UNKNOWN 不可為 undefined，會造成無法判別。
		UNKNOWN = 'unknown',
		// LOADING, INCLUDING, reloading, reincluding.
		// WORKING = ++CONST_COUNT,
		// 主要的兩種處理結果。
		// IS_OK = ++CONST_COUNT, IS_FAILED = ++CONST_COUNT,
		//
		PROCESSED = ++CONST_COUNT,

		// const: 詳細 status/detailed information of object.
		// LOADING = ++CONST_COUNT, LOAD_FAILED = ++CONST_COUNT,
		//
		INCLUDING = ++CONST_COUNT, INCLUDE_FAILED = ++CONST_COUNT;
		// included: URL 已嵌入/掛上/named source code registered/函數已執行。
		// INCLUDED = ++CONST_COUNT;

		// ---------------------------------------------------------------------//

		/**
		 * 程式碼主檔內建相依性(dependency chain)和關聯性處理 class。
		 * 
		 * @example <code>

		var dc = new CeL.dependency_chain;
		dc.add(1, 2);
		CeL.assert(['1', Array.from(dc.get(2).previous.values()).join()]);
		dc.add(2, 3);
		CeL.assert(['2', Array.from(dc.get(3).previous.values()).join()]);
		CeL.assert([1, dc.independent(3)]);
		CeL.assert(['', Array.from(dc.get(3).next.values()).join()]);
		CeL.assert(['1,2,3', Array.from(dc.get()).sort().join()]);
		CeL.assert([1, dc.independent()]);
		dc.add(0, 1);
		CeL.assert([0, dc.independent()]);
		dc['delete'](0);
		CeL.assert([1, dc.independent()]);

		 * </code>
		 * 
		 */
		function dependency_chain() {
			this.relations = new Map;
		}

		/**
		 * 取得指定 item 之 relation 結構。<br />
		 * TODO: 無此 item 時，預設不順便加入此 item。
		 * 
		 * @param [item]
		 *            指定 item。未指定 item 時，回傳所有 item 之 Array。
		 * @param {Boolean}[no_add]
		 *            無此 item 時，是否不順便加入此 item。
		 * @returns 指定 item 之 relation 結構。
		 */
		function dependency_chain_get(item, no_add) {
			var relations = this.relations, relation;
			if (arguments.length === 0)
				// 未指定 item 時，回傳所有 items。
				return relations.keys();

			if (!(relation = relations.get(item)) && !no_add)
				// initialization. 為 item 所作的初始化工作。
				relations.set(item, relation = {
					previous : new Set,
					next : new Set,
					// fallback
					item : item
				});

			return relation;
		}

		/**
		 * 將 previous → next (independent → dependent) 之相依性添加進 dependency chain。
		 * 
		 * @param previous
		 *            previous(prior) item.
		 * @param next
		 *            next item.
		 * @returns {dependency_chain} dependency chain
		 */
		function dependency_chain_add(previous, next) {
			if (0 < arguments.length
			//
			&& (previous !== undefined || (previous = next) !== undefined))
				if (previous === next || next === undefined) {
					// initialization. 為 previous 所作的初始化工作。
					this.get(previous);

				} else {
					// 維護雙向指標。
					this.get(previous).next.add(next);
					this.get(next).previous.add(previous);
				}

			return this;
		}

		/**
		 * 自 dependency chain 中，刪除此 item。
		 * 
		 * @param item
		 *            指定欲刪除之 item。
		 * @returns {Boolean} item 是否存在，且成功刪除。
		 */
		function dependency_chain_delete(item) {
			var relation, relations;
			if (!(relation = (relations = this.relations).get(item)))
				// 注意：此處與 ECMAScript [[Delete]] (P) 之預設行為不同！
				return false;

			if (library_namespace.is_debug() && relation.previous.size > 0)
				library_namespace.warn('刪除一個還有 ' + relation.previous.size
						+ ' 個 previous 的元素。循環相依？');

			// 維護雙向指標。
			relation.previous.forEach(function(previous) {
				var next_of_previous = relations.get(previous).next;

				// 維持/傳遞相依關聯性。
				relation.next.forEach(function(next) {
					// 維護雙向指標。

					// assert: previous, next 存在 relations 中。
					// 因此採取下列方法取代 <code>this.add(previous, next);</code> 以加快速度。
					next_of_previous.add(next);
					relations.get(next).previous.add(previous);
				});

				// 一一去除 previous 的關聯性。
				next_of_previous['delete'](item);
			});

			// 一一去除 next 的關聯性。
			relation.next.forEach(function(next) {
				relations.get(next).previous['delete'](item);
			});

			// delete self.
			relations['delete'](item);

			return true;
		}

		/**
		 * 取得需求鏈中獨立之元素 (get the independent one)，<br />
		 * 或者起碼是循環相依(循環參照, circular dependencies)的一員。
		 * 
		 * @param [item]
		 *            指定取得此 item 之上游。
		 * 
		 * @returns 獨立之元素/節點，或者起碼是循環相依的一員。
		 * 
		 * @see <a href="http://en.wikipedia.org/wiki/Loop_dependence_analysis"
		 *      accessdate="2012/12/10 8:54">Loop dependence analysis</a>
		 */
		function dependency_chain_independent(item) {
			var relations = this.relations, no_independent;
			if (relations.size > 0)
				try {
					if (!arguments.length) {
						library_namespace.debug('自 ' + relations.size
								+ ' 個元素中，隨便取得一個沒 previous 的元素。', 5,
								'dependency_chain.independent');
						// 用 for .. of 會更好。
						relations.forEach(function(declaration, _item) {
							library_namespace.debug('item [' + _item + ']', 6,
									'dependency_chain.independent');
							item = _item;
							if (declaration.previous.size === 0)
								throw 1;
						});

						if (library_namespace.is_debug())
							library_namespace
									.warn('dependency_chain.independent: 沒有獨立之元素!');
						no_independent = true;
					}

					var
					// 已經處理過的 item Set。
					chain = new Set,
					// 當前要處理的 item Set。
					current,
					// 下一個要處理的 item Set。
					next = new Set;

					next.add(item);
					item = undefined;

					while ((current = next).size > 0) {
						next = new Set;
						// 針對 item 挑一個沒 previous 的元素。
						current.forEach(function(_item) {
							var declaration = relations.get(_item);
							if (declaration.previous.size === 0) {
								item = _item;
								throw 2;
							}

							if (!chain.has(_item))
								chain.add(_item);
							else {
								// 否則最起碼挑一個在 dependency chain 中的元素。
								item = _item;
								if (no_independent)
									throw 3;
							}

							// 把所有未處理過的 previous 排入 next 排程。
							// 遍歷 previous，找出獨立之元素。
							declaration.previous.forEach(function(previous) {
								// assert: previous !== _item
								if (!chain.has(previous))
									next.add(previous);
								else if (no_independent) {
									item = previous;
									throw 4;
								}
							});

						});
					}
				} catch (e) {
					if (isNaN(e)) {
						library_namespace.warn('dependency_chain.independent: '
								+ e.message);
						library_namespace.err(e);
					}
				}

			return item;
		}

		// public interface of dependency_chain.
		Object.assign(dependency_chain.prototype, {
			get : dependency_chain_get,
			add : dependency_chain_add,
			// quote 'delete' for "必須要有識別項" @ IE8.
			'delete' : dependency_chain_delete,
			independent : dependency_chain_independent
		});

		// export.
		library_namespace.dependency_chain = dependency_chain;

		// ---------------------------------------------------------------------//
		// <b>named source code declaration</b> / <b>module controller</b> 之處理。

		/**
		 * named source code declaration.<br />
		 * named_code = { id : source code declaration }.<br />
		 * assert: is_controller(named_code 之元素) === true.<br />
		 * 
		 * cache 已經 include 了哪些 resource/JavaScript 檔（存有其路徑）/class(函式)。<br />
		 * 預防重複載入。
		 * 
		 * note:<br />
		 * named source code/module 定義: 具 id （預設不會重覆載入）、行使特殊指定功能之 source。<br />
		 * module 特性: 可依名稱自動判別 URL。 預設會搭入 library name-space 中。
		 * 
		 * @inner
		 * @ignore
		 * @type Object
		 */
		var named_code = null_Object();

		/**
		 * 在 module 中稍後求值，僅對 function 有效。<br />
		 * TODO: use get method. TODO: replace 變數.
		 */
		function load_later() {
			var name = String(this);
			if (library_namespace.is_debug()) {
				library_namespace.debug('load_later: 演算 [' + name + ']。', 5,
						'load_later');
				if (name !== this)
					library_namespace.warn('變數名與 "this" 不同！');
			}
			var method;
			try {
				method = library_namespace.value_of(name);
				if (!method || (typeof method !== 'function' &&
				// JScript 中，有些函式可能為object。
				typeof method !== 'object'))
					// 非函式，為常量？
					return method;
				return method.apply(
				// 處理 bind。
				library_namespace.value_of(name.replace(/\.[^.]+$/, '')),
						arguments);
			} catch (e) {
				library_namespace.err(e);
			}
			if (!method) {
				library_namespace.warn('load_later: 無法演算 [' + name + ']！');
				return method;
			}

			if (library_namespace.is_debug())
				library_namespace
						.warn('load_later: 可能是特殊 object，因無法 bind 而出錯。嘗試跳過 bind。');
			var length = arguments.length;
			try {
				if (length > 0)
					return method.apply(null, arguments);
			} catch (e) {
				if (library_namespace.is_debug())
					library_namespace.err(e);
			}

			if (library_namespace.is_debug())
				library_namespace
						.warn('load_later: 可能是特殊 object，因無法 apply 而出錯。嘗試跳過 apply。');
			try {
				switch (length) {
				case 0:
					return method();
				case 1:
					return method(arguments[0]);
				case 2:
					return method(arguments[0], arguments[1]);
				case 3:
					return method(arguments[0], arguments[1], arguments[2]);
				case 4:
					return method(arguments[0], arguments[1], arguments[2],
							arguments[3]);
				default:
					if (length > 5)
						library_namespace.warn('load_later: 共指派了 ' + length
								+ ' 個 arguments，過長。將僅取前 5 個。');
					return method(arguments[0], arguments[1], arguments[2],
							arguments[3], arguments[4]);
				}
			} catch (e) {
				library_namespace.err(e);
			}

			library_namespace.warn('load_later: 無法執行 [' + name
					+ ']！跳過執行動作，直接回傳之。');
			return method;
		}

		/**
		 * Get named source code declaration.<br />
		 * 注意：亦包括 URL/path!!見 check_and_run_normalize()。<br />
		 * 對相同 id 會傳回相同之 declaration。<br />
		 * 
		 * @param {String}name
		 *            source code (module) name/id, URL/path, variable name.
		 * @param {Object}[setup_declaration]
		 *            source code 之設定選項。
		 * 
		 * @return {Object} named source code declaration.
		 */
		function get_named(name, setup_declaration) {
			if (typeof name !== 'string' || !name)
				return name;

			// module declaration/controller.
			var declaration, id,
			// 看看是否為 named source code。
			is_module = library_namespace.match_module_name_pattern(name);

			// TODO:
			// 就算輸入 module path 亦可自動判別出為 module，而非普通 resource。

			// 先嘗試是否為變數/數值名。
			id = library_namespace.value_of(name);
			if (id !== undefined
					&&
					// 若存在此值，且並未載入過（載入過的皆應該有資料），才判別為變數/數值名。
					(!(declaration = library_namespace.to_module_name(name)) || !(declaration in named_code))) {
				library_namespace.is_debug('treat [' + name
						+ '] as variable name.', 2, 'get_named');
				return id;
			}

			// 再看看是否為 named source code。
			if (is_module)
				// 正規化 name。登記 full module name。e.g., 'CeL.data.code'.
				id = declaration || library_namespace.to_module_name(name);
			// 最後看是否為 resource。
			else if (!/^(?:[a-z\-]+:[\/\\]{2}|(?:[.]{2}[\/\\])+)?(?:[^.]+(?:\.[^.]+)*[\/\\])*[^.]+(?:\.[^.]+)*$/i
					.test(id = library_namespace.simplify_path(name))
					&& library_namespace.is_debug())
				library_namespace.warn('get_named: 輸入可能有誤的 URL/path: [' + id
						+ ']');

			if (!(declaration = named_code[id])) {
				if (!is_module
						|| !(declaration = named_code[library_namespace
								.get_module_path(id)])) {
					/**
					 * initialization. 為 declaration 所作的初始化工作。<br />
					 * 因為 URL 可能也具有 named code 功能，因此一視同仁都設定 full function。
					 * 
					 * note:<br />
					 * "use" 是 JScript.NET 的保留字。或可考慮 "requires"。<br />
					 * use -> using because of 'use' is a keyword of JScript.
					 */
					(declaration = named_code[id] = {
						id : id,
						callback : new Set,
						error_handler : new Set,
						load_later : load_later,
						base : library_namespace
					}).use = use_function;
					if (is_module)
						// 判別 URL 並預先登記。但先不處理。
						named_code[library_namespace.get_module_path(id)] = declaration;
				}

				if (is_module) {
					library_namespace.debug('treat resource [' + name
							+ '] as module.', 5, 'get_named');
					declaration.module = id;
					// 若是先 call URL，再 call module，這時需要補充登記。
					if (!(id in named_code))
						named_code[id] = declaration;
				} else {
					library_namespace.debug('treat resource [' + name
							+ '] as URL/path.', 5, 'get_named');
					declaration.URL = id;
				}
			}
			if (declaration.module && declaration.module !== declaration.id)
				id = declaration.id = declaration.module;

			if (library_namespace.is_Object(setup_declaration) &&
			// 已載入過則 pass。
			(!declaration.included || declaration.force)) {
				library_namespace.debug(
						'included' in declaration ? 'named source code [' + id
								+ '] 已經載入過，卻仍然要求再度設定細項。' : '設定 [' + id
								+ '] 之 source code 等 options。', 2, 'get_named');

				var setup_callback = function(name) {
					var i = setup_declaration[name];
					// TODO: 這種判斷法不好。
					if (i) {
						if (typeof i === 'function'
								&& typeof i.forEach !== 'function')
							i = [ i ];
						try {
							if (i && typeof i.forEach === 'function') {
								// 初始設定函式本身定義的 callback 應該先執行。
								// i = new Set(i);
								i = Set_from_Array(i);
								if (i.size > 0) {
									library_namespace.debug('[' + id
											+ '] 初始設定函式本身定義了 ' + i.size + ' 個 '
											+ name + '。', 2, 'get_named');
									declaration[name]
											.forEach(function(callback) {
												i.add(callback);
											});
									declaration[name] = i;
								}
							}
						} catch (e) {
							// TODO: handle exception
						}
					}
				};
				// 需要特別做處理的設定。
				setup_callback('callback');
				setup_callback('error_handler');
				// .finish 會直接設定，不經特別處理！
				if (typeof setup_declaration.extend_to === 'object'
						|| typeof setup_declaration.extend_to === 'function')
					declaration.extend_to = setup_declaration.extend_to;

				// 將 setup_declaration 所有 key of named_code_declaration 之屬性 copy
				// / overwrite 到 declaration。
				library_namespace.set_method(declaration, setup_declaration,
						function(key) {
							return !(key in named_code_declaration);
						}, {
							configurable : true,
							writable : true
						});
			}

			return declaration;
		}

		// {String|Array}name
		function is_included_assertion(name, assertion) {
			if (assertion)
				throw typeof assertion === 'string' ? assertion : new Error(
						'Please include module [' + name + '] first!');
			return false;
		}
		/**
		 * 判斷 module 是否已經成功載入。<br />
		 * 
		 * TODO<br />
		 * 以及檢測是否破損。<br />
		 * prefix.
		 * 
		 * @param {String|Array}name
		 *            resource/module name || name list
		 * @param {Boolean|String}[assertion]
		 *            throw the assertion if NOT included.
		 * 
		 * @returns {Boolean} 所指定 module 是否已經全部成功載入。<br />
		 *          true: 已經成功載入。<br />
		 *          false: 載入失敗。
		 * @returns undefined 尚未載入。
		 */
		function is_included(name, assertion) {
			if (Array.isArray(name)) {
				var i = 0, l = name.length, yet_included = [];
				for (; i < l; i++)
					if (!is_included(name[i]))
						yet_included.push(name[i]);
				if (yet_included.length > 0)
					return is_included_assertion(yet_included, assertion);
				return true;
			}

			if (is_controller(name) || is_controller(name = get_named(name)))
				return name.included;

			return is_included_assertion(name, assertion);
		}
		// export.
		library_namespace.is_included = is_included;

		/**
		 * 解析 dependency list，以獲得所需之 URL/path/module/variable name。<br />
		 * 
		 * note: URL paths 請在 code 中載入。
		 * 
		 * @param {controller}declaration
		 * 
		 * @returns {Array|Object} dependency sequence
		 * @returns {controller}declaration
		 */
		function parse_require(declaration) {
			var code_required = declaration.require;

			if (code_required) {
				library_namespace.debug('解析 [' + declaration.id
				//
				+ '] 之 dependency list，以獲得所需之 URL/path/module/variable name: ['
						+ code_required + ']。', 5, 'parse_require');

				if (typeof code_required === 'string')
					code_required = code_required.split('|');

				if (Array.isArray(code_required)) {
					// 挑出所有需要的 resource，
					// 把需要的 variable 填入 variable_hash 中，
					// 並去除重複。
					var i, require_resource = null_Object(),
					// required variables.
					// variable_hash = {
					// variable name : variable full name
					// }.
					variable_hash = declaration.variable_hash = null_Object();

					code_required.forEach(function(variable) {
						var match = variable.match(/^(.+)\.([^.]*)$/);
						if (match && library_namespace
						//
						.match_module_name_pattern(match[1])) {
							// module/variable name?
							// 類似 'data.split_String_to_Object' 的形式，為 function。
							// 類似 'data.' 的形式，為 module。
							if (match[2])
								variable_hash[match[2]]
								//
								= library_namespace.to_module_name(
								//
								match[1], '.') + '.' + match[2];
							require_resource[match[1]] = null;
						} else {
							// URL/path?
							require_resource[variable] = null;
						}
					});

					// cache. 作個紀錄。
					declaration.require_resource = code_required = [];
					for (i in require_resource)
						code_required.push(i);

					// 處理完把待處理清單消掉。
					delete declaration.require;

				} else
					// TODO: 此處實尚未規範，應不可能執行到。
					library_namespace.warn('無法解析 [' + declaration.id
							+ '] 之 dependency：[' + code_required + ']！');
			}

			if (Array.isArray(code_required) && code_required.length > 0) {
				var require_now = [];
				code_required.forEach(function(item) {
					var declaration = get_named(item);
					// 確定是否還沒載入，必須 load。還沒載入則放在 require_now 中。
					if (is_controller(declaration)
							&& !('included' in declaration))
						require_now.push(item);
				});

				if (Array.isArray(require_now) && require_now.length > 0) {
					library_namespace.debug('檢查並確認 required module/URL，尚須處理 '
							+ require_now.length + ' 項: ['
							+ require_now.join('<b style="color:#47e;">|</b>')
							+ ']。', 5, 'parse_require');
					// 臨時/後續/後來新增
					return [
							SEQUENTIAL,
							require_now.length === 1 ? require_now[0]
									: require_now, declaration ];
				}
			}

			return declaration;
		}

		// ---------------------------------------------------------------------//
		// file loading 之處理。

		// cache
		var document_head, tag_of_type = null_Object(), URL_of_tag = null_Object(), TO_FINISH = null_Object(),
		// 需要修補 load events on linking elements?
		no_sheet_onload = library_namespace.is_WWW(true) && navigator.userAgent,
		// external resource tester.
		external_RegExp = library_namespace.env.module_name_separator,
		// Node.js 有比較特殊的 global scope 處理方法。
		is_nodejs = library_namespace.env.nodejs,
		// tag_map[tag name]=[URL attribute name, type/extension list];
		tag_map = {
			script : [ 'src', 'js' ],
			link : [ 'href', 'css' ],
			img : [ 'src', 'png|jpg|gif' ]
		};
		external_RegExp = new RegExp('(?:^|\\' + external_RegExp + ')'
				+ library_namespace.env.resource_directory_name + '\\'
				+ external_RegExp + '|^(?:' + library_namespace.Class + '\\'
				+ external_RegExp + ')?'
				+ library_namespace.env.external_directory_name + '\\'
				+ external_RegExp);

		if (no_sheet_onload)
			(function() {
				// Safari css link.onload problem:
				// Gecko and WebKit don't support the onload
				// event on link nodes.
				// http://www.zachleat.com/web/load-css-dynamically/
				// http://www.phpied.com/when-is-a-stylesheet-really-loaded/
				// http://stackoverflow.com/questions/2635814/javascript-capturing-load-event-on-link
				no_sheet_onload = no_sheet_onload.toLowerCase();

				// move from 'interact.DOM'.
				var is_Safari = no_sheet_onload.indexOf('safari') !== NOT_FOUND
						&& no_sheet_onload.indexOf('chrome') === NOT_FOUND
						&& no_sheet_onload.indexOf('chromium') === NOT_FOUND,
				//
				is_old_Firefox = no_sheet_onload.match(/ Firefox\/(\d+)/i);
				if (is_old_Firefox)
					is_old_Firefox = (is_old_Firefox[1] | 0) < 9;

				no_sheet_onload = is_Safari || is_old_Firefox;
				library_namespace.debug(
						'看似需要修補 load events on linking elements.', 5);
			})();

		// TODO: watchdog for link.onload
		// function link_watchdog() {}

		/**
		 * 載入 named source code（具名程式碼: module/URL）。<br />
		 * Include / requires specified module.<br />
		 * 
		 * <p>
		 * 會先嘗試使用 .get_file()，以 XMLHttpRequest
		 * 同時依序(synchronously,會掛住,直至收到回應才回傳)的方式依序取得、載入 module。<br />
		 * 
		 * 若因為瀏覽器安全策略(browser 安全性設定, e.g., same origin policy)等問題，無法以
		 * XMLHttpRequest 取得、循序載入時，則會以異序(asynchronously,不同時)的方式載入 module。<br />
		 * 因為 module 尚未載入，在此階段尚無法判別此 module 所需之 dependency list。
		 * </p>
		 * 
		 * TODO:<br />
		 * unload module.<br />
		 * test: 若兩函數同時 require 相同 path，可能造成其中一個通過，一個未載入?<br />
		 * for <a href="http://en.wikipedia.org/wiki/JSONP"
		 * accessdate="2012/9/14 23:50">JSONP</a>
		 * 
		 * @param {String|Object}item
		 *            source code (module/URL/path) name/id.
		 * @param {Object}[options]
		 *            load options.
		 * @param {Function}[caller]
		 *            當以異序(asynchronously,不同時)的方式載入 module 時，將排入此 caller
		 *            作為回調/回撥函式。
		 * 
		 * @returns {Number} status.<br />
		 *          PROCESSED: done.<br />
		 *          INCLUDE_FAILED: error occurred. fault.<br />
		 *          INCLUDING: loading asynchronously,
		 *          以異序(asynchronously,不同時)的方式載入。<br />
		 */
		function load_named(item, options, caller) {
			var id = typeof item === 'string' ? item : is_controller(item)
					&& item.id,
			//
			force = is_controller(item) && item.force,
			//
			declaration = id && named_code[id];
			if (!id || !is_controller(declaration)) {
				// 內部 bug？
				library_namespace.err('load_named: 沒有 [' + id + '] 的資料！');
				return PROCESSED;
			}

			// id 正規化(normalization)處理。
			id = declaration.id;
			// 預先定義/正規化，避免麻煩。
			if (!library_namespace.is_Object(options))
				options = null_Object();

			// waiting handler
			function waiting() {
				return load_named(item, {
					finish_only : TO_FINISH
				}, caller);
			}

			function run_callback(name) {
				var callback = declaration[name], args, need_waiting = [];
				if (callback) {
					// 因為不能保證 callback 之型態，可能在 module 中被竄改過，
					// 因此需要預先處理。
					if (typeof callback === 'function'
							&& typeof callback.forEach !== 'function')
						callback = [ callback ];
					if (Array.isArray(callback)) {
						// callback = new Set(callback);
						callback = Set_from_Array(callback);
						declaration[name] = new Set;
					}

					// TODO: assert: callback 為 Set。
					if (callback.size > 0
					// && typeof callback.forEach === 'function'
					) {
						// 獲利了結，出清。
						library_namespace.debug('繼續完成 ' + callback.size
								+ ' 個所有原先 ' + name
								+ ' queue 中之執行緒，或是 named source code 所添加之函數。',
								5, 'load_named.run_callback');

						// 作 cache。
						// 需預防 arguments 可被更改的情況！
						args = Array.prototype.slice.call(arguments, 1);

						callback.forEach(library_namespace.env.no_catch
						//
						? function(callback) {
							if (typeof callback === 'function'
									&& callback.apply(declaration, args)
									//
									=== waiting)
								// callback 需要 waiting。
								need_waiting.push(callback);
						} : function(callback) {
							try {
								// 已經過鑑別。這邊的除了 named source code
								// 所添加之函數外，
								// 應該都是 {Function}
								// check_and_run.run。
								// TODO: using setTimeout?
								library_namespace.debug('run ' + name + ' of ['
										+ id + ']: [' + callback + ']', 5,
										'load_named.run_callback');
								if (typeof callback === 'function'
										&& callback.apply(declaration, args)
										//
										=== waiting)
									// callback 需要 waiting。
									need_waiting.push(callback);
							} catch (e) {
								library_namespace.err('執行 [' + id + '] 之 '
										+ name + ' 時發生錯誤！ ' + e.message);
								library_namespace.debug('<code>'
										+ ('' + callback).replace(/</g, '&lt;')
												.replace(/\n/g, '<br />')
										+ '</code>', 1,
										'load_named.run_callback');
							}
						});

						callback.clear();
					}
				}

				// release. 早點 delete 以釋放記憶體空間/資源。
				// assert: declaration.error_handler 為 Set。
				declaration.error_handler.clear();

				if (need_waiting.length > 0) {
					need_waiting.forEach(function(cb) {
						callback.add(cb);
					});
					return true;
				}
			}

			if ('finish_only' in options)
				options.finish_only = options.finish_only === TO_FINISH;

			// 存在 .included 表示已經處理過（無論成功失敗）。
			// URL 已嵌入/含入/掛上/module registered/函數已執行。
			if (force || !('included' in declaration)) {
				if (declaration.code) {
					// ---------------------------------------
					// including code.
					// TODO: 拆開。

					library_namespace.debug(
							'準備嵌入 (include) [<b style="color:#F2a;background-color:#EF0;">'
									+ id + '</b>]。執行 module 初始設定函式。', 2,
							'load_named');

					var initializator, error_Object;
					if (library_namespace.env.no_catch)
						initializator = declaration.code(library_namespace);
					else
						try {
							// 真正執行 module 初始設定函式 / class template。
							// 因為 module 常會用到 library，因此將之當作 argument。
							initializator = declaration.code(library_namespace);
						} catch (e) {
							error_Object = e;
							library_namespace.err('load_named: [' + id
									+ '] 之初始設定函式執行失敗！');
							library_namespace.err(e);
						}

					if (Array.isArray(initializator)) {
						library_namespace.debug('初始設定函式回傳 Array，先轉成 Object。',
								1, 'load_named');
						var list = initializator;
						initializator = null_Object();
						list.forEach(function(method) {
							var name = typeof method === 'function'
									&& library_namespace
											.get_function_name(method);
							if (name) {
								library_namespace.debug('設定 method：[' + name
										+ ']。', 2, 'load_named');
								initializator[name] = method;
							} else {
								library_namespace
										.warn('load_named: 非函式之初始設定值：['
												+ method + ']！');
							}
						});
					}

					if (typeof initializator === 'function'
							|| library_namespace.is_Object(initializator)) {

						library_namespace.debug('預先一層一層定義、準備好 [' + id
								+ '] 之上層 name-space。', 2, 'load_named');
						var module_name_list = library_namespace
								.split_module_name(id),
						//
						i = 0, l = module_name_list.length - 1, name_space = library_namespace, name, sub_name_space;
						for (; i < l; i++) {
							sub_name_space = name_space[name = module_name_list[i]];
							if (!sub_name_space) {
								sub_name_space = name_space[name] = {
									null_constructor_name : library_namespace
											.to_module_name(module_name_list
													.slice(0, i + 1))
								};
								library_namespace.debug('創建 name-space ['
										+ sub_name_space.null_constructor_name
										+ ']', 2, 'load_named');
							}
							name_space = sub_name_space;
						}
						// assert: name_space 這時是 module 的 parent module。
						name = module_name_list[l];
						if (name_space[name])
							if (name_space[name].null_constructor_name) {
								library_namespace.debug(
										'可能因下層 module 先被載入，已預先定義過 [' + id
												+ ']。將把原先的 member 搬過來。', 2,
										'load_named');

								delete name_space[name].null_constructor_name;
								// ** WARNING:
								// 這邊可能出現覆寫基底 method 之情形！
								// e.g., application.debug.log @
								// application.debug

								// ** WARNING:
								// 須注意是否因 name_space 為 function，預設會當作 function
								// 處理，而出問題！
								Object.assign(initializator, name_space[name]);
							} else
								library_namespace.warn(
								//
								'load_named: 已存在 name-space [' + id + ']！');
						// else: 尚未被定義或宣告過

						// TODO: alias

						library_namespace.debug('[' + id
								+ '] 順利執行到最後，準備作 hook 設定。', 3, 'load_named');
						name_space[name] = initializator;

						// 載入 module 時執行 extend 工作。
						var no_extend,
						/**
						 * 擴充目的基底。extend to what name-space。<br />
						 * Extend to specified name-space that you can use
						 * [name_space]._func_ to run it.
						 */
						extend_to = 'extend_to' in declaration ? declaration.extend_to
								/**
								 * 預設會 extend 到 library 本身之下。<br />
								 * extend to root of this library.<br />
								 * 
								 * e.g., call CeL._function_name_ and we can get
								 * the specified function.
								 */
								: library_namespace;

						if (extend_to) {
							library_namespace.debug(
									'設定完 name space。執行擴充 member 的工作。'
									//
									+ (extend_to === library_namespace
									//
									? '將 extend 到 library 本身之下。' : ''), 2,
									'load_named');

							if (no_extend = declaration[library_namespace.env.not_to_extend_keyword]) {
								if (typeof no_extend === 'string')
									no_extend = no_extend.split(',');
								if (Array.isArray(no_extend)) {
									l = null_Object();
									no_extend.forEach(function(i) {
										l[i] = 1;
									});
									no_extend = l;
								}
							}

							if (!library_namespace.is_Object(no_extend))
								no_extend = null_Object();

							// 去掉 function 預設可列舉的成員。
							// Firefox/3.0.19 中，.prototype 亦可列舉。
							// TODO: how to cache.
							(l = function() {
							}).prototype = null_Object();
							for (i in l)
								no_extend[i] = 1;

							if (!('this' in no_extend)) {
								library_namespace.debug('擴充 module 本身到目的基底下。',
										2, 'load_named');
								l = extend_to[name];
								// 只處理雙方皆為 Object 的情況。
								if (typeof l === 'object'
										&& typeof initializator === 'object') {
									library_namespace.debug('目的基底 [' + l.Class
											+ '] 已有 [' + name + ']，將合併/搬移成員。',
											1, 'load_named');
									// 若沒有重新架構，之後的搬移動作可能汙染原先之 name-space!
									if (!('reconstructed' in l))
										extend_to[name] = l = Object.assign({
											reconstructed : true
										}, l);
									for (i in initializator) {
										if (i in l)
											library_namespace.debug('目的基底 ['
													+ name + '] 已有 [' + i
													+ ']，將取代之。', 1,
													'load_named');
										l[i] = initializator[i];
									}

								} else {
									if (l && l.Class)
										library_namespace.warn(
										// 目的基底已有 (l)，將直接以新的 module (id) 取代之。
										'load_named: 將以 ('
										// 未來 extend_to[name] 將代表 (id).
										+ (typeof initializator) + ') [' + id
												+ '] 取代擴充目的基底之同名 module ('
												+ (typeof l) + ') ['
												+ (l.Class || name) + ']。');
									extend_to[name] = initializator;
								}
							}

							if (!('*' in no_extend))
								for (i in initializator) {
									if ((i in no_extend)
											|| extend_to[i] === initializator[i])
										continue;

									if ((i in extend_to)
											&& library_namespace.is_debug())
										library_namespace
												.warn('load_named: 將以 ['
														+ id
														+ '.'
														+ i
														+ '] 取代擴充目的基底之同名 property'
														+ (library_namespace
																.is_debug(2) ? ' ['
																+ extend_to[i]
																+ ']'
																: '') + '。');

									extend_to[i] = initializator[i];
								}
						} else
							library_namespace.debug('跳過擴充 member 之工作。', 5,
									'load_named');

						// 對 name-space 做有必要的操作。
						/**
						 * @see <a
						 *      href="http://developer.51cto.com/art/200907/134913.htm"
						 *      accessdate="2012/12/11 20:51"
						 *      title="JavaScript类和继承：constructor属性 -
						 *      51CTO.COM">JavaScript类和继承：constructor属性</a>
						 */
						if (typeof initializator === 'function') {
							if (!initializator.prototype.constructor)
								initializator.prototype.constructor = initializator;
						}
						if (!initializator.Class)
							initializator.Class = id;

						if (false)
							initializator.toString = function() {
								return '[class ' + name + ']';
							};

						// 設定登記 module 已載入。
						// TODO:
						// 若某 module 很快就 loaded，則剩下的應當亦可很快 loaded。
						// 除非是其他 domain 的。
						declaration.included = true;

					} else {
						if (!error_Object)
							library_namespace.err(error_Object = new Error(
									'load_named: [' + id
											+ '] 之初始設定函式執行成功，但回傳無法處理之值：['
											+ initializator + ']！'));
						declaration.included = false;
						// error callback 僅在每次真正嘗試過後才執行。
						run_callback('error_handler', error_Object);
						if (!item.skip_error)
							return INCLUDE_FAILED;
					}

				} else {

					// ---------------------------------------
					// loading code.
					// TODO: 拆開。

					var file_contents, URL = declaration.URL
							|| library_namespace.get_module_path(id),
					// external_directory_name 下可以放置外部 library/resource files.
					is_external = function(failed) {
						var external = external_RegExp.test(id);
						if (external) {
							declaration.included = !failed;
							library_namespace.debug(
									'由於引用的是 library 外部檔案，自動將之設定為 included '
											+ (declaration.included ? '成功'
													: '失敗') + '。', 5,
									'load_named.is_external');
						}
						return external;
					};

					library_namespace.debug(
							'準備載入 (load) [<a style="color:#ef0;background-color:#018;" href="'
									+ encodeURI(URL) + '">' + id + '</a>]。', 5,
							'load_named');

					// ---------------------------------------
					// loading code: 採用循序/依序執行的方法。

					if (!library_namespace.env.same_origin_policy
							&& /\.js$/i.test(URL))
						try {
							// 對 .js 先試試 .get_file()。
							file_contents = library_namespace.get_file(URL);
							if (library_namespace.is_debug(2)
									&& library_namespace.is_WWW())
								if (typeof file_contents === 'string')
									library_namespace.debug('取得檔案內容: (' +
									//
									file_contents.length + ' bytes) ['
									//
									+ file_contents.slice(0, 200)
									//
									.replace(/ /g, '&nbsp;')
									//
									.replace(/\n/g, '<br />') + ']'
									//
									+ (file_contents.length > 200 ? '..' : ''),
											5, 'load_named');
							if (file_contents) {
								// 對 cscript/wscript，若 /^var variable =
								// /.test(file_contents)，會造成 global 無法設定此
								// variable。
								if (library_namespace.script_host
										//
										&& typeof library_namespace.pre_parse_local_code === 'function')
									file_contents = library_namespace
											.pre_parse_local_code(
													file_contents, URL, id);

								if (is_nodejs)
									// Node.js 有比較特殊的 global scope 處理方法。
									eval(file_contents);
								else
									// eval @ global. 這邊可能會出現 security 問題。
									// TODO: do not use eval. 以其他方法取代 eval 的使用。
									library_namespace.eval_code(file_contents);
								// release. 早點 delete 以釋放記憶體空間/資源。
								file_contents = !!file_contents;
								if (!declaration.module)
									declaration.included = true;

							} else {
								declaration.included = false;
								library_namespace.warn('Get no result from ['
										+ id + ']! Some error occurred?');
							}

							// 以 .get_file() 成功依序載入結束。
							if (!('included' in declaration) && !is_external())
								library_namespace
										.warn('load_named: 雖已處理完 [<a href="'
												+ encodeURI(URL)
												+ '">'
												+ id
												+ '</a>] ，但程式碼並未使用所規範的方法來載入，導致 included flag 未被設定！');

							if (declaration.included) {
								library_namespace.debug(
										'已 include [<a href="' + encodeURI(URL)
												+ '">' + id + '</a>]。', 5,
										'load_named');
								return PROCESSED;
							}

							// Date.now();
							declaration.last_call = new Date();

							// error callback 僅在每次真正嘗試過後才執行。
							run_callback('error_handler');
							if (!item.skip_error)
								return INCLUDE_FAILED;

						} catch (e) {

							// 若為 local，可能是因為瀏覽器安全策略被擋掉了。
							if (!library_namespace.is_local()
									|| library_namespace.is_debug(2)) {
								// http://www.w3.org/TR/DOM-Level-2-Core/ecma-script-binding.html
								// http://reference.sitepoint.com/javascript/DOMException
								if (library_namespace
										.is_type(e, 'DOMException')
										&& e.code === 1012) {
									library_namespace
											.err('load_named:\n'
													+ e.message
													+ '\n'
													+ URL
													+ '\n\n程式可能呼叫了一個'
													+ (library_namespace
															.is_local() ? '不存在的，\n或是繞經上層目錄'
															: 'cross domain')
													+ '的檔案？\n\n請嘗試使用相對路徑，\n或 call .run()。');
								} else if (
								// 系統找不到指定的資源/存取被拒。
								library_namespace.is_type(e, 'Error')
										&& (e.number & 0xFFFF) === 5
										|| library_namespace.is_type(e,
												'XPCWrappedNative_NoHelper')
										&& ('' + e.message)
												.indexOf('NS_ERROR_FILE_NOT_FOUND') !== NOT_FOUND) {
									if (library_namespace.is_debug())
										library_namespace
												.err('load_named: 檔案可能不存在或存取被拒？\n['
														+ URL
														+ ']'
														+ (library_namespace.get_error_message ? ('<br />' + library_namespace
																.get_error_message(e))
																: '\n'
																		+ e.message));
								} else if (library_namespace.is_debug())
									library_namespace
											.err('load_named: Cannot load [<a href="'
													+ encodeURI(URL)
													+ '">'
													+ id
													+ '</a>]!'
													+ (library_namespace.get_error_message ? ('<br />'
															+ library_namespace
																	.get_error_message(e) + '<br />')
															: '\n['
																	+ (e.constructor)
																	+ '] '
																	+ (e.number ? (e.number & 0xFFFF)
																			: e.code)
																	+ ': '
																	+ e.message
																	+ '\n')
													+ '抱歉！在載入其他網頁時發生錯誤，有些功能可能失常。\n重新讀取(reload)，或是過段時間再嘗試或許可以解決問題。');
							}

							// 不能直接用 .get_file()，得採用異序(asynchronously,不同時)的方式載入。
							library_namespace.debug(
									'Cannot load [' + id
											+ ']! 以 .get_file() 依序載入的方法失敗：'
											+ e.message, 2, 'load_named');

							// 除非為 eval 錯誤，否則不設定 .included。
							if (!library_namespace.env.same_origin_policy) {
								// 執行 code 時出問題。
								declaration.included = false;
								// error callback 僅在每次真正嘗試過後才執行。
								run_callback('error_handler', e);
								if (!item.skip_error)
									return INCLUDE_FAILED;
							}
						}

					// ---------------------------------------
					// loading code: 循序/依序執行的方法失敗，採用異序(asynchronously,不同時)的方式載入。

					// 若之前已嘗試取得過 code，則即使失敗也不再使用異序(asynchronously,不同時)的方式載入。
					if (!file_contents)
						if (library_namespace.is_WWW()) {
							// 動態載入 / Dynamic Loading / Including other
							// JavaScript/CSS
							// files asynchronously.
							// TODO: http://headjs.com/#theory
							// http://code.google.com/apis/ajax/documentation/#Dynamic
							// http://en.wikipedia.org/wiki/Futures_and_promises

							var type = declaration.type, use_write = item.use_write, node, timeout_id = 'L',
							//
							clean = function(failed) {
								if (timeout_id !== 'L')
									clearTimeout(timeout_id);
								timeout_id = 0;
								onload = null;

								if (type === 'js')
									// callback 完自動移除 .js。
									// 隨即移除會無效。
									// 移除 .css 會失效。
									setTimeout(function() {
										document_head.removeChild(node);
										node = null;
									}, 0);

								try {
									delete node.onload;
								} catch (e) {
									// error on IE5–9: Error: "Object
									// doesn't support this action".
									node.onload = null;
								}
								try {
									delete node.onreadystatechange;
								} catch (e) {
									// error on IE5–9: Error: "Object
									// doesn't support this action".
									node.onreadystatechange = null;
								}

								// 有可能本次載入失敗，但之前已成功過；
								// 這情況下不設定 declaration.included。
								if (!declaration.included) {
									if (!declaration.module)
										// 為 URL/path，只要載入就算成功。
										declaration.included = !failed;
									else if (!is_external(failed))
										if (failed)
											// 載入卻沒設定 included，算失敗。
											declaration.included = false;
										else if (!declaration.variable_hash) {
											library_namespace.warn(
											//
											'load_named: [<a href="'
											//
											+ encodeURI(URL) + '">' + id
											//
											+ '</a>] 的程式碼似乎並未使用所規範的方法來載入？');
											// IE 8 中，當測試不存在的檔案時，
											// 會藉 .readyState ===
											// 'complete'，執行到這邊。
											// 因此除了藉由載入時間，無法分辨檔案到底存不存在。
											declaration.included = UNKNOWN;
										} else if (library_namespace
												.is_debug(2))
											library_namespace
													.warn('load_named: 未能直接載入 (load) ['
															+ id
															+ ']！可能因為 code 還有其他未能掌控，且尚未載入的相依性。');

									if (('included' in declaration)
											&& !declaration.included)
										// error callback 僅在每次真正嘗試過後才執行。
										// 預防還有沒處理的 error callback。
										run_callback('error_handler');
								}

								if ((declaration.included || item.skip_error)
								// 若無 callback 就少耗點資源，別再 call load_named() 了。
								&& declaration.callback
										&& declaration.callback.size > 0)
									// module 若設定了 included 時，
									// 回調/回撥函式應該由 named source code 本身收拾。
									// 這邊不做處理。
									//
									// 這邊呼叫 load_named() 主要是為了利用 load_named()
									// 最後收尾程序的部分。
									load_named(item, options, caller);
							},
							//
							onload = function(e) {
								var r;
								// navigator.platform === 'PLAYSTATION 3' 時僅用
								// 'complete'? from requireJS
								if (timeout_id
										&& (!(r =
										// 'readyState' in this ?
										// this.readyState : e.type !== 'load'
										this.readyState) || r === 'loaded' || r === 'complete'))
									clean();
							};

							try {
								if (type) {
									if (typeof type === 'string')
										type = type.toLocaleLowerCase();
								} else if (type = URL.match(/[^.\\\/]+$/))
									type = type[0].toLocaleLowerCase();

								if (!(node = tag_of_type[type])) {
									library_namespace.warn('無法判別 [' + id
											+ '] 之類型!');
									throw 1;
								}

								if (use_write || type !== 'js'
										&& type !== 'css')
									throw 0;

								// HTML5: document.head ===
								// document.getElementsByTagName('head')[0]
								if (document_head === undefined) {
									if (!(document_head = document.head
											|| document
													.getElementsByTagName('head')[0]))
										(document.body.parentNode || document.body)
												.appendChild(document_head = document
														.createElement('head'));
									if (!document_head)
										document_head = null;
								}
								if (!document_head) {
									library_namespace
											.warn('無法判別 tag &gt;head>!');
									throw 2;
								}

								// TODO: use document.createElementNS()
								// TODO:某些舊版 Firefox 使用 createElement('script')
								// 不被接受，因此可能需要用寫的。
								node = document.createElement(node);
								node.width = node.height = 0;

								// http://www.developer.nokia.com/Community/Wiki/JavaScript_Performance_Best_Practices
								// ** onload 在 local 好像無效?
								// TODO:
								// http://www.xdarui.com/articles/66.shtml
								// 使用 attachEvent 註冊事件，然後用
								// detachEvent。在ie6上就算把onreadystatechange重置為null了，但只是把引用給斷開了，而回調還存在內存之中，只是無法訪問了而已，有可能造成內存的溢出。
								node.onload = node.onreadystatechange = onload;

								switch (type) {
								case 'js':
									node.type = 'text/javascript';
									/**
									 * TODO:<br />
									 * see jquery-1.4a2.js: globalEval<br />
									 * if (is_code) s.text = path;<br />
									 * 
									 * http://www.lampblog.net/2010/12/html5%E4%B8%ADscript%E7%9A%84async%E5%B1%9E%E6%80%A7%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BDjs/<br />
									 * 如果 async 屬性為
									 * true，則腳本會相對於文檔的其餘部分異步執行，這樣腳本會可以在頁面繼續解析的過程中來執行。<br />
									 * 如果 async 屬性為 false，而 defer 屬性為
									 * true，則腳本會在頁面完成解析時得到執行。<br />
									 * 如果 async 和 defer 屬性均為
									 * false，那麼腳本會立即執行，頁面會在腳本執行完畢繼續解析。<br />
									 * 
									 * http://www.cnblogs.com/darrel/archive/2011/08/02/2124783.html<br />
									 * 當script的 async 屬性被置為 true
									 * 時，腳本的執行序為異步的。即不按照掛載到 Dom 的序順執行 ，相反如果是
									 * false 則按掛載的順序執行。<br />
									 */
									node.async = true;
									// node.setAttribute('src', URL);
									node.src = URL;
									// timeout for giving up.
									if (options.timeout > 0)
										timeout_id = setTimeout(function() {
											// 失敗！
											if (!options.skip_error
													|| library_namespace
															.is_debug())
												library_namespace.warn([
														'load_named: ',
														{
															T : 'Load failed'
														},
														' (',
														{
															T : 'timeout'
														},
														' ' + options.timeout
																+ ' ms): ['
																+ id + ']' ]);
											clean(true);
										}, options.timeout);
									break;
								case 'css':
									node.type = 'text/css';
									// .css 移除會失效。
									// CSS 不設定 timeout。
									// node.media = 'all',//'print'
									node.rel = 'stylesheet';
									// https://developer.mozilla.org/en-US/docs/HTML/Element/link#Stylesheet_load_events
									node.onerror = onload;
									node.href = URL;
									break;

								default:
								}

								// 在 IE 10 中，當 .appendChild() 時，
								// 會先中斷，執行所插入 node 的內容。
								// 因此必須確保在 .appendChild() 前，便已設定好 callback！
								if (caller)
									declaration.callback.add(caller);

								/**
								 * from jquery-1.4a2.js:<br />
								 * Use insertBefore instead of appendChild to
								 * circumvent an IE6 bug when using globalEval
								 * and a base node is found.<br />
								 * This arises when a base node is used (#2709).<br />
								 * 
								 * 不過這會有問題: 後加的 CSS file 優先權會比較高。因此，可以的話還是用
								 * appendChild。
								 * 
								 * @see http://github.com/jquery/jquery/commit/d44c5025c42645a6e2b6e664b689669c3752b236<br />
								 */
								if (false)
									document_head.insertBefore(node,
											document_head.firstChild);
								if (false)
									document_head.parentNode.insertBefore(node,
											document_head);
								document_head.appendChild(node);

								// TODO: This is a ugly hack/workaround.
								if (no_sheet_onload && type === 'css') {
									var test_img = document
											.createElement('img');
									test_img.onerror = function() {
										onload && onload.call(this);
										test_img = null;
									};
									test_img.src = URL;
								}

								declaration.last_call = new Date();

								library_namespace.debug('[' + declaration.id
										+ ']: need asynchronous. 登記完後直接休眠。', 5,
										'load_named');

								// 因無法即時載入，先行退出。
								return INCLUDING;

							} catch (e) {
								if (typeof e !== 'number') {
									declaration.callback['delete'](caller);
									library_namespace.err(e);
								}
								use_write = true;
							}

							if (use_write
							// && TODO: 正在 load 頁面
							) {
								if (library_namespace.is_debug(2)
										&& library_namespace.is_WWW())
									library_namespace
											.debug('直接寫入，Writing code for ['
													+ URL + '].');

								if (!library_namespace.onload_queue)
									library_namespace.onload_queue = [];
								var onload = library_namespace.onload_queue.length, encode_URL = encodeURI(URL);
								// TODO: Not Yet Tested! test callback..
								library_namespace.onload_queue[onload] = function() {
									clean();
								};
								onload = ' onload="' + library_namespace.Class
										+ '.onload_queue[' + onload + ']()"';

								// TODO: 若在 window.onload 之後使用會清空頁面!
								document
										.write(type === 'js' ? '<script type="text/javascript" src="'
												+ encode_URL
												// language="JScript"
												+ '"' + onload + '><\/script>'
												: type === 'css' ?
												// TODO: security concern: 對
												// path 作 filter。
												'<link type="text/css" rel="stylesheet" href="'
														+ encode_URL + '"'
														+ onload + '><\/link>'
												//
												: '<img src="' + encode_URL
														+ '" />');
							}

						} else if (library_namespace.is_debug(2)) {
							library_namespace.warn(
							// 誤在非 HTML 環境執行，卻要求 HTML 環境下的 resource？
							'load_named: No method availed!'
									+ ' 沒有可以載入 resource 的方法！');
						}

					if (!declaration.included)
						library_namespace.warn(
						//
						'load_named: 載入 [' + id + '] 失敗！');
				}

				// force 僅使用一次。
				// delete item.force;

			} else
				library_namespace.debug('之前已處理過 [' + id + '] 之載入程序：'
						+ (declaration.included ? '成功' : '無法') + '載入。', 5,
						'load_named');

			// ---------------------------------------
			// 最後收尾程序。
			if (declaration.included || item.skip_error
			//
			|| options.finish_only) {

				if (options.finish_only) {
					if (library_namespace.is_debug(2)
							&& library_namespace.is_WWW())
						library_namespace.debug('[' + id
								+ '].finish() 已執行完畢。執行回調/回撥函式…', 5,
								'load_named');
				} else {
					// TODO: 將 callback 納入 dependency chain。
					if (library_namespace.is_debug(2)
							&& library_namespace.is_WWW())
						library_namespace.debug('[' + id + '] 已'
								+ (declaration.included ? '成功' : '')
								+ '載入完畢。執行回調/回撥函式…', 5, 'load_named');

					// force 僅使用一次。
					// if (is_controller(item) && item.force) delete item.force;

					// 初始設定函式本身定義的 callback 應該先執行。
					if (run_callback('finish',
					// 傳入 module name space。
					library_namespace.value_of(id), waiting)) {
						if (library_namespace.is_debug(2)
								&& library_namespace.is_WWW())
							library_namespace.debug('[' + id
									+ '].finish() 需要 waiting。等待其執行完畢…', 5,
									'load_named');
						// 因無法即時載入，先行退出。
						return INCLUDING;
					}
				}

				run_callback('callback',
				// 傳入 id。
				id);

				if (library_namespace.is_debug(2) && library_namespace.is_WWW())
					library_namespace.debug('[' + id
							+ '] 之善後/收尾工作函式已執行完畢，清除 cache/stack…', 5,
							'load_named');
				// release. 早點 delete 以釋放記憶體空間/資源。
				// 預防出現問題，如 memory leak 等。
				delete declaration.code;
				delete declaration.finish;
				delete declaration.last_call;
				delete declaration.require_resource;
				delete declaration.variable_hash;
				// delete declaration.use;

				// TODO: destroy item。

				// declaration.status = PROCESSED;
				if (!declaration.included)
					return INCLUDE_FAILED;

			} else if ('included' in declaration) {
				// error callback 僅在每次真正嘗試過後才執行。
				// 這邊不再 run_callback('error_handler');
				return INCLUDE_FAILED;

			} else if (library_namespace.is_debug(2)
					&& library_namespace.is_WWW())
				library_namespace
						.debug(
								'module ['
										+ module
										+ '] is <b>NOT YET</b> loaded。通常為 module code 或呼叫 code 之問題。',
								2, 'load_named');

			library_namespace.debug('[' + id + '] 處理完畢。', 5, 'load_named');
			return PROCESSED;
		}

		// ---------------------------------------------------------------------//

		/**
		 * module_declaration.
		 */
		var named_code_declaration = {
			/**
			 * 本 module 之 module name/id。<br />
			 * TODO: 不設定時會從呼叫時之 path 取得。
			 * 
			 * @type String
			 * @constant
			 * @inner
			 * @ignore
			 */
			name : 'module name',

			// dependency. function name, module name.
			require : 'module.function_name|module_name.',

			/**
			 * 執行成功後，最後階段收拾善後/收尾工作之函式。post action.<br />
			 * 可處理在 module setup/設定 時尚無法完成的工作，例如 including external resources。
			 * 
			 * 因為需要經過特別處理，本設定不可直接匯入！
			 */
			finish : function(name_space, waiting) {
				// in this scope, this === declaration;
				return waiting;
			},
			/**
			 * 執行失敗後之異常/例外處理函式。<br />
			 * error handler, errorcallback, callback on error.<br />
			 * 
			 * 因為需要經過特別處理，本設定不可直接匯入！
			 */
			// error_handler : function(error_Object) { this === declaration; },
			/**
			 * 擴充目的基底。extend to what name-space。<br />
			 * 預設 extend 到哪個 name space。<br />
			 * 
			 * 若有設定，但不為真值，則完全不 extend。
			 * 
			 * 因為需要經過特別處理，本設定不可直接匯入！
			 */
			// extend_to : '',
			/**
			 * 不 extend 到 extend_to 下的 member (property, method) 列表。<br />
			 * '*': 不 extend 所有 member.<br />
			 * this: 連 module 本身都不 extend 到 extend_to 下。
			 * 
			 * @type String
			 * @type Array
			 * @ignore
			 */
			no_extend : 'this,*,no_extend_member',

			/**
			 * 初始設定函式。<br />
			 * 欲 include 整個 module 時，需囊括之 source code。
			 * 
			 * @param {Function}library_namespace
			 *            namespace of library. 通常即 CeL。<br />
			 *            亦可以 this.base 取得。
			 * 
			 * @type Function
			 */
			code : function(library_namespace) {
				/**
				 * full module name.
				 * 
				 * @type {String}
				 */
				var module_name = this.id,
				/**
				 * 呼叫初始設定函式時，採用之初始設定 options/arguments。
				 */
				load_option = this.load_option,
				/**
				 * 預先宣告本模組需要用到的變數名稱。<br />
				 * list of dependency function/module/variable required.<br />
				 * module 須以 CeL.env.module_name_separator ('.') 結尾。<br />
				 * 若輸入 String，則以 (TODO:separator 或) '|' 分割。
				 * 
				 * @type {Array|String}
				 * 
				 * @see parse_require()
				 */
				required_function;
				// 初始設定本模組需要用到的變數。
				eval(this.use());

				// or..
				// nothing required.
				// 本 module 為許多 module 所用，應盡可能勿 requiring 其他 module。

				// 宣告暴露到外部的變量和函數。
				var to_export = function() {
					// null module constructor
				};

				var private_value = 1;
				function get_value() {
					return private_value;
				}

				to_export.method = function() {
					required_function(1, 2, 3);
				};

				// for inherit.
				to_export.grant = function(subclass) {
				};

				// 收尾工作。
				this.finish = function(name_space, waiting) {
					// in this scope, this === declaration;
				};

				return to_export;
			}
		};

		// 本段落接下來為 comments.
		if (false) {
			var named_code_declaration_auto_filled = {

				// 執行完後 callback 原先的執行緒/function。
				callback : new Set,

				// 以下在 setup named source code 時設定。
				base : CeL,
				// for import.
				use : use_function,
				URL : 'path',

				// 載入後設定。
				status : 'included, failed,..',
				included : false
			};

			// code style @_named_code_.js.

			// 'use strict';

			// 若 library base 尚未 load 或本 module 已經 loaded，
			// 則預設會跳過載入。
			typeof CeL === 'function' && CeL.run(named_code_declaration);

			//
			// 載入 module 之方法。
			code.call(module_declaration);
			// release. 早點 delete 以釋放記憶體空間/資源。
			// 預防出現問題，如 memory leak 等。
			delete module_declaration.code;
			delete module_declaration.finish;

			//
			// inherit inside children code.
			var children = parent_code.grant();
		}

		// ---------------------------------------------------------------------//

		/**
		 * 是否為 check_and_run 之 controller。
		 * 
		 * @constant
		 * @private
		 * @inner
		 * @ignore
		 */
		var is_controller = library_namespace.is_Object;

		var
		/**
		 * 可允許被複製的 options。預防不該出現的也被複製了。<br />
		 * 
		 * @constant
		 * @private
		 * @inner
		 * @ignore
		 */
		check_and_run_options = {
			/**
			 * 欲 include 之 module name/id。
			 * 
			 * @type String
			 */
			name : 'module name',
			/**
			 * 欲 include 之 URL/path。
			 * 
			 * @type String
			 */
			URL : 'URL/path',
			/**
			 * not parallel.<br />
			 * Array 之預設 options 為平行處理。
			 * 
			 * @type Boolean
			 */
			sequential : '循序/依序執行',
			/**
			 * 載入 resource 之時間限制 (millisecond)。
			 * 
			 * @type Integer
			 */
			timeout : '載入 resource 之時間限制。',
			/**
			 * 呼叫初始設定函式時，採用之初始設定 options/arguments。
			 */
			load_option : '呼叫初始設定函式時，採用之初始設定 options/arguments。',
			/**
			 * 保證上次 item 執行至此次 item 一定會等超過這段時間 → change .start_time。 TODO
			 * 
			 * @type Integer
			 */
			interval : '時間間隔',
			/**
			 * resource 之 type: 'js', 'css', 'img'.<br />
			 * 未設定則由 extension 自動判別。
			 * 
			 * @type String
			 */
			type : 'MIME type',
			/**
			 * use document.write() instead of insert a element to <head>.
			 * 
			 * @type Boolean
			 */
			use_write : 'use document.write()',
			/**
			 * option 之作用方法。有 'once', 'reset'。
			 * 
			 * @type String
			 */
			operate : 'option 之作用方法。',
			/**
			 * 強制重新加載當前文檔。
			 * 
			 * @type Boolean
			 */
			force : "force reload even it's included.",
			/**
			 * 忽略所有錯誤。<br />
			 * ignore error.
			 * 
			 * @type Boolean
			 */
			skip_error : 'NO stop on error'
		};

		// 全 library 共用之相依關係。這會在外部資源以 .run() 載入時登錄。
		// 因為外部資源的載入除了本身的註記外無法探知。
		// var relation_map = new dependency_chain;

		// ---------------------------------------------------------------------//

		/**
		 * 主要處理程序之內部 front end。<br />
		 * TODO: 為求相容，不用 .bind()。
		 * 
		 * @param {Array}initial_Array
		 *            初始設定 items.
		 * @param {Object}options
		 *            初始設定 options.
		 * @returns {check_and_run}
		 */
		function check_and_run(initial_Array, options) {
			// initialization. 初始化工作。
			this.status = new Map;
			// 紀錄 **正在 load** 之 sequence 所需之 dependency list。
			this.relation_map = new dependency_chain;
			this.run = check_and_run_run.bind(this);

			if (library_namespace.is_debug()) {
				check_and_run.count = (check_and_run.count || 0) + 1;
				var debug_id = 'check_and_run<b style="color:#d42;background-color:#ff4;">['
						+ check_and_run.count
						+ ': %/'
						+ initial_Array.length
						+ ']</b>';
				if (has_native_Object_defineProperty)
					Object.defineProperty(this, 'debug_id', {
						// enumerable : false,
						// configurable : false,
						get : function() {
							return debug_id.replace(/%/,
									this.relation_map.relations.size);
						}
					});
				else
					this.debug_id = debug_id;
				if (library_namespace.is_debug(5))
					library_namespace.log(this.debug_id + ': 初始登記：('
							+ initial_Array.length + ') [' + initial_Array
							+ ']。');
			}

			// 設定好 options。
			this.set_options(options, true);

			this.register(initial_Array);
		}

		/**
		 * use strict mode.<br />
		 * 這得要直接貼在標的 scope 內才有用。
		 */
		function use_strict() {
			var v, i = 0;
			try {
				// find a undefined variable name.
				for (;;)
					eval(v = 'tmp_' + i++);
			} catch (i) {
			}

			try {
				// OK 表示在 eval 中可以設定 var.
				// 若是 'use strict'; 則不可在 eval() 中置新 var.
				eval(v + '=1;delete ' + v);
				return false;
			} catch (i) {
			}
			return true;
		}

		/**
		 * module 中需要 include function/module/variable 時設定 local variables 使用。<br />
		 * 本函數將把所需 function extend 至當前 namespace 下。
		 * 
		 * TODO: auto test strict.
		 * 
		 * @example <code>
		 * //	requires (inside module)
		 * //	事先定義 @ 'use strict';
		 * var split_String_to_Object;
		 * //	之所以需要使用 eval 是因為要 extend 至當前 namespace 下。
		 * //	若無法 load CeL.data，將會 throw
		 * eval(this.use());
		 * //	use it
		 * split_String_to_Object();
		 * 
		 * //TODO
		 * //	不用 eval 的方法 1: function 預設都會 extend 至當前 library_namespace 下。
		 * library_namespace.use_function(this, 'data.split_String_to_Object');
		 * library_namespace.use_function(this, 'data.split_String_to_Object', false);
		 * //	若無法 load CeL.data，將會 throw
		 * //	use it
		 * library_namespace.split_String_to_Object();
		 * 
		 * //TODO
		 * //	不用 eval 的方法 2: 設定 extend_to
		 * var o={};
		 * //	若無法 load CeL.data，將會 throw
		 * library_namespace.use_function(this, 'data.split_String_to_Object', o);
		 * //	use it
		 * o.split_String_to_Object();
		 * </code>
		 * 
		 * @param {Function|Object}extend_to
		 *            把 variable extend 至 name-space extend_to
		 * 
		 */
		function use_function(extend_to, no_strict) {
			if (!is_controller(this)) {
				library_namespace.err('No "this" binded!');
				return '';
			}

			if (no_strict)
				no_strict = [];

			var eval_code = [], variable_name, value, full_name,
			/**
			 * 要 extend 到 extend_to 下的 variables。<br />
			 * function/module/variable required.<br />
			 * 
			 * variable_hash[variable name] = variable full name, <br />
			 * 包括所在 module name。
			 * 
			 * @see check_and_run_normalize()
			 */
			variable_hash = this.variable_hash;

			if (library_namespace.is_Object(variable_hash)) {
				for (variable_name in variable_hash) {
					value = library_namespace
							.value_of(full_name = variable_hash[variable_name]);
					if (extend_to) {
						extend_to[variable_name] = value === undefined ? this.load_later
								.bind(full_name)
								: value;
					} else {
						no_strict && no_strict.push(variable_name);
						eval_code.push('try{' + variable_name + '='
								+ (value === undefined ?
								// 有些 module 尚未載入。
								// 可能因為循環參照(circular dependencies)，
								// 事實上 required 並未 loaded。
								'this.load_later.bind("' + full_name + '")' :
								/**
								 * escaped variable name.<br />
								 * 預防有保留字，所以用 bracket notation。 <br />
								 * 例如 Chrome 中會出現 'Unexpected token native'。
								 * 
								 * @see <a
								 *      href="http://www.dev-archive.net/articles/js-dot-notation/"
								 *      accessdate="2012/12/14 22:58">Dot
								 *      Notation and Square Bracket Notation in
								 *      JavaScript</a>
								 */
								full_name.replace(/\.([a-z\d_]+)/gi, '["$1"]'))
								// throw 到這邊，較可能是因為尚未定義 variable_name。
								// 因此不再嘗試用 load_later。
								+ ';}catch(e){}');
					}
				}
			}

			// 應注意 module_name 為保留字之類的情況，會掛在這邊 return 後的 eval。
			return extend_to
					|| (Array.isArray(no_strict) && no_strict.length > 0 ? 'var '
							+ no_strict.join(',') + ';'
							: '') + eval_code.join('');
		}

		/**
		 * 正規化之前置作業:用於將 item 全部轉為 {Object} controller。
		 * 
		 * @param item
		 *            正規化此 item。
		 * 
		 * @returns 正規化後之 item。
		 */
		function check_and_run_normalize(item) {

			if (item === PARALLEL || item === SEQUENTIAL)
				item = item === SEQUENTIAL;

			var name;

			switch (typeof item) {

			case 'boolean':
				return {
					// 循序/依序執行, one by one. in order / sequentially.
					// successively.
					sequential : item
				};

			case 'number':
				return {
					timeout : item > 0 ? item | 0 : 0
				};

			case 'function':
				// 注意:對 function 有特殊行為，
				// 不 return {Object} controller。
				return item;

			case 'string':
				// 包括 module/URL/path/變數/數值名。
				if (is_controller(name = get_named(item))
						|| typeof name === 'function')
					return name;
				name = undefined;
				break;

			case 'object':
				if (name = is_controller(item)
						&& (item.id || item.name || item.URL)) {
					// 測試是否處於 named source code 中。 item.code 為程式碼(function)。
					// 即使不處於 named source code 中，也應該是有特殊 option 的設定塊。
					// 因此還是得過個 get_named() 正規化一下 .id。
					var is_setup_declaration = typeof item.code === 'function',
					//
					declaration = get_named(name, item);

					if (declaration) {
						if (is_setup_declaration)
							return (declaration.force || !('included' in declaration)) ? parse_require(declaration)
									: declaration;
						library_namespace.debug('正規化載入 id [' + declaration.id
								+ '] 的 controller。', 5,
								'check_and_run_normalize');
						// 將 declaration.{id,name,URL} copy 至 item。
						if (false)
							library_namespace.extend({
								id : 1,
								name : 1,
								URL : 1
							}, item, declaration, 'string');
						library_namespace.set_method(item, declaration, [
								function(key) {
									return typeof declaration[key] !== 'string'
								}, 'id', 'name', 'URL' ]);
					}
				}

			}

			// Array.isArray() 的頻率最高。
			if (Array.isArray(item) || name)
				return item;

			// 其他都將被忽略!
			if (item)
				library_namespace
						.warn('check_and_run.normalize: Unknown item: ('
								+ (typeof item) + ') [' + item + ']!');

		}

		/**
		 * 預設 options。
		 */
		check_and_run.options = {
			// default timeout (millisecond) after options.interval.
			// 若短到 3s， 在大檔案作 auto_TOC() 會逾時。
			timeout : library_namespace.is_local() ? 20000 : 60000
		};

		/**
		 * 設定功能選項。
		 * 
		 * @param {Object}options
		 *            功能選項。
		 * @param {Boolean}reset
		 *            是否重置功能選項。
		 */
		function check_and_run_set_options(options, reset) {
			if (reset)
				Object.assign(this.options = null_Object(),
						check_and_run.options);

			if (library_namespace.is_Object(options)) {
				if (false)
					library_namespace.extend(check_and_run_options,
							this.options, options);

				// TODO: .extend() 預設會 overwrite check_and_run_options.*。
				var i, this_options = this.options;
				for (i in options)
					if (i in check_and_run_options)
						this_options[i] = options[i];
			}
		}

		/**
		 * 登記/注冊整個 array 之元素與相依性。<br />
		 * 增加項目至當前的工作組。
		 * 
		 * @param {Array}array
		 *            欲注冊之 Array。
		 * 
		 * @returns {Number} status.
		 */
		function check_and_run_register(array, previous) {

			// library_namespace.assert(Array.isArray(array));

			// 因為可能動到原 Array，因此重製一個。
			// array = Array.prototype.slice.call(array);
			// 若是在後面還出現與前面相同的元素，則可能造成循環參照(circular dependencies)，此時僅取前面一個相依姓，。
			// array = (new Set(array)).values();

			var i = 0, j, length = array.length, sequential, item, next = array, something_new, relation_map = this.relation_map, status = this.status, _this = this;
			if (length === 0) {
				status.set(array, PROCESSED);
				if (previous !== undefined)
					// 需登記相依性之 array。
					relation_map.add(previous, array);
				return PROCESSED;
			}
			if (status.get(array) === PROCESSED)
				return PROCESSED;

			for (; i < length; i++)
				// 正規化 arguments。
				if ((item = check_and_run_normalize(array[i]))
						&& status.get(item) !== PROCESSED) {

					if (Array.isArray(item)) {
						if (item.length === 0
								|| _this.register(item, previous) === PROCESSED)
							continue;
					} else if (typeof item !== 'function'
							&& (!is_controller(item) || ('included' in item)
									&& !item.force))
						continue;

					if (!is_controller(item) || item === array[i])
						// 若輸入的是純量 option，會造成每次都創建新的 Object。
						// 這會讓此 Array 總是有 something_new。
						something_new = true;

					if (previous !== undefined)
						// 需登記相依性之 array 至 relation map。
						relation_map.add(previous, item);

					// 在中途設定執行次序(running sequence)。
					if (is_controller(item) && ('sequential' in item)
							&& sequential !== (j = !!item.sequential))
						if (sequential = j)
							library_namespace.debug('自 ' + (i + 1) + '/'
									+ length
									+ ' 起依序載入：將元素一個接一個，展開至 relation map。', 5,
									this.debug_id + '.register');
						else {
							// 找出下一個所有平行載入元素都載入完後，才能開始的元素。
							j = i;
							while (++j < length)
								// TODO: cache.
								if (is_controller(next = check_and_run_normalize(array[j]))
										&& next.sequential)
									break;
							if (j === length)
								next = array;
							library_namespace.debug((i + 1) + '-' + j + '/'
									+ length + ' 平行載入：所有 ' + (j - i)
									+ ' 個元素皆 loaded 之後，才算是處理完了 Array。', 5,
									this.debug_id + '.register');
						}

					if (sequential)
						previous = item;
					else
						relation_map.add(item, next);
				}

			if (!something_new)
				// 沒東西。skip.
				return PROCESSED;
			else if (sequential)
				relation_map.add(previous, array);
		}

		/**
		 * check_and_run 之實際載入程序。
		 * 
		 * @returns {Number} status.
		 */
		function check_and_run_run() {
			var item, relation_map = this.relation_map;

			// 解決庫存的工作：
			// 開始測試是否有獨立 object 可直接處理/解決。
			// 對每一項都先找出獨立不依賴它者的，先處理。
			while ((item = relation_map.independent()) || item === 0) {
				// 開始處理當前的 item。

				// 所有加入 relation_map 的應該都已經 normalize 過。
				// item = check_and_run_normalize(item);

				if (typeof item === 'function') {
					library_namespace.debug(
							'直接執行 function ['
									+ (library_namespace
											.get_function_name(item) || item)
									+ ']。', 5, this.debug_id + '.run');
					if (library_namespace.env.no_catch)
						// 當 include 程式碼，執行時不 catch error 以作防範。
						item();
					else
						try {
							// TODO: 可否加點 arguments?
							item();
						} catch (e) {
							library_namespace
									.err('check_and_run.run: Error to run function: '
											+ e.message);
							library_namespace.debug('<code>'
									+ ('' + item).replace(/</g, '&lt;')
											.replace(/\n/g, '<br />')
									+ '</code>', 5, this.debug_id + '.run');
							return INCLUDE_FAILED;
						}

				} else if (Array.isArray(item)) {
					library_namespace.debug('登記 Array(' + item.length + ') ['
							+ item + ']。', 5, this.debug_id + '.run');
					if (this.register(item) !== PROCESSED)
						// 不清除。繼續處理 Array。
						item = null;

				} else if (is_controller(item)) {
					library_namespace.debug('處理 controller [' + item.id + ']。',
							5, this.debug_id + '.run');

					// import controller.
					// 先處理 options 再載入。
					var options = this.options;
					if (item.operate === 'once')
						options = item;
					else
						this.set_options(item, item.operate === 'reset');

					if (item.id)
						// 若是已處理過則跳過。
						// 因為 item 不一定為 named_code[] 之 declaration，因此只能以
						// is_included() 來判別是否 included。
						if (!item.force && is_included(item.id) !== undefined) {
							library_namespace.debug(
									(is_included(item.id) ? '已經 included'
											: '之前曾 include 失敗')
											+ ': [' + item.id + ']!', 5,
									this.debug_id + '.run');
						} else {
							if (library_namespace.is_debug(2)
									&& library_namespace.is_WWW())
								library_namespace.debug('嘗試'
										+ (is_included(item.id) ? '重新' : '')
										+ '載入 '
										+ (item.module ? 'module' : 'resource')
										+ ' [' + item.id + ']。', 5,
										this.debug_id + '.run');
							// include module/URL resource.
							var result = load_named(item, options, this.run);
							// force 僅使用一次。預防已經重複處理。
							if (item.force)
								delete item.force;
							if (result === INCLUDING) {
								if (false)
									// 在 IE 10 中，當 .appendChild() 時，
									// 會先中斷，執行所插入 node 的內容。
									// 因此必須確保在 .appendChild() 前，便已設定好 callback！
									item.callback.add(this.run);

								// item.status = INCLUDING;

								library_namespace.debug('正等待 loading ['
										+ item.id
										+ '] 中。推入排程開始蟄伏，waiting for callback。',
										5, this.debug_id + '.run');
								return result;
							} else if (result === INCLUDE_FAILED)
								library_namespace.debug('Error to include ['
										+ item.id + ']', 5, this.debug_id
										+ '.run');
							else
								// assert: PROCESSED
								library_namespace.debug('[' + item.id
										+ ']: included.', 5, this.debug_id
										+ '.run');
						}

				} else
					library_namespace.warn('check_and_run.run: Unknown item: ['
							+ item + ']!');

				if (item !== null) {
					// current item is done. 本載入組已全部載入。
					library_namespace.debug('已處理過'
							+ (item.id ? ' [' + item.id + ']' : '此 '
									+ library_namespace.is_type(item))
							+ '，消除其相依關係。', 5, this.debug_id + '.run');
					this.status.set(item, PROCESSED);
					// 執行完清除 relation map 中之登錄。
					relation_map['delete'](item);
				}

				// 移到下一 group/工作組。
			}

			if (relation_map.relations.size > 0) {
				// 確認沒有其他在 queue 中的。
				library_namespace.warn('check_and_run.run: 已無獨立元素，卻仍有 '
						+ relation_map.relations.size + ' 個元素未處理！');
			}

			// destroy this.relation_map。
			// delete this.relation_map;
			library_namespace.debug('本次序列已處理完畢。', 5, this.debug_id + '.run');
		}

		// public interface of check_and_run.
		Object.assign(check_and_run.prototype, {
			set_options : check_and_run_set_options,
			register : check_and_run_register
		});

		// ---------------------------------------------------------------------//
		// for module 操作.

		/**
		 * library 相對於 HTML file 的 base path。<br />
		 * 同目錄時，應為 "./"。
		 * 
		 * @example <code>
		 * // 在特殊環境下，設置 library base path。
		 * var CeL = { library_path : 'path/to/ce.js' };
		 * </code>
		 */
		var library_base_path,

		setup_library_base_path = function() {
			if (!library_base_path) {
				library_base_path = library_namespace.env.registry_path
						|| library_namespace
								.get_script_base_path(library_namespace.env.main_script_name)
						|| library_namespace.get_script_base_path();

				if (!library_base_path
						&& library_namespace.is_Object(library_namespace
								.get_old_namespace())
						&& (library_base_path = library_namespace
								.get_old_namespace().library_path)) {
					if (/^[^\/]/.test(library_base_path)) {
						// library_base_path is relative path
						// library_namespace.debug(library_namespace.get_script_full_name());
						library_base_path = library_namespace
								.simplify_path(library_namespace
										.get_script_full_name().replace(
												/[^\\\/]*$/, library_base_path));
					}
					library_base_path = library_namespace.simplify_path(
							library_base_path).replace(/[^\\\/]*$/, '');
				}

				if (library_base_path) {
					setup_library_base_path = function() {
						return library_base_path;
					};
					library_namespace.debug('library base path: [<a href="'
							+ encodeURI(library_base_path) + '">'
							+ library_base_path + '</a>]', 2,
							'setup_library_base_path');
				} else
					library_namespace
							.warn('setup_library_base_path: Cannot detect the library base path!');
			}

			return library_base_path;
		};

		/**
		 * get the path of specified module.<br />
		 * 外部程式使用時，通常用在 include 相對於 library / module 本身路徑固定的 resource 檔案。<br />
		 * 例如 file_name 改成相對於 library 本身來說的路徑。
		 * 
		 * @example <code>
		 * 
		 * // 存放 data 的 path path =
		 * library_namespace.get_module_path(this, '');
		 * 
		 * </code>
		 * 
		 * @param {String}[module_name]
		 *            module name.<br />
		 *            未提供則設成 library base path，此時 file_name 為相對於 library
		 *            本身路徑的檔案。
		 * @param {String}[file_name]
		 *            取得與 module 目錄下，檔名為 file_name 之 resource file path。<br />
		 *            若填入 '' 可取得 parent 目錄。
		 * 
		 * @returns {String} module path
		 */
		function get_module_path(module_name, file_name) {
			// module_name = get_module_name(module_name);

			library_namespace.debug('test [' + module_name + ']', 4,
					'get_module_path');
			var file_path = library_base_path || setup_library_base_path(),
			//
			separator = file_path.indexOf('\\') === NOT_FOUND ? '/' : '\\';

			file_path += library_namespace.split_module_name(module_name).join(
					separator)
					+ (typeof file_name === 'string' ? (module_name ? separator
							: '')
							+ file_name : (module_name ? ''
							: library_namespace.env.main_script_name)
							+ library_namespace.env.script_extension);

			if (library_namespace.getFP)
				file_path = library_namespace.getFP(file_path, 1);

			library_namespace.debug('Path of module [' + module_name
					+ '] / file [' + file_name + ']: [<a href="'
					+ encodeURI(file_path) + '">' + file_path + '</a>]', 2,
					'get_module_path');

			return file_path;
		}

		// export.
		library_namespace.get_module_path = get_module_path;

		/**
		 * (module 中)模擬繼承時使用。<br />
		 * クラスを継承する。
		 * 
		 * TODO:<br />
		 * thread-safe<br />
		 * initial_arguments 繼承時的 initial arguments。<br />
		 * initializator
		 * 
		 * @param child
		 *            繼承的子類別。
		 * @param parent
		 *            繼承的親類別。
		 * 
		 * @see <a
		 *      href="http://en.wikipedia.org/wiki/Inheritance_(computer_science)"
		 *      accessdate="2012/12/18 18:54">Inheritance</a>,<br />
		 *      <a href="http://fillano.blog.ithome.com.tw/post/257/17355"
		 *      accessdate="2010/1/1 0:6">Fillano's Learning Notes |
		 *      物件導向Javascript - 實作繼承的效果</a>,<br />
		 *      <a href="http://www.crockford.com/javascript/inheritance.html"
		 *      accessdate="2010/1/1 0:6">Classical Inheritance in JavaScript</a>,<br />
		 *      <a href="http://phrogz.net/JS/classes/OOPinJS.html"
		 *      accessdate="2012/12/18 19:16">OOP in JS, Part 1 : Public/Private
		 *      Variables and Methods</a>
		 * 
		 */
		function inherit(child, parent) {
			var i = 1, j, prototype;
			/**
			 * normalize parent.
			 */
			function normalize() {
				if (typeof parent === 'string') {
					library_namespace.debug(
							'get the module namespace of specific parent module name ['
									+ parent + '].', 2, 'inherit');
					parent = library_namespace.value_of(library_namespace
							.to_module_name(parent));
				}
				if (library_namespace.is_Function(parent))
					return parent;
				library_namespace.err('inherit: 無法判別出合理之 parent[' + i + ']！');
			}

			if (!normalize())
				return;

			/**
			 * copy the prototype properties using new.<br />
			 * 另可在 constructor 中: parent.call(this, argument);
			 * 
			 * @see <a
			 *      href="https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Inheritance_Revisited"
			 *      accessdate="2012/12/18 18:59">Inheritance revisited</a>
			 */
			try {
				// Object.setPrototypeOf(prototype, parent.prototype);
				prototype = new parent;
			} catch (e) {
				prototype = parent;
			}
			// TODO
			if (false)
				if (Object.create)
					prototype = Object.create(prototype);

			if (typeof child === 'function')
				// 搬回原先 child 的原型。
				for (j in child.prototype)
					prototype[j] = child.prototype[j];
			else if (!child)
				child = function() {
				};

			(child.prototype = prototype).constructor = child;

			// 處理其他 parent 的 prototype。
			for (var parent_prototype, length = arguments.length; ++i < length;) {
				parent = arguments[i];
				if (normalize()) {
					parent_prototype = parent.prototype;
					for (j in parent_prototype)
						prototype[j] = parent_prototype[j];
				}
			}

			return child;
		}

		// export.
		library_namespace.inherit = inherit;

		// ---------------------------------------------------------------------//

		/**
		 * control/setup source codes to run.<br />
		 * 基本上使用異序(asynchronously,不同時)的方式，<br />
		 * 除非所需資源已經載入，或是有辦法以 {@link XMLHttpRequest} 取得資源。<br />
		 * 
		 * 本函數實為 DOM 載入後，正常 .run 載入處理程序之對外 front end。<br />
		 * 
		 * @param running_sequence
		 * 
		 * running sequence:<br />
		 * {Integer} PARALLEL (平行處理), SEQUENTIAL (循序/依序執行, in order).<br />
		 * {Integer} timeout (ms): 載入 resource 之時間限制 (millisecond)。<br />
		 * {Array} 另一組動作串 (required sequence): [{String|Function|Integer}, ..] →
		 * 拆開全部當作 PARALLEL loading.<br />
		 * {String} library module name to import, resource (URL/file path)
		 * (e.g., JavaScript/CSS/image) to import.<br />
		 * {Function} function to run/欲執行之 function。<br />
		 * {Object} options: loading with additional config. See
		 * check_and_run_options.
		 * 
		 * @example <code>
		 * </code>
		 * 
		 * 正確:<br />
		 * <code>
		 * CeL.run('code.log', function() {
		 * 	CeL.warn('WARNING message');
		 * });
		 * </code>
		 * 
		 * 錯誤:<br />
		 * <code>
		 * CeL.run('code.log');
		 * //	注意：以下的 code 中，CeL.warn() 不一定會被執行（可能會、可能不會），因為執行時 log 可能尚未被 include。
		 * //	在已經 included 的情況下有可能直接就執行下去。
		 * //	此時應該改用 CeL.run();
		 * CeL.warn('WARNING message');
		 * </code>
		 * 
		 * TODO:<br />
		 * 進度改變時之 handle：一次指定多個 module 時可以知道進度，全部 load 完才 callback()。
		 * 
		 */
		function normal_run() {
			if (arguments.length > 1 || arguments[0]) {
				if (library_namespace.is_debug(2) && library_namespace.is_WWW())
					library_namespace.debug('初始登記/處理 ' + arguments.length
							+ ' items。', 2, 'normal_run');
				var to_run = Array.prototype.slice.call(arguments);
				if (to_run.length > 1)
					// 預設 options 為依序處理。（按順序先後，盡可能同時執行。）
					to_run.unshift(SEQUENTIAL);

				to_run = new check_and_run(to_run);

				library_namespace.debug('做完初始登記，開始跑程序。', 2, 'normal_run');
				return to_run.run();
			}

			library_namespace.debug('未輸入可處理之序列！', 3, library_namespace.Class
					+ 'run', 'normal_run');
		}

		/**
		 * check included resources.
		 * 
		 * @param {String}tag
		 *            tag name to check.
		 * @param {String}URL_attribute
		 *            attribute name of the tag.
		 */
		function check_resource(tag, URL_attribute) {
			if (URL_attribute || (URL_attribute = URL_of_tag[tag]))
				library_namespace.get_tag_list(tag).forEach(
						function(node) {
							var URL = node[URL_attribute];
							if (typeof URL === 'string'
									&& URL
									&& is_controller(URL = get_named(URL
											.replace(/#[^#?]*$/, '')))) {
								library_namespace.debug(
								//
								'add included: [' + URL.id + ']', 2,
										'check_resource');
								URL.included = true;
							}
						});
			else
				library_namespace.warn(
				//
				'check_resource: 無法判別 tag [' + tag + '] 之 URL attribute！');
		}

		// export.
		library_namespace.check_resource = check_resource;

		/**
		 * 設定 library 之初始化程序。
		 */
		var library_initializer = function() {

			setup_library_base_path();

			if (library_namespace.is_WWW()) {
				for ( var tag in tag_map) {
					URL_of_tag[tag] = tag_map[tag][0];
					tag_map[tag][1].split('|').forEach(function(type) {
						tag_of_type[type] = tag;
					});
				}
				[ 'script', 'link' ].forEach(function(tag) {
					check_resource(tag);
				});
			}

			/**
			 * 初始化 user 設定: 處理在 <script> 中插入的初始設定。
			 * 
			 * TODO: 若是設定: <code>
			 * {"run":["css.css","js.js"]}
			 * </code> 則 .js
			 * 可能執行不到，會被跳過。
			 */
			var queue = library_namespace.env.script_config;
			if (library_namespace.is_Object(queue) && (queue = queue.run))
				library_initializer.queue.push(queue);
			queue = library_initializer.queue;

			// 已處理完畢，destroy & set free。
			library_initializer = null;

			// 處理積存工作。
			// export .run().
			return (library_namespace.run = normal_run)(queue);
		};
		library_initializer.queue = [];

		if (!library_namespace.is_WWW() || document.readyState === "complete")
			library_initializer();
		else {
			library_namespace.run = function pre_loader() {
				if (!library_initializer)
					// 已初始化。這是怕有人不用 .run()，而作了 cache。
					return normal_run.apply(null, arguments);

				library_initializer.queue.push(Array.prototype.slice
						.call(arguments));
			};

			/**
			 * 以 event listener 確保初始化程序被執行。
			 * 
			 * @see http://w3help.org/zh-cn/causes/SD9022<br />
			 *      統一為 window 對象的 onload 事件綁定函數，避免在 Firefox 中產生
			 *      document.body.onload 事件理解歧義。<br />
			 *      統一使用 DOM 規範的事件監聽方法（或 IE 專有事件綁定方法）為 IFRAME 標記綁定 onload
			 *      事件處理函數。
			 */
			if (document.addEventListener)
				// https://developer.mozilla.org/en/Gecko-Specific_DOM_Events
				document.addEventListener("DOMContentLoaded",
						library_initializer, false);
			else if (window.attachEvent)
				window.attachEvent("onload", library_initializer);
			else {
				library_namespace
						.debug('No event listener! Using window.onload.');
				if (!window.onload)
					window.onload = library_initializer;
				else
					(function() {
						var old_onload = window.onload;
						window.onload = function() {
							old_onload();
							library_initializer();
						};
					})();
			}
		}

		// ---------------------------------------------------------------------//

	})(CeL);







//args.append(['turnCode.js']);
//args=args.concat(['turnCode.js']);

//	不作 initialization
//CeL.no_initialization = false;


if (typeof CeL === 'function' && !CeL.no_initialization) {
	if (CeL.env.script_name === CeL.env.main_script_name)
		//	僅僅執行 ce.js 此檔時欲執行的程序。
		(function(_) {

			// WScript.Echo(_.env.script_name);
			// _.debug(_.env.script_name);


			//_.set_debug(2);
			_.run([ 'application.OS.Windows', 'application.OS.Windows.registry' ]);
			// _.debug(_.reg);
			if (!_.reg) {
				WScript.Echo('無法載入 module，您可能需要手動檢查 registry，看看是否設定到了錯誤的路徑？');
				return;
			}

			//	將 path 寫入 registry
			var path_key_name = _.env.registry_path_key_name,
			//	此時 script 即為 main_script
			library_base_path = _.env.script_base_path,
			path_in_registry = _.reg.getValue(path_key_name) || '(null)';
			//WScript.Echo('registry:\n' + path_in_registry + '\npath now:\n' + library_base_path);
			if (path_in_registry !== library_base_path) {
				WScript.Echo('Change the base path of [' + _.Class + '] from:\n'
						+ path_in_registry + '\n to\n' + library_base_path
						+ '\n\nkey name:\n' + path_key_name);
				_.reg.setValue.cid = 1;
				_.reg.setValue(path_key_name, library_base_path, 0, 0, 1);
				_.reg.setValue(_.env.registry_base + 'main_script',
						library_base_path + _.env.script_name + _.env.script_extension, 0, 0, 1);
				_.reg.setValue.cid = 0;
			}


			//	TODO
			//	拖曳檔案到本檔案上面時之處置。
			//initialization_WScript_Objects();
			if (
					// args instanceof Array
					typeof args === 'object') {
				// getEnvironment();
				// alert('Get arguments ['+args.length+']\n'+args.join('\n'));
				if (args.length) {
					var i = 0, p, enc, f, backupDir = dBasePath('kanashimi\\www\\cgi-bin\\program\\log\\');
					if (!fso.FolderExists(backupDir))
						try {
							fso.CreateFolder(backupDir);
						} catch (e) {
							backupDir = dBasePath('kanashimi\\www\\cgi-bin\\game\\log\\');
						}
						if (!fso.FolderExists(backupDir))
							try {
								fso.CreateFolder(backupDir);
							} catch (e) {
								if (2 === alert('無法建立備份資料夾[' + backupDir
										+ ']！\n接下來的操作將不會備份！', 0, 0, 1 + 48))
									WScript.Quit();
								backupDir = '';
							}
							// addCode.report=true; // 是否加入報告
							for (; i < args.length; i++)
								if ((f = parse_shortcut(args[i], 1))
										.match(/\.(js|vbs|hta|[xs]?html?|txt|wsf|pac)$/i)
										&& isFile(f)) {
									p = alert(
											'是否以預設編碼['
											+ ((enc = autodetectEncode(f)) == simpleFileDformat ? '內定語系('
													+ simpleFileDformat + ')'
													: enc) + ']處理下面檔案？\n' + f,
													0, 0, 3 + 32);
									if (p === 2)
										break;
									else if (p === 6) {
										if (backupDir)
											fso.CopyFile(f, backupDir + getFN(f), true);
										addCode(f);
									}
								}
				} else if (1 === alert('We will generate a reduced ['
						+ _.env.script_name + ']\n  to [' + _.env.script_name
						+ '.reduced.js].\nBut it takes several time.', 0, 0,
						1 + 32))
					reduceScript(0, _.env.script_name + '.reduced.js');
			}// else window.onload=init;

			// _._iF=undefined;

		})(CeL);
}


/*

//test WinShell	http://msdn.microsoft.com/en-us/library/bb787810(VS.85).aspx
if (false) {
alert(WinShell.Windows().Item(0).FullName);

var i, cmd, t = '', objFolder = WinShell.NameSpace(0xa), objFolderItem = objFolder
		.Items().Item(), colVerbs = objFolderItem.Verbs(); // 假如出意外，objFolder==null
for (i = 0; i < colVerbs.Count; i++) {
	t += colVerbs.Item(i) + '\n';
	if (('' + colVerbs.Item(i)).indexOf('&R') != -1)
		cmd = colVerbs.Item(i);
}
objFolderItem.InvokeVerb('' + cmd);
alert('Commands:\n' + t);

// objShell.NameSpace(FolderFrom).CopyHere(FolderTo,0); // copy folder
// objFolderItem=objShell.NameSpace(FolderFrom).ParseName("clock.avi");objFolderItem.Items().Item().InvokeVerb([動作]);
// objShell.NameSpace(FolderFromPath).Items.Item(mName).InvokeVerb();

// Sets or gets the date and time that a file was last modified.
// http://msdn.microsoft.com/en-us/library/bb787825(VS.85).aspx
// objFolderItem.ModifyDate = "01/01/1900 6:05:00 PM";
// objShell.NameSpace("C:\Temp").ParseName("Test.Txt").ModifyDate =
// DateAdd("d", -1, Now()) CDate("19 October 2007")

// Touch displays or sets the created, access, and modified times of one or
// more files. http://www.stevemiller.net/apps/
}

//測試可寫入的字元:0-128,最好用1-127，因為許多編輯器會將\0轉成' '，\128又不確定
if (false) {
var t = '', f = 'try.js', i = 0;
for (; i < 128; i++)
	t += String.fromCharCode(i);
if (simpleWrite(f, t))
	alert('Write error!\n有此local無法相容的字元?');
else if (simpleRead(f) != t)
	alert('內容不同!');
else if (simpleWrite(f, dQuote(t) + ';'))
	alert('Write error 2!\n有此local無法相容的字元?');
else if (eval(simpleRead(f)) != t)
	alert('eval內容不同!');
else
	alert('OK!');
}

*/









}


