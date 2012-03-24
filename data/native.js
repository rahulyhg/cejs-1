
/**
 * @name	CeL function for native objects
 * @fileoverview
 * 本檔案包含了 native objects 的 functions。
 * @since	
 */

/*

http://www.hunlock.com/blogs/Ten_Javascript_Tools_Everyone_Should_Have
*/

if (typeof CeL === 'function')
CeL.setup_module('data.native',
{
require : 'data.code.compatibility.add_method|data.code.parse_escape',
code : function(library_namespace, load_arguments) {
'use strict';

//	requiring
var add_method, parse_escape;
eval(library_namespace.use_function(this));


/**
 * null module constructor
 * @class	native objects 的 functions
 */
var _// JSDT:_module_
= function() {
	//	null module constructor
};


/**
 * for JSDT: 有 prototype 才會將之當作 Class
 */
_// JSDT:_module_
.prototype = {
};






/*	opposite of toUTCString()
	尚不成熟！假如是type=='date'，不如用new Date()!
	string大部分可用new Date(Date.parse(str))代替!
	http://www.comsharp.com/GetKnowledge/zh-CN/TeamBlogTimothyPage_K742.aspx

var UTCDay,UTCMonth;
set_Object_value('UTCDay','Sun,Mon,Tue,Wed,Thu,Fri,Sat',1);
set_Object_value('UTCMonth','Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec',1);
var fromUTCStringFormat=[[0,3,2,1,4],[0,5,1,2,3],[0,4,1,2,3]];	//	0:[Mon, 9 Aug 2004 12:05:00 GMT],1:[Thu Sep 30 18:12:08 UTC+0800 2004],2:[Sat Jun 26 18:19:46 2004]
function fromUTCString(str,format){
 var s=''+str,f;
 if(!s)return;
 if(typeof format=='undefined')if(f=Date.parse(s))return new Date(f);else return 'Unknown format!';//format=0;
 if(!isNaN(format)&&format<fromUTCStringFormat.length)f=fromUTCStringFormat[format];
 else return 'Yet support this kind of format['+format+']!\nWe support to '+fromUTCStringFormat.length+'.';
 if(!f[0])f[0]=' ';
 s=s.replace(new RegExp(f[0]+'+','g'),f[0]).split(f[0]);
 if(s.length<f.length)return 'The item length of data: '+s.length+' is less then format['+format+']: '+f.length+'!\n'+s.join(',');// new Date
 if(f.length==5)s[f[4]]=s[f[4]].split(':');
 else if(f.length==7)s[f[4]]=[s[f[4]],s[f[5]],s[f[6]]];
 else return 'Illegal date format!';
 if(format==1&&s[4].match(/([+-]\d{2})/))s[f[4]][0]=parseInt(s[f[3]][0])+parseInt(RegExp.$1);
 library_namespace.debug(str+'\n'+s[f[1]]+','+s[f[2]]+'('+UTCMonth[s[f[2]]]+'),'+s[f[3]]+','+s[f[4]][0]+','+s[f[4]][1]+','+s[f[4]][2]);
 //	check,可以包括星期
 if( !(s[f[2]]=UTCMonth[s[f[2]]]) || !(s=new Date(s[f[1]],s[f[2]],s[f[3]],s[f[4]][0],s[f[4]][1],s[f[4]][2])) )	//	Date.UTC()
  s='Input data error!';
 return s;
}
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------//


/**
 * convert the string to Date object.
 * 
 * @example <code>
 * CeL.format_date(CeL.String_to_Date('2003/1-4 12:53:5.45PM', 'CST'));
 * CeL.format_date(CeL.String_to_Date('12:53:5.45PM 2003/1-4', 'CST'));
 * </code>
 * <code>
 * CeL.format_date('2003/1-4 12:53:5.45PM'.toDate('CST'));
 * CeL.format_date('12:53:5.45PM 2003/1-4'.toDate('CST'));
 * </code>
 * @param {String}date_string
 *            date string
 * @param {Object}option {
 *            <br />
 *            {Boolean}no_parse: no Date.parse() try and force parse,<br />
 *            {String|RegExp}format: the format used,<br />
 *            {Function}parser: the parser used,<br />
 *            {String|Number}zone: time zone or country (e.g., 'CST', 'TW') ||
 *            時差 in hour (例如 TW: UTC+8 → 8, 可使用.5)<br /> }
 * @returns {Date} new Date
 * @since 2012/3/22 23:58:38 重構並測試。
 * @see
 * <a href="http://msdn.microsoft.com/zh-tw/library/t5580e8h.aspx" accessdate="2012/3/23 23:26">JScript Date 物件</a>
 */
function String_to_Date(date_string, option) {
	if (!date_string) {
		// this.toString();
		//date_string = this.valueOf();
		return;
	}

	var tmp,
	minute_offset;

	if (!library_namespace.is_Object(option)) {
		tmp = option;
		(option = {}).zone = tmp;
	}

	//	設定指定 time zone 之 offset in minutes.
	tmp = option.zone;
	if (tmp === 0) {
		minute_offset = 0;
	} else {
		library_namespace.debug('設定 time zone / offset hours: ' + tmp, 2);
		if (tmp in String_to_Date.zone)
			tmp = String_to_Date.zone[tmp];
		//	for Daylight Saving Time (DST) time zones, etc.
		if (library_namespace.is_Function(tmp))
			tmp = tmp();

		minute_offset = (new Date).getTimezoneOffset()
			+ (tmp && !isNaN(tmp) && tmp < 12 && tmp > -12 ?
				parseInt(60 * tmp)
				: 0);
		library_namespace.debug('最終設定 offset ' + minute_offset + ' minutes.', 2);
	}

	//	use Date.parse to parse.
	if (!option.no_parse && (tmp = Date.parse(date_string)))
		return new Date(tmp + 60000 * minute_offset);

	//	use customize parser
	return (library_namespace.is_Function(option.parser) ? option.parser
			: String_to_Date.parser[option.parser] || String_to_Date.default_parser)
			(date_string, minute_offset);
}

/**
 * Input {@Regexp} object and index, return new Date.
 * @param {RegExp}match
 * @param Y
 * @param m
 * @param d
 * @param A
 * @param H
 * @param M
 * @param S
 * @param ms
 * @param {Integer}minute_offset	(指定 time zone 之) offset in minutes.
 * @param {Integer}year_offset	小於此年份會加上此年份。
 * @returns {Date} new Date
 */
String_to_Date.match_to_Date = function match_to_Date(match, Y, m, d, A, H, M, S, ms, minute_offset, year_offset) {
	library_namespace.debug([match[Y], match[m], match[d], match[H], match[A], match[M], match[S], match[ms]], 2, 'String_to_Date.match_to_Date');
	var year = match[Y] - 0;
	return new Date(year > 0 && year < (year_offset || 0) ? year + year_offset
			: (year || 0), match[m] ? match[m] - 1 : 0, match[d] || 1,
			(match[A] === 'P' || match[A] === 'p' ? 12 : 0) + (match[H] - 0 || 0),
			(match[M] - 0 || 0) + (minute_offset || 0), match[S] || 0, match[ms] || 0);
};

/**
 * parse date_string and return the new Date.
 * 
 * @param {String}date_string
 *            date string
 * @param {Integer}minute_offset
 *            (指定 time zone 之) offset in minutes.
 * @returns {Date} new Date
 */
function String_to_Date_default_parser(date_string, minute_offset) {
	var date, tmp,
	//	matched string
	match,
	// 小於此年份會加上此年份。for 民國。
	year_offset = 1911;

	if (match = date_string.match(/(^|[^\d])([012]\d{3})([^\/.\-–年]|$)/))
		// 僅有 xxx/1xxx/2xxx 年(year)時的bug
		date_string = match[2] + '/1';

	match = date_string.match(String_to_Date_default_parser.date_first);
	if (match && isNaN(match[0])) {
		// needless
		//for ( var i = 1; i < 11; i++) match[i] = match[i] ? Math.floor(match[i]) : 0;
		date = String_to_Date.match_to_Date(match, 1, 2, 3, 8, 4, 5, 6, 7, minute_offset, year_offset);
		library_namespace.debug('日期→時間: ' + date, 2);
	} else if (match = date_string.match(String_to_Date_default_parser.time_first)) {
		date = String_to_Date.match_to_Date(match, 6, 7, 8, 5, 1, 2, 3, 4, minute_offset, year_offset);
		library_namespace.debug('時間→日期: 不 match 或僅有一數字: ' + date, 2);
	}

	if (match) {
		//	$2:year, $3:month, $5:mday.
		library_namespace.debug(match.join('<br />'), 2, 'String_to_Date_default_parser');

		// 判別未輸入時預設年份設對了沒：以最接近 Now 的為基準。
		if (!date.getFullYear() && date - new Date(0, 0, 2) > 0) {
			match = new Date(date);
			date.setFullYear(date_string = (tmp = new Date).getFullYear());
			match.setFullYear(date - tmp > 0 ? date_string - 1 : date_string + 1);
			if (date - tmp > 0 && date - tmp > tmp - match || date - tmp < 0 && date - tmp < tmp - match)
				date = match;
		}
		return date;
	}
}

(function() {
	//	pattern of date
	var pd = /(?:([012]\d{3}|1\d{2}|[2-9]\d)[\/.\-–年 ])?([01]?\d)(?:[\/.\-–月 ]([0-3]?\d)日?)?/.source,
	// pattern of time
	pt = /([0-2]?\d)[:時]([0-5]?\d)(?:[:分]([0-5]?\d)(?:\.(\d+))?)?\s*(?:([PA])M)?/i.source;
	// 日期先: date [time]
	String_to_Date_default_parser.date_first = new RegExp(pd + '(?:\\s+' + pt + ')?', 'i');
	// 時間先: time [date]
	String_to_Date_default_parser.time_first = new RegExp(pt + '(?:\\s+' + pd + ')?', 'i');
})();

String_to_Date.default_parser = String_to_Date_default_parser;

String_to_Date.parser = {
	//	<a href="http://php.net/manual/en/function.date.php" accessdate="2012/3/23 20:51">PHP: date - Manual</a>
	PHP : function() {
		throw 'TODO';
	},
	//	<a href="http://www.freebsd.org/cgi/man.cgi?query=strftime" accessdate="2012/3/23 20:59">strftime</a>,
	//	<a href="http://hacks.bluesmoon.info/strftime/" accessdate="2012/3/23 21:9">strftime: strftime for Javascript</a>
	strftime : function() {
		throw 'TODO';
	}
};

//	time zone abbreviations and offset in hour.
//	TODO: Daylight Saving Time (DST).
String_to_Date.zone = {
		//	UTC + 8 hours
		CST : 8,
		JST : 9,
		EST : -5,
		PST : -8,
		//	Greenwich Mean Time
		GMT : 0,
		//	Coordinated Universal Time
		UTC : 0
};

_// JSDT:_module_
.
String_to_Date = String_to_Date;

//----------------------------------------------------------------------------------------------------------------------------------------------------------//


//	格式化日期時間：依照指定格式輸出日期與時間。
//	要格式化的日期
//CeL.debug((new Date).format('\\%m\\x61%m/%d/%Y'))
//var t='2001/8/7 03:35:8PM';CeL.debug(t+' → '+t.toDate('CST')+' → '+t.toDate('CST').format('%Y年%m月%d日%H時%M分%S秒%f毫秒'));CeL.assert('2001年8月7日15時35分8秒000毫秒'===t.toDate('CST').format('%Y年%m月%d日%H時%M分%S秒%f毫秒'));

//	TODO: 各 locale 有不同 format 與 time zone offset.
//	<a href="http://www.freebsd.org/cgi/man.cgi?query=strftime" accessdate="2012/3/23 20:59">strftime</a>,
//	<a href="http://hacks.bluesmoon.info/strftime/" accessdate="2012/3/23 21:9">strftime: strftime for Javascript</a>
//	%f: zero-padded millisecond / microsecond	<a href="http://bugs.python.org/issue1982" accessdate="2012/3/24 12:44">Issue 1982: Feature: extend strftime to accept milliseconds - Python tracker</a>
//	<a href="http://blog.csdn.net/xzknet/article/details/2278101" accessdate="2012/3/24 15:11" title="如何使用Javascript格式化日期显示 - 虫二的专栏~~在路上~~~ - 博客频道 - CSDN.NET">JsJava中提供了專用的類，專門對日期進行指定格式的字符串輸出</a>
function Date_to_String(date_value, option) {
	var parser='strftime';

	if (typeof option==='string')
		option = option in Date_to_String.parser?{parser:Date_to_String.parser[option]}:{format:option};
	else if (typeof option==='function')
		option = {parser:option};

	if(library_namespace.is_Object(option)){
		if(option.parser)parser=option.parser;
	}else option={};

	if(parser in Date_to_String.parser)
		parser=Date_to_String.parser[parser];

	if (!(date_value instanceof Date)) {
		date_value = typeof date_value === 'date' ? new Date(date_value) : ('' + date_value).toDate();
	}

	//if (!date_value) date_value = new Date;

	if(date_value && parser)
		return parser(date_value, option.format || '%Y/%m/%d %H:%M:%S.%f', option.locale);
};

Date_to_String.parser = {
	//	<a href="http://php.net/manual/en/function.date.php" accessdate="2012/3/23 20:51">PHP: date - Manual</a>
	PHP : function(date_value, format, locale) {
		throw 'TODO';
	},
	//	<a href="http://www.freebsd.org/cgi/man.cgi?query=strftime" accessdate="2012/3/23 20:59">strftime</a>,
	//	<a href="http://hacks.bluesmoon.info/strftime/" accessdate="2012/3/23 21:9">strftime: strftime for Javascript</a>
	strftime : strftime,
	//	Turn to RFC 822 date-time
	//	<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/toUTCString" accessdate="2012/3/24 8:5" title="toUTCString - MDN">The most common return value is a RFC-1123 formatted date stamp, which is a slightly updated version of RFC-822 date stamps.</a>
	//Date_to_RFC822[generateCode.dLK]='setup_tool,String_to_Date';
	RFC822 : function(date_value) {
		return date_value.toUTCString().replace(/UTC/gi, 'GMT');
	}
};


_// JSDT:_module_
.
Date_to_String = Date_to_String;




function strftime(date_value, format, locale) {
	var conversion = strftime.conversion[locale||''],
	search = strftime.search[locale||''];
	return parse_escape(format, function(s){return s.replace(search,
		function($0,$1){return conversion[$1].call(date_value);}
	);});
}

//	支援的 conversion specifications (轉換規格). 將直接使用輸入，因此呼叫後若改變 conversion specifications object 將出現問題！
strftime.set_conversion= function(c, locale){
	var i, search = '';
	if(!strftime.search){
		strftime.search = {};
		strftime.conversion = {};
	}

	strftime.conversion[locale||''] = c;
	for(i in c)
		search += i;
	strftime.search[locale||''] = search = new RegExp('%(['+search+'])','g');
	library_namespace.debug('use conversion specifications '+(locale||'')+': '+search, 1, 'strftime.set_conversion');

	return search;
};

//	<a href="http://help.adobe.com/zh_TW/as2/reference/flashlite/WS5b3ccc516d4fbf351e63e3d118cd9b5f6e-7923.html" accessdate="2012/3/24 15:29">Adobe Flash Platform * Date</a>
//	<a href="http://msdn.microsoft.com/zh-tw/library/dca21baa.aspx" accessdate="2012/3/24 15:30">Date 物件</a>
//	<a href="http://www.cppreference.com/wiki/cn/chrono/c/strftime" accessdate="2012/3/24 15:23">strftime    [C++ Reference]</a>
strftime.set_conversion({
	//	完整年份(四位數的數字，如2000)
	Y : function() { return this.getFullYear(); },
	//	月份 (1-12)。
	m : function() { return 1 + this.getMonth(); },
	//	月中的第幾天 (1-31)
	d : function() { return this.getDate(); },
	//	小時數 (0-23)
	H : function() { return this.getHours(); },
	//	分鐘數 (0-59)
	M : function() { return this.getMinutes(); },
	//	秒數 (0-59)
	S : function() { return this.getSeconds(); },
	//	毫秒(milliseconds) (000-999)
	f : function() { var ms = this.getMilliseconds(); return ms>99?ms:ms>9?'0'+ms:'00'+ms; }
});

//----------------------------------------------------------------------------------------------------------------------------------------------------------//



/*
mode:
	+4:不顯示時間,
	+3:顯示時間至時,
	+2:顯示時間至分,
	+1:顯示時間至秒,
	+0:顯示時間至毫秒(milliseconds)

	+32(4<<3):不顯示日期,
	+24(3<<3):顯示日期mm/dd,
	+16(2<<3):顯示日期yyyy/mm,
	+8(1<<3):顯示日期yyyy/mm/dd(星期),
	+0:顯示日期yyyy/mm/dd

	+64(1<<6):input UTC
	+128(2<<6):output UTC

NOTE:
在現有時制下要轉換其他時區之時間成正確time:
d=_其他時區之時間_;
diff=其他時區之時差(例如 TW: UTC+8)
d.setTime(d.getTime()-60000*((new Date).getTimezoneOffset()+diff*60))

*/

_// JSDT:_module_
.
/**
 * 顯示格式化日期 string
 * @param date_value	要轉換的 date, 值過小時當作時間, <0 轉成當下時間
 * @param {Number} mode	要轉換的 mode
 * @param {Boolean} zero_fill	對 0-9 是否補零
 * @param {String} date_separator	date separator
 * @param {String} time_separator	time separator
 * @return	{String}	格式化後的日期
 * @example
 * alert(format_date());
 * @since	2003/10/18 1:04 修正
 * @since	2010/4/16 10:37:30	重構(refactoring)
 * @requires setup_tool,to_fixed
 * @see
 * http://www.merlyn.demon.co.uk/js-dates.htm,
 * http://aa.usno.navy.mil/data/docs/JulianDate.html
 * @_memberOf	_module_
 */
format_date = function format_date(date_value, mode, zero_fill, date_separator, time_separator) {
	//library_namespace.debug('[' + (typeof date_value) + '] ' + date_value + ', mode: ' + mode);

	// initiate
	if (!mode)
		mode = 0;

	var output_UTC, a, b = mode, time_mode, return_string = '',
	show_number = zero_fill ? function(n) {
		return n > 9 ? n : '0' + n;
	} : function(n) {
		return n;
	};

	//	date & time mode
	mode %= 64;
	//	UTC mode
	b = (b - mode) / 64;
	//	input UTC
	a = b % 2 == 1 ? 1 : 0;
	output_UTC = b - a === 1;

	time_mode = mode % 8;
	//	date mode
	mode = (mode - time_mode) / 8;
	// time_mode > 4 && mode > 3: error mode: 沒啥好顯示的了

	//	處理各種不同的 date
	b = typeof date_value;
	if (b === 'number' && date_value >= 0){
		// 全球標準時間(UCT)與本地時間之差距
		// UTC time = local time + format_date.UTC_offset(milliseconds)
		if (!a && isNaN(a = format_date.UTC_offset))
			//	input UTC 時之差距(milliseconds)
			//	.getTimezoneOffset() is in minute. 60*1000(milliseconds)=6e4(milliseconds)
			a = format_date.UTC_offset = 6e4 * (new Date).getTimezoneOffset();

		// 值過小時當作時間: d<90000000~24*60*60*1000，判別為當天，只顯示時間。不允許 d<0！
		date_value = new Date(Math.abs(a += date_value) < 9e7 ? a : date_value);
		mode = 32;
	}else if (b === 'string' && (a = date_value.toDate()))
		date_value = a;
	else if (b === 'date')
		// 應對在 Excel 等外部程式會出現的東西
		date_value = new Date(date_value);
	else if (
			//	http://www.interq.or.jp/student/exeal/dss/ejs/1/1.html
			//	引数がオブジェクトを要求してくる場合は instanceof 演算子を使用します
			//	typeof date_value!=='object'||date_value.constructor!=Date
			!(date_value instanceof Date))
		//	new Date === new Date()
		date_value = new Date;


	// 處理 date
	if (mode < 4) {
		return_string = show_number((output_UTC ? date_value.getUTCMonth()
				: date_value.getMonth()) + 1);
		if (!date_separator)
			date_separator = '/';
		if (mode < 3)
			return_string = (output_UTC ? date_value.getUTCFullYear() : date_value
					.getFullYear())
					+ date_separator + return_string;
		if (mode !== 2) {
			return_string += date_separator
			+ show_number(output_UTC ? date_value.getUTCDate() : date_value
					.getDate());
			if (mode === 1)
				return_string += '(' + (output_UTC ? date_value.getUTCDay()
						: date_value.getDay()) + ')';
		}
	}

	// 處理 time
	if (time_mode < 4) {
		if (mode < 4)
			// 日期 & 時間中間分隔
			return_string += ' ';
		if (!time_separator)
			time_separator = ':';
		return_string += show_number(output_UTC ? date_value.getUTCHours()
				: date_value.getHours());
		if (time_mode < 3) {
			return_string += time_separator
			+ show_number(output_UTC ? date_value.getUTCMinutes()
					: date_value.getMinutes());
			if (time_mode < 2)
				return_string += time_separator
				+ (time_mode ? show_number(output_UTC ? date_value
						.getUTCSeconds() : date_value.getSeconds())
						: (output_UTC ? date_value.getUTCSeconds()
								+ date_value.getUTCMilliseconds() / 1e3
								: date_value.getSeconds() + date_value.getMilliseconds() / 1e3
							).to_fixed(3));
		}
	}

	return return_string;
};



/*
	function經ScriptEngine會轉成/取用'function'開始到'}'為止的字串

	用[var thisFuncName=parse_function().funcName]可得本身之函數名
	if(_detect_)alert('double run '+parse_function().funcName+'() by '+parse_function(arguments.callee.caller).funcName+'()!');

You may use this.constructor


TODO:
to call: parse_function(this,arguments)
e.g., parent_func.child_func=function(){var name=parse_function(this,arguments);}

bug:
函數定義 .toString() 時無法使用。
*/
_// JSDT:_module_
.
/**
 * 函數的文字解譯/取得函數的語法
 * @param {Function|String} function_name	function name or function structure
 * @param flag	=1: reduce
 * @return
 * @example
 * parsed_data = new parse_function(function_name);
 * @see
 * http://www.interq.or.jp/student/exeal/dss/ref/jscript/object/function.html,
 * Syntax error: http://msdn.microsoft.com/library/en-us/script56/html/js56jserrsyntaxerror.asp
 * @_memberOf	_module_
 * @since	2010/5/16 23:04:54
 */
parse_function = function parse_function(function_name, flag) {
	if (!function_name
			&& typeof (function_name = parse_function.caller) !== 'function')
		return;
	if (typeof function_name === 'string'
			&& !(function_name = library_namespace.get_various(function_name)))
		return;

	var fs = String(function_name), m = fs.match(/^function[\s\n]+(\w*)[\s\n]*\(([\w,\s\n]*)\)[\s\n]*\{[\s\n]*([\s\S]*)[\s\n]*\}[\s\n]*$/);
	//library_namespace.debug(typeof function_name + '\n' + fs + '\n' + m);

	// detect error, 包含引數
	// 原先：functionRegExp=/^\s*function\s+(\w+) ..
	// 因為有function(~){~}這種的，所以改變。
	if (!m)
		// JScript5 不能用throw!
		// http://www.oldversion.com/Internet-Explorer.html
		throw new Error(1002, 'Syntax error (語法錯誤)');

	if (function_name != m[1])
		library_namespace.warn('Function name unmatch (函數名稱不相符，可能是用了reference？)');

	//library_namespace.debug('function ' + m[1] + '(' + m[2] + '){\n' + m[3] + '\n}');

	return {
		string : fs,
		name : m[1],
		// 去除前後空白
		arguments : m[2].replace(/[\s\n]+/g, '').split(','),
		code : m[3]
	};
};




//	補強String.fromCharCode()
function fromCharCode(c) {
	if (!isNaN(c))
		return String.fromCharCode(c);
	try {
		// 直接最快
		return eval('String.fromCharCode(' + c + ');');
	} catch (e) {
	}

/*
if (typeof c == 'string')
	return eval('String.fromCharCode(' + n + ')');// c=c.split(','); 後者可以通過審查
if (typeof c == 'object') {
	var t = '', d, i, a, n = [];
	if (c.length)
		a = c;
	else {
		a = [];
		for (i in c)
			a.push(c[i]);
	}
	for (i = 0; i < a.length; i++)
		if (!isNaN(c = a[i]) || !isNaN(c = ('' + a[i]).charCodeAt(0)))
			n.push(c); // 跳過無法判讀的值
	return eval('String.fromCharCode(' + n + ')');//n.join(',')	這樣較快
}
*/
};





_// JSDT:_module_
.
/**
 * 對付有時 charCodeAt 會傳回 >256 的數值。
 * 若確定編碼是 ASCII (char code 是 0~255) 即可使用此函數替代 charCodeAt。
 * @param text	string
 * @param position	at what position
 * @return
 * @since	2008/8/2 10:10:49
 * @see
 * http://www.alanwood.net/demos/charsetdiffs.html
 * @_memberOf	_module_
 */
toASCIIcode=function (text, position) {
	var _f = arguments.callee, c;

	if (!_f.t) {
		// initial
		var i = 129, t = _f.t = [], l = {
			8364 : 128,
			8218 : 130,
			402 : 131,
			8222 : 132,
			8230 : 133,
			8224 : 134,
			8225 : 135,
			710 : 136,
			8240 : 137,
			352 : 138,
			8249 : 139,
			338 : 140,
			381 : 142,
			8216 : 145,
			8217 : 146,
			8220 : 147,
			8221 : 148,
			8226 : 149,
			8211 : 150,
			8212 : 151,
			732 : 152,
			8482 : 153,
			353 : 154,
			8250 : 155,
			339 : 156,
			382 : 158,
			376 : 159
		};
		for (; i < 256; i += 2)
			t[i] = i;
		for (i in l)
			// sl(i+' = '+l[i]),
			t[Math.floor(i)] = l[i];
	}

	if (position < 0 && !isNaN(text))
		c = text;
	else
		c = text.charCodeAt(position || 0);

	return c < 128 ? c : (_f.t[c] || c);
};


/*	2008/8/2 9:9:16
	encodeURI, encodeURIComponent 僅能編成 utf-8，對於其他 local 編碼可使用本函數。

e.g.,
f.src='http://www.map.com.tw/search_engine/searchBar.asp?search_class=address&SearchWord='+encodeUC(q[0],'big5')




perl
#use Encode qw(from_to);
use Encode;

my $tEnc='utf-8';

$t="金";

$t=Encode::decode($t,'big5');

Encode::from_to($t,$lEnc,$outEnc);

Encode::from_to

@b=split(//,$a);

for($i=0;$i<scalar(@b);$i++){
 $r.=sprintf('%%%X',ord($b[$i]));
};


*/
//encodeUC[generateCode.dLK]='toASCIIcode';
function encodeUC(u, enc) {
	if (!enc || enc == 'utf8')
		return encodeURI(u);

	var i = 0, c = new ActiveXObject("ADODB.Stream"), r = [];
	// adTypeText;
	c.Type = 2;
	c.Charset = enc;
	c.Open();
	c.WriteText(u);
	c.Position = 0;
	c.Charset = 'iso-8859-1';
	u = c.ReadText();
	c.Close();

	for (; i < u.length; i++)
		r.push((c = u.charCodeAt(i)) < 128 ? u
				.charAt(i) : '%'
				+ toASCIIcode(c, -1).toString(16)
				.toUpperCase());

	return r.join('').replace(/ /g, '+');
}




_// JSDT:_module_
.
/**
 * String pattern (e.g., "/a+/g") to RegExp pattern.
 * qq// in perl.
 * String.prototype.toRegExp = function(f) { return to_RegExp_pattern(this.valueOf(), f); };
 * @param {String} pattern	pattern text
 * @param {Boolean|String} [RegExp_flag]	flags when need to return RegExp object
 * @param {RegExp} [escape_pattern]	char pattern need to escape
 * @return	{RegExp} RegExp object
 */
to_RegExp_pattern = function(pattern, RegExp_flag, escape_pattern) {
	var r = pattern
		// 不能用 $0
		.replace(escape_pattern || /([.+*?|()\[\]\\{}])/g, '\\$1')
		// 這種方法不完全，例如對 /^\s+|\s+$/g
		.replace(/^([\^])/, '\\^').replace(/(\$)$/, '\\$');
	return RegExp_flag ? new RegExp(r, /^[igms]+$/i.test(RegExp_flag) ? RegExp_flag : '') : r;
};



/**
 * 重新設定 RegExp object 之 flag.
 * change the flag of a RegExp instances.
 * @param {RegExp}regexp	RegExp object to set
 * @param {String}flag	flag of RegExp
 * @return	{RegExp}
 * @example
 * 附帶 'g' flag 的 RegExp 對相同字串作 .test() 時，第二次並不會重設。因此像下面的 expression 兩次並不會得到相同結果。
 * var r=/,/g,t='a,b';
 * WScript.Echo(r.test(t)+','+r.test(t));
 * 
 * //	改成這樣就可以了：
 * var r=/,/g,t='a,b',s=renew_RegExp_flag(r,'-g');
 * WScript.Echo(s.test(t)+','+s.test(t));
 * 
 * //	這倒沒問題：
 * r=/,/g,a='a,b';
 * if(r.test(a))library_namespace.debug(a.replace(r,'_'));
 * 
 * //	delete r.lastIndex; 無效，得用 r.lastIndex=0; 因此下面的亦可：
 * if(r.global)r.lastIndex=0;
 * if(r.test(a)){~}
 * 
 * @see
 * http://msdn.microsoft.com/zh-tw/library/x9h97e00(VS.80).aspx,
 * 如果規則運算式已經設定了全域旗標，test 將會從 lastIndex 值表示的位置開始搜尋字串。如果未設定全域旗標，則 test 會略過 lastIndex 值，並從字串之首開始搜尋。
 * http://www.aptana.com/reference/html/api/RegExp.html
 * @_memberOf	_module_
 */
function renew_RegExp_flag(regexp, flag) {
	var i, flag_set = {
		global : 'g',
		ignoreCase : 'i',
		multiline : 'm'
	};

	// 未指定 flag: get flag
	if (!flag) {
		flag = '';
		for (i in flag_set)
			if (regexp[i])
				flag += flag_set[i];
		return flag;
	}

	var a = flag.charAt(0), F = '', m;
	a = a === '+' ? 1 : a === '-' ? 0 : (F = 1);

	if (F)
		// 無 [+-]
		F = flag;
	else
		// f: [+-]~ 的情況，parse flag
		for (i in flag_set)
			if ((m = flag.indexOf(flag_set[i], 1) != -1) && a || !m
					&& regexp[i])
				F += flag_set[i];

	// for JScript<=5
	try{
		return new RegExp(regexp.source, F);
	}catch (e) {
		// TODO: handle exception
	}
};

_// JSDT:_module_
.
renew_RegExp_flag = renew_RegExp_flag;


/*	2004/5/27 16:08
	將 MS-DOS 萬用字元(wildcard characters)轉成 RegExp, 回傳 pattern
	for search

usage:
	p=new RegExp(turnWildcardToRegExp('*.*'))


flag&1	有變化的時候才 return RegExp
flag&2	add ^$


萬用字元經常用在檔名的置換。
* 代表任意檔案名稱
如：ls * 表示列出所有檔案名稱。
? 則代表一個字元
如: ls index.??? 表示列出所有 index.三個字元 的檔案名稱
[ ] 代表選擇其中一個字元
[Ab] 則代表 A 或 b 二者之中的一個字元
如: ls [Ab]same 為 Asame 或 bsame
[! ] 代表除外的一個字元
[!Ab] 則代表 不是 A 且 不是 b 的一個字元
如: [!0-9] 表不是數字字元
如: *[!E] 表末尾不是 E 的檔名

memo:
檔案名稱不可包含字元	** 不包含目錄分隔字元 [\\/]:
/:*?"<>|/

*/

//	萬用字元 RegExp source, ReadOnly
turnWildcardToRegExp.w_chars = '*?\\[\\]';

function turnWildcardToRegExp(p, f) { // pattern, flag

	if (p instanceof RegExp)
		return p;
	if (!p || typeof p != 'string')
		return;

	var ic = arguments.callee.w_chars, r;
	if ((f & 1) && !new RegExp('[' + ic + ']').test(p))
		return p;

	ic = '[^' + ic + ']';
	r = p
		//	old: 考慮 \
		//.replace(/(\\*)(\*+|\?+|\.)/g,function($0,$1,$2){var c=$2.charAt(0);return $1.length%2?$0:$1+(c=='*'?ic+'*':c=='?'?ic+'{'+$2.length+'}':'\\'+$2);})

		//	處理目錄分隔字元：多轉一，'/' → '\\' 或相反
		.replace(/[\\\/]+/g, typeof dirSp === 'string' ? dirSp : '\\')

		//	在 RegExp 中有作用，但非萬用字元，在檔名中無特殊作用的
		.replace(/([().^$\-])/g, '\\$1')

		//	* 代表任意檔案字元
		.replace(/\*+/g, '\0*')

		//	? 代表一個檔案字元
		.replace(/\?+/g, function($0) {
			return '\0{' + $0.length + '}';
		})

		//	translate wildcard characters
		.replace(/\0+/g, ic)

		//	[ ] 代表選擇其中一個字元
		//pass

		//	[! ] 代表除外的一個字元
		.replace(/\[!([^\]]*)\]/g, '[^$1]')
		;


	// 有變化的時候才 return RegExp
	if (!(f & 1) || p !== r)
		try {
			p = new RegExp(f & 2 ? '^' + r + '$' : r, 'i');
		} catch (e) {
			//	輸入了不正確的 RegExp：未預期的次數符號等
		}

	return p;
}




//	string & Number處理	-----------------------------------------------

function trimStr_(s, l, m) {
	 var lt,lt2,gt,i=0,c=l,t='',I=0;//less than,great than,index,left count index(left length now),text now,text index
 while(I<s.length){
  //將lt,gt定在下一label之首尾,i為下一次搜尋起點.label定義:/<.+?>/
  if(i!=-1)if((lt=s.indexOf('<',i))!=-1){
   if((gt=s.indexOf('>',lt+1))==-1)i=lt=-1;
   else{i=gt+1;while(lt!=-1&&(lt2=s.indexOf('<',lt+1))!=-1&&lt2<gt)lt=lt2;}
  }else i=lt=-1;
  //if(s.indexOf('')!=-1)alert(i+','+lt+','+gt+';'+l+','+c+'\n'+t);
  if(lt==-1)gt=lt=s.length;
  //未來:考慮中英文大小，不分隔英文字。前提:'A'<'z'..或許不用
  while(I+c<=lt){t+=s.substr(I,c)+(m?'\n':'<br />');I+=c;c=l;}
  t+=s.slice(I,gt+1);c-=lt-I;I=gt+1;
 }
 return t;
}
/*	將字串以長l分隔
	m==0: html用, 1:text
*/
//trimStr[generateCode.dLK]='trimStr_';
function trimStr(l,m){
 var s=this.valueOf(),t=[],sp='<br />';
 if(!s||!l||l<1||!String.fromCharCode)return m?s.gText():s;//||!String.charCodeAt:v5.5
 s=s.turnU(m);//(m):這樣就不用再費心思了.不過既然都作好了,就留著吧..不,還是需要
 if(s.length<=l)return s;
 if(!m)s=s.replace(/<w?br([^>]*)>/gi,sp);

 s=s.split(sp=m?'\n':sp);//deal with line
 try{
  //	預防JS5不能push
  for(var i=0;i<s.length;i++)t.push(trimStr_(s[i],l,m));
 }catch(e){return this.valueOf();}
 return t.join(sp);
}


function _bind(f, meny_arg) {
	return meny_arg
	? function() { return f.apply(f, Array.prototype.slice.call(arguments).unshift(this)); }
	: function(a) { return f(this, a); };
}


//	set prototype's function of 內建物件 for 相容性(not good way..)
//setup_tool[generateCode.dLK]='*setup_tool();';//,product,countS,to_fixed,getText,turnUnicode,trimStr,String_to_Date,Date_to_String,JSalert
function setup_tool() {
	add_method(String.prototype, {
		x : product,
		count : countS,
		//gText : getText,
		//turnU : turnUnicode,
		trim_by : trimStr,
		toDate : _bind(String_to_Date)
	});
	add_method(Date.prototype, {
		format : _bind(Date_to_String)
	});
	add_method(Number.prototype, {
		//to_fixed : to_fixed
	});
	add_method(RegExp.prototype, {
		reflag : _bind(renew_RegExp_flag)
	});
	add_method(library_namespace.global, {
		//	在HTML中typeof alert=='object'
		//alert : JSalert
	});
	//	建議不用，因為在for(in Array)時會..
	//if(!Array.prototype.unique&&typeof Aunique==='function')Array.prototype.unique=function() { return uniqueArray(this); };
}
setup_tool();

// array,sortFunction
function uniqueArray(a, f) {
	if (f)
		a.sort(f);
	else
		a.sort();
	var i = 1, j = -1;
	for (; i < a.length; i++)
		if (a[i] == a[i - 1]) {
			if (j < 0)
				j = i;
		} else if (j >= 0)
			a.splice(j, i - j), i = j, j = -1;
	if (j >= 0)
		a.splice(j, i - j);
	return a;
}

function product(c) {
	if (isNaN(c) || (c = Math.floor(c)) < 1)
		return '';
	var i, r = '', s = [];
	s[i = 1] = this;
	while (i + i <= c)
		s[i + i] = s[i] + s[i], i += i;
	while (c) {
		if (i <= c)
			r += s[i], c -= i;
		i /= 2;
	}
	return r;//in VB:String(c,this)
}
//	計算string中出現k之次數	用s///亦可@perl
function countS(k) { // k亦可用RegExp
	//var c=0,s=this,i=0,l;if(k&&typeof k=='string'){l=k.length;while((i=this.indexOf(k,i))!=-1)c++,i+=l;}return c;
	return (this.length - this.replace(k, '').length) / k.length;
}


_// JSDT:_module_
.
/**
 * 取至小數 d 位，
 * 肇因： JScript即使在做加減運算時，有時還是會出現 1.4000000000000001、0.0999999999999998 等數值。此函數可取至 1.4 與 0.1。
 * c.f., round()
 * @param {Number} [digits]	1,2,..: number of decimal places shown
 * @param {Number} [max]	max digits	max===0:round() else floor()
 * @return
 * @see
 * https://bugzilla.mozilla.org/show_bug.cgi?id=5856
 * IEEE754の丸め演算は最も報告されるES3「バグ」である。
 * http://www.jibbering.com/faq/#FAQ4_6
 * http://en.wikipedia.org/wiki/Rounding
 * @example
 * {var d=new Date,v=0.09999998,i=0,a;for(;i<100000;i++)a=v.to_fixed(2);alert(v+'\n→'+a+'\ntime:'+format_date(new Date-d));}
 * @_memberOf	_module_
 */
to_fixed = function(digits, max) {
	var v = this.valueOf(),
	i, n;

	if (isNaN(v))
		return v;

	if (isNaN(digits) || digits < 0)
		// 內定：8位
		digits = 8;
	else if (digits > 20)
		digits = 20;

	if (!max && Number.prototype.toFixed)
		return parseFloat(v.toFixed(digits));

	if (v < 0)
		// 負數
		n = 1, v = -v;
	if ((i = (v = v.toString(10)).indexOf('e')) !== -1)
		return v.charAt(i + 1) == '-' ? 0 : v;

	//library_namespace.debug(v);
	//	TODO: using +.5 的方法
	//	http://clip.artchiu.org/2009/06/26/%E4%BB%A5%E6%95%B8%E5%AD%B8%E7%9A%84%E5%8E%9F%E7%90%86%E8%99%95%E7%90%86%E3%80%8C%E5%9B%9B%E6%8D%A8%E4%BA%94%E5%85%A5%E3%80%8D/
	if ((i = v.indexOf('.')) !== -1) {
		if (i + 1 + digits < v.length)
			if (max)
				v = v.slice(0, i + 1 + digits);
			else {
				v = '00000000000000000000' + Math.round(
						v.slice(0, i++) + v.substr(i, digits) + '.'
						+ v.charAt(i + digits)).toString(10);
				// (v!=0?library_namespace.debug(v+','+v.length+','+digits+','+v.substr(0,v.length-digits)+','+v.substr(max)):0);
				v = v.slice(0, max = v.length - digits) + '.' + v.substr(max);
			}
	}

	return v ? parseFloat((n ? '-' : '') + v) : 0;
};
/*	old:very slow
function to_fixed(d,m){
 var v=this.valueOf(),i;if(isNaN(v))return v;
 if(isNaN(d)||d<0)d=8;	//	內定：8位
 if(!m){
  v=Math.round(Math.pow(10,d)*v);v=v<0?'-'+'0'.x(d)+(-v):'0'.x(d)+v;
  v=v.slice(0,i=v.length-d)+'.'+v.substr(i);
 }else if(i=(v=''+v).indexOf('.')+1)v=v.slice(0,i+(d?d:d-1));
 return parseFloat(v||0);
}
*/

/*
//	增添單位
var addDenominationSet={};
addDenominationSet.a=',,,,'.split(',');
function addDenomination(a,b){

}
*/




//var sourceF=WScript.ScriptName,targetF='test.js';simpleWrite('tmp.js',alert+'\n'+simpleRead+'\n'+simpleWrite+'\nvar t="",ForReading=1,ForWriting=2,ForAppending=8\n,TristateUseDefault=-2,TristateTrue=-1,TristateFalse=0\n,WshShell=WScript.CreateObject("WScript.Shell"),fso=WScript.CreateObject("Scripting.FileSystemObject");\nt='+dQuote(simpleRead(sourceF),80)+';\nsimpleWrite("'+targetF+'",t);//eval(t);\nalert(simpleRead("'+sourceF+'")==simpleRead("'+targetF+'")?"The same (test dQuote OK!)":"Different!");');//WshShell.Run('"'+getFolder(WScript.ScriptFullName)+targetF+'"');
//	determine quotation mark:輸入字串，傳回已加'或"之字串。
/*
dQuote.qc=function(c,C){
	return c<32?'\\'+c:C;
};
*/
function dQuote(s,len,sp){	//	string,分割長度(會採用'~'+"~"的方式),separator(去除末尾用)
 var q;s=String(s);if(sp)s=s.replace(new RegExp('['+sp+']+$'),'');	//	去除末尾之sp
 if(isNaN(len)||len<0)len=0;
 if(len){
  var t='';
  for(;s;)t+='+'+dQuote(s.slice(0,len))+'\n',s=s.substr(len);	//	'\n':NewLine
  return t.substr(1);
 }
 //if(len){var t='';for(;s;)t+='t+='+dQuote(s.slice(0,len))+'\n',s=s.substr(len);return t.substr(3);}	//	test用
 s=s.replace(/\\/g,'\\\\')
	.replace(/\r/g,'\\r').replace(/\n/g,'\\n')	//	\b,\t,\f
	//	轉換控制字符
	.replace(/([\0-\37\x7f\xff])/g,function($0,$1){var c=$1.charCodeAt(0);return c<64?'\\'+c.toString(8):'\\x'+(c<16?'0':'')+c.toString(16);})
	//.replace(/([\u00000100-\uffffffff])/g,function($0,$1){})
	;
 //q=s.length;while(s.charAt(--q)==sp);s=s.slice(0,q+1);
 if(s.indexOf(q="'")!=-1)q='"';
 if(s.indexOf(q)!=-1)s=s.replace(new RegExp(q="'",'g'),"\\'");	//	,library_namespace.debug("Can't determine quotation mark, the resource may cause error.\n"+s);
 return q+s+q;
}


_// JSDT:_module_
.
/**
 * check input string send to SQL server
 * @param {String} string	input string
 * @return	{String}	轉換過的 string
 * @since	2006/10/27 16:36
 * @see
 * from lib/perl/BaseF.pm (or program/database/BaseF.pm)
 * @_memberOf	_module_
 */
checkSQLInput = function(string) {
	if (!string)
		return '';

	// 限制長度
	if (maxInput && string.length > maxInput)
		string = string.slice(0, maxInput);

	return string
		// for \uxxxx
		.replace(/\\u([\da-f]{4})/g, function($0, $1) {
			return String.fromCharCode($1);
		}).replace(/\\/g, '\\\\')
	
		// .replace(/[\x00-\x31]/g,'')
		.replace(/\x00/g, '\\0')
	
		// .replace(/\x09/g,'\\t')
		// .replace(/\x1a/g,'\\Z')
	
		// .replace(/\r\n/g,' ')
		.replace(/\r/g, '\\r').replace(/\n/g, '\\n')
	
		// .replace(/"/g,'\\"')
		.replace(/'/g, "''");
};




_// JSDT:_module_
.
/**
 * 轉換字串成數值，包括分數等。分數亦將轉為分數。
 * @param {String} number	欲轉換之值
 * @return
 * @_memberOf	_module_
 */
parse_number = function(number) {
	var m = typeof number;
	if (m === 'number')
		return number;
	if (!number || m !== 'string')
		return NaN;

	number = number.replace(/(\d),(\d)/g, '$1$2');
	if (m = number.match(/(-?[\d.]+)\s+([\d.]+)\/([\d.]+)/)) {
		var p = parseFloat(m[1]), q = parseFloat(m[2]) / parseFloat(m[3]);
		return p + (m[1].charAt(0) === '-' ? -q : q);
	}
	if (m = number.match(/(-?[\d.]+)\/([\d.]+)/))
		// new quotient(m[1],m[2])
		return parseFloat(m[1]) / parseFloat(m[2]);

/*
	try {
		return isNaN(m = parseFloat(number)) ?
				//	TODO: security hole
				eval(number) : m;
	} catch (e) {
		return m;
	}
*/
};



return (
	_// JSDT:_module_
);
}


});

