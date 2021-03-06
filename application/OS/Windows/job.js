
/**
 * @name	CeL function for Windows job
 * @fileoverview
 * 本檔案包含了 Windows job 的 functions。
 * @since	
 */

'use strict';
if (typeof CeL === 'function')
CeL.run(
{
name:'application.OS.Windows.job',
require : 'data.code.compatibility.|data.native.',
code : function(library_namespace) {


/**
 * null module constructor
 * @class	Windows job 的 functions
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




//	有關安裝的部分
function install(dir){//move files: input base dir
 var f,d,i=0,s=0,c=0,l=getResource("filelist").split(/[\r\n]+/);//.replace(/[\r\n]+/g,"\n").split('\n')
 for(;i<l.length;i++)if(l[i]&&l[i].charAt(0)!='#'&&(f=l[i].split('\t'))){
  d=turnToPath(f[1]),f=f[0],d=d?isFolder(d)?(isFolder(d)==2?dir:'')+d+f:d:dir+f;
  if(f)if(c++,d=mv(f,d))pErr(d);else s++;
  else if(d)pLog('フォルダ '+d+' の作成を'+(isFolder(d,1)?'成功':'失敗')+'した');
 }
 if(c)pLog(s+"/"+c+"filesの移動に成功した");
}

function rmProg(){
 if(typeof getResource=='undefined')return;
 var i=0,f,l=getResource("proglist").split(/\r\n/);//.replace(/[\r\n]+/g,"\n").split('\n')
 for(;i<l.length;i++)if(l[i]&&(f=l[i].split('\t')[0]))try{fso.DeleteFile(f);}catch(e){}
}


//	先決條件測試@.js主檔，當沒問題時return 0。此函數若使用到function.js之(其他)功能需include入！
//	include:getScriptName(),mergeScript()
function preCheck(argumentCount,ver,mFN){	//	argument數,最低版本,若ver<5.1時合併檔名
 var SN=getScriptName(),WshShell=WScript.CreateObject("WScript.Shell");
 if(!argumentCount)argumentCount=0;

 if(!WScript.Interactive){
  WshShell.Popup('This program must run in interactive mode!\n此程式需執行於互動模式！',0,SN,48);
  return 5;
 }
 if(WScript.Arguments.length>argumentCount){
  if(typeof WScript.Arguments.ShowUsage=='unknown'||WScript.Arguments.ShowUsage)WScript.Arguments.ShowUsage();
  else WshShell.Popup('Error arguments!\n引數錯誤！',0,SN,16);
  return 6;
 }//else if(2==WshShell.Popup("此程式應用於帳目處理。",0,"確定執行？",1+64))return 4;
 //	以上可置於.wsf中。

 if(!ver||ver<5)ver=5;if(!mFN)mFN='process';
 if(typeof checkVer=='function')checkVer(ver);	//	5.1起才能用.wsf(windows script file)控制
 else if(WScript.Version>5){WshShell.Popup('請執行 '+SN+'.wsf 檔！',0,SN+': 不是執行這個檔喔！',48);return 7;}
 else if(mergeScript(mFN+'.js')){WshShell.Popup('合併檔案失敗！',0,SN,16);return 8;}
 else{
  try{fso.CopyFile(SN+'.ini',mFN+'.ini');}catch(e){}	//	copy .ini
  WshShell.Popup('請設定好 '+mFN+'.ini，\n之後您可試試 '+mFN+'.js 檔，但並不一定能順利執行。',0,SN+': 使用的版本過舊！',48);return 9;
 }

 //fso=null;
 return 0;
}



/*	2009/6/18 20:46:1
	更新功能 update function

可以嘗試將 for_check 合在 install_url 中。

*/

//Update[generateCode.dLK]='getU,getFN,simpleWrite';	//	,Debug_for_include,gDate

function Update(for_check, install_url) {
	return Update.check(Update.setup(for_check, install_url));
}

//	base function

Update.check=function(force){
 if(!this.URL)return;

 if(force||!this.version){
  var d=this.parse(getU(this.URL)||'');
  this.version_get=d;
  //sl('Update.check: version get: ['+this.version_get+']');
 }
 return this.version=[this.version_get,this.version_now,this.URL];
};

Update.set_URL=function(for_check,install_url){
 var unchang=1;
 if(for_check){
  if(unchang)
   unchang= this.URL==for_check;

  //sl('Update.set_URL: 設定檢測 URL: <a href="'+for_check+'">'+for_check+'</a>');
  this.URL=for_check;
 }
 if(install_url){
  if(unchang)
   unchang= this.download_URL==install_url;

  //sl('Update.set_URL: 設定程式下載 URL: <a href="'+install_url+'">'+install_url+'</a>');
  this.download_URL=install_url;
 }
 return !unchang;
};

/*
TODO:
date 相同時比較大小
*/
Update.up_to_date=function(){
 return 0>=this.compare(this.version_now,this.version_get);
};

Update.install=function(){
 var p=getFN(decodeURI(location.pathname)),t=p+'.new',b=p+'.old',f=this.after_install;
 //sl('Update.install: program path: ['+p+']');
 if(this.download(t)){
  try{fso.DeleteFile(b);}catch(e){}
  try{
   fso.MoveFile(p,b);
   fso.MoveFile(t,p);
  }catch(e){f&&f(e,p,t);return;}
  f&&f();
  return 1;
 }
};

Update.check_string='check_string';
Update.download=function(to_where){
 //sl('Update.download: download [<a href="'+this.download_URL+'">'+this.download_URL+'</a>] to ['+to_where+']');
 var data=getU(this.download_URL),f=this.after_download;
 if(data&&(!this.check_string||data.indexOf(this.check_string)!=-1)){
  simpleWrite(to_where,data,TristateTrue);
  f&&f(0,data);
  return data;
 }else f&&f(1,data);
};


//	default user function
Update.setup=function(for_check,install_url){
 var v=document.getElementById('version');
 if(v)v=v.innerHTML.replace(/[\s\n]+$|^[\s\n]+/g,'');
 this.version_now=new Date(v||document.lastModified);
 //sl('Update.setup: version now: ['+this.version_now+']');

 return this.set_URL(for_check,install_url);
};

Update.parse=function(version_data){
 return new Date(version_data||0);
};

Update.compare=function(v1,v2){
 //sl('Update.compare: ['+v2+'] - ['+v1+'] = '+(v2-v1));
 return v2-v1;
};

Update.after_install=function(e,prog,tmp){	//	e: Error object
 if(e){err(e);err('Update.install: 無法替換程式檔 ['+prog+']。新的程式檔置於 ['+tmp+']。');}
 else sl('更新完畢。'),warn('您需要<b onclick="history.go(0);">重新讀取</b>以完成更新！');
};

Update.after_download=function(e,data){	//	e: error code
 if(e)err('Update.download: 下載 [<a href="'+this.download_URL+'">'+this.download_URL+'</a>] 發生錯誤！');
};



/*	讀入單行 item=value 之設定
	!noComment: '#', ';' 起頭、// 之後及 / *..* / 之間將被省略
*/
function parseData(s,noComment){
 if(!s/*||s.charAt(0)=='#'*/ || !noComment&&!(s=s.replace(/([#;]|\/\/).*$/g,'')))return;	//	去掉單行註解
 var t,c,r,i=1;
 //alert(s);
 if(t=s.match(/^\s*\[(.*)\]/))
  return t[1];	//	分區

 try{	//	沒合在一起是為了在較低版本中r之設定可能失敗
  r=new RegExp('^\\s*([^=]+)\\s*=\\s*([^\\r\\n]*)');
  t=s.match(r);
 }catch(e){
  t=s.match(/^\s*([^=]+)\s*=\s*([^\r\n]*)/);
 }	//	使用此式可能導致某些問題

 if(t){//if(t=s.match(/^\s*([^=]+?)\s*=\s*([^\r\n]*)/)){	//	後面的：原先簡潔版
  if(!t[1])return;
  var set=[];
  //set[0]=t[1].replace(/\s+$|^\s+/g,'');
  set[0]=t[1].trim();
  t=set[1]=t[2];
  while((c=t.charAt(0))=='"'||c=="'"){
   //alert('^'+c+'([^'+c+']*)'+c+'[^\'"]*(.*)$');
   if(!(c=t.match(new RegExp('^'+c+'([^'+c+']*)'+c+'[^\'"]*(.*)$'))))break;
   //alert('['+set[0]+']=\n'+t+'\n'+c[1]+'\n['+c[2]+']');
   set[i++]=c[1];
   t=c[2];//if(c=t.match(/^\s+/))t=t.substr(c.length);
   //alert('['+t+']');
  }
  return set;
 }
}

/*	readin .ini file
	http://en.wikipedia.org/wiki/Ini_file
*/
//parseINI[generateCode.dLK]='initialization_WScript_Objects,parseData,ForReading,TristateUseDefault';
function parseINI(FN,format,INIunBlock,noComment){
 var INI={},datas;	//	設定值之陣列,未框起（設定區塊）之值
 if(!INIunBlock)INIunBlock='[unBlock]';	//	未框起（設定區塊）之值
 INI[INIunBlock]={};
 try{
  datas=fso.OpenTextFile(FN,ForReading,false,format||TristateUseDefault);
 }catch(e){}	//	不用openTemplate()：當找不到此.ini檔時pass而不顯示error
 if(!datas){
  //if(!INI)INI=[],INI[block=INIunBlock]=[];return 1;
  //alert('Cannot open:\n'+FN);
  return 0;
 }

 var i,j,index,k,t,block,inC=false;	//	index,temp,區塊,於註解中(in comment)
 //INI=[],INI[block=INIunBlock]=[];	//	每次執行即重設
 while(!datas.AtEndOfStream)if(t=datas.ReadLine()){
  if(!noComment){
   t=t.replace(/\/\/.*/,'');	//	處理/*..*/前先處理//
   k=1;
   while(k){
    k=0;	//	.replace(/\/\*.*?\*\//g,'') 在 ver5 前會出現錯誤
    //if(!inC&&(i=t.indexOf('/*'))!=-1)if((j=t.indexOf('*/',i+2))==-1){inC=true,t=t.slice(0,i);break;}else k=1,t=t.slice(0,i)+t.substr(j+2);
    if(!inC&&(i=t.indexOf('/*'))!=-1){	//	處理註解 /*
     j=i+2;
     do{j=t.indexOf('*/',j);if(t.charAt(j-1)=='\\')j+=2;else break;}while(j!=-1);	//	預防「\*/」
     if(j==-1){inC=true,t=t.slice(0,i);break;}else k=1,t=t.slice(0,i)+t.substr(j+2);
    }
    //if(inC)if((i=t.indexOf('*/'))==-1)t='';else inC=false,t=t.substr(i+2),k=1;
    if(inC){	//	處理*/
     i=0;
     do{i=t.indexOf('*/',i);if(t.charAt(i-1)=='\\')i+=2;else break;}while(i!=-1);	//	預防「\*/」
     if(i==-1)t='';else inC=false,t=t.substr(i+2),k=1;
    }
   }
  }
  //if(!t)continue;alert(t);
  t=parseData(t,noComment);if(!t)continue;
  if(typeof t=='string'&&!INI[block=t])INI[block]={};
  else if(t.length==2)INI[block][t[0]]=t[1];
  else for(i=1,INI[block][t[0]]=[];i<t.length;i++)INI[block][t[0]].push(t[i]);//,alert(block+','+t[0]+','+t[i])
  //if(t[0])alert('INI['+block+']['+t[0]+']='+INI[block][t[0]]);else alert('block='+block);
 }

 datas.Close();
 return INI;
}




/*
	Scriptlet.Typelib 對象的設計用途是幫助您創建“Windows 腳本組件”（實質上，這是一種使您編寫的腳本可以像COM對象那樣工作的方法）。
	http://www.microsoft.com/technet/scriptcenter/resources/qanda/feb05/hey0221.mspx
	http://msdn.microsoft.com/library/default.asp?url=/library/en-us/rpc/rpc/guid.asp
*/
function tempGUID(){
 var TypeLib=WScript.CreateObject("Scriptlet.TypeLib"),tGUID;

 try{tGUID=TypeLib.Guid();}
 catch(e){return;}
 finally{TypeLib=null;}	//	即使 try 或 catch 區塊中發生傳回陳述式，或從 catch 區塊中擲出錯誤，仍會執行 finallyStatements 內的程式碼。finallyStatments 保證會永遠執行。

 return tGUID;
}




return (
	_// JSDT:_module_
);
}


});

