
/*
	本檔案為自動生成，請勿編輯！
	This file is auto created from _structure\structure.js, base.js, module.js, initialization.js
		by auto-generate tool: build main script.
*/






/*
TODO
將 module_name 改成 arguments
http://threecups.org/?p=129

listen language change event
play board

use <a href="http://prototyp.ical.ly/index.php/2007/03/01/javascript-design-patterns-1-the-singleton/" accessdate="2010/4/25 0:23" title="prototyp.ical.ly  &amp;raquo; Javascript Design Patterns - 1. The Singleton">Singleton pattern</a>,
Module 模式或單例模式（<a href="http://zh.wikipedia.org/wiki/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F" accessdate="2010/4/25 0:25" title="单例模式">Singleton</a>）<a href="http://www.comsharp.com/GetKnowledge/zh-CN/TeamBlogTimothyPage_K950.aspx" accessdate="2010/4/25 0:24" title="那些相见恨晚的 JavaScript 技巧 - 基于 COMSHARP CMS">為 Douglas Crockford 所推崇</a>，並被大量應用在 Yahoo User Interface Library YUI。

http://wiki.forum.nokia.com/index.php/JavaScript_Performance_Best_Practices
http://ioio.name/core-javascript-pitfalls.html

CommonJS
http://www.heliximitate.cn/studyblog/archives/tag/commonjs

*/


/*
TODO



//module

//typeof CeL_id === 'string' && typeof this[CeL_id] === 'function' &&
typeof CeL === 'function' && CeL.setup_module({
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

2011/7/31 21:18:01




*/

