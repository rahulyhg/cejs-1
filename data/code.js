
/**
 * @name	CeL function for source code.
 * @fileoverview
 * 本檔案包含了處理 source code 的 functions。
 * @since	
 */


if (typeof CeL === 'function')
CeL.setup_module('data.code',
function(library_namespace, load_arguments) {

//	nothing required


/**
 * null module constructor
 * @class	處理 source code 的 functions
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

//TODO: 不定長 escape sequence.
//CeL.set_run('data.code',function(){var e=CeL.parse_escape('00%M0\\\\\\\\\\%Mg\\a1\\n1\\s1\\a222',function(s){return s.replace(/%M/g,'_');});CeL.info(e.replace(/\n/g,'<br />'));CeL.assert(e==='00_0\\\\%Mga1\n1s1a222');});
function parse_escape(string, option){
	var match, parse_RegExp, lastIndex=0,
	//	<a href="http://en.wikipedia.org/wiki/Escape_character" accessdate="2012/3/24 11:16" title="Escape character">escape character</a>
	e_c='\\',
	//	escape sequence length. default: 1. 這裡僅列出需要特別注意的。
	e_l={
		u:4,U:8,x:2
		//	TODO: [\d]
	},
	//	handle function
	handle,
	//	Single Character Escape Sequences
	s_c_e_s={
		u:to_char,
		U:to_char,
		x:to_char,
		b:'\b',t:'\t',n:'\n',v:'\v',f:'\f',r:'\r'
		//,'"':'\"',"'":"\'",'\\':'\\'
	},
	//	escape sequence handle function
	e_s_handle =function(s,a){
		//library_namespace.debug(s+': additional ['+a+'], ');
		if(s in s_c_e_s){var f=s_c_e_s[s];s=typeof f==='function'?f(s,a):f;}return s;
	},
	character_list=[];

	function to_char(c,x){
		//library_namespace.debug('U+'+x+': ['+String.fromCharCode(parseInt(x,16))+']');
		return String.fromCharCode(parseInt(x,16));
	}

	function handle_slice(s, e_s){
		//library_namespace.debug(lastIndex+': ['+s+']<em>|</em>'+(e_s||''));
		if(s&&handle)
			s=handle(s);
		if(e_s){
			var l,e='';
			if(e_s in e_l) {
				e=string.substr(lastIndex, l=e_l[e_s]);
				//library_namespace.debug('('+l+') ['+e_s+e+']');
				lastIndex=(parse_RegExp.lastIndex+=l);
			}
			if(e_s_handle)
				e_s=e_s_handle(e_s,e);
			else if(e!=='')
				e_s+=e;
			character_list.push(s, e_s);
		}else if(s)
			character_list.push(s);
	}

	if(typeof option==='string')
		e_c=option;
	else if(typeof option==='function')
		handle=option;
	else if(library_namespace.is_Object(option)){
		if(option.escape)e_c=option.escape;
		if(option.escape_length)e_l=option.escape_length;
		if(option.handle)handle=option.handle;
		if(option.escape_handle)e_s_handle=option.escape_handle;
	}

	parse_RegExp=new RegExp('((.|\n)*?)\\'+e_c+'(.)','g');

	//library_namespace.debug('['+string+']');
	while(match=parse_RegExp.exec(string)){
		lastIndex=parse_RegExp.lastIndex;
		handle_slice(match[1], match[3]);
	}
	handle_slice(string.slice(lastIndex));

	return handle?character_list.join(''):character_list;
};

_// JSDT:_module_
.
parse_escape = parse_escape;





return (
	_// JSDT:_module_
);
}


);

