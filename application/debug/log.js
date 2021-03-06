
/**
 * @name	CeL log function
 * @fileoverview
 * 本檔案包含了記錄用 functions。
 * @since	2009/11/17
 * @see
 * <a href="http://getfirebug.com/lite.html" accessdate="2010/1/1 14:54">Firebug Lite</a>,
 * <a href="http://www.mozilla.org/projects/venkman/" accessdate="2010/1/1 16:43">Venkman JavaScript Debugger project page</a>
 */

//	http://blogs.msdn.com/b/webdevtools/archive/2007/03/02/jscript-intellisense-in-orcas.aspx
///	<reference path="../ce.js" />

/*
TODO:
emergency/urgent situation alert
會盡量以網頁上方/頂部黄色的導航條/警告條展示
「不再顯示」功能
.format()
	將 div format 成 log panel。
分群, http://developer.yahoo.com/yui/examples/uploader/uploader-simple-button.html
*/


/*	to include:
	include code_for_including
	<div id="debug_panel"></div>
	var SL=new Debug.log('debug_panel'),sl=function(){SL.log.apply(SL,arguments);},err=function(){SL.err.apply(SL,arguments);},warn=function(){SL.warn.apply(SL,arguments);};

	http://www.comsharp.com/GetKnowledge/zh-CN/TeamBlogTimothyPage_K742.aspx

	if possible, use Firebug Lite instead.
	http://benalman.com/projects/javascript-debug-console-log/
*/

