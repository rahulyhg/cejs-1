
/**
 * @name	CeL function for API
 * @fileoverview
 * 本檔案包含了 include API 專用的 functions。
 * @since	2010/6/20 13:28:50
 */

/*

*/

'use strict';
if (typeof CeL === 'function')
CeL.run({name:'data.code.API',
code:function(library_namespace) {


//	nothing required


/**
 * null module constructor
 * @class	相容性 test 專用的 functions
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





/*	2008/5/29 20:6:23-6/4 2:10:21
7/3 13:34	showNeighbor: 可拖曳 loc->name/address, 有資料的提高優先權, bug fix: 有些太遠的還是會被列入, 有些近的可能因為不是住址而不會被列入
7/9 13:9:15	context menu
7/9 21:12:3	getLocations
2009/7/20 20:27:58	稍作修正


bug:
名稱相同時會出現被覆蓋的情況!


TO TEST:


showClass.setRepository('_ev_');

sC=showClass.showOnScope;

sC('mp',GLog.write);

sC('Fb','mp');

sC('y','Fb');

sC('A','y');


to use:

<script type="text/javascript" src="map.js"></script>
<script type="text/javascript">//<![CDATA[
wAPIcode('Gmap');
//]]></script>


TODO:
分類(Categories)&分顏色顯示
Auto Zoom Out	http://esa.ilmari.googlepages.com/sorry.htm
search data only
preload map & markers
GDirections
圈選
用經緯度查詢

c.f. http://jmaps.digitalspaghetti.me.uk/

http://www.ascc.sinica.edu.tw/nl/90/1706/02.txt
臺灣地區地名網站
http://tgnis.ascc.net
http://placesearch.moi.gov.tw/index_tw.php

地名學名詞解釋彙編
http://webgis.sinica.edu.tw/geo/Termquery.asp

臺灣地區地名相關文獻查詢系統
http://webgis.sinica.edu.tw/geo/reference.html

經濟部中央地質調查所-地質資料整合查詢
http://datawarehouse.moeacgs.gov.tw/geo/index/GISSearch/MSDefault.htm


http://gissrv3.sinica.edu.tw/tgnis_query/link.php?cid=1
http://www.edu.geo.ntnu.edu.tw/modules/wordpress/2008/06/08/yxaewaweaeobmh/


http://gissrv3.sinica.edu.tw/search/left2_detail.php?d_number=1&d_database=25k_2002
http://gissrv3.sinica.edu.tw/search/left2_detail.php?d_number=1085&d_database=5000_1
http://gissrv3.sinica.edu.tw/search/left2_detail.php?d_number=01663&d_database=chen_quo
http://gissrv3.sinica.edu.tw/search/left2_detail.php?d_number=1663&d_database=chen_jen
http://gissrv3.sinica.edu.tw/search/left2_detail.php?d_number=11880&d_database=tw_fort
http://gissrv3.sinica.edu.tw/search/left2_detail.php?d_number=02713&d_database=ching

http://gissrv3.sinica.edu.tw/input/detail.php?input_id=45875

資料庫	編號	類型(類別)	名稱	地理座標(經緯度)	所屬縣市鄉鎮(所屬行政區,地點)	別稱	註記(所在圖號)	意義(說明)



http://www.isp.tw/zip.php

小工具

1.溫度轉換
2.進位換算
3.BMI值及熱量需求計算
4.角度徑度換算
5.度量衡計算
6.區碼國碼查詢
7.郵遞區號查詢
8.金融機構代號查詢
9.色彩表示法查詢
10.摩斯密碼及字母述語
11.生肖星座查詢
12.婦女安全期計算
13.花言花語查詢
14.常用機關電話查詢
15.航空公司機場代碼查詢
16.簡易匯率換算
17.國曆農曆換算
18.急救及疾病忌口寶典
19.尺碼對照表
20.自訂公式計算
21.股票投資組合管理


*/




/*	初始化 Google Gears
http://code.google.com/apis/gears/gears_init.js
http://blog.ericsk.org/archives/978
http://chuiwenchiu.spaces.live.com/blog/cns!CA5D9227DF9E78E8!1063.entry

Google Gears退休: Gears功能正被整合到HTML5規格中
we expect developers to use HTML5 for these features moving forward as it's a standards-based approach that will be available across all browsers.
http://it.solidot.org/article.pl?sid=09/12/03/0539248
*/
function init_Google_Gears() {
	// 檢查是否已經定義 Google Gear
	if (window.google && google.gears)
		return;

	var factory = null;
	// 依據不同的瀏覽器，採用不同方式產生 GearFactory
	if (typeof GearsFactory != 'undefined')
		// Firefox
		factory = new GearsFactory();
	else
		try {
			// IE
			factory = new ActiveXObject('Gears.Factory');
			// privateSetGlobalObject is only required and supported on WinCE.
			if (factory.getBuildInfo().indexOf('ie_mobile') != -1)
				factory.privateSetGlobalObject(this);
		} catch (e) {
			// Safari
			if (typeof navigator.mimeTypes != 'undefined'
					&& navigator.mimeTypes["application/x-googlegears"]) {
				factory = document.createElement("object");
				factory.style.display = "none";
				factory.width = factory.height = 0;
				factory.type = "application/x-googlegears";
				document.documentElement.appendChild(factory);
			}
		}
	if (!factory)
		return 1;

	if (!window.google)
		window.google = {};
	if (!google.gears)
		google.gears = {
			factory : factory
		};

}


/*
f={catch:true/false/update, restore:false/true.}
*/
catchFile.ls=0;	//	localServer
catchFile.sn='catch-files';	//	storeName: 定義 Managed Store 的名稱，這個名稱可用於 createManagedStore, removeManagedStore 和 openManagedStore 三個 API
catchFile.s=0;	//	managed store
//
catchFile.f=function(url,success,captureId){};
catchFile.fL=[location.pathname];	//	file list
catchFile.doCache=1;
catchFile.noAsk=1;
function catchFile(fList, f) {
	var _f = arguments.callee;
	if (!_f.doCache)
		return;

	if (window.location.protocol == 'file:') {
		sl('catchFile: Google Gears 不能在本機上執行或測試！');
		return 0;
	}

	if (init_Google_Gears()) {
		if (_f.answered)
			return 0;
		_f.answered = 1;
		if (!_f.noAsk && confirm('使用本功能必須安裝 Google Gears，請問您要安裝嗎？'))
			// ?action=install&message=加入你的訊息&return=安裝後要導回的網址
			window.location.href = 'http://gears.google.com/';
		else
			sl('<em>catchFile: 若不安裝 Google Gears 則將無法使用本功能！</em>');
		return 1;
	}

	if (!_f.ls)
		try {
			// 建立 Local Server
			_f.ls = window.google.gears.factory.create('beta.localserver',
			'1.0');
		} catch (e) {
			sl('catchFile: Could not create local server: ['
					+ (e.number & 0xFFFF) + '] ' + e.message);
			return 2;
		}

	if (!_f.s)
		try {
			// 建立儲存空間
			_f.s = _f.ls.createManagedStore(_f.sn);
			_f.s = _f.ls.createStore(_f.sn);
		} catch (e) {
			if (window.location.protocol == 'file:')
				sl('Google Gears 不能在本機上執行測試!');
			else
				sl('catchFile: Could not create managed store: ['
						+ (e.number & 0xFFFF) + '] ' + e.message);
			return 3;
		}

	if ((fList instanceof String) && fList) {
		// TODO: untested!!
		// 指定 json 的 url
		_f.s.manifestUrl(fList);
		// 開始確定版本及同步
		_f.s.checkForUpdate();

		// 為了確認是否同步結束了，可以加入下列的 timer 來檢查：
		var timer = google.gears.factory.create('beta.timer');
		// 每 500ms 檢查一下
		var timerId = timer.setInterval(function() {
			// 同步完成
			if (store.currentVersion) {
				timer.clearInterval(timerId);
				sl('同步完成');
			}
		}, 500);
	} else {
		//_f.fL.append(fList);
		if (fList && fList.length) {
			_f.fL = _f.fL.concat(fList);
		}
	}

	// If the store already exists, it will be opened
	if (_f.s)
		try {
			_f.s.capture(_f.fL, _f.f);
		} catch (e) {
			if (e.message == 'Url is not from the same origin')
				sl('需要在同樣的 domain!');
			else
				sl('catchFile: Could not capture file: [' + (e.number & 0xFFFF)
						+ '] ' + e.message);
			return 4;
		}

/*
	// uncapture
	for ( var i = 0; i < fList.length; i++) {
		_f.s.remove(fList[i]);
	}
	// removeStore
	if (localServer.openStore(storeName)) {
		localServer.removeStore(storeName);
		_f.s = null;
	}
 */

};



/*	http://blog.wctang.info/2007/07/use-google-map-api-without-api-key.html
驗證的程式叫 GValidateKey，是定義在 main.js，但呼叫的動作是寫在 maps.js 裡

*/





_// JSDT:_module_
.
/**
 * 自動挑選 domain
 * @param	API	API name
 * @param	callback	null: do NOT load
 * @return	[ API url, API key ]
 * @since	2010/6/20 22:12:23
 * @see
 * 
 */
use_API = function(API, callback) {
	var _s = _.use_API,
	url_set = _s.API_URL, url = window.location,
	key_set = _s.API_key, API_key;

	if (	!Array.isArray(url_set = url_set[API]) || typeof url_set[1] !== 'function' ||
			!library_namespace.is_Object(key_set = key_set[url_set[0]])
			){
		CeL.err(url = 'use_API: The kind of API [' + API + '] is not included in the code pool!');
		throw new Error(url);
	}

	if (url.protocol === 'file:')
		// 取得任何 legal key
		for (url in key_set){
			if (typeof key_set[url] === 'string')
				break;
		}

	//	this is for domain + path
	//else if ((url = url.href.replace(/[^\/]+$/, '')) in key_set) ;

	//	this is for domain. 不能用 .pathname: IE 會作特殊處置
	else if (!(url = url.href.match(/^([a-z-]+:\/\/[^\/]+\/)/)) || !((url = url[1]) in key_set)){
		CeL.err(url = 'use_API: This domain [' + url + '] is not included in ' + url_set[0] + ' code pool!');
		throw new Error(url);
	}

	//library_namespace.debug('[' + url + ']\n' + key_set[url] + '\n' + location.href + '\n' + location.pathname);

	url = url_set[1](API_key = key_set[url] || '', _s.language || '');

	if (callback !== null){
		library_namespace.run(url, callback);
		library_namespace.debug('load [' + url_set[0] + '] ' + API + ': [<a href="' + url + '">' + url + '</a>].');
	}

	return [ url, API_key ];
};

_// JSDT:_module_
.
/**
 * 語系. e.g., zh-TW, ja, en
 */
use_API.language = 'zh-TW';

_// JSDT:_module_
.
use_API.API_key = {
	Google : {
		/*
		 * 在本機上試用 Google Map API 並不需要去申請 API Key。
		 * 2008/7/15 20:40:49	但幾天前起 GClientGeocoder 需要。而在 Firefox，即使在 file:// 也不可行??
		 */

		/*
		//	by account fan0123321
		'http://lyrics.meicho.com.tw/' : 'ABQIAAAAx1BFd-K0IXzdNnudsKfW3BR_OWH2p1vlzGygO-LFq-ywbfjcNBQ4wJpNt5E4VTHG4JLZ_HX8LQxVEQ',
		'https://lyrics.meicho.com.tw/' : 'ABQIAAAAx1BFd-K0IXzdNnudsKfW3BQ2grkpcb8ONU70KrnysR7Wz3iAOhQ7rov77Kc_pTW2t8r5-BSiIg5j6w',
		'http://kanashimi.meicho.com.tw/' : 'ABQIAAAAx1BFd-K0IXzdNnudsKfW3BSETOz6DhT-d0fFy_mIERGWK3ymyxQKcydi2zFol0W_QslvBsxp3BffQQ',
		'https://kanashimi.meicho.com.tw/' : 'ABQIAAAAx1BFd-K0IXzdNnudsKfW3BTFY8WBNAy3k9U7ZNA5kvqHv9VA-BSzdXmlU2Sm9WU6hvuSysY85kLdGw',
		 */

		// by account cedegree
		//	AJAX Search API Key:	http://code.google.com/intl/zh-TW/apis/ajaxsearch/signup.html
		'http://meicho.com.tw/' : 'ABQIAAAA8YsRfLuORC22bc07JTNYsBS3JAeykUxPSpDNfPvIbcz6s5aBrRRdn1nyUM_9cYox7ymS-IgI-2CNuA',
		'http://211.22.213.114/' : 'ABQIAAAA8YsRfLuORC22bc07JTNYsBQ1Uh1TD6YMX-95u9UsztRVu87z9xSXJOXSHjEtKMQm2v4PGPwji5o2oA',

		// by account kanasimi
		'http://lyrics.meicho.com.tw/' : 'ABQIAAAAgGipxXX8cQ5RHLEVH9TO-RR_OWH2p1vlzGygO-LFq-ywbfjcNBQcZtd9Bp9zMEQhrEtSnBy9_wJQmg',
		// 事實上 domain-key 就夠了。
		//'http://lyrics.meicho.com.tw/program/map/' : 'ABQIAAAAgGipxXX8cQ5RHLEVH9TO-RQQofoUntuAmbaLi2tPP0I7mS20HxSIGUQ5BPerzSbJB2mFqHQq07idRg',
		'https://lyrics.meicho.com.tw/' : 'ABQIAAAAgGipxXX8cQ5RHLEVH9TO-RQ2grkpcb8ONU70KrnysR7Wz3iAOhS24gkxeP-OqUBmABKA7PZQoacWHQ',
		'http://kanashimi.meicho.com.tw/' : 'ABQIAAAAgGipxXX8cQ5RHLEVH9TO-RSETOz6DhT-d0fFy_mIERGWK3ymyxSPw4AHxgM4dHjkgesM0FKx4ui2BQ',
		'https://kanashimi.meicho.com.tw/' : 'ABQIAAAAgGipxXX8cQ5RHLEVH9TO-RTFY8WBNAy3k9U7ZNA5kvqHv9VA-BRu-OKx8fvfBtyuqJZfb5PK0HllUQ'

/*
	事實上 [*.]*.com.tw 用下面這個也行。
'http://com.tw/':'ABQIAAAAgGipxXX8cQ5RHLEVH9TO-RTXVjoday36ta5qc6JGQW5WaWldDhTZrWmq9ZDX6Bhhzgk7MlY9qQXvzA',

對 http://lyrics.meicho.com.tw/game/ 會檢查的：
http://lyrics.meicho.com.tw/game/
http://lyrics.meicho.com.tw/
http://www.lyrics.meicho.com.tw/game/
http://www.lyrics.meicho.com.tw/
http://meicho.com.tw/game/
http://meicho.com.tw/
http://com.tw/game/
http://com.tw/
*/

	},

	Yahoo : {
		// by account colorlessecho for Yahoo! map
		'http://lyrics.meicho.com.tw/' : 'XX9YCu_V34G1xvKMy7EOmVkPFtALrHIkVP_qG5ANRAzuTNlQKuoXVssSTBYiGSX9gjssAA--'
	},

	Microsoft : {
		// by account cedegree@hotmail.com for VLS
		//	http://www.bing.com/developers/
		'' : 'BCBE2B0C4E58461B987145E3EBB1BFAB96FBCCD0',
		'http://meicho.com.tw/' : 'BCBE2B0C4E58461B987145E3EBB1BFAB96FBCCD0',
		'http://211.22.213.114/' : 'BCBE2B0C4E58461B987145E3EBB1BFAB96FBCCD0'
	}
};

_// JSDT:_module_
.
use_API.API_URL = {
	Gmap : [
			'Google',
			function(k, l) {
				return 'http://maps.google.com/maps?file=api&v=2&hl=' + l + '&key=' + k;
			} ],
	GAPI : [ 'Google', function(k, l) {
		return 'http://www.google.com/jsapi?hl=' + l + '&key=' + k;
	} ],

	YMap : [ 'Yahoo', function(k) {
		return 'http://api.maps.yahoo.com/ajaxymap?v=3.8&appid=' + k;
	} ],
	twYMap : [ 'Yahoo', function(k) {
		return 'http://tw.api.maps.yahoo.com/ajaxymap?v=3.8&appid=' + k;
	} ],

	Bing: [ 'Microsoft', function(k) {
		return 'http://api.microsofttranslator.com/V1/Ajax.svc/Embed?appId=' + k;
	} ]
};






_// JSDT:_module_
.
/**
 * 為 Microsoft Translator 設置
 * @param text	test to translate
 * @param callback	callback(from text,to text)
 * @param [from_enc]
 * @param [to_enc]
 * @return
 * @see
 * <a href="http://msdn.microsoft.com/en-us/library/ff512406.aspx" accessdate="2010/7/12 20:22">Translate Method</a>,
 * <a href="http://www.west-wind.com/Weblog/posts/107136.aspx" accessdate="2010/7/12 20:22">JSONP for cross-site Callbacks - Rick Strahl's Web Log</a>
 */
add_Microsoft_translate = function(text, callback, from_enc, to_enc) {
	if (!text || !callback)
		return;

	var _s = _.add_Microsoft_translate, url = _s.url, name = _s.reference_name, count;
	// 初始化 initialization
	if (!url)
		_s.url = url = 'http://api.microsofttranslator.com/V2/Ajax.svc/Translate?appId=' +
				_.use_API('Bing', null)[1];

	//library_namespace.debug('<a href="' + url + encodeURIComponent(text) + '">' + url + encodeURIComponent(text) + '</a>');

	_s.buffer[count = _s.counter++] = [ text, callback ];
	// response, count, function name of add_Microsoft_translate
	_s['c' + count] = new Function('r',
			name + '.callback(r,' + count + ',"' + name + '");'
			);
	library_namespace.run(
			url
				+ '&from=' + (from_enc || _s.from)
				+ '&to=' + (to_enc || _s.to)
				+ '&text=' + encodeURIComponent(text)
				+ '&oncomplete=' + name + '.c' + count
	);
};

_// JSDT:_module_
.
add_Microsoft_translate.from = 'en';

_// JSDT:_module_
.
add_Microsoft_translate.to = 'zh-cht';

_// JSDT:_module_
.
add_Microsoft_translate.reference_name = library_namespace.Class + '.add_Microsoft_translate';



_// JSDT:_module_
.
/**
 * @inner
 * @private
 */
add_Microsoft_translate.counter = 0;

_// JSDT:_module_
.
/**
 * @inner
 * @private
 */
add_Microsoft_translate.buffer = [];

var ELEMENT_NODE = 1;

_// JSDT:_module_
.
/**
 * @inner
 * @private
 */
add_Microsoft_translate.callback = function(response, count, name) {
	try{
		var _s = library_namespace.get_various(name),
		origin = _s.buffer[count],
		callback = origin[1];
		origin = origin[0];
		delete _s.buffer[count];
		delete _s['c' + count];
		if (typeof callback === 'function') {
			callback(response, origin);
		} else {
			if (typeof callback === 'string')
				callback = document.getElementById(callback);
			if (typeof callback === 'object'
				&& callback.nodeType === ELEMENT_NODE)
				callback.appendChild(document.createTextNode(response));
		}
	}catch (e) {
		library_namespace.warn('add_Microsoft_translate.callback: '+name+': error!');
	}
};






return (
	_// JSDT:_module_
);
}


});