//void(
//typeof CeL !== 'function' &&
(
/*
 * We can redefine native values only for undefined.<br />
 * http://weblogs.asp.net/bleroy/archive/2006/08/02/Define-undefined.aspx<br />
 * <br />
 * Will speed up references to undefined, and allows redefining its name. (from jQuery)<br />
 * <br />
 * 用在比較或是 return undefined<br />
 * 在舊的 browser 中，undefined 可能不存在。
 */
function (undefined) {

/*
 * ECMA-262 5th edition, ECMAScript 5 strict mode
 * http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
 * http://davidflanagan.com/Talks/es5/slides.html
 * http://kangax.github.com/es5-compat-table/
 */
'use strict';


//if(typeof global !== 'function') throw new Error('No global object specified!');


var
	library_name = 'CeL'

	/**
	 * default debug level
	 * @type	{Integer}
	 * @ignore
	 */
	, debug = 0

	/**
	 * library version
	 * @type	{String}
	 * @ignore
	 */
	, version = '2011.08.27'


	, old_namespace


	//, _base_function_to_extend

	, function_name_pattern
	;


//		members of library	-----------------------------------------------
;


/**
 * Global Scope object<br />
 * 於 CeL.eval_code 使用
 * @ignore
 * @see
 * <a href="http://stackoverflow.com/questions/3277182/how-to-get-the-global-object-in-javascript" accessdate="2011/8/6 10:7">How to get the Global Object in JavaScript? - Stack Overflow</a>
 */
var global = Function('return this')();	//	isWeb()?window:this;
//(function(){return this;})()

try {
	old_namespace = global[library_name];
} catch (e) {
	throw new Error(library_name + ': Cannot get the global scope!');
}



/*
_Global.JustANumber=2;	//	var _GlobalPrototype=_Global.constructor.prototype;_GlobalPrototype.JustANumber=2;
*/

//	若已經定義過，跳過。因為已有對 conflict 的對策，因此跳過。
//if(global[library_name] !== undefined) return;


/**
 * Will speed up references to DOM: window, and allows redefining its name. (from jQuery)
 * @ignore
 */
//window = this;


/**
 * 本 JavaScript framework 的框架基本宣告<br />
 * base name-space declaration of JavaScript library framework
 * 
 * @name	CeL
 * @class	Colorless echo JavaScript kit/library: library base name-space
 */
function _() {
	//	function CeL: library root
	//	declaration for debug
	//this.global = arguments[0] || arguments.callee.ce_doc;
	return new (this.init.apply(global, arguments));
};

//if (typeof _.prototype !== 'object')
_// JSDT:_module_
.
/**
 * framework main prototype definition
 * for JSDT: 有 prototype 才會將之當作 Class
 */
prototype = {
};


//	name-space 歸屬設定

_// JSDT:_module_
.
get_old_namespace = function(){
	return old_namespace;
};

_// JSDT:_module_
.
recover_namespace = function(){
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
 * @see	<a href="http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf">ECMA-262</a>: Object.Class: A string value indicating the kind of this object.
 * @constant
 */
Class = library_name;





var is_WWW = typeof window === 'object'
	&& global === window
	&& typeof setTimeout !== 'undefined'
		&& setTimeout === window.setTimeout
	&& typeof document === 'object'
		&& document === window.document
	&& typeof location === 'object'
		&& location === window.location
	// 下兩個在 IE5.5 中都是 Object
	//&& library_namespace.is_type(window, 'global')
	//&& library_namespace.is_type(document, 'HTMLDocument')
,
is_W3CDOM =
	is_WWW
	// W3CDOM, type: Object @ IE5.5
	&& document.createElement
	// &&!!document.createElement
	//	type: Object @ IE5.5
	&& document.getElementsByTagName;

_// JSDT:_module_
.
/**
 * Are we in a web environment?
 * @param {Boolean} W3CDOM	Test if we are in a World Wide Web Consortium (W3C) Document Object Model (DOM) environment.
 * @return	We're in a WWW environment.
 * @since	2009/12/29 19:18:53
 * @see
 * use lazy evaluation
 * @_memberOf	_module_
 */
is_WWW = function(W3CDOM) {
	return W3CDOM ? is_W3CDOM : is_WWW;
};





_// JSDT:_module_
.
/**
 * 本 library 專用之 evaluate()。
 * 
 * 若在 function 中 eval 以獲得 local variable，在舊 browser 中須加 var。
 * e.g., 'var local_variable=' + ..
 * 不加 var 在舊 browser 中會變成 global 變數。
 * @param code	script code to evaluate
 * @returns	value that evaluate process returned
 * @see	window.eval === window.parent.eval
 * http://stackoverflow.com/questions/3277182/how-to-get-the-global-object-in-javascript
 */
eval_code = function eval_code(code) {
	/*
		JSC eval() takes an optional second argument which can be 'unsafe'.
		Mozilla/SpiderMonkey eval() takes an optional second argument which is the scope object for new symbols.

		use window.execScript(code,"JavaScript") in IE: window.execScript() 將直接使用全局上下文環境，因此，execScript(Str)中的字符串Str可以影響全局變量。——也包括聲明全局變量、函數以及對象構造器。
	*/
	//this.debug(global.eval, 2);
	//this.debug(global.eval && global.eval !== arguments.callee);
	return global.eval && global.eval !== eval_code ? global.eval.call(global, code) : eval(code);
};


_// JSDT:_module_
.
/**
 * evaluate @ Global scope.
 * By the ECMA-262, new Function() will 'Pass in the Global Environment as the Scope parameter.'
 * copy from jQuery core.js
 * @param code	script code to evaluate
 * @returns	value that evaluate process returned
 * @see
 * <a href="http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context" accessdate="2011/8/6 8:56">Eval JavaScript in a global context | Java.net</a>
 * use execScript on Internet Explorer
 */
global_eval = new Function('code', 'return '
		+ (
				typeof execScript === 'function' ? 'execScript('
				: is_WWW ? 'window.eval.call(window,' : 'eval.call(null,'
		)
		+ 'code);');



_// JSDT:_module_
.
/**
 * simple evaluates to get value of specified variable identifier name.
 * 不使用 eval().
 * BUG:
 * 無論是不是相同 name_space，只要 variable_name 相同，即會執行 modify_function。
 * 以記憶體空間換取時間效率，會增加記憶體空間之使用。
 * 
 * @param {String} variable_name	variable identifier name. e.g., /[a-z\d$_]+(.[a-z\d_]+)+/i
 * @param {Function} [modify_function]	註冊:當以 .set_variable() 改變時，順便執行此函數: modify_function(value, variable_name).
 * @param {Object|Function} [name_space]	initialize name-space. default: global.
 * @param [value]	設定 variable 為 value.
 * @returns	value of specified variable identifier name
 * @since	2010/1/1 18:11:40
 * @note
 * 'namespace' 是 JScript.NET 的保留字
 * 
 * 在兩個子層(a.b.c)下，這樣作效率較差 @User agent: Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.29 Safari/533.4:
 * function(v){try{return(new Function('return('+v+')'))();}catch(e){}}
 */
get_variable = function(variable_name, modify_function, name_space, value) {
	var variable_name_array;
	if (_.is_Array(variable_name) && variable_name.length)
		variable_name_array = variable_name,
		variable_name = variable_name.join('.');
	else if (typeof variable_name === 'string' && variable_name)
		variable_name_array = variable_name.split('.');
	else
		//	return variable_name: 預防 get_variable(null/undefined/NaN)
		return variable_name;

	//this.debug('get value of [' + variable_name + ']');
	if (_.is_Function(modify_function)) {
		if (variable_name in modify_function_hash)
			modify_function_hash[variable_name].push(modify_function);
		else
			modify_function_hash[variable_name] = [ modify_function ];
	}

	var i = 0,
	//	TODO: 可處理 e.g., obj1  . obj2 [ ' obj3.4 * \[ ' ] [''] . obj5 [ " obj6 \" \' \] . " ]
	//	or detect obj1 .. obj2
	l = variable_name_array.length,
	v = name_space ||
		//this.env.global
		global,
	set_value = arguments.length > 3;
	//this.debug('global.' + this.Class + ' = ' + this.env.global[this.Class]);

	if(set_value)
		l--;

	try {
		while (i < l)
			// this.debug('to [' + variable_name_array[i] + ']: ' + v[variable_name_array[i]]),
			v = v[variable_name_array[i++]];

		if (set_value) {
			v[variable_name_array[i]] = value;
			set_value = modify_function_hash[variable_name];
			if (set_value)
				for (i in set_value)
					try {
						set_value[i](value, variable_name);
					} catch (e) {
						// TODO: handle exception
					}
		}

	} catch (e) {
		variable_name_array[i - 1] = '<em>' + variable_name_array[i - 1] + '</em><span class="debug_weaken">';
		//alert(this.log.buffer.length + ',' + this.log.max_length + '\n' + this.debug);
		this.debug('Cannot ' + (set_value ? 'set' : 'get') +
				' [<span title="' + variable_name + '">' + variable_name_array.join('.') + '</span></span>]!', 2, 'get_variable');
		return undefined;
	}

	return v;
};

var modify_function_hash = {};

_// JSDT:_module_
.
/**
 * simple evaluates to set value of specified variable identifier name.
 * 不使用 eval().
 * @param {String} variable_name	variable identifier name. e.g., /[a-z\d$_]+(.[a-z\d_]+)+/i
 * @param [value]	設定 variable 為 value.
 * @param {Object|Function} [name_space]	initialize name-space. default: global.
 * @returns	name-space of specified variable identifier name. e.g., return a.b.c when call .set_variable('a.b.c.d').
 * @since	2011/8/27 15:43:03
 */
set_variable = function(variable_name, value, name_space) {
	return _.get_variable(variable_name, null, name_space, value);
};


_// JSDT:_module_
.
/**
 * 取得執行 script 之 path, 在 .hta 中取代 WScript.ScriptFullName。
 * @returns	{String}	執行 script 之 path
 * @returns	''	Unknown environment
 */
get_script_full_name = function() {
	return is_WWW && unescape(location.pathname)
		//	for JScript: 在 IE8, IE9 中，get_object_type.call(WScript) 為 '[object Object]' !!
		|| typeof WScript === 'object' && (!this.is_Object(WScript) || String(WScript) === 'Windows Script Host') && WScript.ScriptFullName
		//	for node.js
		|| typeof __filename === 'string' && __filename
		//	for jslibs
		|| _.is_Object(old_namespace) && old_namespace.loader_script
		//	Unknown environment
		|| '';
};

_// JSDT:_module_
.
/**
 * 取得執行 script 之名稱(不包括 .js 等 extension).
 * @returns	{String} 執行 script 之 名稱
 * @returns	''	unknown environment
 */
get_script_name = function() {
	var full_path = _.get_script_full_name(), m = full_path.match(/[^\\\/]*$/);
	return m[0].replace(/\.[^.]*$/, '');
};

if(0)
_// JSDT:_module_
.
deprecated_get_script_name = function() {
	//	deprecated
	var n, i, j;

	//	在 IE8, IE9 中，get_object_type.call(WScript) 為 '[object Object]' !!
	if (typeof WScript === 'object'
		&& (!this.is_Object(WScript) ||
				//String(WScript) === 'Windows Script Host'
				WScript == 'Windows Script Host'
				)) {
		n = WScript.ScriptName;
		i = n.lastIndexOf('.');
		return i == -1 ? n : n.slice(0, i);
	}

	if (is_WWW) {
		n = unescape(location.pathname), j = n.lastIndexOf('.');
		if (!(i = n.lastIndexOf('\\') + 1))
			//	location.pathname 在 .hta 中會回傳 '\' 形式的 path
			i = n.lastIndexOf('/') + 1;
		//return document.title;
		return i < j ? n.slice(i, j) : n.slice(i);
	}
};



_// JSDT:_module_
.
/**
 * is index 用, only digits.
 * @param	value	value to test
 * @returns	if value only digits.
 */
is_digits = function(value) {
	return /^\d+$/.test(value.toString());
};

if(!global.is_digits)
	global.is_digits = _.is_digits;


/*
測試各 type:

undefined:
變數值存在且變數 'undefined' 存在時: variable === undefined
否則: typeof(variable) === 'undefined'

TODO:
void(1) === void(0) === undefined

number, boolean, string:
typeof(variable) === '~'

** NaN
** int/float

object:
null

不同frame中的Array擁有不同的constructor
*/
/**
 * A cache to the function we use to get the type of specified value.<br />
 * Get the [[Class]] property of this object.<br />
 * 不使用 Object.toString() 是怕被 overridden
 * @type	{Function}
 * @inner
 */
var get_object_type = Object.prototype.toString;

_// JSDT:_module_
.
/**
 * 判斷為何種 type。主要用在 Error, DOMException 等 native object 之判別。
 * @param	value	variable or class instance to test
 * @param	{String} [want_type]	type to compare: number, string, boolean, undefined, object, function
 * @param	{Boolean} [get_Class]	get the class name of a class(function) instance.
 * @returns	{Boolean}	The type is matched.
 * @returns	{String}	The type of value
 * @returns	{undefined}	error occurred
 * @example
 * CeL.is_type(value_to_test, 'Array');
 * @since	2009/12/14 19:50:14
 * @see
 * <a href="http://lifesinger.org/blog/2009/02/javascript-type-check-2/" accessdate="2009/12/6 19:10">JavaScript类型检测小结（下） - 岁月如歌</a><br />
 * <a href="http://thinkweb2.com/projects/prototype/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/" accessdate="2009/12/6 19:10">Perfection kills &raquo; `instanceof` considered harmful (or how to write a robust `isArray`)</a>
 */
is_type = function(value, want_type, get_Class) {
	var type;
	if (want_type && (type = typeof want_type) !== 'string')
		want_type = type;

	type = value === null ? String(value) : typeof value;

	if (get_Class)
		try {
			if(type === 'function' && value.Class)
				//	get the class name of a class
				//	若 value 為 function 時，測試其本身之 Class。
				type = value.Class;
			else if (type === 'function' || type === 'object')
				if (('constructor' in value) && (get_Class = value.constructor).Class)
					// get the class name of a class instance
					// 若 value 為 function 且無 Class，或為 object 時，測試其 constructor 之 Class。
					type = get_Class.Class;
				else if (get_Class = this.get_function_name(get_Class))
					// get Class by function name
					type = get_Class;
		} catch (e) {
			this.err(this.Class + '.is_type: Fault to get ths class name of value!');
		}

	if (type !== 'object')
		//	type maybe 'unknown' or 'date'!
		return want_type ? type === want_type.toLowerCase() : type;

	try {
		get_Class = get_object_type.call(value);
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
 * @param	{String} want_type	object type to compare
 * @param	{String} [toString_reference]	a reference name to Object.prototype.toString
 * @returns	{Function}	type test function
 * @since	2009/12/20 08:38:26
 * @example
 * // 大量驗證時，推薦另外在本身 scope 中造出捷徑：
 * this.OtS = Object.prototype.toString;
 * var is_Array = CeL.object_tester('Array', 'OtS');
 * // test
 * if(is_Array(value))
 * 	//	it's really a native Array
 * 	;
 */
object_tester = function(want_type, toString_reference) {
	var t = '[object ' + want_type + ']';

/*
	return new Function('v', 'return "' + t + '"==='
				+ (toString_reference ||
						//	在 Google Chrome 中 'Object.prototype.toString' 可以與其 reference 同速度，但其他的 reference 會快些。
						'Object.prototype.toString'
						//'get_object_type'
						)
				+ '.call(v);');
*/

	return typeof toString_reference === 'string'
		&& toString_reference ?
			new Function('v', 'return "' + t
				+ '"===' + toString_reference + '.call(v);')

			//	slow@Chrome
			: function(v) { return t === get_object_type.call(v); };
			//	faster@Chrome
			//: new Function('v', 'return "' + t + '"===Object.prototype.toString.call(v);');

};

_// JSDT:_module_
.
/**
 * Test if the value is a native Array.
 * @param	v	value to test
 * @returns	{Boolean}	the value is a native Array.
 * @since	2009/12/20 08:38:26
 */
is_Array =
	// _.object_tester('Array');
	function(v) {
		// instanceof 比 Object.prototype.toString 快
		return v instanceof Array
				|| get_object_type.call(v) === '[object Array]';
	};

_// JSDT:_module_
.
/**
 * Test if the value is a native Object.
 * TODO:
 * test null
 * @param	v	value to test
 * @returns	{Boolean}	the value is a native Object.
 * @since	2009/12/20 08:38:26
 */
is_Object =
	//	Object.prototype.toString.call(undefined) === '[object Object]' @ MSIE 6.0
	get_object_type.call(undefined) === '[object Object]'?
	function(v) {
		return typeof v !== 'undefined'
				&& get_object_type.call(v) === '[object Object]';
	}
	:
	//_.object_tester('Object');
	function(v) {
		//	非如此不得與 jQuery 平起平坐…
		return get_object_type.call(v) === '[object Object]';
	};

_// JSDT:_module_
.
/**
 * Test if the value is a native Function.
 * @param	v	value to test
 * @returns	{Boolean}	the value is a native Function.
 * @since	2009/12/20 08:38:26
 */
is_Function =
	//_.object_tester('Function');
	function(v) {
		//	typeof 比 Object.prototype.toString 快，不過得注意有些 native object 可能 type 是 'function'，但不具有 function 特性。
		return get_object_type.call(v) === '[object Function]';

		//	須注意，在 firefox 3 中，typeof [object HTMLObjectElement] 之外的 HTMLElement 皆 === 'function'，
		//	因此光用 typeof() === 'function' 而執行下去會得出 [XPCWrappedNative_NoHelper] Component is not available
		//return typeof v === 'function' || get_object_type.call(v) === '[object Function]';
	};


//----------------------------------------------------------------------------------------------------------------------------------------------------------//


_// JSDT:_module_
.
/**
 * 取得/設定環境變數 enumeration<br />
 * （雖然不喜歡另開 name-space，但以 2009 當下的 JsDoc Toolkit 來說，似乎沒辦法創造 enumeration。）
 * @class	環境變數 (environment variables) 與程式會用到的 library 相關變數 / configuration。
 * @param {String} name	環境變數名稱
 * @param value	環境變數之值
 * @returns	舊環境變數之值
 * @_memberOf	_module_
 */
env = function env(name, value) {
	if (!name)
		//return;
		return undefined;

	var _s = env, v = _s[name];

	if (arguments.length > 1) _s[name] = value;
	//if (typeof value !== 'undefined') _s[name] = value;

	return isNaN(v) ? String(v) : v;
};


_// JSDT:_module_
.
/**
 * Setup environment variables
 * @param	{String} [OS_type]	type of OS
 * @param	{Boolean} [reset]	reset the environment variables 
 * @returns	{Object}	environment variables set
 */
initial_env = function(OS_type, reset){
	if (reset)
		this.env = {};

	var OS, env = this.env;

	/**
	 * library main file base name
	 * @name	CeL.env.main_script_name
	 * @type	String
	 */
	env.main_script_name = 'ce';

	/**
	 * default extension of script file.
	 * setup_extension @ CeL.get_script_base_path() 可能會再設定一次，偵測為 .txt 的情況。
	 * @type	String
	 * @see
	 * <a href="http://soswitcher.blogspot.com/2009/05/blogger-host-javascript-file-for-free.html" accessdate="2010/3/11 23:30">Blogger - Host Javascript File for Free - Blogger,Javascript - Blogger Blog by Switcher</a>
	 * @name	CeL.env.script_extension
	 */
	env.script_extension = '.js';

	/**
	 * library main file name<br />
	 * setup_extension @ CeL.get_script_base_path() 可能會再設定一次，偵測為 .txt 的情況。
	 * full path: {@link CeL.env.registry_path} + {@link CeL.env.main_script}
	 * @example:
	 * CeL.log('full path: ['+CeL.env.registry_path+CeL.env.main_script+']');
	 * @name	CeL.env.main_script
	 * @type	String
	 */
	env.main_script = env.main_script_name + env.script_extension;

	/**
	 * module 中的這 member 定義了哪些 member 不被 extend
	 * @name	CeL.env.not_to_extend_keyword
	 * @type	String
	 */
	env.not_to_extend_keyword = 'no_extend';

	/**
	 * 本 library source 檔案使用之 encoding<br />
	 * 不使用會產生語法錯誤
	 * @name	CeL.env.source_encoding
	 * @type	String
	 */
	env.source_encoding = 'UTF-16';

	/**
	 * default global object.
	 * 有可能為 undefined!
	 * @name	CeL.env.global
	 * @type	Object
	 */
	env.global = global;

	/**
	 * creator group / 組織名稱 organization name
	 * @name	CeL.env.organization
	 * @type	String
	 */
	env.organization = 'Colorless echo';

	/**
	 * 在 registry 中存放 library 資料的 base path
	 * @name	CeL.env.registry_base
	 * @type	String
	 */
	env.registry_base = 'HKCU\\Software\\' + env.organization + '\\' + this.Class
				+ '\\';
	/**
	 * 在 registry 中存放 library 在 File System 中的 base path 的 key name
	 * @name	CeL.env.registry_base
	 * @type	String
	 */
	env.registry_path_key_name = env.registry_base + 'path';
	//if(typeof WScript === 'object')
	try {
		//WScript.Echo(env.registry_path_key_name);

		/**
		 * 存放在 registry 中的 path，通常指的是 library 在 File System 中的 base path
		 * @name	CeL.env.registry_path
		 * @type	String
		 */
		env.registry_path = (WScript.CreateObject("WScript.Shell"))
			.RegRead(env.registry_path_key_name)
			// 去除 filename
			//.replace(/[^\\\/]+$/, '')
			;
		//this.debug(env.registry_path);
	} catch (e) {
		// this.warn(e.message);
	}


	//條件式編譯(条件コンパイル) for version>=4, 用 /*@ and @*/ to 判別
	/*@cc_on
	@if(@_PowerPC||@_mac)
	 OS='Mac';
	@else
	 @if(@_win32||@_win64||@_win16)
	  OS='Windows';
	 @else
	  OS='UNIX';	//	unknown
	 @end
	@end@*/

	/**
	 * 本次執行所在 OS 平台
	 * @name	CeL.env.OS
	 * @type	String
	 */
	env.OS = OS = OS_type || OS
			// 假如未設定則由 path 判斷
			|| (_.get_script_full_name().indexOf('\\') !== -1 ? 'Windows' : 'UNIX');

	/**
	 * 文件預設 new line
	 * @name	CeL.env.new_line
	 * @type	String
	 */
	env.new_line =
			OS === 'UNIX' ? '\n' : OS === 'Mac' ? '\r' : '\r\n';	//	in VB: vbCrLf

	/**
	 * file system 預設 path separator<br />
	 * platform-dependent path separator character, 決定目錄(directory)分隔
	 * @name	CeL.env.path_separator
	 * @type	String
	 */
	env.path_separator =
			OS === 'UNIX' ? '/' : '\\';

	/**
	 * 預設 module name separator
	 * @name	CeL.env.module_name_separator
	 * @type	String
	 */
	env.module_name_separator = '.';
	/**
	 * path_separator in 通用(regular)運算式
	 * @name	CeL.env.path_separator_RegExp
	 * @type	RegExp
	 */
	env.path_separator_RegExp = this.to_RegExp_pattern ?
			this.to_RegExp_pattern(env.path_separator)
			: (env.path_separator === '\\' ? '\\' : '') + env.path_separator;
	/**
	 * 預設語系
	 * 0x404:中文-台灣,0x0411:日文-日本
	 * @name	CeL.env.locale
	 * @see	<a href="http://msdn.microsoft.com/zh-tw/library/system.globalization.cultureinfo(VS.80).aspx">CultureInfo 類別</a>
	 * @type	Number
	 */
	env.locale = 0x404;

	/**
	 * script name
	 * @name	CeL.env.script_name
	 * @type	String
	 */
	env.script_name = this.get_script_name();
	/**
	 * base path of script.
	 * TODO
	 * 以 reg 代替
	 * @name	CeL.env.script_base_path
	 * @type	String
	 */
	env.script_base_path = this.get_script_full_name()
		// 去除 filename
		.replace(/[^\\\/]+$/, '');

	/**
	 * Legal identifier name in RegExp.
	 * 這 pattern 會佔去兩個筆紀錄: first letter, and least.
	 * .replace(/_/ [g],'for first letter')
	 * .replace(/\\d/,'for least')
	 * 這邊列出的只是合法 identifier 的*子集*，且未去除 reserved words!
	 * 請注意實際判別須加入 ^..$
	 * 
	 * 不用 \d 而用 0-9 是因為 \d 還包括了 MATHEMATICAL BOLD DIGIT。
	 * <a href="http://blog.est.im/archives/3229" accessdate="2010/11/16 20:6">基于正则的URL匹配安全性考虑</a>
	 * @name	CeL.env.identifier_RegExp
	 * @see
	 * ECMA-262	7.6 Identifier Names and Identifiers
	 * @type	RegExp
	 */
	env.identifier_RegExp = /([a-zA-Z$_]|\\u[0-9a-fA-F]{4})([a-zA-Z$_0-9]+|\\u[0-9a-fA-F]{4}){0,63}/;

	/**
	 * Legal identifier name in String from env.identifier_RegExp.
	 * @name	CeL.env.identifier_String
	 */
	env.identifier_String = env.identifier_RegExp.source;

	//	把 old_namespace.env 下原先的環境設定 copy 過來。例如用在直接讀取檔案內容並 eval()，要設定 env.script_extension, env.main_script 的情況。
	if (_.is_Object(old_namespace) && _.is_Object(old_namespace.env)) {
		_.extend(old_namespace.env, env);
	}

	return env;
};


_// JSDT:_module_
.
//	TODO
get_identifier_RegExp = function(pattern, flag, add_for_first_letter, add_for_all_letter) {
	var s = this.env.identifier_String;
	if (add_for_first_letter)
		s = s.replace(/_/g, add_for_first_letter);
	if (add_for_all_letter)
		s = s.replace(/0-9/g, add_for_all_letter);

	return new RegExp(
			(get_object_type.call(pattern) === '[object RegExp]' ? pattern.source : pattern)
				.replace(/$identifier/g, s), flag || '');
};


//----------------------------------------------------------------------------------------------------------------------------------------------------------//


_// JSDT:_module_
.
/**
 * Tell if it's now debugging.
 * @param {Integer} [debug_level]	if it's now in this debug level.
 * @returns	{Boolean}	It's now in specified debug level.
 * @returns	{Number}	It's now in what debug level (Integer).
 */
is_debug = function(debug_level){
	return typeof debug_level === 'undefined' ? debug
				: debug >= debug_level;
};

_// JSDT:_module_
.
/**
 * Set debugging level
 * @param {Integer} [debug_level]	The debugging level to set.
 * @type	Integer
 * @returns	{Number} debugging level now
 */
set_debug = function (debug_level) {
	if (!isNaN(debug_level))
		debug = debug_level;

	else if (typeof debug_level === 'undefined' && !debug)
		debug = 1;

	return debug;
};


/*
CeL.extend(function f_name(){}, object || string, initial arguments);
CeL.extend({name:function(){},.. }, object || string);
CeL.extend([function1,function12,..], object || string);

set .name
*/







_// JSDT:_module_
.
/**
 * Get the hash key of text.
 * @param {String} text	text to test
 * @returns	{String}	hash key
 */
_get_hash_key = function(text) {
	//text = String(text);
	//text = '' + text;
	var l = text.length, take = 30, from = .3;
	from = Math.floor(l * from);
	//this.log(from + '~' + l + ': ' + (l - from < take ? text : text.substr(from, take)));
	return l - from < take ? text : text.substr(from, take);
};


//	for JScript<=5
try {
	function_name_pattern = new RegExp('^function[\\s\\n]+(\\w+)[\\s\\n]*\\(');
} catch (e) {
	function_name_pattern = function emulate_function_name(fs) {
		fs = String(fs);
		var l = 'function ', r, s;

		if (fs.indexOf(l) === 0) {
			l = l.length;
			s = {
					' ' : 1,
					'\n' : 1,
					'\r' : 1,
					'\t' : 1
			};
			while (fs.charAt(l) in s)
				l++;
			r = fs.indexOf('(', l);
			while (fs.charAt(--r) in s)
				;

			return [ , fs.slice(l, r + 1) ];
		}
	};
	if (typeof RegExp != 'object')
		eval('RegExp = function(){};');
}

_// JSDT:_module_
.
/**
 * 獲得函數名
 * @param {Function} fr	function reference
 * @param {String} ns	name-space
 * @param {Boolean} force_load	force reload this name-space
 * @returns
 * @see
 * 可能的話請改用 {@link CeL.native.parse_function}(F).funcName
 * @since	2010/1/7 22:10:27
 */
get_function_name = function(fr, ns, force_load) {
	var _s = _.get_function_name,
	//	初始化變數 'm'
	m = 0, ft, b, load, k, i;
	if (!fr)
		try{
			fr = _s.caller;
		}catch (e) {
			// TODO: handle exception
		}

	//	get function text (函數的解譯文字)
	//	不用 insteadof 是怕傳入奇怪的東西，例如 {string} script code
	m = typeof fr;
	if (m === 'function') {
		//	勿更改傳入之 argument
		/*
		if ('toString' in fr) {
			m = fr.toString;
			delete fr.toString;
		}
		ft = String(fr);
		if (m)
			fr.toString = m;
		*/
		//	TODO: cache Function.prototype.toString
		ft = Function.prototype.toString.call(fr);
	} else if(m === 'string')
		// typeof fr === 'string'
		ft = fr;
	else
		return '';

	//	以函數的解譯文字獲得函數名
	if (m = function_name_pattern instanceof RegExp ?
			//	包含引數:	+ '(' + (f ? m[2] : '') + ')';
			((m = ft.match(function_name_pattern)) && m[1] || 0)
			: function_name_pattern instanceof Function ?
				function_name_pattern(ft)
				: 0){
		//this.debug('matched ' + m, 1, this.Class + '.get_function_name');
		return m;
	}
	//	無法從 function code 本身得到 name 之資訊。

	//	查詢是否是已註冊之 function
	b = _s.b;
	if (b)
		load = _s.ns;
	else
		_s.b = b = {}, _s.ns = load = {};

	if (!ns)
		ns = this;

	//	cache functions
	if ((this.is_Function(ns) || this.is_Object(ns)) && ns.Class
					&& (force_load || !load[ns.Class])) {
		for (i in ns)
			if (typeof ns[i] === 'function'){
				k = this._get_hash_key(String(ns[i]));
				m = ns.Class + this.env.module_name_separator + i;
				//this.debug(m + ': ' + k + (', ' + ns[i]).slice(0, 200));
				if(!(m in load)){
					load[m] = 1;
					if (!b[k])
						b[k] = [];
					b[k].push( [ m, ns[i] ]);
				}
			}
		load[ns.Class] = 1;
	}

	//	將函數與 cache 比對以獲得函數名
	m = b[this._get_hash_key(ft)];
	if (m)
		for (i = 0; i < m.length; i++) {
			b= m[i][1];
			if (// typeof fr === 'function' &&
					fr === b)
				return m[i][0];
			if (ft === String(b))
				return m[i];
		}
};



_// JSDT:_module_
.
null_function =
	//new Function;
	function() {};


//	Initialization

//	temporary decoration in case we call for nothing and raise error
if(typeof console === 'object' && typeof console.log === 'function'){
	//	不直接指定: 預防 Uncaught TypeError: Illegal invocation
	_.err = function() {
		return console.error.apply(console, arguments);
	};
	_.warn = function() {
		return console.warn.apply(console, arguments);
	};
	_.log = function() {
		return console.log.apply(console, arguments);
	};
	_.debug = function(m, level, from) {
		if (_.is_debug(level))
			return console.info.call(console, (from ? from + ':' : '') + m);
	};

} else {
_.debug = _.err = _.warn = _.log = function(m) {
	/*
	 * 請注意:
	 * _.log.buffer === this.log.buffer !== log.buffer
	 * 在 WScript 中 需要用 _.log，其他則可用 log。
	 * 因此應該將所有類似的值指定給雙方，並注意非[常數]的情況。
	 */
	var _s = _.log;
	//_s.function_to_call.apply(null,arguments);
	//_s.function_to_call.apply(global, arguments);

	_s.buffer.push(m);

	if (!_s.max_length)
		_s.max_length = 0;

	if (//debug &&
			_s.buffer.length > _s.max_length)
		_s.function_to_call.call(global, _s.buffer.join('\n\n')),
		_s.buffer = [];
};


/*
 * test:
 * var k=function l(){alert(l.m);};k.m=1;alert(l.m+','+k.m);k();
 * 
 * JScript 中
 * k();
 * 為 undefined, 其他會把 "l." 代換成 "k."？
 * 
 * @inner
 */
//_.debug.buffer = _.err.buffer = _.warn.buffer =
_.log.buffer = [];


//_.debug.max_length = _.err.max_length = _.warn.max_length =
_.log.max_length = 0;
//CeL.log.max_length = 0;


var max_log_length = 1000,
prepare_message = function(m) {
	m = String(m);
	if (m.length > 2 * max_log_length)
		m = m.slice(0, max_log_length) + '\n\n..\n\n' + m.slice(-max_log_length);
	return m;
};

//_.debug.function_to_call = _.err.function_to_call = _.warn.function_to_call =

_.log.function_to_call =
	//typeof console === 'object' && typeof console.log === 'function' ? console.log :
	//typeof JSalert === 'function' ? JSalert :
	typeof WScript === 'object' ?
		function(m){WScript.Echo(prepare_message(m));} :
	//	for jslibs
	typeof _configuration === 'object' && typeof _configuration.stdout === 'function' ?
		function(m){_configuration.stdout(prepare_message(m) + '\n');} :
	//	for JSDB
	typeof writeln === 'function'?
		function(m){writeln(prepare_message(m));} :
	typeof alert === 'object' || typeof alert === 'function' ?
		function(m){alert(prepare_message(m));} :
	_.null_function;

}



/*
var test_obj = _(2, 'test: Initialization');

test_obj.test_print('OK!');
*/

/*
if (0 && typeof console !== 'undefined') {
	console.log('global: ' + typeof global);
	console.log(library_name + ': ' + typeof global[library_name]);
}
*/

/**
 * 能執行到最後都沒出錯才設定到 global。
 * @ignore
 */
global[library_name] = _;


}
)(
	//	In strict mode, this inside globe functions is undefined.
	//	https://developer.mozilla.org/en/JavaScript/Strict_mode
	//this	// || typeof window === 'undefined' || window
)
//)	//	void(
;









/*
TODO:

瘦身

use -> using because of 'use' is a keyword of JScript.

等呼叫時才 initialization


http://headjs.com/#theory
Head JS :: The only script in your HEAD


do not use eval.
以其他方法取代 eval 的使用。

http://msdn.microsoft.com/en-us/library/2b36h1wa(VS.71).aspx
The arguments object is not available when running in fast mode, the default for JScript .NET. To compile a program from the command line that uses the arguments object, you must turn off the fast option by using /fast-. It is not safe to turn off the fast option in ASP.NET because of threading issues.


Multiversion Support
http://requirejs.org/docs/api.html

*/


typeof CeL === 'function' &&
(function(_) {

'use strict';


//var _// JSDT:_module_
//= this;


_// JSDT:_module_
.
/**
 * 延展物件 (learned from jQuery):
 * 將 from_name_space 下的 variable_set 延展/覆蓋到 name_space。
 * @since	2009/11/25 21:17:44
 * @param	variable_set	variable set
 * @param	{Object|Function} name_space	extend to what name-space
 * @param	{Object|Function} from_name_space	When inputing function names, we need a base name-space to search these functions.
 * @returns	library names-pace
 * @see
 * <a href="http://blog.darkthread.net/blogs/darkthreadtw/archive/2009/03/01/jquery-extend.aspx" accessdate="2009/11/17 1:24" title="jQuery.extend的用法 - 黑暗執行緒">jQuery.extend的用法</a>,
 * <a href="http://www.cnblogs.com/rubylouvre/archive/2009/11/21/1607072.html" accessdate="2010/1/1 1:40">jQuery源码学习笔记三 - Ruby's Louvre - 博客园</a>
 */
extend = function extend(variable_set, name_space, from_name_space) {
	var _s = extend, i, l;

	if(typeof name_space === 'undefined' || name_space === null)
		//	如果沒有指定擴展的對象，則擴展到 library 自身
		name_space = _s.default_target;

	if (typeof from_name_space === 'undefined')
		from_name_space = _s.default_target;
	else if (variable_set === null && _.is_Function(from_name_space))
		variable_set = from_name_space;

	if (typeof variable_set === 'function') {
		if (_.parse_function) {
		} else {
			_.warn('Warning: Please include ' + _.Class + '.parse_function() first!');
		}

	} else if (typeof variable_set === 'string') {
		if (!from_name_space)
			from_name_space = _;

		if(name_space === from_name_space)
			;
		else if(variable_set in from_name_space){
			//_.debug('extend (' + (typeof variable_set) + ') ' + variable_set + '\n=' + from_name_space[variable_set] + '\n\nto:\n' + name_space);
			name_space[variable_set] = from_name_space[variable_set];
		}else
			try{
				name_space[variable_set] = _.get_variable(variable_set);
				//_.debug(variable_set + ' = ' + name_space[variable_set]);
			}catch(e){
				_.warn(_.Class + '.extend:\n' + e.message);
			}

	} else if (_.is_Array(variable_set)
						&& !_.is_Array(name_space)) {
		for (i = 0, l = variable_set.length; i < l; i++) {
			_s(variable_set[i], name_space, from_name_space);
		}

	} else if (_.is_Object(variable_set)
			//|| _.is_Function(variable_set)
			) {
		for (i in variable_set) {
			if (from_name_space)
				name_space[i] = from_name_space[variable_set[i] || i];
			else
				name_space[i] = variable_set[i];
		}
	}

	return _;
};

//_.extend.default_target = _;



_// JSDT:_module_
.
/**
 * 設定 name_space 下的 function_name 待執行時換作 initializor 的 return。
 * 換句話說，執行 name_space 下的 function_name (name_space[function_name]) 時把 name_space[function_name] 換成 new_function (initializor 的 return)。
 * for Lazy Function Definition Pattern.
 * 惰性求值（Lazy Evaluation），又稱懶惰求值、懶漢求值。
 * TODO:
 * 使用本函數不能完全解決先前已經指定 identifier 的情況。因此對於會使用本函數的函數，盡量別使用 .use_function() 來 include，否則可能會出現問題!
 * @example
 * library_namespace.set_initializor('function_name', function(){return function(){};}, _);
 * 
 * @param {String}function_name	function name to replace: name_space.function_name
 * @param {Function}initializor	will return function identifier to replace with
 * @param name_space	in which name-space
 * @returns	new_function
 * @see
 * http://realazy.org/blog/2007/08/16/lazy-function-definition-pattern/,
 * http://peter.michaux.ca/article/3556
 */
set_initializor = function(function_name, initializor, name_space) {
	if (arguments.length < 3 && _.is_Function(function_name)
			&& _.get_function_name(function_name))
		//	e.g., library_namespace.set_initializor(get_HTA, _);
		name_space = initializor,
		function_name = _.get_function_name(initializor = function_name)
		//, _.debug('Get function name [' + function_name + '].')
		;

	if (!name_space)
		name_space = this;
	if (!initializor)
		initializor = name_space[function_name];

	var do_replace = function() {
		//_.debug(name_space[function_name] === do_replace);
		//_.debug(name_space.Class+'['+function_name+']='+name_space[function_name]);
		//_.debug('do_replace='+do_replace);
		var old_function = name_space[function_name],
		new_function;
		if (old_function === do_replace) {
			try {
				new_function = initializor.apply(this, arguments);
			} catch (r) {
				//	可能因時機未到，或是 initialization arguments 不合適。不作 replace。
				return r;
			}

			if (typeof new_function !== 'function')
				initializor = new_function,
				new_function = function() {
					//_.debug('new function return [' + initializor + '].');
					return initializor;
				};

			// searching for other extends
			if (_[function_name] === old_function)
				_.debug('Replace base name-space function [' + function_name + '].'),
				_[function_name] = new_function;
			else
				_.debug('Base name-space function [' + function_name + ']: ' + _[function_name] + '.');

			//	設定。
			_.debug('Replace function [' + function_name + '].');
			name_space[function_name] = new_function;
			//_.debug(name_space[function_name] === do_replace);
			//_.debug(name_space.Class+'['+function_name+']='+name_space[function_name]);
		} else {
			if(_.is_debug(2))
				_.warn('The function [' + function_name + '] had replaced with a new one.');
			new_function = old_function;
		}

		//_.debug('new function: ' + new_function);
		return new_function.apply(this, arguments);
	};

	return name_space[function_name] = do_replace;
};



//----------------------------------------------------------------------------------------------------------------------------------------------------------//

/**
 * XMLHttpRequest object type cache.
 * {Number} 0: no XMLHttpRequest, 1: new XMLHttpRequest_type(), 2: new ActiveXObject('Microsoft.XMLHTTP').
 * @inner
 * @ignore
 */
var XMLHttpRequest_type = 0;

var is_Opera = typeof navigator === 'object'
	&& navigator.appName === 'Opera';

_// JSDT:_module_
.
/**
 * Get file resource by {@link XMLHttpRequest}<br />
 * 依序載入 resource，用於 include JavaScript 檔之類需求時，取得檔案內容之輕量級函數。<br />
 * 除 Ajax，本函數亦可用在 CScript 執行中。
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
get_file = function(path, encoding) {
	//with(typeof window.XMLHttpRequest=='undefined'?new ActiveXObject('Microsoft.XMLHTTP'):new XMLHttpRequest()){

	//_.debug('XMLHttpRequest type: ' + XMLHttpRequest_type, 1, 'get_file');

	var _s = _.get_file,
	data,
	type = 'GET',
	/**
	 * XMLHttpRequest object.
	 * Can't cache this object.
	 * @inner
	 * @ignore
	 */
	o = XMLHttpRequest_type === 1 ?
			new XMLHttpRequest()
			: new ActiveXObject('Microsoft.XMLHTTP');

	//	4096: URL 長度限制，與瀏覽器有關。
	if (typeof path === 'string' && path.length > 4096
			&& (data = path.match(/^([^?]{6,200})\?(.+)$/)))
		path = data[1], data = data[2], type = 'PUT';
	else
		data = null;

	o.open(type, path, false);

	if (encoding && o.overrideMimeType)
		/*
		 * old: o.overrideMimeType('text/xml;charset='+encoding);
		 * 但這樣會被當作 XML 解析，產生語法錯誤。
		 */
		o.overrideMimeType('application/json;charset=' + encoding);

	try {
		//	http://www.w3.org/TR/2007/WD-XMLHttpRequest-20070227/#dfn-send
		//	Invoking send() without the data argument must give the same result as if it was invoked with null as argument.
		o.send(data);
		delete _s.error;

	} catch (e) {
		//	Chome: XMLHttpRequest cannot load file:///X:/*.js. Cross origin requests are only supported for HTTP.
		//	Opera 11.50: 不會 throw，但是 .responseText === ''。
		//	Apple Safari 3.0.3 may throw NETWORK_ERR: XMLHttpRequest Exception 101
		_s.error = e;

		//_.warn(_.Class + '.get_file: Loading [' + path + '] failed: ' + e);
		//_.err(e);
		//_.debug('Loading [' + path + '] failed.');

		//e.object = o;	//	[XPCWrappedNative_NoHelper] Cannot modify properties of a WrappedNative @ firefox

		if (_.is_WWW() && (o = path.match(/:(\/\/)?([^\/]+)/))
				&& o[2] !== window.location.hostname) {
			_.warn('get_file: 所要求檔案之 domain [' + o[2]
						+ '] 與所處之 domain [' + window.location.hostname + '] 不同!<br />\n您可能需要嘗試使用 '
						+ _.Class + '.include_resource()!');
			throw new Error('get_file: Different domain!');
		}

		o = _.require_netscape_privilege(e, [_s, arguments]);
		//_.debug('require_netscape_privilege return [' + typeof (o) + ('] ' + o).slice(0, 200) + ' ' + (e === o ? '=' : '!') + '== ' + 'error (' + e + ')');
		if (e === o)
			throw e;

		return o;
	}

	//	workaround for Opera: Opera 11.50: 不會 throw，但是 .responseText === ''。
	if (o.responseText === '' && is_Opera)
		throw new Error('get_file: Nothing get @ Opera');

	//	當在 local 時，成功的話 status === 0。失敗的話，除 IE 外，status 亦總是 0。
	//	status was introduced in Windows Internet Explorer 7.	http://msdn.microsoft.com/en-us/library/ms534650%28VS.85%29.aspx
	//	因此，在 local 失敗時，僅 IE 可由 status 探測，其他得由 responseText 判別。
	//_.debug('Get [' + path + '], status: [' + o.status + '] ' + o.statusText);

	return Math.floor(o.status / 100) > 3 ? [ o.status, o.responseText ] : o.responseText;
};



try{
	//	在 HTA 中，XMLHttpRequest() 比 ActiveXObject('Microsoft.XMLHTTP') 更容易遇到拒絕存取。例如在同一目錄下的 .txt 檔。
	if(new ActiveXObject('Microsoft.XMLHTTP'))
		XMLHttpRequest_type = 2;
	else
		throw 1;
} catch (e) {
	try{
		if(new XMLHttpRequest())
			XMLHttpRequest_type = 1;
	} catch (e) {

		if (typeof require === 'function'
			&& (XMLHttpRequest_type = require('fs'))) {
			//	for node.js
			XMLHttpRequest_type = XMLHttpRequest_type.readFileSync;
			_.get_file = function(path, encoding) {
				//	for node.js
				var data, i, l, tmp;
				try{
					data = XMLHttpRequest_type(path, encoding);
				}catch (e) {
					data = XMLHttpRequest_type(path);
				}

				if (typeof data !== 'string') {
					// auto detect encoding
					l = data.length;
					tmp = [];
					if (data[0] === 255 && data[1] === 254) {
						//_.debug(path + ': UTF-16LE');
						// pass byte order mark (BOM), the first 2 bytes.
						i = 2;
						while (i < l)
							tmp.push(String.fromCharCode(data[i++] + 256 * data[i++]));
					} else if (data[0] === 254 && data[1] === 255) {
						//_.debug(path + ': UTF-16BE');
						// pass byte order mark (BOM), the first 2 bytes.
						i = 2;
						while (i < l)
							tmp.push(String.fromCharCode(data[i++] * 256 + data[i++]));
					} else {
						if (l > 1)
							console.log('get_file: Unknown BOM: ' + data[0] + ',' + data[1]);
						//	ascii
						i = 0;
						while (i < l)
							tmp.push(String.fromCharCode(data[i++]));
					}
					data = tmp.join('');
				}

				return data;
			};

		} else if (typeof _configuration === 'object'
							&& typeof File === 'function') {
			//	for jslibs
			LoadModule('jsio');
			_.get_file = function(path) {
				//_configuration.stderr(path);
				var c, i,
				data = new File(path).Open('r').Read(),
				l = data.length, tmp = [],
				next_code = function() {
					c = data.charCodeAt(i++);
					return c < 0 ? c + 256 : c;
				};

				_configuration.stderr(path + ': ' + data.charCodeAt(0) + ',' + data.charCodeAt(1));
				if(data.charCodeAt(0) === -1 && data.charCodeAt(1) === -2) {
					//_.debug(path + ': UTF-16LE');
					for (i = 2; i < l;)
						tmp.push(String.fromCharCode(next_code() + 256 * next_code()));
					data = tmp.join('');
				} else if(data.charCodeAt(0) === -2 && data.charCodeAt(1) === -1) {
					//_.debug(path + ': UTF-16BE');
					for (i = 2; i < l;)
						tmp.push(String.fromCharCode(next_code() * 256 + next_code()));
					data = tmp.join('');
				}

				return data;
			};

		} else if (typeof Stream === 'function') {
			//	for JSDB
			_.get_file = function(path) {
				//_.log('get_file: ' + path);
				try {
					return new Stream(path
							//, 'r'
							).readFile();
				} catch (e) {
					//CeL.log(e.message);
				}

				var data = new Stream(path, 'b'), tmp = [],
				BOM = [data.readUInt8(), data.readUInt8() ];
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
			_.get_file = function() {
				// No XMLHttpRequest object.

				var m = 'get_file: This scripting engine does not support XMLHttpRequest.';
				_.warn(m);
				throw new Error(m);
				// firefox: This function must return a result of type any.
				//return undefined;
			};

	}
}




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
	re = function(m) {
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
		try{
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

		}catch (e) {
			// TODO: handle exception
		}

	}

	f = _s.enablePrivilege;
	//_.debug('enablePrivilege: ' + f);
	if (!f && !(_s.enablePrivilege = f =
					_.get_variable('netscape.security.PrivilegeManager.enablePrivilege')))
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
		try{
			callback = _s.caller;
		}catch (e) {
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
	else if (_.is_Array(callback))
		return callback[0].apply(_, callback[1]);
};

_// JSDT:_module_
.
/**
 * 當需要要求權限時，是否執行。（這樣可能彈出對話框）
 * Firefox 5 之後，就算要求了，對 local 也沒用，甚至會 hang 住掛掉，因此取消了。
 * @type	Boolean
 */
require_netscape_privilege.enabled = false;


//----------------------------------------------------------------------------------------------------------------------------------------------------------//

// we only need simple JSON.parse @ .get_script_base_path
var parse_JSON = typeof JSON === 'object' &&  JSON.parse ||
function(text, reviver) {
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
			_.err('JSON.parse: SyntaxError: [' + text + ']');
		//throw e;
	}
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
get_script_base_path = function(JSFN) {
	//alert('JSFN: '+JSFN);
	if(!JSFN)
		return (_.is_WWW() ?
				// window.location.pathname
				window.location.href
				: typeof WScript === 'object' ? WScript.ScriptFullName
				//	用在把檔案拉到此檔上時不方便
				//: typeof WshShell === 'object' ? WshShell.CurrentDirectory
				: '').replace(/[^\/\\]+$/, '');

	//	We don't use is_Object or so.
	//	通常會傳入的，都是已經驗證過的值，不會出現需要特殊認證的情況。
	//	因此精確繁複的驗證只用在可能輸入奇怪引數的情況。
	if (!_.is_WWW())
		return '';

	//	form dojo: d.config.baseUrl = src.substring(0, m.index);
	var i = 0, o = document.getElementsByTagName('script'), l = o && o.length || 0, j, base_path, index, node;

	for (; i < l; i++)
		try {
			//	o[i].src 多是 full path, o[i].getAttribute('src') 僅取得其值，因此可能是相對的。
			j = node = o[i];
			j = j.getAttribute && j.getAttribute('src') || j.src;

			index = j.lastIndexOf(JSFN);
			//alert(j + ',' + JSFN + ',' + I);
			if (index !== -1){
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

//	TODO: dirty hack
var setup_extension = function(extension, node) {
	if (extension === '.js' || extension === '.txt'){
		//	TODO: unload 時 delete .script_node
		//_.script_node = node;
		var env = _.env, config;
		try {
			//	IE8 沒有 .innerText || .nodeValue
			config = node.innerText || (config = node.firstChild) && config.nodeValue || node.innerHTML;
			if (config && (config = parse_JSON(config)))
				env.script_config = config;
		} catch (e) {
			_.err('extension: Invalid configuration: [' + node.outerHTML + ']');
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
is_module_pattern = function(test_string){
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
 * TODO
 * 現在還有很大問題!
 * @param {String} resource_string	resource to test
 * @returns	{Boolean}	resource 是否為 module (true: is module, false: is URL?)
 */
request_item_maybe_module = function(resource_string) {
	return resource_string.charAt(0) === '.'
		|| resource_string.charAt(0) === '/'
			|| resource_string.indexOf(':') !== -1
			// || resource_string.indexOf('%')!==-1
			|| /\.(js|css)$/i.test(resource_string) ? false :
				/\.$/.test(resource_string)
				|| _.is_module_pattern(resource_string);
};


/**
 * library 相對於 HTML file 的 base path
 */
var library_base_path,

setup_library_base_path = function() {
	if(!library_base_path){
		library_base_path = _.env.registry_path
			|| _.get_script_base_path(_.env.main_script_name)
			|| _.get_script_base_path();

		if (!library_base_path
				&& _.is_Object(_.get_old_namespace())
				&& (library_base_path = _.get_old_namespace().library_path)) {
			if (/^[^\/]/.test(library_base_path)) {
				//	library_base_path is relative path
				//_.debug(_.get_script_full_name());
				library_base_path = _.simplify_path(_.get_script_full_name().replace(/[^\\\/]*$/, library_base_path));
			}
			library_base_path = _.simplify_path(library_base_path).replace(/[^\\\/]*$/, '');
		}

		if (library_base_path) {
			//_.debug('library base path: [' + library_base_path + ']');
			setup_library_base_path = function() {
				return library_base_path;
			};
		} else
			_.warn(_.Class + ': Cannot detect the library base path!');
	}

	return library_base_path;
};

_// JSDT:_module_
.
/**
 * get the path of specified module.
 * @example
 * //	存放 data 的 path
 * path = library_namespace.get_module_path(this, '');
 * 
 * @param {String} module_name	module name
 * @param	{String} file_name	取得在同一目錄下檔名為 file_name 之 path。若填入 '' 可取得 parent 目錄。
 * @returns	{String} module path
 */
get_module_path = function(module_name, file_name){
	module_name = get_module_name(module_name);
	var m;
	if (!module_name || !(m = _.split_module_name(module_name)))
		return module_name;

	//_.debug('test [' + module_name + ']', 1, 'get_module_path');
	var module_path = library_base_path || setup_library_base_path();
	//_.debug('library_base_path: ' + library_base_path, 1, 'get_module_path');

	module_path += m.join(/\//.test(module_path)?'/':'\\') + _.env.script_extension;
	//_.debug('module_path: ' + module_path, 1, 'get_module_path');

	if (typeof file_name !== 'undefined')
		module_path = module_path.replace(/[^\/]+$/, file_name);
	else if (_.getFP)
		module_path = _.getFP(module_path, 1);

	//_.debug(module_name + ': return [' + module_path + ']', 1, 'get_module_path');

	return module_path;
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
if(0)
_// JSDT:_module_
.
deprecated_simplify_path = function(path){
	if(typeof path === 'string'){
		//	去除前後空白
		path = path.replace(/\s+$|^\s+/,'').replace(/\/\/+/g,'/');

		var p, is_absolute = '/' === path.charAt(0);

		while( path !== (p=path.replace(/\/\.(\/|$)/g,function($0,$1){return $1;})) )
			path = p;
		_.debug('1. '+p);

		while (path !== (p = path.replace(
				/\/([^\/]+)\/\.\.(\/|$)/g, function($0, $1, $2) {
					alert( [ $0, $1, $2 ].join('\n'));
					return $1 === '..' ? $0 : $2;
				})))
			path = p;
		_.debug('2. '+p);

		if(is_absolute)
			path = path.replace(/^(\/\.\.)+/g,'');
		else
			path = path.replace(/^(\.\/)+/g,'');
		_.debug('3. '+p);

		if(!path)
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
simplify_path = function(path){
	if(typeof path === 'string'){
		var i, j, l, is_absolute, head;

		path = path
			.replace(/^[\w\d\-]+:\/\//, function($0) {
						head = $0;
						return '';
					})
			//	去除前後空白
			//.replace(/\s+$|^\s+/g,'')
			//.replace(/\/\/+/g,'/')
			.split(/[\/\\]/);

		i = 0;
		l = path.length;
		is_absolute = !path[0];

		for (; i < l; i++) {
			if(path[i] === '.')
				path[i] = '';

			else if(path[i] === '..'){
				j = i;
				while (j > 0)
					if (path[--j] && path[j] != '..') {
						// 相消
						path[i] = path[j] = '';
						break;
					}
			}
		}

		if(!is_absolute && !path[0])
			path[0] = '.';

		path = path.join(_.env.path_separator)
			.replace(/[\/\\]{2,}/g, _.env.path_separator)
			.replace(is_absolute ? /^([\/\\]\.\.)+/g : /^(\.[\/\\])+/g, '')
			;

		if(!path)
			path = '.';

		if(head)
			path = head + path;
	}

	return path;
};



/**
 * 載入 module 時執行 extend 工作
 * @param module
 * @param extend_to
 * @param {Function} callback
 * @returns
 * @inner
 * @ignore
 */
var extend_module_member = function(module, extend_to, callback) {
	var i, l;

	//typeof name_space !== 'undefined' && _.debug(name_space);
	//	處理 extend to what name-space
	if (!extend_to && extend_to !== false
			//	若是在 .setup_module 中的話，可以探測得到 name_space？（忘了）
			//|| typeof name_space !== 'function'
			|| !_.is_Object(extend_to))
		//	預設會 extend 到 library 本身下
		extend_to = _;

	if (extend_to && (i = _.get_module(module))) {
		var ns = i, kw = _.env.not_to_extend_keyword, no_extend = {};
		//_.debug('load [' + module + ']:\nextend\n' + ns);

		if (kw in ns) {
			l = ns[kw];
			if (typeof l === 'string' && l.indexOf(',') > 0)
				l = l.split(',');

			if (typeof l === 'string') {
				no_extend[l] = 1;
			} else if (_.is_Array(l)) {
				for (i = 0; i < l.length; i++)
					// WScript.Echo('no_extend '+l[i]),
					no_extend[l[i]] = 1;
			} else if (_.is_Object(l)) {
				no_extend = l;
			}

			no_extend[kw] = 1;
		}

		//	'*': 完全不 extend
		if (!no_extend['*']) {
			no_extend.Class = 1;
			//	this: 連 module 本身都不 extend 到 library name-space 下
			var no_self = 'this' in no_extend;
			if(no_self)
				delete no_extend['this'];

			l = [];
			for (i in ns)
				if (!(i in no_extend))
					l.push(i);

			//_.debug('load [' + module + ']:\nextend\n' + l + '\n\nto:\n' + (extend_to.Class || extend_to));
			_.extend(l, extend_to, ns);

			/*
			 * extend module itself.
			 * e.g., .net.web -> .web
			 */
			if (!no_self && (i = _.split_module_name(module))
							&& (i = i.pop()) && !(i in _))
						_[i] = ns;
		}

	}


	try {
		i = _.is_Function(callback) && callback(undefined, module);
	} catch (e) {
	}
	return i;
};




_// JSDT:_module_
.
/**
 * 不使用 eval 的方法，get the module namespace of specific module name.
 * @param	{String} module_name	module name
 * @returns	null	some error occurred
 * @returns	namespace of specific module name
 */
get_module = function(module_name) {
	module_name = _.split_module_name.call(_, module_name);

	//	TODO: test module_name.length
	if(!module_name)
		return null;

	var i = 0, l = module_name.length, name_space = _;
	//	一層一層 call name-space
	while (i < l)
		try {
			name_space = name_space[module_name[i++]];
		} catch (e) {
			return null;
		}

	return name_space;
};




_// JSDT:_module_
.
/**
 * 載入 module。
 * <p>
 * 本函數會預先準備好下層 module 定義時的環境，但請盡量先 call 上層 name-space
 * 再定義下層的，否則可能會出現問題，如 memory leak 等。
 * </p>
 * 
 * @param {String}
 *            [module_name]
 *            <p>
 *            module name to register: 本 module 之 name(id)
 *            </p>
 * @param {Function}
 *            code_for_including
 *            <p>
 *            若欲 include 整個 module 時，需囊括之 code。
 *            </p>
 *            code_for_including(
 *            		{Function} library_namespace:	namespace of library,
 *            		load_arguments:	呼叫時之 argument(s)
 *            )
 * @returns null
 *          <p>
 *          invalid module
 *          </p>
 * @returns {Object}
 *          <p>
 *          下層 module 之 name-space
 *          </p>
 * @returns undefined
 *          <p>
 *          something error, e.g., 未成功 load，code_for_including
 *          return null, ..
 *          </p>
 */
setup_module = function(module_name, code_for_including, parent_module_name) {
	// adapt arguments
	var i, l, name_space, allow_inherit,
	/**
	 * translate {String} code_for_including to function
	 */
	name = function() {
		//	null module constructor
		if (!code_for_including)
			code_for_including = function() {
				return function() {};
			};

		else if (typeof code_for_including === 'string')
			code_for_including =
				// (new Function(code_for_including)).bind(CeL)
				new Function(code_for_including);
	};

	if (typeof module_name === 'string') {
		name();
		if (_.is_Function(code_for_including)
				|| _.is_Object(code_for_including))
			code_for_including.module_name = module_name;

	} else {
		code_for_including = module_name;
		// TODO: 不設定時會從呼叫時之 path (directory + file name) 取得
	}

	if (_.is_Object(code_for_including)) {
		name_space = code_for_including;
		code_for_including = name_space.code;
		delete name_space.code;
		name();

		_.extend(name_space, code_for_including);

	} else
		name();

	if (!module_name && !(module_name = code_for_including.module_name)) {
		_.err('The module name is not specified!');
		_.debug(code_for_including);
		return null;
	}

	//	sub module
	if (_.is_Object(l = code_for_including.sub_module)) {
		name_space = module_name + _.env.module_name_separator;
		for (i in l)
			_.setup_module(name_space + i, l[i], module_name);
	}

	//_.debug('prepare to setup module [' + module_name + ']', 1, 'setup_module');

	/**
	 * 測試 dependency list 是不是皆已 loaded。
	 * 會合併 parent module 之 request。
	 * <dl>
	 * <dt>依 (module name-space).require 設定 dependency list</dt>
	 * <dd>(module name-space).require_module = module name[]</dd>
	 * <dd>(module name-space).require_variable = {variable_name: full_name_with_module_name}</dd>
	 * <dd>(module name-space).require_URL = URL[]</dd>
	 * </dl>
	 * TODO:
	 * 就算輸入 module path 亦可自動判別出為 module 而非普通 resource。
	 */
	var require = _.parse_require(code_for_including.require, code_for_including.require_separator, parent_module_name && module_require_chain[parent_module_name]), URL_to_load, module_to_load;
	if (_.is_Object(require)) {
		_.extend( {
			require_module : 'module_to_load',
			require_variable : 'variable',
			require_URL : 'URL_to_load'
		}, code_for_including, require);

		if (_.is_Array(require.module_to_load)
				&& require.module_to_load.length)
			module_to_load = require.module_to_load;

		if (_.is_Array(require.URL_to_load)
				&& require.URL_to_load.length)
			URL_to_load = require.URL_to_load;
	}


	if (module_to_load || URL_to_load) {

		//_.debug('module [' + (typeof module_name === 'string' ? module_name: undefined) + '] need to load:\n' + module_to_load, 1, 'setup_module');

		//	check 登錄
		if (module_name in module_require_chain) {
			//	可能是循環參照(circular dependencies)，還是執行 module code_for_including
			//	若本身已經在需求名單中則放行，避免相互需要造成堆疊空間不足(Out of stack space)或 Stack overflow。
			_.warn('Skip to load dependencies [' + module_to_load + '] of module [' + module_name + '] because the module is already in the require chain.\nmodule 正在需求鏈中。也許是循環參照(circular dependencies)？');

		}else{

			//	登錄: module_name 正在 call。若由其他 module call 的，那就登錄此 parent module。
			module_require_chain[parent_module_name || module_name] = require;

			// include required modules
			if (module_to_load && _.use(module_to_load)) {
				//	若有未載入之 dependencies，則不載入 module。
				if(!_.is_local() || _.is_debug(2))
					_.warn(_.Class + '.setup_module: Module [' + module_name + '] fault to load dependencies [' + module_to_load + ']. You have to load it later.');

				//	throw and wait .include_resource() to call callback(path, module_name)
				//	為了預防後面還有 code 而繼續執行下去，所以採用 throw 而非 return。
				throw new Error(_.Class + '.setup_module: Module [' + module_name + '] 無法以 Ajax load required module!\nrequired module list: ['+module_to_load+']');
			}

			if (URL_to_load) {
				// 嘗試直接載入
				for (i in URL_to_load)
					try {
						l = _.get_file(i = URL_to_load[i]);
						if (l)
							_.eval_code(l);
						else
							throw 1;

					} catch (e) {
						_.err('module [' + (typeof module_name === 'string' ? module_name : undefined) + '] load URL [' + i
								+ '] error. You have to load it later.');
						// return and wait .include_resource() to call callback(path, module_name)
						throw new Error(_.Class + '.setup_module: module [' + module_name + '] 無法以 Ajax load required URL [' + i + ']!');
					}
			}

		}

	}
	// else	所有需求皆已在 queue 中，因此最後總**有機會（不包括發生錯誤的情況！）**會被 load，故 skip。


	var module_name_list = _.split_module_name(module_name);
	if (!module_name_list) {
		_.err('Illegal module name: [' + module_name + ']!');
		_.debug(code_for_including);

		//	執行完清除載入中之登錄
		if(module_name in module_require_chain)
			delete module_require_chain[module_name];

		return null;
	}

	//	若皆載入: 準備執行 module code_for_including
	//	一層一層準備好、預定義 name-space
	for (i = 0, l = module_name_list.length - 1, name_space = _; i < l; i++) {
		if (!name_space[name = module_name_list[i]])
			/**
			 * <code>
			 * _.debug('預先定義 module [' + _.to_module_name(module_name.slice(0, i + 1)) + ']'),
			 * </code>
			 */
			name_space[name] = new Function(
					'//	null constructor for module ' +
					_.to_module_name(module_name_list.slice(0, i + 1)));
		name_space = name_space[name];
	}
	//	name_space 這時是 module 的 parent module。

	if (
			// 尚未被定義或宣告過
			!name_space[name = module_name_list[l]] ||
			// 可能是之前簡單定義過，例如被上面處理過。這時重新定義，並把原先的 member 搬過來。
			!name_space[name].Class) {

		// 保留原先的 name-space，for 重新定義
		l = name_space[name];

		// extend code, 起始 name-space
		try {
			/**
			 * 真正執行 module code.
			 * <code>
			 * _.debug('including code of [' + _.to_module_name(module_name) + ']..'),
			 * </code>
			 * TODO: code_for_including(_, load_arguments)
			 */
			i = code_for_including.call(code_for_including, _);
			//	http://developer.51cto.com/art/200907/134913.htm
			if (!i.prototype.constructor)
				i.prototype.constructor = i;
			if('allow_inherit' in i){
				allow_inherit = i.allow_inherit;
				delete i.allow_inherit;
			}
			//code_for_including.toString = function() { return '[class_template ' + name + ']'; };
			//i.toString = function() { return '[class ' + name + ']'; };
		} catch (e) {
			_.err(_.Class + '.setup_module: load module [' + _.to_module_name(module_name) + '] error!\n' + e.message);
			i = undefined;
		}

		if (i === undefined)
			//	error?
			return undefined;

		name_space = name_space[name] = i;

		// 把原先的 member 搬過來
		if (l) {
			delete l.Class;
			//	may use: _.extend()
			for (i in l)
				name_space[i] = l[i];
		}
		name_space.Class = _.to_module_name(module_name);
	}

/*
	l=[];
	for(i in name_space)
		l.push(i);
	WScript.Echo('Get members:\n'+l.join(', '));
*/

	//	執行完清除載入中之登錄
	if(module_name in module_require_chain)
		delete module_require_chain[module_name];

	set_loaded(name_space.Class, code_for_including, allow_inherit);

	//_.debug('module [' + module_name + '] 設定 OK.', 1, 'setup_module');

	return name_space;
};



_// JSDT:_module_
.
/**
 * 是否 cache code。
 * 若不是要重構 code 則不需要。
 * undefined: 依照預設
 * Boolean: 明確設定，但如此即無法繼承。
 * @type	Boolean, undefined
 */
cache_code = /*_.is_debug() || */ undefined;

/**
 * cache 已經 include 之函式或 class。
 * loaded_module[module_name] =
 * 		undefined: 尚未載入。
 * 		{Boolean} true	已經載入，但未 cache code。
 * 		{Function} code	已經載入，這是 cache 了的 code。
 * @inner
 * @ignore
 * @type Object
 */
var loaded_module = {
};


/**
 * 紀錄 **正在 load** 之 module 所需之 dependency list。
 * module_require_chain[module_name] = [未載入之 dependency list by .parse_require()] requesting now.
 * 
 * ** 這一項僅在 .setup_module() 發現 dependency list 尚未載入完時，預防循環 request 而用。
 * @inner
 * @ignore
 * @type Object
 */
var module_require_chain = {
};



_// JSDT:_module_
.
/**
 * 將輸入的 string 分割成各 module 單元。<br />
 * need environment_adapter()<br />
 * ** 並沒有對 module 做完善的審核!
 * @param {String} module_name	module name
 * @returns	{Array}	module unit array
 */
split_module_name = function(module_name) {
	//_.debug('[' + module_name + ']→[' + module_name.replace(/\.\.+|\\\\+|\/\/+/g, '.').split(/\.|\\|\/|::/) + ']');
	if (typeof module_name === 'string')
		module_name = module_name
			//.replace(/\.\.+|\\\\+|\/\/+/g, '.')
			.replace(/[\\\/]/g, '.')
			.split(/[.\\\/]|::/);

	if (_.is_Array(module_name) && module_name.length) {
		//	去除 library name
		if (module_name.length > 1 && _.Class === module_name[0])
			module_name.shift();
		return module_name;
	} else
		return null;
};


/**
 * 取得建構 code 之 module name。不以 library name 起始。
 * // get_module_name()
 * code_for_including.module_name === 'module_name';
 * // _.to_module_name()
 * library_name.module_parent.module_child.Class === 'library_name.module_parent.module_child' === 'library_name.module_name';
 * TODO:
 * 有效率的整合 get_module_name() 與 _.to_module_name()
 * @param code_for_including
 * @returns {String} module name
 */
var get_module_name = function(code_for_including) {
	//_.debug('module_name: ' + (_.is_Function(code_for_including) && code_for_including.module_name ? code_for_including.module_name : code_for_including), 1, 'get_module_name');
	//_.debug('Class: ' + (_.is_Function(code_for_including) && code_for_including.Class ? code_for_including.Class : code_for_including), 1, 'get_module_name');

	return _.is_Function(code_for_including) && code_for_including.module_name ?
			code_for_including.module_name
			: code_for_including;
};


_// JSDT:_module_
.
/**
 * 取得 module 之 name。以 library name 起始。
 * @returns {String} module name start with library name
 */
to_module_name = function(module, separator) {
	if (_.is_Function(module))
		module = module.Class;
	else if (module === _.env.main_script_name)
		module = _.Class;

	if (typeof module === 'string')
		module = _.split_module_name(module);

	var name = '';
	if (_.is_Array(module)) {
		if (typeof separator !== 'string')
			separator = _.env.module_name_separator;
		if (module[0] !== _.Class)
			name = _.Class + separator;
		name += module.join(separator);
	}

	return name;
};



//TODO
_// JSDT:_module_
.
get_require = function(func) {
	if (_.is_Function(func) || _.is_Object(func))
		return func.require;

	if (_.is_Function(func = loaded_module[_.to_module_name(func)]))
		return func.require_module;
};

//TODO
_// JSDT:_module_
.
unload_module = function(module, g){
	///	<returns>error</returns>
	if(_.is_debug())
		throw new Error('UNDO');

};


_// JSDT:_module_
.
/**
 * 判斷 module 是否存在，
 * TODO
 * 以及是否破損。
 * @param	{String} module_name	module name
 * @param	{Array} module_name	module name list
 * @returns	{Boolean} 所指定 module 是否全部存在以及良好。
 */
is_loaded = function(module_name) {
	if (_.is_Array(module_name)) {
		for ( var i = 0, l = module_name.length; i < l; i++)
			if (!loaded_module[_.to_module_name(module_name[i])])
				return false;
		return true;
	}

	// var _s = arguments.callee;
	//_.debug('test ' + _.to_module_name(module_name));

	/*
	var code = loaded_module[_.to_module_name(module_name)], sub_module, prefix;
	if (_.is_Function(code) && (sub_module = code.sub_module)) {
		sub_module = sub_module.split('|');
		prefix = module_name + _.env.module_name_separator;
		for ( var i = 0, l = module_name.length; i < l; i++){
			_.debug('check [' + prefix + sub_module[i] + ']', 1, 'is_loaded');
			if (!_.is_loaded(prefix + sub_module[i]))
				return false;
		}
		return true;
	}
	*/

	return !!loaded_module[_.to_module_name(module_name)];
};



/**
 * 設定登記 module 已載入。
 * @inner
 * @private
 */
var set_loaded = function(module_name, code_for_including,
		cache_code) {
	// _.debug(_.to_module_name(module_name));
	loaded_module[_.to_module_name(module_name)] =
		(cache_code || _.cache_code) && code_for_including || true;
};





function get_include_resource(split) {
	if (!_.is_WWW(true))
		//	誤在非 HTML 環境執行，卻要求 HTML 環境下的 resource？
		//if(typeof document==='object')_.warn(_.Class + ".include_resource: Can't load [" + path + "]!");
		return undefined;

	var i, nodes = document.getElementsByTagName('script'), h, hn, count = 0, p, l;

	function normalize(p) {
		//alert(p);
		//	正規化: URL 使用 '/' 而非 '\'
		//if (p.indexOf('/') === -1 && p.indexOf('\\') !== -1)
		//	p = p.replace(/\\/g, '/');
		//alert(p);
		return _.simplify_path(p);
	}

	if (split)
		h = {
			script : {},
			css : {}
		},
		hn = h.script;
	else
		hn = h = {};

	l = nodes.length;
	for (i = 0; i < l; i++) {
		p = normalize(nodes[i].src);
		if (p)
			hn[p] = 1, count++;
	}

	nodes = document.getElementsByTagName('link');
	if (split)
		hn = l.css;

	l = nodes.length;
	for (i = 0; i < l; i++) {
		p = normalize(nodes[i].href);
		if (p)
			hn[p] = 1, count++;
	}

	return [ h, count ];
};

/**
 * 已經 include_resource 了哪些 JavaScript 檔（存有其路徑）.
 * included_path[path] =
 * 		undefined: 尚未載入。
 * 		true	已經載入。
 * 
 * TODO:
 * included_path[index] = [time stamp, path],
 * @inner
 * @ignore
 * @type Object
 */
var included_path;

function included_path_init(){
	var s = get_include_resource();
	if(s)
		included_path = s[0];
	return included_path || {};
}


_// JSDT:_module_
.
is_included = function(path) {
	return !!(included_path || included_path_init())[path];
};

var set_included = function(path, timeout_id) {
	(included_path || included_path_init())[path] = timeout_id;
},

get_included = function(path) {
	return (included_path || included_path_init())[path];
};



_// JSDT:_module_
.
/**
 * include resource of module.
 * @example
 * //	外部程式使用時，通常用在 include 相對於 library 本身路徑固定的檔案。
 * //	例如 file_name 改成相對於 library 本身來說的路徑。
 * CeL.include_module_resource('../../game/game.css');
 * 
 * library_namespace.include_module_resource('select_input.css', this);
 * 
 * @param {String} file_name	與 module 位於相同目錄下的 resource file name
 * @param {String} [module_name]	呼叫的 module name。未提供則設成 library base path，此時 file_name 為相對於 library 本身路徑的檔案。
 * @returns
 * @since	2010/1/1-2 13:58:09
 */
include_module_resource = function(file_name, module_name) {
	//var m = _.split_module_name.call(_, module_name);
	//if (m)m[m.length - 1] = file_name;
	return _.include_resource.call(_,
			_.get_module_path(get_module_name(module_name) || _.Class, file_name));
};



//----------------------------------------------------------------------------------------------------------------------------------------------------------//


_// JSDT:_module_
.
/**
 * Include specified module.<br />
 * 
 * 會先嘗試使用 XMLHttpRequest 同步(synchronously)的方式依序取得、載入 module。
 * 無法以 XMLHttpRequest 循序載入時，若未設定 callback，會回傳錯誤。若設定 callback，則會插入 node，以非同步(asynchronously)的方式載入 module，於載入完成執行 callback。
 * 		若因為 browser 安全性設定等問題而無法取得，則會回傳 -1，表示將以非同步(asynchronously)的方式載入 module。因為 module 尚未載入，在此階段尚無法判別此 module 所需之 dependency list。此 list 會被作為引數傳入 callback。
 * 
 * 注意：以下的 code 中，CeL.warn 不一定會被執行（可能會、可能不會），因為執行時 log 可能尚未被 include。<br />
 * 此時應該改用 CeL.set_run('application.log', callback);<br />
 * code in head/script/:
 * <code>
 * CeL.use('code.log');
 * CeL.warn('WARNING message');
 * </code>
 * **	在指定 callback 時 name_space 無效！
 * **	預設會 extend 到 library 本身之下！
 * @param	{String} module	module name
 * @param	{Function} [callback]	callback function | [callback, 進度改變時之 function (TODO)]
 * @param	{Object|Boolean} [extend_to]	extend to which name-space<br />
 * 		false:	just load, don't extend to library name-space<br />
 * 		this:	extend to global<br />
 * 		object:	extend to specified name-space that you can use [name_space]._func_ to run it<br />
 * 		(others, including undefined):	extend to root of this library. e.g., call CeL._function_name_ and we can get the specified function.
 * @returns	{Error}
 * @returns	-1	will execute callback after load, 不代表 load module 了!
 * @returns	{undefined}	no error, OK
 * @example
 * CeL.use('code.log', function(){..});
 * CeL.use(['code.log', 'code.debug']);
 * @note
 * 'use' 是 JScript.NET 的保留字.
 */
use = function requires(module, callback, extend_to, force){
	var _s = requires, i, l, module_path;

	//_.debug('load [' + module + ']');
	if (!module)
		return undefined;

	/*
	if (arguments.length > 3) {
		l = arguments.length;
		name_space = arguments[--l];
		callback = arguments[--l];
		--l;
		for (i = 0; i < l; i++)
			_s.call(_, arguments[i], callback, name_space);
		return undefined;
	}
	*/

	if (_.is_Array(module)) {
		var error;
		for (i = 0, l = module.length; i < l; i++) {
			error = _s.call(_, module[i], 0, extend_to);
			if (error)
				return error;
		}
		try {
			i = _.is_Function(callback) && callback(undefined, module);
		} catch (e) {
		}
		return i;
	}

	if (!force && _.is_loaded(module)
			|| !(module_path = _.get_module_path(module))) {
		try {
			i = _.is_Function(callback)
			&& callback(undefined, module);
		} catch (e) {
		}
		return i;
	}

	//_.debug('load [' + module + ']:\ntry to load [' + module_path + ']');

	//	including code
	try {
		try{
			//_.debug('load [' + module_path + ']');
			//_.debug(_.get_file(module_path, _.env.source_encoding));
			//WScript.Echo(_.eval);
			i = _.get_file(module_path, _.env.source_encoding);
			if (i)
				//	eval @ global. 這邊可能會出現 security 問題。
				//	TODO: 以其他方法取代 eval 的使用。
				_.eval_code(i);
			else
				//console.log('Get no result from [' + module_path + ']! Some error occurred?'),
				_.warn('Get no result from [' + module_path + ']! Some error occurred?');
			i = 0;
		} catch (e) {
			i = e;
		}

		if (!i)
			return extend_module_member(module, extend_to, callback);

		//	依序載入失敗
		if (callback && _.is_WWW()) {
			//	不能直接用 .get_file()，得採用其他方法的狀況。但只在有 callback 時才 include，否則當下 block 的都沒執行，可能出亂子。
			//	** 較新之 browser 通常需要使用 callback 的方法，不能使用 "CeL.use('module');_do_some_thing_;"!!
			// TODO: 在指定 callback 時使 name_space 依然有效。
			_.include_resource(module_path, {
				module : module,
				callback : function(){
					extend_module_member(module, extend_to, callback);
				},
				start : new Date(),
				timeout : 80,
				global : _
			},
			//	正在 call(循環參照?)則強制 include
			module in module_require_chain);
			//	TODO: 一次指定多個 module 時可以知道進度，全部 load 完才 callback()。
			//	此時 callback=[callback, 進度改變時之 function]
			//	return 進度 Object
			return -1;
		}
		throw i;

	} catch (e) {
		//_.err(e);

		// http://www.w3.org/TR/DOM-Level-2-Core/ecma-script-binding.html
		// http://reference.sitepoint.com/javascript/DOMException
		if (_.is_type(e, 'DOMException') && e.code === 1012) {
			if(!_.is_local() || _.is_debug(2))
				_.err(_.Class
					+ '.use:\n'
					+ e.message + '\n'
					+ module_path
					+ '\n\n程式可能呼叫了一個'
					+ (_.is_local() ? '不存在的，\n或是繞經上層目錄'
								: 'cross domain')
								+ '的檔案？\n\n請嘗試使用相對路徑，\n或加入  callback: '
								+ _.Class
								+ '.use(module, callback function, name_space)');
		} else if (_.is_type(e, 'Error') && (e.number & 0xFFFF) == 5
				|| _.is_type(e, 'XPCWrappedNative_NoHelper')
						&& ('' + e.message).indexOf('NS_ERROR_FILE_NOT_FOUND') !== -1) {
			_.err(_.Class + '.use: 檔案可能不存在或存取被拒？\n[' + module_path + ']' +
					(_.get_error_message
							? ('<br />' + _.get_error_message(e))
							: '\n' + e.message
					)
				);
		} else if(!_.is_local() || _.is_debug(2))
			_.err(_.Class + '.use: Cannot load [<a href="' + module_path + '">' + module + '</a>]!'
					+ (_.get_error_message
							? ('<br />' + _.get_error_message(e) + '<br />')
							: '\n[' + (e.constructor) + '] ' + (e.number ? (e.number & 0xFFFF) : e.code) + ': ' + e.message + '\n'
					)
					+ '抱歉！在載入其他網頁時發生錯誤，有些功能可能失常。\n重新讀取(reload)，或是過段時間再嘗試或許可以解決問題。');
		//_.log('Cannot load [' + module + ']!', _.log.ERROR, e);

		return e;
	}

};


_// JSDT:_module_
.
is_local = function() {
	return !_.is_WWW() || window.location.protocol === 'file:';
};

/*
bad: sometimes doesn't work. e.g. Google Maps API in IE
push inside window.onload:
window.onload=function(){
include_resource(p);
setTimeout('init();',2000);
};

way 3:	ref. dojo.provide();, dojo.require();
document.write('<script type="text/javascript" src="'+encodeURI(p)+'"><\/script>');

TODO:
encode

*/
;

_// JSDT:_module_
.
/**
 * Including other JavaScript/CSS files asynchronously.
 * 
 * TODO:
 * timeout for giving up
 * use document.createElementNS()
 * http://headjs.com/#theory
 * 
 * @param {String} resource path
 * @param {Function|Object} callback
 * 		use_write ? test function{return } : callback function(path)
 * 		/	{callback: callback function(path, module), module: module name, global: global object when run callback}
 * @param {Boolean} [use_write]	use document.write() instead of insert a element to <head>
 * @param {Number} [type]	1: is a .css file, others: script
 */
include_resource = function include_resource(path, callback, force, timeout, type, use_write) {
	if (!_.is_WWW())
		return undefined;

	var _s = _.include_resource, s, t, h;

	if (_.is_Array(path)) {
		for (s = 0, t = path.length; s < t; s++)
			_s(path[s], callback, use_write, type);
		return undefined;
	}

	if (_.is_Object(force) && arguments.length === 3) {
		timeout = force.timeout;
		type = force.type;
		use_write = force.use_write;
		force = force.force;
	}

	path = _.simplify_path(path);
	if(!force && _.is_included(path)){
		//	已經載入完成
		_.is_Function(callback) && _s.wait_to_call(callback, path);
		return undefined;
	}
	set_included(path);

	/* const */
	var css = 1, js = 0;
	//_.debug('Including [' + path + '].', 1, 'include_resource');
	if (typeof type === 'undefined')
		type = /\.css$/i.test(path) ? css : js;

	t = 'text/' + (type === css ? 'css' : 'javascript');
/*@cc_on
//use_write=1;	//	old old IE hack
@*/
	if (!use_write)
		try {
			// Dynamic Loading / lazy loading
			// http://code.google.com/apis/ajax/documentation/#Dynamic
			//	http://en.wikipedia.org/wiki/Futures_and_promises
			s = document.createElement(type === css ? 'link' : 'script');
			s.width = s.height = 0;

			//	http://wiki.forum.nokia.com/index.php/JavaScript_Performance_Best_Practices
			//	** onload 在 local 好像無效
			var done = false;
			//	TODO:
			//	http://www.xdarui.com/articles/66.shtml
			//	使用 attachEvent 註冊事件，然後用 detachEvent。在ie6上就算把onreadystatechange重置為null了，但只是把引用給斷開了，而回調還存在內存之中，只是無法訪問了而已，有可能造成內存的溢出。
			s.onload = s.onreadystatechange = function(e) {
				var r;
				//_.debug('Loading [' + path + '] .. ' + this.readyState);
				//alert('Loading [' + path + '] .. ' + s.readyState);

				//	navigator.platform === 'PLAYSTATION 3' 時僅用 'complete'? from requireJS
				if (!done && (!(r = this.readyState /* 'readyState' in this ? this.readyState : e.type !== 'load' */) || r === 'loaded' || r === 'complete')) {
					done = true;
					//_.debug('[' + (this.src || s.href) + '] loaded.');
					//alert('[' + (this.src || s.href) + '] loaded.');

					//this.onload = this.onreadystatechange = null;
					try{
						delete this.onload;
					}catch (e) {
						//	error on IE5–9: Error: Object doesn't support this action
						this.onload = null;
					}
					try{
						delete this.onreadystatechange;
					}catch (e) {
						//	error on IE5–9: Error: Object doesn't support this action
						this.onreadystatechange = null;
					}

					//	callback 完自動移除 .js。隨即移除會無效。.css 移除會失效。CSS 不設定 timeout。
					setTimeout(function() {
						if (type !== css)
							h.removeChild(s);
						h = s = null;
					}, 1);

					//	.css 移除會失效。CSS 不設定 timeout。
					var tid = get_included(path);
					if (tid) {
						clearTimeout(tid);
						set_included(path, 0);
					}

					if(callback)
						_s.wait_to_call(callback, path);

				}
			};

			s.type = t;
			if (type === css)
				// s.media = 'all',//'print'
				s.rel = 'stylesheet',
				s.href = path;
			else
				//	.css 移除會失效。CSS 不設定 timeout。
				set_included(path, setTimeout(function() {
					_.warn('include_resource: Loading failed (timeout ' + timeout + ' ms): [' + path + ']');
					//alert('include_resource: Loading failed (timeout ' + timeout + ' ms): [' + path + ']');

					// 自動移除 .js。
					h.removeChild(s);
					h = s = null;

					if(callback)
						_s.wait_to_call(callback, path, true);
				}, timeout || (timeout = _.is_local() ? 2000 : 8000))),
				//	TODO: see jquery-1.4a2.js: globalEval
				//	if (is_code) s.text = path;
				//	http://www.lampblog.net/2010/12/html5%E4%B8%ADscript%E7%9A%84async%E5%B1%9E%E6%80%A7%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BDjs/
				//	如果 async 屬性為 true，則腳本會相對於文檔的其餘部分異步執行，這樣腳本會可以在頁面繼續解析的過程中來執行。
				//	如果 async 屬性為 false，而 defer 屬性為 true，則腳本會在頁面完成解析時得到執行。
				//	如果 async 和 defer 屬性均為 false，那麼腳本會立即執行，頁面會在腳本執行完畢繼續解析。
				//	http://www.cnblogs.com/darrel/archive/2011/08/02/2124783.html
				//	當script的 async 屬性被置為 true 時，腳本的執行序為異步的。即不按照掛載到 Dom 的序順執行 ，相反如果是 false 則按掛載的順序執行。
				s.async = true,
				//s.setAttribute('src', path);
				s.src = path;

			//	HTML5: document.head === document.getElementsByTagName('head')[0]
			if(h = document.head || document.getElementsByTagName('head')[0]
					|| (document.body.parentNode || document.body).appendChild(document.createElement('head'))
					)
				//h.parentNode.insertBefore(s, h);
				h.appendChild(s);

			//_.debug('HTML:\n' + document.getElementsByTagName('html')[0].innerHTML);
			/*
			 * from jquery-1.4a2.js:
			 * Use insertBefore instead of appendChild to circumvent an IE6 bug
			 *  when using globalEval and a base node is found.
			 * This arises when a base node is used (#2709).
			 * @see
			 * http://github.com/jquery/jquery/commit/d44c5025c42645a6e2b6e664b689669c3752b236
			 * 不過這會有問題: 後加的 CSS file 優先權會比較高。因此，可以的話還是用 appendChild。
			 */
			//h.insertBefore(s, h.firstChild);

			return s;

		} catch (e) {
		}

	//_.debug('Writing code for [' + path + '].');
	//	直接寫入，
	//	TODO: 若在 window.onload 之後使用會清空頁面!
	if (use_write
			|| typeof use_write === 'undefined' // && TODO: 正在 load 頁面
			)
		document.write(type === css ?
				//	TODO: security concern: 對 path 作 filter
				'<link type="' + t + '" rel="stylesheet" href="' + path + '"><\/link>'
				: '<script type="' + t + '" src="' + path
					// language="JScript"
					+ '"><\/script>');

	//	若是到這邊還沒 load，會造成問題。
	//set_included(path);

	if (callback)
		_s.wait_to_call(callback, path);
};


_// JSDT:_module_
.
/**
 * 準備 callback
 * @inner
 * @private
 * @ignore
 */
include_resource.wait_to_call = function(callback, path, failed) {
	//alert('include_resource.wait_to_call:\n' + _.to_module_name(callback.module));

	if (_.is_Function(callback))
		//	不是 module，僅僅為指定 function 的話，直接等一下再看看。
		//	TODO: 等太久時 error handle
		setTimeout(function() {
			callback(path, undefined, failed);
		}, 200);

	else if (_.is_Object(callback) && callback.global)
		//	是 module。
		if (callback.global.is_loaded(callback.module)
							|| (new Date() - callback.start) > callback.timeout) {
			//	依 callback 的類型處理 callback
			if(_.is_Function(callback.callback))
				//	直接執行
				callback.callback(path, callback.module, failed);

			else if (typeof callback.callback === 'string')
				//	load 另一個 module
				_.use(callback.callback);
			// TODO
			// else..

		} else {
			/**
			 * 還沒載入完成，所以再等一下。 the function it self, not 'this'.
			 * @inner
			 * @ignore
			 */
			var _s = _.include_resource.wait_to_call, _t = this, _a = arguments;
			setTimeout(function() {
				_s.apply(_t, _a);
			}, 50);
		}
};

//if (_.is_Function(include_resource))
//	_.extend(null, include_resource, _.include_resource);



/*

CeL.set_run(running sequence: [commands]|[required sequence])
	[commands]/動作串
		[],
		function_to_run
			[optional] {object} function_to_run.config
			執行次序：
			[optional: run_first, on load required] function_to_run.run_first = function(is prepared?): [bool] time (ms) to re-check
			[optional] function_to_run.require = [require sequence]
			[optional: prepared, before trigger] function_to_run.before_load = function()
			[optional] waiting for function_to_run.trigger =
				觸發時機/trigger action time
				[string] action name | number = 0
				onload: 'load' (default), {number} timeout (ms)
			function_to_run.send_argument = (default: auto detect)
			function_to_run = function() event handler
			TODO: after_load

	[required sequence]/前置條件/先備條件/prerequisite/necessary
		{string} library module name to import, {string} file path(image/JavaScript files/CSS), {number} timeout (ms)

		.charAt(0)==='.' || .charAt(0)==='/' || .indexOf(':')!==-1
			//|| .indexOf('%')!==-1
			|| /\.(js|css)$/i	→URL

		i=env.identifier_RegExp.source;
		env.module_identifier_RegExp=new RegExp('^'+i+'(\\.'+i+')*$');	→module

		else→URL

		∴'path1.sub1.sub2'→'./path1.sub1.sub2'



CeL.set_run.error=function(message){
	;
};
CeL.set_run.load={resource:status};

CeL.use('module_name');
CeL.load('resource path');


2011/6/22 17:43:50,2011/7/31 00:11:52







.set_run(running sequence)


//	同步 loading set: 可同時 load 的 {String|Function} module/path/function
synchronous_group = {
	//check: {Function},

	//	.to_run 會先執行，而後 delete
	to_run[]: [{Function} function],
	//	to load
	to_load_path{}: [{String} path],
	//	有幾個 resources 需要 load
	path_count: integer count of to_load_path,
	to_load_module{}: [{String} module],
	module_count: integer count of to_load_module,

	//	可能闕如: 下一組
	next_group: next synchronous_group{},

	//	可能闕如: timeout 用
	start_time: integer,
	//	已設定之 timeout (ms)
	timeout: integer,

	//	可能闕如: 臨時新增用，是為了預防有 call C，但 dependency 為 A→B→C 的情況。重複使用 queue 但不檢查 require 可能造成 B 與 C 被放在同一 synchronous_group。
	require: {}
};




臨時/後續/後來新增:

原先	［C,E]
發現B→C	[B,E]→[C]
發現D→E	[B,D]→[E]→[C]
發現A→B	[A,D]→[B]→[E]→[C]

2011/8/8 00:07:06



*/

_// JSDT:_module_
.
/**
 * control/setup source codes to run.
 * 基本上使用非同步(asynchronously)的方式，除非所需資源已經載入，或是有辦法以 {@link XMLHttpRequest} 取得資源。
 * 
 * @example
 * var sr;
 * CeL.set_run(
 * 	function(){sr = CeL.set_run;},
 * 	function(){
 * 		sr('module_name', function(){
 * 			// FunctionBody
 * 		});
 * 	});
 * 
 * 
 * TODO:
 * <code>
 * //	將所有 function 與 module 一視同仁。
 * sr('module_name', function(){
 * 	CeL.import('module_name', {module_function_1:0});
 * 
 * 	CeL.module_function_1('11') === module_function_1('11');
 * 
 * 	var instance=new CeL.module_name.module_class_1;
 * 	instance.print(112);
 * });
 * </code>
 * 
 * @param	running sequence: list of
 * 		{Function} function to run/欲執行之 function → change .to_run
 * 		| {Integer} timeout (ms): 僅能保證上次 function 執行至此次 function 一定會等超過這段時間 → change .start_time, .timeout
 * 		| {String} library module name to import → change .to_load_module, .module_count
 * 		| {String} URL/file path (image/JavaScript files/CSS) → change .to_load_path, .path_count
 * 		| {Array} 另一組同時 loading set: [{String|Function|Integer}, ..] → 拆開全部當作同時 loading
 * 		| TODO: {Object}	loading with additional config
 * 
 * @since 2011/8/4 22:31:47
 */
set_run;

if (!_.is_WWW())
	_.set_run = normal_set_run;
else
	//	(_.set_run)(): 確保初始化程序被執行。
	(_.set_run = function() {
		if (!set_run_before_ready_queue) {
			if (document.readyState === "complete")
				return (_.set_run = normal_set_run).apply(this, arguments);

			var loaded = function() {
				if (document.addEventListener)
					document.addEventListener("DOMContentLoaded", loaded, false);
				else
					window.detachEvent("onload", loaded);

				_.set_run = normal_set_run;

				if (set_run_before_ready_queue
						&& set_run_before_ready_queue.length)
					check_run( [ set_run_before_ready_queue, function() {
						set_run_before_ready_queue = null;
					} ], 0);
			};

			if (document.addEventListener) {
				// https://developer.mozilla.org/en/Gecko-Specific_DOM_Events
				document.addEventListener("DOMContentLoaded", loaded, false);
			} else if (window.attachEvent) {
				window.attachEvent("onload", loaded);
			} else {
				_.err('set_run: No event listener!');
				var old_onload = window.onload;
				window.onload = old_onload ? function() {
					old_onload();
					loaded();
				} : loaded;
			}

			set_run_before_ready_queue = [
				// 初始化程序
				setup_library_base_path, initialization_config ];
		}

		set_run_before_ready_queue.push(
				Array.prototype.slice.call(arguments));
	})();


var set_run_before_ready_queue;

/**
 * 初始化 user 設定: 處理在 <script> 中插入的初始設定。
 * 
 * TODO:
 * 若是設定:
 * <code>
 * {"set_run":["css.css","js.js"]}
 * </code>
 * 則 .js 可能執行不到，會被跳過。
 */
function initialization_config() {
	var set_run_queue = _.env.script_config;
	if (_.is_Object(set_run_queue)
			&& (set_run_queue = set_run_queue.set_run))
		check_run(_.is_Array(set_run_queue) ? set_run_queue
				: [ set_run_queue ], 0);
}




/**
 * DOM 載入後，正常 .set_run 之前置作業。
 */
function normal_set_run() {
	//_.debug('process ' + arguments.length + ' items.', 2, 'normal_set_run');
	if (arguments.length > 0)
		//Array.prototype.slice.call(arguments)
		check_run(arguments, 0);
}


/**
 * .set_run main process.
 * 
 * @param {Arguments} work_queue
 *            sequence of set_run.arguments. 不修改 work_queue===set_run.arguments，直接以 work_queue_index 為開始值。
 * @param {Integer} work_queue_index
 *            index of work queue
 * @param {Object}
 *            [synchronous_group] 正在 running 的 set.
 * 
 * @since 2011/8/4 22:31:47
 * 2011/8/8 23:27:15, –2011/8/11 18:29:51	rewrite
 */
function check_run(work_queue, work_queue_index, synchronous_group) {

	var work_queue_length = work_queue.length, work_set;
	// 沒有累積的 synchronous_group 時，才繼續處理指定的工作。否則先處理之。
	if (!synchronous_group) {

		while (!(work_set = work_queue[work_queue_index++])) {
			if (work_queue_index >= work_queue_length) {
				//if (work_queue_index >= work_queue_length)
				//	_.debug('處理完畢: [' + work_queue_length + '] [' + Array.prototype.slice.call(work_queue) + ']', 2, 'check_run');
				return undefined;
			}
		}

		var to_run = [], to_load_path = {}, path_count = 0, to_load_module = {}, module_count = 0, timeout = 0,
		/**
		 * 增加項目至當前的 synchronous_group.
		 */
		add_item = function(item) {
			// TODO
			// {Object} loading with additional config

			var v;
			if (typeof item === 'string'
				&& (v = _.get_variable(item)))
				//alert(item),
				item = v;

			if (_.is_Array(item)) {
				// {Array} 另一組同時 loading set: [{String|Function|Integer}, ..] →
				// 拆開全部當作同時 loading
				for ( var i in item)
					add_item(item[i]);

			} else if (_.is_Function(item)) {
				// {Function} function to run → to_run
				if (!item.require){
					//	TODO
					// check if the function require something first.
					to_run.push(item);
				} else
					to_run.push(item);

			} else if (typeof item === 'string') {
				if (_.request_item_maybe_module(item)){
					//	TODO: 若是已 cached 則跳過。
					//_.debug('treat resource [' + item + '] as module ' + module_count, 2, 'check_run');
					if (!(item in to_load_module) && !_.is_loaded(item))
						to_load_module[item] = 0, module_count++;
				} else if (!(item in to_load_path) && !_.is_included(item))
					//_.debug('treat resource [' + item + '] as URL ' + path_count, 2, 'check_run'),
					to_load_path[item] = 0, path_count++;

			} else if ((item = Math.floor(item)) > timeout) {
				// {Integer} timeout
				timeout = item;

			} else {
				// 其他都將被忽略!
				_.warn('check_run: Unknown item: [' + item + ']');
			}
		};

		// add item to synchronous_group
		add_item(work_set);

		// 初始化 initialization synchronous_group
		synchronous_group = {};

		if (timeout)
			// 設定好時間
			synchronous_group.start_time = new Date(),
			synchronous_group.timeout = timeout;
		if (to_run.length)
			synchronous_group.to_run = to_run;
		if (path_count)
			synchronous_group.path_count = path_count,
			synchronous_group.to_load_path = to_load_path;
		if (module_count)
			synchronous_group.module_count = module_count,
			synchronous_group.to_load_module = to_load_module;

		//_.debug(module_count + '個同步載入 resources 設定完畢。', 2, 'check_run');
	}


	//_.debug('開始處理當前的 synchronous_group, work_queue ' + work_queue_index + '/' + work_queue_length, 2, 'check_run');

	var s, index,

/*

臨時/後續/後來新增:
如果 check 發現 _path_ dependencies 尚未 load，則把 dependencies 加入 to_load_path|to_load_module，去除 (to_load_path|to_load_module)[_path_]，
新增一 synchronous_group， next_group.(to_load_path|to_load_module) = _path_ 並設置 synchronous_group.require{} = dependencies

原先	［C,E]
發現B→C	[B,E]→[C]
發現D→E	[B,D]→[E]→[C]
發現A→B	[A,D]→[B]→[E]→[C]

*/
	/**
	 * 臨時/後續新增項目至當前的 synchronous_group.
	 * callback 用.
	 */
	afterwards_add = function(item, item_is_path) {

		var
		require = _.is_Function(item) ?
			_.parse_require(item.require, item.require_separator) :
			/** module */
			module_require_chain[item],

		to_load_path = require.URL_to_load,
		to_load_module = require.module_to_load;

		if (!to_load_path && !to_load_module)
			return 1;


		var i, changed = false, s, n;

		//	把 dependencies: URL 加入 synchronous_group
		if (to_load_path) {
			//	synchronous_group 可能並沒有 .path_count
			if (isNaN(synchronous_group.path_count))
				s = synchronous_group.to_load_path = {},
				synchronous_group.path_count = 0;
			else
				s = synchronous_group.to_load_path;

			for (i in to_load_path) {
				i = to_load_path[i];
				if (i){
					_.debug('URL load dependency: [' + i + ']→[' + item + ']', 2, 'check_run.afterwards_add');
					if(i in s)
						//	假如是同一批的 M1, M2 都需要 P0，則跑到 M2 時 P0 不需要設定第二次，但需要把 M2 移到下一批次。
						if ((n = synchronous_group.next_group) && !(item in n.to_load_path))
							n.to_load_path[item] = 0,
							n.path_count++;
						else {
							if (_.is_debug() && (!n || _.is_debug(2)))
								_.warn('check_run.afterwards_add: 無法把 URL [' + item + '] 移到下一批次: 下一批次' + (n ? '不存在' : '已有此 URL') + '!');
						}
					else
						//	因為是指向 Object，因此不需要再設定 synchronous_group.to_load_path。為防節外生枝，直接改 .path_count，不 cache。
						s[i] = 0, synchronous_group.path_count++, changed = true, load_URL(i);
				}
			}

			//show_set('after afterwards_add URL dependency changed');
		}

		//	把 dependencies: module 加入 synchronous_group
		if(to_load_module){
			//	synchronous_group 可能並沒有 .module_count
			if (isNaN(synchronous_group.module_count))
				s = synchronous_group.to_load_module = {},
				synchronous_group.module_count = 0;
			else
				//	s: 當前欲載入之 module
				s = synchronous_group.to_load_module;

			for (i in to_load_module) {
				i = to_load_module[i];
				if (i){
					_.debug('module load dependency: [' + i + ']→[' + item + ']', 2, 'check_run.afterwards_add');
					if (i in s)
						// 假如是同一批的 M1, M2 都需要 M0，則跑到 M2 時 M0 不需要設定第二次，但需要把 M2 移到下一批次。
						if ((n = synchronous_group.next_group) && !(item in n.to_load_module))
							n.to_load_module[item] = 0,
							n.module_count++;
						else {
							if (_.is_debug() && (!n || _.is_debug(2)))
								_.warn('check_run.afterwards_add: 無法把 module [' + item + '] 移到下一批次: 下一批次' + (n ? '已有此 module' : '不存在') + '!');
						}
					else
						//	因為是指向 Object，因此不需要再設定 synchronous_group.to_load_module。為防節外生枝，直接改 .module_count，不 cache。
						s[i] = 0, synchronous_group.module_count++, changed = true, load_module(i);
				}
			}

			//show_set('after afterwards_add module dependency changed');
		}

		if (changed && item) {
			//show_set('準備將 [' + item + '] 從 synchronous_group 搬到 next_group');

			s = synchronous_group.next_group;
			if (s)
				s = {
					next_group : s
				};
			else {
				s = {};
				if ('timeout' in synchronous_group)
					_.extend( {
						timeout : 0,
						start_time : 0
					}, s, synchronous_group);
			}
			synchronous_group.next_group = s;

			if (item_is_path) {
				(s.to_load_path = {})[item] = 0;
				s.path_count = 1;
			} else if (typeof item === 'string') {
				(s.to_load_module = {})[item] = 0;
				s.module_count = 1;
			} else if (_.is_Function(item)) {
				s.to_run = [ item ];
			}
			//else warn();

			//show_set('已將 [' + item + '] 從 synchronous_group 搬到 next_group');
		} else
			return 2;

	},

	//	debug 用
	//TODO: Object.keys(obj)
	//	https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys
	get_Object_key = function(o) {
		if (_.is_Array(o))
			return o;
		//if (!_.is_Object(o)) return undefined;
		var i, l = [];
		for(i in o)
			l.push(i);
		return l;
	},

	//	debug 用
	show_set = function(from) {
		if(_.is_debug(2)){
			var ptr = synchronous_group, s_data = [ '預計先後載入同步載入組: ' + (from || '') ], d;
			do {
				d = ptr.to_load_module ? get_Object_key(ptr.to_load_module) : 0;
				s_data.push(
						d?
								'[' + (ptr.module_count === d.length ? ptr.module_count : '<em>登記 ' + ptr.module_count + ' != 實際 ' + d.length + '</em>') + '] '
										+ d.join(' <span style="color:#f00">|</span> ')
								: '<span style="color:#888">(none: 此同步載入組無預計載入之 module)</span>'
						);
			} while (ptr = ptr.next_group);
			_.debug(s_data.join('<br />'), 1, 'check_run.show_set');
		}
	},

	//check module_require_chain{module_name}
	/**
	 * 載入間執行之 function.
	 * 有未載入之 dependencies，僅能從 callback 傳入此 module 所需之 dependency list 來處置。
	 * TODO: 確認若是load錯誤時，會不會跳過 check_loading 不執行。
	 */
	check_loading = function(path, module_name) {
		//_.debug((module_name ? 'module [' + module_name  + ']/all ' + synchronous_group.module_count : path ? 'path [' + path + ']/all ' + synchronous_group.path_count : '沒有尚未 load 的 resource') + (synchronous_group.timeout ? ', timeout ' + synchronous_group.timeout : ''), 1, 'check_run.check_loading');
		//show_set('check_loading start');

		if(module_name){

			//	is module
			delete synchronous_group.to_load_module[module_name];
			synchronous_group.module_count--;

			if (!_.is_loaded(module_name))
				if (module_require_chain[module_name])
					afterwards_add(module_name);
				else
					//	若有不存在的 module，因為會以 .include_resource 載入，在 MSIE 中會 throw。
					//	可以由判別 browser 改善此體驗。
					_.err('check_run.check_loading: Cannot load module [' + module_name + ']!');

		} else if (path) {

			//	is path, 無法判別是否成功 included。
			delete synchronous_group.to_load_path[path];
			synchronous_group.path_count--;

		}

		//	可能因為循環參照(circular dependencies)，這邊的 module 之前已經 load 過，因此需要再作 check。
		//	.. pass
		;

		if (!synchronous_group.module_count
					&& !synchronous_group.path_count){
			var timeout = synchronous_group.timeout
						- (new Date() - synchronous_group.start_time);
			synchronous_group = synchronous_group.next_group;
			move_to_next_group = true;

			//_.debug('Move to next synchronous load group. 本同步載入組已全部載入，' + (synchronous_group ? '進入下一同步載入組。' : work_queue_index < work_queue.length ? '繼續下一組指定的工作 [' + work_queue_index + '/' + work_queue.length + ']。' : '本次指定的 ' + work_queue_index + ' 項工作已全部執行完成。') + (timeout > 4 ? 'timeout ' + timeout + ' 超過 4ms，設定 timeout。' : ''), 1, 'check_run.check_loading');
			if (timeout > 4)
				// TODO: setTimeout 可能不存在!
				setTimeout(function() {
					check_run(work_queue, work_queue_index,
							synchronous_group);
				}, timeout);
			else
				check_run(work_queue, work_queue_index,
						synchronous_group);
			//_.debug('設定完畢', 1, 'check_run.check_loading');
		}
	},

	load_module = function(module_name) {
		//_.debug('use [' + module_name + ']', 1, 'check_run.load_module');
		// .use 會先試試 .get_file()
		_.use(module_name, check_loading);
	},

	load_URL = function(URL, encoding) {
		// 準備載入 resource. ** 在已經 loaded 的情況下有可能直接就執行完 return!
		//_.debug('[' + URL + ']', 1, 'check_run.load_URL');
		if (/\.js$/i.test(URL))
			try{
				// 對 .js 先試試 .get_file()
				var t = _.get_file(URL, encoding);
				//_.debug('Get [' + t + ']', 2, 'check_run.load_URL');
				if (t)
					//	eval @ global. 這邊可能會出現 security 問題。
					//	TODO: 以其他方法取代 eval 的使用。
					_.eval_code(t);

				check_loading(URL);
				return undefined;

			}catch (e) {
				//_.err(e);
			}

		//_.debug('需要作同步 loading resource [' + URL + ']', 1, 'check_run.load_URL');
		_.include_resource(URL, check_loading);
	},

	/**
	 * 是否已經移到下一 group
	 */
	move_to_next_group = false,

	to_load_module, to_load_path;


	// 把能處理的 .to_run function 先執行處理，而後早點 delete 以釋放空間。
	s = synchronous_group.to_run;
	if(s){
		for (index in s)
			try {
				// 已經過鑑別，這邊的都是 Function
				s[index]();

			} catch (e) {
				_.err('check_run: ' + e.message);
				_.debug('<code>'
						+ ('' + s[index]).replace(/\n/g, '<br />')
						+ '</code>');
			}
		//_.debug('把能處理的 function 先處理完了，刪除 synchronous_group.to_run 的資料。', 2);
		delete synchronous_group.to_run;
	}


	if(move_to_next_group)
		//	在上一個 load_module() 呼叫 check_loading() 時，可能因為 synchronous_group = synchronous_group.next_group 使得 synchronous_group 已轉換到下一 synchronous load group。
		return undefined;

	to_load_module = synchronous_group.to_load_module;
	if(to_load_module)
		for (index in to_load_module)
			load_module(index);

	if(move_to_next_group)
		return undefined;

	to_load_path = synchronous_group.to_load_path;
	if(to_load_path)
		for (index in to_load_path)
			load_URL(index);


	if (!move_to_next_group
			&& !to_load_module
			&& !to_load_path) {
		//_.debug('[' + work_queue_index + '/' + work_queue_length + '] 沒有尚未 load 的 resource (例如只輸入 timeout 或每個 resource 皆 loaded)，手動執行 check_loading。', 1, 'check_run');
		check_loading();
	}

	// 開始蟄伏, waiting for callback
}



//----------------------------------------------------------------------------------------------------------------------------------------------------------//



_// JSDT:_module_
.
/**
 * module 中模擬 inherit 時使用。
 * 
 * TODO:
 * thread-safe
 * 
 * @param {String} parent_module_name	欲繼承的 module_name
 * @param initial_arguments	繼承時的 initial arguments
 * @returns
 * @see
 * <a href="http://fillano.blog.ithome.com.tw/post/257/17355" accessdate="2010/1/1 0:6">Fillano's Learning Notes | 物件導向Javascript - 實作繼承的效果</a>,
 * <a href="http://www.crockford.com/javascript/inheritance.html" accessdate="2010/1/1 0:6">Classical Inheritance in JavaScript</a>
 */
inherit = function(parent_module_name, initial_arguments) {
	if(!_.cache_code && _.cache_code !== undefined)
		_.debug('inherit: cache code did not setted but try to inherit module!');

	var code_for_including = loaded_module[_.to_module_name(parent_module_name)];
	try {
		if (_.is_Function(code_for_including))
			return code_for_including.call(code_for_including, _, initial_arguments);

		_.err('inherit: [' + parent_module_name + '] did not catched!');
	} catch (e) {
		_.err('inherit: running of [' + parent_module_name + '] error!');
		return e;
	}
};




_// JSDT:_module_
.
/**
 * 解析 dependency list 以獲得所需之 module/path/variable name..
 * 
 * @param {Array|String}
 *            dependency_list
 *            <p>
 *            list of dependency function/module/variable required. module 須以
 *            CeL.env.module_name_separator ('.') 結尾。若輸入 String，則以 separator 或 '|' 分割。
 *            </p>
 * @returns {Object} result { variable: {variable_name: full_name}, module:
 *          {module name: loaded or not}, module_to_load: [], URL: {}}
 * @returns {Number} error code
 * @since 2011/8/6 22:10:57
 */
parse_require = function(dependency_list, separator, base_require) {

	if(!dependency_list)
		//	is_Object(undefined) === true!
		return 0;

	if (typeof dependency_list === 'string')
		dependency_list = dependency_list.split(separator || '|');
	else if (!_.is_Array(dependency_list) || !_.is_Object(dependency_list))
		return 1;

	var i, module, module_name_separator = _.env.module_name_separator,
	/**
	 * variable name under module
	 */
	var_name,
	/**
	 * 解析出要 extend 到 'this' 下的 variables。
	 * variable_hash[variable name] = 所在 module name.
	 */
	//variable_hash = {},
	/**
	 * 解析出要 extend 到 'this' 下的 variables。
	 * variable_full_name[variable name] = variable full name.
	 */
	variable_full_name,
	/**
	 * 解析出的 URL paths.
	 * URL_hash[URL] = loaded or not;
	 */
	URL_hash,
	/**
	 * 解析出需要 load 的 URL paths.
	 */
	URL_to_load,
	/**
	 * dependency_list 中指定的 module。
	 * module_hash[module name] = loaded or not
	 */
	module_hash,
	/**
	 * 已 load 的 module。
	 */
	//module_loaded = [],
	/**
	 * 要 load 的 module。
	 */
	module_to_load;

	if (_.is_Object(base_require)) {
		variable_full_name = base_require.variable,
		URL_hash = base_require.URL,
		URL_to_load = base_require.URL_to_load,
		module_hash = base_require.module,
		module_to_load = base_require.module_to_load;

		//variable_hash = {};
	} else {
		variable_full_name = {},
		URL_hash = {},
		URL_to_load = [],
		module_hash = {},
		module_to_load = [];
	}

	//	解析 dependency_list，將所須 functions/modules 置於 variable_hash/module_hash 中。
	for (i in dependency_list)
		if (_.request_item_maybe_module(i = dependency_list[i])
				&& (module = _.split_module_name(i))) {

			// 類似 'data.split_String_to_Object' 的形式，為 function。
			// 類似 'data.' 的形式，為 module。
			var_name = module.pop();
			if (var_name)
				variable_full_name[var_name] = (
					//variable_hash[var_name] =
					 _.to_module_name(module))
						+ module_name_separator + var_name;
			//_.debug('load module [' + _.to_module_name(module) + ']' + (var_name ? '.' + var_name : ''));

			//_.debug('test module ['+module.join(module_name_separator)+']: '+_.get_module(module)));

			//	不用 _.to_module_name，因為會加油添醋。
			module = module.join(module_name_separator);

			//	確定是否還沒載入，必須 load。還沒載入則放在 module_to_load[] 中。
			if (!(module in module_hash)) {
				if (!(module_hash[module] = _.is_loaded(module)))
					//_.debug('module [' + module + '] need to load first.'),
					module_to_load.push(module);
			}

		} else if (!(i in URL_hash) && !(URL_hash[i] = _.is_included(i)))
			URL_to_load.push(i);


	return {
		//require : dependency_list,
		variable : variable_full_name,

		module : module_hash,
		//module_loaded : module_loaded,
		module_to_load : module_to_load,

		URL : URL_hash,
		URL_to_load : URL_to_load
	};
};


/*
//這得要直接貼在標的 scope 內才有用。
var no_strict_variable_use = (function() {
	var v, i = 0;
	try {
		// find a undefined var_name
		for (;;)
			eval(v = 'tmp_' + i++);
	} catch (i) {
	}

	eval('var ' + v + '=1;');

	try {
		//	OK 表示在 eval 中可以設定 var.
		//	若是 'use strict'; 則不可在 eval() 中置 var.
		return eval(v);
	} catch (i) {
	}
})();
*/

//	http://closure-compiler.appspot.com/
//	這得要直接貼在標的 scope 內才有用。
//var no_strict_variable_use=function(){var a,b=9;try{for(;;)eval(a="t_"+b++)}catch(c){}eval("var "+a+"=1;");try{return eval(a)}catch(d){}}();

_// JSDT:_module_
.
/**
 * module 中需要 include function/module/variable 時設定 local variables 使用。<br />
 * 本函數將把所需 function include 至當前 namespace 下。
 * 
 * TODO: 輸入 function name 即可
 * 
 * @example
 * 
 * //	requires (inside module)
 * //	事先定義 @ 'use strict';
 * var split_String_to_Object;
 * //	之所以需要使用 eval 是因為要 extend 至當前 namespace 下。
 * //	若無法 load CeL.data，將會 throw
 * eval(library_namespace.use_function(this, 'data.split_String_to_Object'));
 * //	use it
 * split_String_to_Object();
 * 
 * //	不用 eval 的方法 1: function 預設都會 extend 至當前 library_namespace 下。
 * library_namespace.use_function(this, 'data.split_String_to_Object');
 * library_namespace.use_function(this, 'data.split_String_to_Object', false);
 * //	若無法 load CeL.data，將會 throw
 * //	use it
 * library_namespace.split_String_to_Object();
 * 
 * //	不用 eval 的方法 2: 設定 extend_to
 * var o={};
 * //	若無法 load CeL.data，將會 throw
 * library_namespace.use_function(this, 'data.split_String_to_Object', o);
 * //	use it
 * o.split_String_to_Object();
 * 
 * @param	{Function|Object} name_space	module name-space
 * @param	{Array|String} dependency_list	list of dependency function/module/variable required. module 須以 '.' 結尾。若輸入 String，則以 ',' 分割。
 * @param	{Function|Object} [extend_to]	若設定將把 variable extend 至 extend_to
 * 
 * @returns	{Number} error code
 * 		1: can't parse dependency_list
 * 
 * @throws	{Error}	有些 module 尚未載入。
 * 
 * @since	2009/12/26 02:36:31
 * 2009/12/31 22:21:23	add 類似 'data.' 的形式，為 module。
 * 2010/6/14 22:58:18	避免相互 require
 */
use_function = function(name_space, extend_to, optional_use, no_strict) {

	var module_name = get_module_name(name_space);

	//_.debug('load function [' + dependency_list + ']' + (typeof module_name === 'string' && module_name ? ' from [' + module_name + ']' : ''));

	var variable_name, value, eval_code = [],
	/**
	 * 要 extend 到 name_space 下的 variables。
	 * variable_hash[variable name] = variable full name, 包括所在 module name.
	 */
	variable_hash = name_space.require_variable;

	no_strict = no_strict && !extend_to ? [] : false;

	//	設定 required variables
	for (variable_name in variable_hash)
		if ((value = _.get_variable(variable_hash[variable_name])) !== undefined) {
			//_.debug('指定 [' + variable_name + ']: ' + value));
			if (extend_to)
				extend_to[variable_name] = value;
			else {
				no_strict && no_strict.push(variable_name);

				eval_code.push('try{' + variable_name + '=' +
						//	預防有保留字，所以用 bracket notation。例如 Chrome 中會出現 'Unexpected token native'。
						//	Dot Notation and Square Bracket Notation in JavaScript	http://www.dev-archive.net/articles/js-dot-notation/
						variable_hash[variable_name].replace(/\.([a-z\d_]+)/gi, '["$1"]') + ';}catch(e){}');
			}

		} else {
			// 可能因為循環參照(circular dependencies)，事實上 required 並未 loaded。
			if(!(module_name in module_require_chain) || _.is_debug(2))
				_.err(_.Class + '.use_function: load [' + variable_hash[variable_name] + '] @ ['
						+ _.to_module_name(module_name) + '] error: The module is not included or defined? You have to load they all later.');

			if (extend_to) {
				extend_to[variable_name] = function() {
					try {
						//	稍後求值，僅對 function 有效。
						return _.get_variable(variable_hash[variable_name]);
					} catch (e) {
					}
				};
			} else {
				no_strict && no_strict.push(variable_name);

				//	稍後求值，僅對 function 有效。
				eval_code.push(variable_name + '=function(){try{return ' + variable_name + '='
						+ variable_hash[variable_name].replace(/\.([a-z\d_]+)/gi, '["$1"]')
						+ ';}catch(e){}};');
			}


			// delete it if doesn't exists
			//delete variable_hash[variable_name];
		}

	//	應注意 module_name 為保留字之類的情況，會掛在這邊 return 後的 eval。
	return extend_to
		|| (no_strict ? 'var ' + no_strict.join(',') + ';' : '') + eval_code.join('');
};


// ----------------------------------------------------------------------------------------------------------------------------------------------------------//

_.initial_env();


/**
 * 為一些比較舊的版本或不同瀏覽器而做調適。
 * @since	2010/1/14 17:58:31
 * @inner
 * @private
 * @ignore
 */
function environment_adapter() {
	/*
	 * workaround:
	 * 理論上 '.'.split(/\./).length 應該是 2，但 IE 5–8 中卻為 0!
	 * 用 .split('.') 倒是 OK.
	 * TODO:
	 * 應該增加可以管控與回復的手段，預防有時需要回到原有行為。
	 * @since	2010/1/1 19:03:40
	 */
	if ('.'.split(/\./).length === 0)
		(function() {
			var _String_split = String.prototype.split,
				is_RegExp = _.object_tester('RegExp');
			String.prototype.split = function(r) {
				return is_RegExp(r) ?
						_String_split.call(this.valueOf().replace(
								r.global ? r :
									// TODO: 少了 multiline
									new RegExp(r.source, r.ignoreCase ? 'ig' : 'g'),
							'\0'), '\0') :
						_String_split.call(this, r);
			};
		})();
}

environment_adapter();

}
//	不用 apply()，因為比較舊的瀏覽器沒有 apply()。
)(CeL);









//args=args.concat(['turnCode.js']);

//	不作 initialization
//CeL.no_initialization = 0;

if (typeof CeL === 'function' && !CeL.no_initialization) {
	if (CeL.env.script_name === CeL.env.main_script_name)
		//	僅僅執行 ce.js 此檔時欲執行的程序。
		(function(_) {
			'use strict';

			// WScript.Echo(_.env.script_name);
			// _.debug(_.env.script_name);


			//	將 path 寫入 registry
			_.use('application.OS.Windows');
			_.use('application.OS.Windows.registry');
			// _.debug(_.reg);
			//WScript.Echo(_.reg);

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
						library_base_path + _.env.script_name, 0, 0, 1);
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
								if ((f = dealShortcut(args[i], 1))
										.match(/\.(js|vbs|hta|s?html?|txt|wsf|pac)$/i)
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
if (0) {
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
if (0) {
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