'use strict';
typeof CeL === 'function' && CeL.run({

name : 'application.debug.log',
code : function(library_namespace) {


//WScript.Echo(this);

var

//	class private	-----------------------------------

//	class name, 需要用到這個都不是好方法。
//cn='Debug.log',

/**
 * private storage pool
 * @ignore
 */
p=[],


has_performance_now,


log_data = function(message, option) {
	//	由於 .set_method() 會用到 .debug()，若在 log 的 core 中用上 .set_method() 會循環呼叫，造成 stack overflow。
	// ** NG: library_namespace.set_method(this, option);
	if (library_namespace.is_Object(option))
		Object.assign(this, option);

	this.date = new Date();
	if (has_performance_now)
		this.time = performance.now();
	this.message = message;
	return this;
},

/**
 * default write/show log function
 * @ignore
 * @param	{string}id	element id
 */
write_log = function(id) {
	var o, m, c, _p = p[id], _t = _p.instance,
	/**
	 * buffer
	 * @inner
	 * @ignore
	 */
	b = _p.buf,
	B = _p.board, F = _p.do_function, level;

	if (_p.clean)
		_t.clear(), _p.clean = 0;

	if (!B && !F)
		return;

	while (b.length) {
		// 預防 multi-threading 時重複顯示。
		m = b.shift();

		if (F)
			F(m);

		//	IE8: 'constructor' 是 null 或不是一個物件
		try {
			c = m.constructor;
			// alert((m.constructor === log_data) + '\n' + m.constructor + '\n' + m);
		} catch (e) {
		}
		if (c === log_data) {
			if (!isNaN(m.level) && m.level < library_namespace.set_debug())
				continue;
			c = m.level in _t.className_set ? m.level : 0;
			o = m.add_class;
			//	添加各種標記。
			m = [ _t.message_prefix(c),
					_t.show_time(m.date, m.time), m.message ];
			c = _t.className_set[c];
			if (o)
				c += ' ' + o;

		} else {
			//	add default style set
			if (c = _t.message_prefix('log'))
				m = [c, m];
			c = _t.className_set.log || 0;
		}
		_p.lbuf.push(m);

		if (B) { // && typeof document==='object'
			o = _p.instance.log_tag;
			if (o) {
				o = document.createElement(o);
				if (c)
					o.className = c;

				new_node(m, o);

			} else
				o = document.createTextNode(m);
			B.appendChild(o);
		}
	}

	//if(_t.auto_hide)B.style.display=B.innerHTML?'block':'none';
	//	TODO: 有時無法捲到最新。
	if (B && _t.auto_scroll)
		B.scrollTop = B.scrollHeight - B.clientHeight;
},


/**
 * save log.
 * @ignore
 * @param	m	message
 * @param	{string} id	element id
 * @param	force	force to clean the message area
 */
do_save_log = function(m, id, force) {
	var _p = p[id], _t = _p.instance, f = _p.logF, s = _t.save_log;
	if (!s || typeof s === 'function' && !s(m, l))
		return;

	if (m)
		_p.sbuf.push(m = (_t.save_date && typeof gDate == 'function' ? _t.save_line_separator
				+ gDate() + _t.save_line_separator
				: '')
				+ m);

	if (force || _t.flush || _p.sbufL > _t.save_limit)
		try {
			if (f
					|| _t.log_file
					&& (f = _p.logF = fso.OpenTextFile(_t.log_file,
							/* ForAppending */8, /* create */true,
							_t.log_encoding)))
				f.Write(_p.sbuf.join(_t.save_line_separator)), _p.sbuf = [],
						_p.sbufL = 0, _t.error_message = 0;
		} catch (e) {
			// err(e);
			_t.error_message = e;
		}
	else if (m)
		_p.sbufL += m.length;
},

using_DOM_new_node = false,
//	使 log 能用到 new_node 的功能。
new_node = function(o, layer) {
	if (library_namespace.is_Function(library_namespace.new_node)) {
		//alert('開始利用 library 之 new_node。');
		using_DOM_new_node = true;
		return (new_node = library_namespace.new_node)(o, layer);
	}

	var list = [];

	//	workaround: 簡易版 new_node().
	(function add(o) {
		var node, tag, child;
		if (Array.isArray(o))
			for (node = 0; node < o.length; node++)
				add(o[node]);
		else if (library_namespace.is_Object(o)) {
			if (o.$) {
				tag = o.$;
				list.push('<' + tag);
				delete o.$;
			}
			for (node in o) {
				if (tag)
					list.push(' ' + node + '="' + ('' + o[node]).replace(/"/g, '&quot;') + '"');
				else {
					tag = node;
					list.push('<' + tag);
					child = o[node] || null;
				}
			}
			if (child === null)
				list.push(' />');
			else {
				list.push('>');
				add(child);
				list.push('</' + tag + '>');
			}
		} else
			list.push(o);
	})(o);

	layer.innerHTML = list.join('');

	return using_DOM_new_node;
},

show_date = function(date) {
	var h = date.getHours(), m = date.getMinutes(), s = date.getSeconds(), ms = date.getMilliseconds();
	return (h || m || s ? (h || m ? (h ? h + ':' : '') + m + ':' : '') + s : '')
			+ '.' + (ms > 99 ? '' : ms > 9 ? '0' : '00') + ms;
},


has_caller,

//	instance constructor	---------------------------
//	(document object)
/*

_=this


TODO:
set class in each input
input array
show file path & directory functional	可從 FSO operation.hta 移植。

count
c.f.: GLog

dependency:

*/
/**
 * initial a log tool's instance/object
 * @class	log function
 * @_see	usage: <a href="#.extend">_module_.extend</a>
 * @since	2008/8/20 23:9:48
 * @requires	gDate(),line_separator,fso

 * @constructor
 * @_name	_module_
 * @param	{String|object HTMLElement} obj	log target: message area element or id
 * @param	{Object} [className_set]	class name set
 */
_// JSDT:_tmp;_module_
= function(obj, className_set) {
	// Initial instance object. You can set it yourself.
	/**
	 * log 時 warning/error message 之 className
	 * @_name	_module_.prototype.className_set
	 */
	this.className_set = className_set || {
			/**
			 * @_description	當呼叫 {@link _module_.prototype.log} 時使用的 className, DEFAULT className.
			 * @_name	_module_.prototype.className_set.log
			 */
			log : 'debug_log',
			/**
			 * @_description	當呼叫 {@link _module_.prototype.warn} 時使用的 className
			 * @_name	_module_.prototype.className_set.warn
			 */
			warn : 'debug_warn',
			/**
			 * @_description	當呼叫 {@link _module_.prototype.err} 時使用的 className
			 * @_name	_module_.prototype.className_set.err
			 */
			err : 'debug_err',
			/**
			 * @_description	當顯示時間時使用的 className
			 * @_name	_module_.prototype.className_set.time
			 */
			time : 'debug_time',
			/**
			 * @_description	當呼叫 {@link _module_.prototype.set_board} 時設定 log panel 使用的 className
			 * @_name	_module_.prototype.className_set.panel
			 */
			panel : 'debug_panel'
	};
	this.class_hide = {};

	var prefix = {
		/**
		 * @_description	當呼叫 {@link _module_.prototype.log} 時使用的 prefix, DEFAULT prefix.
		 * @_name	_module_.prototype.message_prefix.log
		 */
		log : '',
		/**
		 * @_description	當呼叫 {@link _module_.prototype.warn} 時使用的 prefix
		 * @_name	_module_.prototype.message_prefix.warn
		 */
		warn : '',
		/**
		 * @_description	表示當呼叫 {@link _module_.prototype.err}, 是錯誤 error message 時使用的 prefix
		 * @_name	_module_.prototype.message_prefix.err
		 */
		err : '<em>!! Error !!</em> '
	};
	/**
	 * log 時 warning/error message 之 prefix。
	 * @_name	_module_.prototype.message_prefix
	 */
	this.message_prefix = function(level) {
		return level in prefix ? prefix[level] : '';
	};

	this.id = p.length;
	p.push( {
		instance : this,
		/**
		 * write buffer
		 */
		buf : [],
		/**
		 * save buffer when we need to save the messages
		 */
		sbuf : [],
		/**
		 * length of save buffer
		 */
		sbufL : 0,
		/**
		 * now logged buffer
		 */
		lbuf : []
	}); 
	this.set_board(obj);
};


try {
	has_performance_now = performance.now() > 0;
} catch (e) {
}

try {
	has_caller = function(a){
		'use strict';
		return arguments.callee.caller !== undefined;
	};
	has_caller = (function(){
		return has_caller();
	})();
} catch (e) {
	has_caller = false;
}


//	class public interface	---------------------------

_// JSDT:_module_
.
/**
 * do the log action
 * @_memberOf	_module_
 * @private
 */
do_log = function(id) {
/*	這段應該只在 module namespace 重複定義時才會發生
 var I=p[id];
 if(!I){
  alert('.do_log: not exist: ['+id+']');
  return;
 }
 I=I.instance;
*/
	var I = p[id].instance;
	if (I.do_log)
		I.do_log();
};


_// JSDT:_module_
.
/**
 * 對各種不同 error object 作應對，獲得可理解的 error message。
 * @param	e	error object
 * @param	line_separator	line separator
 * @param	caller	function caller
 * @_memberOf	_module_
 * @see
 * http://msdn.microsoft.com/en-us/library/ms976144.aspx
 * The facility code establishes who originated the error. For example, all internal script engine errors generated by the JScript engine have a facility code of "A".
 * http://msdn.microsoft.com/en-us/library/ms690088(VS.85).aspx
 * 
 * http://msdn.microsoft.com/en-us/library/t9zk6eay.aspx
 * http://msdn.microsoft.com/en-us/library/microsoft.jscript.errorobject.aspx
 * Specifies the name of the type of the error.
 * Possible values include Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, and URIError.
 */
get_error_message = function get_error_message(e, line_separator, caller) {
	if (!line_separator)
		line_separator = _.prototype.save_line_separator;

	if (!caller || typeof caller !== 'string'){
		if (typeof caller !== 'function' && has_caller)
			caller = get_error_message.caller;

		if (caller === null)
			caller = 'from the top level';
		else if (typeof caller === 'function')
			caller = '@' + (library_namespace.get_function_name(caller) || caller);
		else
			caller = '@' + library_namespace.Class;
	}


	// from popErr()
	//	type
	var T = library_namespace.is_type(e),
	//	message
	m = T === 'Error' ?
			'Error ' + caller + ': '
			//	http://msdn.microsoft.com/en-us/library/cc231198(PROT.10).aspx
			//	<a href="http://msdn.microsoft.com/en-us/library/ms819773.aspx">Winerror.h</a>: error code definitions for the Win32 API functions
			//	(e.number & 0xFFFF): See 錯誤代碼 /錯誤提示碼 <a href="http://msdn.microsoft.com/en-us/library/ms681381%28VS.85%29.aspx">System Error Codes</a>
			//	http://social.msdn.microsoft.com/Search/zh-TW/?Query=%22System+Error+Codes%22+740&AddEnglish=1
			//	http://msdn.microsoft.com/en-us/library/aa394559(VS.85).aspx
			//	net helpmsg (e.number & 0xFFFF)
			+ (e.number & 0xFFFF) + (e.name ? ' [' + e.name + '] ' : ' ')
			+ '(facility code ' + (e.number >> 16 & 0x1FFF) + '): '
			+ line_separator
			+ (e.message || '').replace(/\r?\n/g, '<br />')
			//	.message 為主，.description 是舊的。
			+ (!e.description || e.description === e.message ?
				'' :
				line_separator
					+ line_separator
					+ ('' + e.description).replace(/\r?\n/g, '<br />')
			)

		: T === 'DOMException'?
			//	http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-17189187
			'[' + T + '] ' + e.code + ': ' + e.message

		: !e || T === 'string' ? e

		: '[' + T + '] ' + (e.message || e);


	if (library_namespace.is_debug(2) && typeof e === 'object' && e)
		for (T in e)
			try {
				//	Firefox has (new Error).stack
				//	http://eriwen.com/javascript/js-stack-trace/
				m += '<br /> <span class="debug_debug">' + T + '</span>: '
						+ (typeof e[T] === 'string' && T === 'stack' ?
								e[T].replace(/[\r\n]+$/, '').replace(/(@)([a-z\-]+:\/\/.+)(:)(\d+)$/gm, '$1<a href="view-source:$2#$4" target="_blank">$2</a>$3$4').replace(/\n/g, '<br />- ')
								: typeof e[T] === 'string' && T === 'fileName' ? '<a href="view-source:' + e[T] + '" target="_blank">' + e[T] + '</a>'
								: e[T]);
			} catch (e) {
				// TODO: handle exception
			}

	// m += ' (' + arguments.callee.caller + ')';
	return m;
};


_// JSDT:_module_
.
/**
 * get node description
 * 
 * @param node
 *            HTML node
 * @_memberOf _module_
 */
node_description = function(node, flag) {
	if (typeof node === 'string')
		node = document.getElementById(node);
	if (!node)
		return;

	var description = '';

	if (node.id)
		description += '#' + node.id;

	if (node.className)
		description += '.' + node.className;

	if (node.tagName)
		description = '&lt;' + node.tagName + description + '&gt;';

	if (!description && node.innerHTML) {
		description = node.innerHTML;
		if (description.length > 40)
			description = description.slice(0, 40);
		description = description.replace(/</g, '&lt;');
	}

	//	TODO: 對 Range object 之類的處理
	//	http://help.dottoro.com/ljxsqnoi.php
	return description || '(null description node: ' + library_namespace.is_type(node) + ')';
};


_// JSDT:_module_
.
default_log_target = function(message_data) {
	var level = typeof message_data === 'object' && message_data.level, logger;
	if (logger = level && library_namespace.debug_console[level])
		logger(message_data.message);
	else
		console.log(level ? '[' + level + '] ' + message_data.message : message_data);
};


_// JSDT:_module_
.
/**
 * get new extend instance
 * @param	{String|object HTMLElement} [obj]	message area element or id
 * @return	{Array} [ instance of this module, log function, warning function, error function ]
 * @_example
 * 
 * //	status logger
 * var SL=new _module_('log'),sl=SL[1],warn=SL[2],err=SL[3];
 * sl(msg);
 * sl(msg,clear);
 * 
 * //	general log
 * function_set = new _module_.extend('panel',{});
 * // 1.
 * function_set = new CeL.code.log.extend('panel',{});
 * logger = function_set[1];
 * // 2.
 * log_only = (new CeL.code.log.extend('panel',{}))[1];
 * 
 * @_memberOf	_module_
 * @since	2009/8/24 20:15:31
 */
extend = function(obj, className_set) {
	//CeL.Log=new CeL.code.log(function(m){var F=typeof JSalert==='function'?JSalert:typeof alert==='function'?alert:WScript.Echo;F(typeof m==='object'?'['+m.level+'] '+m.message:m);});
	/**
	 * new instance
	 * @_type	_module_
	 * @inner
	 * @ignore
	 */
	var o = new _// JSDT:_module_
			(obj || _.default_log_target, className_set);

	// TODO: do not use arguments
	return [ o, function() {
		o.log.apply(o, arguments);
	}, function() {
		o.warn.apply(o, arguments);
	}, function() {
		o.err.apply(o, arguments);
	} ];

};


/*
_.option_open=function(p){

};

_.option_file=function(p){
};

_.option_folder=function(p){
};
*/

//	class constructor	---------------------------


_// JSDT:_module_
.prototype = {

//	instance public interface	-------------------

/**
 * 當執行寫檔案或任何錯誤發生時之錯誤訊息。<br />
 * while error occurred.. should read only
 * @_name	_module_.prototype.error_message
 */
error_message : '',

/**
 * 超過這長度才 save。<=0 表示 autoflash，非數字則不紀錄。
 * @_name	_module_.prototype.save_limit
 * @type	Number
 */
save_limit : 4000,

/**
 * 在 log 結束時執行，相當於 VB 中 DoEvent() 或 。
 * @_name	_module_.prototype.do_event
 */
do_event : library_namespace.DoNoting || null,


/**
 * log 時使用之 tagName, 可用 div / span 等。若不設定會用 document.createTextNode
 * @_name	_module_.prototype.log_tag
 */
log_tag : 'div',


/**
 * boolean or function(message, log level) return save or not
 * 
 * @_name _module_.prototype.save_log
 * @type Boolean
 */
save_log : false,
/**
 * save log to this file path
 * 
 * @_name _module_.prototype.log_file
 * @type Boolean
 */
log_file : false,
/**
 * auto save log. 若未設定，記得在 onunload 時 .save()
 * 
 * @_name _module_.prototype.flush
 * @type Boolean
 */
flush : false,
/**
 * 在 save log 時 add date
 * 
 * @_name _module_.prototype.save_date
 * @type Boolean
 */
save_date : true,
/**
 * 在 save log 時的換行
 * 
 * @_name _module_.prototype.save_line_separator
 * @type string
 */
save_line_separator : library_namespace.env.line_separator || '\r\n',
/**
 * 在 save log 時的 encoding
 * 
 * @_name _module_.prototype.log_encoding
 */
log_encoding : -1,//TristateTrue


/**
 * 自動捲動
 * 
 * @_name _module_.prototype.auto_scroll
 * @type Boolean
 */
auto_scroll : true,
/**
 * 沒有內容時自動隱藏
 * 
 * @deprecated TODO
 * @_name _module_.prototype.auto_hide
 * @type Boolean
 */
auto_hide : false,

/**
 * 等待多久才顯示 log。若為 0 則直接顯示。<br />
 * (WScript 沒有 setTimeout)
 * @_name	_module_.prototype.interval
 */
interval : typeof setTimeout === 'undefined' ? 0 : 1,

/**
 * log function (no delay)
 * @_name	_module_.prototype.do_log
 */
do_log : function(level) {
	// if(p[this.id].th)clearTimeout(p[this.id].th);

	// reset timeout handler
	p[this.id].th = 0;

	//	TODO: 提升效率.
	if('controller' in this)
		this.set_controller();

	write_log(this.id);
},

/**
 * class instance 預設作 log 之 function
 * 
 * @param {String}
 *            message message
 * @param {Boolean}clean
 *            clean message area
 * @param {Object}option
 *            選擇性項目. { level : log level, 記錄複雜度. }
 * @return
 * @_name _module_.prototype.log
 */
log : function(message, clean, option) {
	var t = this, _p = p[t.id], level, force_save;

	if (library_namespace.is_Object(option)) {
		level = option.level;
		force_save = option.save;
	} else if (option) {
		force_save = level = option;
		(option = {}).level = level;
	}

	//var message_head=(arguments.callee.caller+'').match(/function\do_save_log([^\(]+)/);if(message_head)message_head=message_head[1]+' ';
	do_save_log(message, t.id, force_save);

	// window.status = message;
	if (option)
		message = new log_data(message, option);

	if (clean)
		// clean log next time
		_p.clean = 1, _p.buf = [ message ];
	else
		_p.buf.push(message);

	if (!t.interval)
		t.do_log();
	else if (!_p.th)
		if (typeof window.setTimeout === 'undefined')
			t.interval = 0, t.do_log();
		else
			// _p.th=setTimeout(cn+'.do_log('+t.id+');',t.interval);
			_p.th = window.setTimeout(function() {
				_.do_log(t.id);
			}, t.interval);

	if (t.do_event)
		t.do_event();
},

/*
TODO:
other methods: INFO,DEBUG,WARNING,ERROR,FATAL,UNKNOWN
*/

/**
 * save message
 * @_name	_module_.prototype.save
 */
save : function() {
	do_save_log('', this.id, 1/* force */);
},

//	** important ** 這邊不能作 object 之 initialization，否則因為 object 只會 copy reference，因此 new 時東西會一樣。initialization 得在 _() 中作！
//className_set:{},

/**
 * log a warning / caution / alert / 警告.
 * @_name	_module_.prototype.warn
 */
warn : function(m, clean) {
	this.log(m, clean, 'warn');
},

/**
 * deal with error message
 * @_name	_module_.prototype.err
 */
err : function err(e, clean) {
	var caller = '';
	if (has_caller) {
		caller = '' + err.caller;
		if (caller.indexOf('.err.apply(') !== -1)
			// ** 判斷 call from _.extend. TODO: 應該避免!
			caller = caller.caller;
	}

	this.log(Array.isArray(e) || library_namespace.is_Object(e) ? e : _
			.get_error_message(e, this.save_line_separator, caller), clean, 'err');
},


timezone_offset : /* msPerMinute */ 60000 * (new Date).getTimezoneOffset(),

/**
 * 在 log 中依照格式顯示時間。
 * @param	{Date}date
 * @returns	{String}	依照格式顯示成之時間。
 * @_name	_module_.prototype.show_time
 * @since	2012/3/16 22:36:46
 */
show_time : function show_time(date, time) {
	var add_s, _diff_ms,
	//
	date_stamp = (date.getMonth() + 1) + '/' + date.getDate() + ' ' + show_date(date),
	//
	diff_ms = has_performance_now && this.last_show ? time - this.last_show : (_diff_ms = date - (this.last_show || this.timezone_offset));

	if (diff_ms > 0)
		if (diff_ms < 60000) {
			add_s = diff_ms >= 1000 && (diff_ms /= 1000);
			diff_ms = diff_ms.to_fixed ? String(diff_ms.to_fixed(3)).replace(/^0/, '')
					//: diff_ms.toFixed ? diff_ms.toFixed(3)
					: (diff_ms | 0);
			if (add_s)
				diff_ms += 's';
		} else
			diff_ms = show_date(new Date(diff_ms + this.timezone_offset));

	this.last_show = has_performance_now ? time : date;

	// 不用 CSS.quotes: 在舊版 browser 上可能無效，但本 module 須在舊版上亦正常作動。
	return '<span class="' + this.className_set.time + '" title="'
			+ date_stamp + '  ' + (has_performance_now ? time : '+' + _diff_ms)
			+ ' ms">[' + diff_ms + ']</span> ';
},

/**
 * 設定寫入到哪<br />
 * set log board for each instance (document object)
 * @_name	_module_.prototype.set_board
 */
set_board : function(o) {
	var _t = this, _p = p[_t.id];
	if (o)
		if (typeof o === 'function')
			_p.do_function = o;

		else {
			if (typeof o !== 'object'
				&& typeof document === 'object')
				o = document.getElementById(o);
			if (o
					// TODO
					// && library_namespace.is_HTML_obj(o)
				) {
				_p.board = o;
				_t.set_controller();
				if (_t = _t.className_set.panel)
					o.className += ' ' + _t;
				delete _p.do_function;
			}
		}

	return _p.board;
},

//	TODO: 若之後才 include 'interact.DOM'，則 controller 沒辦法顯示出來 @ Chrome/25。
set_controller : function(c) {
	var b = p[this.id].board;
	if (b && (c || (c = this.controller))
			&& (c = new_node(c, [ b, 0 ])) !== using_DOM_new_node) {
		if ('controller' in this)
			delete this.controller;
		//c.style.height = '1em';
		//c.style.height = '';
	}
},

/**
 * 獲取當前 buffer 中的 log。
 * @_name	_module_.prototype.get_log
 */
get_log : function() {
	return p[this.id].lbuf;
},

/**
 * show/hide log board. 切換可見狀態。
 * @_name	_module_.prototype.toggle
 */
toggle : function(s) {
	return library_namespace.toggle_display(p[this.id].board, s) !== 'none';
},

/**
 * clear log board.
 * TODO:
 * use .remove_all_child().
 * @_name	_module_.prototype.clear_board
 */
clear_board : function(b) {
	b.innerHTML = '';
},

/**
 * 清除全部訊息 clear message
 * @_name	_module_.prototype.clear
 */
clear : function() {
	var _p = p[this.id];
	if (_p.board) {
		this.clear_board(_p.board);
	}
	_p.lbuf = [];
}

};



return (
	_// JSDT:_module_
);

},

no_extend : 'this,do_log,extend',

//----------------------------------------------------------------------------------------------------------------------------------------------------------//

finish:function(name_space) {
//	為 module log 所作的初始化工作。

var module_name = this.id;

//確認 cssRules 之後才作 delete，否則就得按順序先增者後減。因為刪掉 [2] 之後，後面全部皆會遞補，[3] 會變成 [2]。
//	TODO: 一般化。
function search_CSS_rule(style_sheet, selector) {
	var rules = style_sheet.cssRules || style_sheet.rules, i = 0, l = rules.length;
	for (; i < l; i++)
		if (selector === rules[i].selectorText)
			return i;
}

//WScript.Echo(n.extend);

//code_for_including[generateCode.dLK]='*var Debug={log:code_for_including()};';

//	include resource of module.
CeL.run(CeL.get_module_path(module_name, 'log.css'));

//	為本 library 用
if (!CeL.Log) {
	var i, l, o = name_space.extend(), has_caller,
	//	偵錯等級, debug level, log level.
	log_icon = {
		/*
		 * MEMO (U+1F4DD).
		 * http://codepoints.net/U+1F4DD
		 * http://wiki.livedoor.jp/qvarie/
		 */
		log : '📝',
		/*
		 * emphasized text
		 * U+2383 EMPHASIS SYMBOL
		 * http://codepoints.net/U+2383
		 */
		em : '⎃',
		/*
		 * 資訊,消息,報告,通知,情報
		 * WARNING SIGN (U+26A0) @ Miscellaneous Symbols.
		 */
		warn : '⚠',
		/*
		 * error / fault
		 * U+2620 SKULL AND CROSSBONES
		 */
		err : '☠',
		/*
		 * U+2139 INFORMATION SOURCE
		 * http://en.wiktionary.org/wiki/%E2%84%B9
		 */
		info : 'ℹ',
		/*
		 * U+1F41B BUG
		 */
		debug : '🐛'
	},
	//	base path of icon
	icon_path = CeL.get_module_path(module_name, 'icon/');

	try {
		has_caller = function(a){
			'use strict';
			return arguments.callee.caller !== undefined;
		};
		has_caller = (function(){
			return has_caller();
		})();
	} catch (e) {
		has_caller = false;
	}


	// override CeL.log
	Object.assign((CeL.Log = o[0]).className_set, {
		info : 'debug_info',
		em : 'debug_em',
		debug : 'debug_debug'
	});

	//	log 支援 gettext.
	CeL.Log.message_prefix = function(level){
		if (level in log_icon) {
			return {
				img : null,
				'class' : 'debug_icon',
				src : icon_path + level + '.png',
				alt : '[' + log_icon[level] + ']',
				title : log_icon[level] + ' ' + (CeL.gettext ? CeL.gettext(level) : level)
			};
		}
		return '';
	};

	//	TODO: copy result, paste code.
	var controller = [ ':', {
		// U+239A	CLEAR SCREEN SYMBOL
		a : '⎚',
		href : '#',
		title : "clear / 清除所有訊息",
		onclick : function() {
			CeL.Log.clear();
			return false;
		}
	}, {
		// toggle / switch
		// U+1F50C ELECTRIC PLUG
		a : '🔌',
		href : '#',
		title : "切換訊息面板\nshow/hidden log panel",
		onclick : function() {
			CeL.set_class(this, 'debug_hide', {
				remove : CeL.Log.toggle()
			});
			return false;
		}
	}, {
		span : '↑',
		title : "提升偵錯等級",
		S : 'cursor:pointer;font-size:.7em;',
		onselect : function() {
			return false;
		},
		onclick : function() {
			CeL.set_debug(CeL.is_debug() + 1);
			CeL.debug('提升偵錯等級至 ' + CeL.is_debug(), 1, 'Log.controller');
			return false;
		}
	}, {
		span : '↓',
		title : "降低偵錯等級",
		S : 'cursor:pointer;font-size:.7em;',
		onselect : function() {
			return false;
		},
		onclick : function() {
			CeL.set_debug(CeL.is_debug() - 1);
			CeL.debug('降低偵錯等級至 ' + CeL.is_debug(), 0, 'Log.controller');
			return false;
		}
	}, {
		span : '↓',
		title : "取消 debug",
		S : 'cursor:pointer;font-size:.7em;text-decoration:underline;',
		onselect : function() {
			return false;
		},
		onclick : function() {
			CeL.set_debug(0);
			return false;
		}
	}, {
		br : null
	} ];
	l = {
			debug : 0,
			log : 0,
			info : 'information',
			em : 'emphasis',
			warn : 'warning',
			err : 'error'
	};
	for (i in l) {
		controller.push(' ', {
			a : log_icon[i],
			href : '#',
			title : 'toggle [' + i + ']\n切換 ' + (l[i] || i) + ' 訊息',
			onclick : function() {
				var tag = this.title.match(/\[([^\]]+)\]/);
				if (tag)
					CeL.set_class(this, 'debug_hide', {
						remove : CeL.toggle_log(tag[1])
					});
				return false;
			}
		});
	}
	//	增加 group 以便在多項輸入時亦可 toggle 或排版。
	CeL.Log.controller = {
			div : [ {
				a : 'log',
				href : '#',
				title : 'log 控制項',
				onclick : function() {
					var p = this.parentNode;
					if (p.force_show) {
						//	DOM 不可使用 delete @ IE9
						//delete p.force_show;
						p.force_show = false;
					} else {
						CeL.toggle_display(this.nextSibling, p.force_show = true);
					}
					return false;
				}
			}, {
				span : controller,
				C : 'debug_controller'
			} ],
			//	TODO: 即使僅是移動 mouse 進入 child，也會執行多次。
			onmouseover : function() {
				CeL.toggle_display(this.firstChild.nextSibling, 1);
			},
			onmouseout : function() {
				if (!this.force_show) {
					CeL.toggle_display(this.firstChild.nextSibling, 0);
				}
			},
			C : 'debug_controller_panel'
	};

	//	在 CeL.log 被重新設定前先 cache 一下。
	l = CeL.log && CeL.log.buffer;

	Object.assign(CeL, {
		log : o[1],
		warn : o[2],
		err : o[3],

		info : function(message, clean) {
			//	information
			CeL.Log.log.call(CeL.Log, message, clean, 'info');
			//CeL.log.apply(CeL, arguments);
		},
		em : function(message, clean) {
			//	emphasis
			CeL.Log.log.call(CeL.Log, message, clean, 'em');
		},

		error : function() {
			//	使用 .apply() 預防 override.
			CeL.err.apply(CeL, arguments);
		},

		//	致命錯誤。
		fatal : function(message, error_to_throw) {
			//	fatal: the most serious
			try {
				throw CeL.is_type(error_to_throw, 'Error') ? error_to_throw
						: new Error(error_to_throw || 'Fatal error');
			} catch (e) {
				// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error/Stack
				CeL.err(e.stack ? message
						+ '<br />stack:<div class="debug_stack">'
						+ (typeof e.stack === 'string' ? e.stack.replace(/\n/g, '<br />') : e.stack)
						+ '</div>'
						: message);
			}

			if(typeof error_to_throw === 'undefined')
				error_to_throw = message;

			if (error_to_throw)
				throw CeL.is_type(error_to_throw, 'Error') ? error_to_throw
						: new Error(error_to_throw);
		},

		//	增加 debug 訊息。
		debug : function(message, level, caller, clean) {
			//alert(CeL.is_debug() + ',' + l + '(' + (l === undefined) + '),' + message);
			if (CeL.is_debug(level)) {
				if(!caller && has_caller) {
					// TODO: do not use arguments
					caller = caller !== arguments.callee && CeL.get_function_name(arguments.callee.caller);
					//CeL.log(CeL.is_type(arguments.callee.caller));
					//CeL.log(Array.isArray(caller));
					//CeL.log(caller+': '+arguments.callee.caller);
					//CeL.warn(CeL.debug);
				}

				if(typeof message === 'function') {
					//	for .debug(function(){return some_function(..);}, 3);
					message = 'function: [' + message + ']<br />return: [' + message() + ']';
				}
				CeL.Log.log.call(
						CeL.Log,
						caller ?
								[ {
									//(caller.charAt(0) === '.' ? CeL.Class + caller : caller)
									span : caller,
									'class' : 'debug_caller'
								}, ': ', message ]
							: message
						, clean, {
							level : 'debug',
							add_class : 'debug_' + (level || CeL.is_debug())
						}
				);
			}
		},
		trace : function() {
			//	trace: the least serious
			CeL.debug.apply(CeL, arguments);
		},

		//	切換(顯示/隱藏)個別訊息。
		toggle_log : function toggle_log(type, show) {
			if (!type)
				type = 'debug';
			var hiding = type in CeL.Log.class_hide;
			if (typeof show === 'undefined'
				|| show && hiding
				|| !show && !hiding)
				try {
					// need switch.
					var style_sheet = document.styleSheets[0],
						selector = '.' + CeL.Log.className_set[type],
						CSS_index = hiding ? search_CSS_rule(style_sheet, selector) : undefined;
					if (isNaN(CSS_index)) {
						// assign a new index.
						CSS_index = style_sheet.cssRules && style_sheet.cssRules.length ||
							// IE6
							style_sheet.rules && style_sheet.rules.length
							|| 0;
						CeL.debug('insert CSS index: ' + CSS_index, 2, 'toggle_log');
						var style = 'display:none';
						style_sheet.insertRule ?
							// firefox, IE 必須輸入 index.
							// <a href="https://developer.mozilla.org/en/DOM/CSSStyleSheet/insertRule" accessdate="2012/5/14 13:13">insertRule - MDN</a>
							style_sheet.insertRule(selector + '{' + style + ';}', CSS_index) :
							// IE6:
							// <a href="http://msdn.microsoft.com/en-us/library/aa358796%28v=vs.85%29.aspx" accessdate="2012/5/14 13:13">IHTMLStyleSheet::addRule method (Internet Explorer)</a>
							style_sheet.addRule(selector, style, CSS_index);

						// OK 之後才設定.
						CeL.Log.class_hide[type] = CSS_index;

					} else {
						CeL.debug('delete CSS index: ' + CSS_index, 2, 'toggle_log');
						style_sheet.deleteRule ? style_sheet.deleteRule(CSS_index) :
							// IE6
							style_sheet.removeRule(CSS_index);
						// OK 之後才 delete.
						delete CeL.Log.class_hide[type];
					}
					hiding = !hiding;
				} catch (e) {
					CeL.log('The browser may not support <a href="http://www.w3.org/TR/DOM-Level-2-Style/css" target="_blank">Document Object Model CSS</a>? Can not toggle debug message: <em>'
						+ e.message + '</em>');
				}
			return !hiding;
		},

		/**
		 * 斷定/測試/驗證 verify/檢查狀態。<br />
		 * 
		 * @param {Array|Function|Object|..}condition
		 *            test case.<br>
		 *            {Object} {eval : testing expression code to eval}<br>
		 *            {Function} testing function to run.<br>
		 *            {Array} [expected, condition] || [, condition, expected].<br>
		 *            <br>
		 *            default expected === true.<br>
		 *            expected = { test : value / function(returned){return OK;}, type :
		 *            type, ignorable : true / need 手動 check, exactly : true }
		 * 
		 * @param {String}[error_message]
		 *            失敗時所要呈現訊息。 meaning of failure.
		 * 
		 * @param {String|Object}[OK_message]
		 *            {String} meaning of passed.<br>
		 *            {Object} { test name : meaning of passed }
		 * 
		 * @returns {Boolean|..} {Boolean}assertion is succeed.<br>
		 *          {..} ignorable message.
		 * @since	2012/9/19 00:20:49
		 */
		assert : function(condition, error_message, OK_message) {
			var i, need_exactly = true, ignorable = false,
			// 當測試效能時，強迫測試結果一定成功。
			force_true = false,
			// 預期的結果。should be what value.
			expected = true,
			// The actual value to test.
			value,
			// value == expected
			equal,
			// value === expected
			exactly,
			// 此次測試名稱。
			test_name = 'Assertion',
			// 執行 condition 出錯時的處置。
			err = function(e) {
				CeL.warn('執行 condition 時出錯: ' + e.message);
				return e;
			};

			// 前置作業:condition。
			if (Array.isArray(condition))
				if (condition.length === 2) {
					// [expected, condition]
					expected = condition[0];
					condition = condition[1];
				} else if (condition.length === 3
						&& typeof condition[0] === 'undefined') {
					// [, condition, expected]
					expected = condition[2];
					condition = condition[1];
				}

			if (typeof condition === 'function') {
				try {
					value = condition();
				} catch (e) {
					return err(e.message);
				}

				if (i = ('' + condition)
						.match(/^\s*function\s*(?:[a-zA-Z_][a-zA-Z_\d]*\s*)?\([^)]*\)\s*{\s*[\s\S]*\s*}[\r\n;]*$/))
					condition = i[1];

			} else if (CeL.is_Object(condition)) {
				for (i in condition) {
					if (i !== 'eval') {
						value = 0;
						break;
					}
					if (typeof condition[i] === 'string')
						value = condition[i];
				}
				if (value) {
					condition = value;
					try {
						value = ((new Function("return({o:" + value + "\n})"))()).o;
					} catch (e) {
						return err(e.message);
					}
				} else
					value = condition;
			} else
				value = condition;

			// 前置作業:expected。
			if (CeL.is_Object(expected)) {
				need_exactly = expected.exactly;
				force_true = expected.force_true;
				ignorable = expected.ignorable;
				if ('type' in expected) {
					expected = expected.type;
					//	Constructor Properties
					if (expected === String) {
						expected = 'String';
					} else if (expected === Function) {
						expected = 'Function';
					} else if (expected === Object) {
						expected = 'Object';
					} else if (expected === Array) {
						expected = 'Array';
					} else if (expected === Boolean) {
						expected = 'Boolean';
					} else if (expected === Number) {
						expected = 'Number';
					} else if (expected === Date) {
						expected = 'Date';
					} else if (expected === RegExp) {
						expected = 'RegExp';
					} else if (expected === Error) {
						expected = 'Error';
					}
					expected = new Function('v', 'return CeL.is_type(v,"'
							+ (typeof expected === 'string'
									&& /^[a-zA-Z_]+$/i.test(expected) ? expected : CeL
									.is_type(expected)) + '")');
				} else
					expected = expected.test;
			}

			if (typeof expected === 'function') {
				try {
					equal = exactly = expected(value);
				} catch (e) {
					return err(e.message);
				}
			} else if (equal = expected == value)
				exactly = expected === value;

			// 前置作業:OK_message。
			if (CeL.is_Object(OK_message)) {
				for (test_name in OK_message) {
					OK_message = OK_message[test_name];
					break;
				}
			}

			// report.
			if (!force_true && (!equal || need_exactly && !exactly)) {
				if (!error_message) {
					error_message = test_name + ' failed: [' + expected + '] !== (' + typeof value + ') [' + value + ']'
						+ (value === condition ? '' : '←[' + condition + ']');
					if (equal)
						error_message += '，但 "==" 之關係成立。';
				}
				CeL.fatal(error_message, CeL.assert.throw_Error &&
				// exception to throw
				new Error(error_message));

				return ignorable === true ? null : ignorable || false;
			}

			if (CeL.is_debug()) {
				i = null;
				if(has_caller)
					// caller: see: CeL.debug
					i = CeL.get_function_name(arguments.callee.caller);
				CeL.debug(OK_message
						|| test_name + ' OK: (' + (typeof value) + ') [' + value + ']'
						+ (error_message ? ' (if fault, message: ' + error_message + ')' : ''), 1, i);
			}

			return true;
		},

		/**
		 * 整套測試。
		 * 
		 * @example
		 * <code>
			CeL.testing([ [ {
				type : String
			}, 'aa' ], [ {
				type : 123
			}, 456 ], [ {
				type : Object
			}, {} ], [ {
				type : Boolean
			}, false ] ], 'type test');
		 * </code>
		 * 
		 * @param {Array}conditions
		 *            condition list.
		 * @param {String}test_name
		 *            此次測試名稱。
		 * @returns {Boolean} 無錯誤發生。
		 * @since	2012/9/19 00:20:49
		 */
		testing : function(conditions, test_name) {
			if (!Array.isArray(conditions))
				conditions = [ conditions ];

			var passed = 0, ignored = 0, failed = 0, i = 0, l = conditions.length, assert = CeL.assert, result;
			if (typeof test_name === 'string') {
				result = test_name;
				test_name = {};
				test_name[result] = null;
			}
			for (; i < l; i++) {
				try {
					result = assert(conditions[i], null, test_name);
				} catch (e) {
					failed++;
					continue;
				}
				switch (result) {
				case true:
					passed++;
					break;
				case false:
					failed++;
					break;
				default:
					ignored++;
				}
			}

			// report.
			if (CeL.is_Object(test_name)) {
				for (i in test_name) {
					test_name = i;
					break;
				}
			}
			test_name = test_name ? 'Testing [' + test_name + ']: ' : '';

			if (!failed) {
				test_name += 'All ' + passed + '/' + (passed + ignored + failed)
						+ ' passed';
				if (ignored)
					test_name += ', ' + ignored + ' ignored';

				CeL.info(test_name + '.');
				return true;
			}

			// not all passed.
			test_name += failed + '/' + (passed + ignored + failed) + ' failed';
			if (ignored)
				test_name += ', ' + ignored + ' ignored';
			test_name += '.';

			if (passed) {
				CeL.warn(test_name);
			} else {
				CeL.err(test_name);
			}
			return false;
		}
	});


	//	處理 loading 本 module 前即已 log 之 message。
	if (CeL.is_Object(l)) {
		for (i in l)
			if (i) {
				CeL.debug({
					em : 'Before loading ' + module_name + ', there are some debugging message.'
				});
				for (i in l) {
					CeL.debug(l[i]);
				}
				CeL.debug('<em>' + module_name + ' loaded.<\/em>');
				break;
			}
	}
}

}
});

