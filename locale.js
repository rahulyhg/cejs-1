
/**
 * @name	CeL function for locale
 * @fileoverview
 * 本檔案包含了 locale 的 functions。
 * @since	
 */

/*
http://blog.miniasp.com/post/2010/12/24/Search-and-Download-International-Terminology-Microsoft-Language-Portal.aspx
http://www.microsoft.com/language/zh-tw/default.aspx
Microsoft | 語言入口網站
*/

if (typeof CeL === 'function')
CeL.setup_module('locale',
function(library_namespace, load_arguments) {

//	no required



/**
 * null module constructor
 * @class	locale 的 functions
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





//	i18n系列	==================

/*	setup message of various languages for i18n (internationalization)
var languagesMessage={},defaultLanguage,useLanguage,languageAlias;
setObjValue('languageAlias','en_US=en_US,en=en_US,English=en_US,zh_TW=zh_TW,zh=zh_TW,tw=zh_TW,中文=zh_TW,Chinese=zh_TW,日本語=ja_JP,Japanese=ja_JP,ja_JP=ja_JP,ja=ja_JP,jp=ja_JP');
*/
//get_language_alias[generateCode.dLK]='languageAlias,existLanguageAlias';
function get_language_alias(language) {
	if (existLanguageAlias(language))
		language = languageAlias[language];
	return language;
}

//existLanguageAlias[generateCode.dLK]='languageAlias';
function existLanguageAlias(language) {
	return language && language in languageAlias;
}

//	(language, if you want to setup defaultLanguage as well)
//setLanguage[generateCode.dLK]='get_language_alias,defaultLanguage,useLanguage';
function setLanguage(language, mode) {
	language = get_language_alias(language);
	if (mode)
		defaultLanguage = language;
	else
		useLanguage = language;
	return useLanguage;
}

//	setMessage(messageIndex1,[local,message],[local,message],messageIndex2,[local,message],[local,message],..)
//setMessage[generateCode.dLK]='languagesMessage,defaultLanguage,get_language_alias';
function setMessage(){
 //if(!defaultLanguage)defaultLanguage='en_US';
 //	n.preference('intl.charset.default')	http://chaichan.hp.infoseek.co.jp/qa3500/qa3803.htm	http://articles.techrepublic.com.com/5100-22-5069931.html
 //	http://forum.mozilla.gr.jp/?mode=al2&namber=5608&rev=&&KLOG=39
 //	navigator.language=general.useragent.locale @ about:config
 //	var n=window.navigator;netscape.security.PrivilegeManager.enablePrivilege('UniversalPreferencesRead');setLanguage((n.browserLanguage||(n.preference&&n.preference('intl.accept_languages')?n.preference('intl.accept_languages').split(',')[0]:n.language?n.language.replace(/-/,'_'):'')));
 if(typeof languagesMessage!='object')languagesMessage={};
 var i=0,msgNow,language,msg;
 for(;i<arguments.length;i++){
  msg=arguments[i];
  //alert(typeof msg+','+msg.constructor+','+msg);
  if(typeof msg=='string')msgNow=msg;
  else if(msg instanceof Array){
   language=msg[0],msg=msg[1];
   //alert(language+','+msg);
   if(language==defaultLanguage||!language)msgNow=msg;
   else if(msgNow){
    language=get_language_alias(language);
    if(typeof languagesMessage[language]!='object')languagesMessage[language]={};
    //alert('['+language+']['+msgNow+']='+msg);
    languagesMessage[language][msgNow]=msg;
   }
  }
 }
}

//get_local_message[generateCode.dLK]='languagesMessage,useLanguage,get_language_alias';
function get_local_message(message, language) {
	language = get_language_alias(language);
	try {
		// alert(languagesMessage[language||useLanguage]);
		return languagesMessage[language || useLanguage][message]
		|| message;
	} catch (e) {
		return message;
	}
}


//	↑i18n系列	==================







return (
	_// JSDT:_module_
);
}


);

