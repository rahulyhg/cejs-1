
/**
 * @name	CeL function for executing program
 * @fileoverview
 * 本檔案包含了 executing program 的 functions。
 * @since	
 */


if (typeof CeL === 'function')
CeL.setup_module('application.OS.Windows.execute',
function(library_namespace, load_arguments) {

//	nothing required



/**
 * null module constructor
 * @class	executing program 的 functions
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








/*	2008/8/8 18:29:44
	run them with administrator rights	runs under administrator privileges.
帳戶控制	Windows Vista：使用軟體限制原則對抗未授權的軟體	http://www.microsoft.com/taiwan/technet/windowsvista/security/rstrplcy.mspx
http://4sysops.com/archives/vista%E2%80%99s-uac-how-to-elevate-scripts-vbscript-and-jscript/
http://blogs.msdn.com/aaron_margosis/archive/2007/07/01/scripting-elevation-on-vista.aspx
Software\Microsoft\Windows\CurrentVersion\Policies\System\EnableLUA	c:\windows\system32\control.exe /name Microsoft.UserAccounts	http://www.dashken.net/index.php?/archives/280-VBScript-Check-if-OS-is-Vista-and-Vistas-UAC-status.html
http://msdn.microsoft.com/en-us/magazine/cc163486.aspx
HKEY_LOCAL_MACHINESOFTWARE MicrosoftWindowsCurrentVersionPoliciesSystem\ConsentPromptBehaviorAdmin	http://hsu.easynow.com.tw/index.php?load=read&id=28
http://vistavitals.blogspot.com/2008/02/logon-scripts-token-effort.html
runas	http://www.merawindows.com/Forums/tabid/324/forumid/82/postid/32458/scope/posts/Default.aspx
	http://www.winhelponline.com/articles/185/1/VBScripts-and-UAC-elevation.html

http://forums.techarena.in/vista-security/654643.htm
Set objShell = CreateObject("Shell.Application")
Set objFolder = objShell.Namespace("C:\")
Set objFolderItem = objFolder.ParseName("myhta.hta")
objFolderItem.InvokeVerb "runas"

var WinShell=new ActiveXObject("Shell.Application"),p=location.pathname.replace(/[^\\]+$/,''),o=WinShell.Namespace(p).ParseName(location.pathname.slice(p.length));
o.InvokeVerb("runas");

http://www.zaoxue.com/article/tech-28339_2.htm	http://www.lob.cn/vbs/20071126203237.shtml

TODO:
對 prompt 回應不允許時的處理: 若想在受限的情況下使用?
不使用自訂程式	http://msdn.microsoft.com/en-us/library/bb776820(VS.85).aspx
有時執行完就無消息，得多執行幾次。
*/
function runas(path) {
	if (!path)
		path = typeof WScript === 'object' ? WScript.ScriptFullName
				: unescape(location.pathname);
	var host = {
		js : 'wscript.exe',
		vbs : 'wscript.exe',
		hta : 'mshta.exe'
	}, extension = path.match(/([^.]+)$/);
	host = extension && ((extension = extension[1].toLowerCase()) in host) ? host[extension]
			: '';
	// 判斷是否有權限
	if (!registryF.checkAccess('HKLM\\SOFTWARE\\')) {
		// 以管理者權限另外執行新的.
		// It will get the UAC prompt if this feature is not disabled.
		new ActiveXObject("Shell.Application").ShellExecute(host || path,
				host ? path : '', '', 'runas'/* ,5 */);
		// 執行完本身則退出: bug: 有時執行完就無消息，得多執行幾次。
		if (typeof WScript === 'object')
			WScript.Quit();
		else if (typeof window === 'object')
			window.close();
	}
}


/*	JScript file: check owner, .exe file
	執行
	http://www.microsoft.com/taiwan/technet/scriptcenter/resources/qanda/nov04/hey1115.mspx
	Exec Method (Windows Script Host)	http://msdn.microsoft.com/en-us/library/ateytk4a(VS.85).aspx

usage:
runProg(path): use WshShell.Exec, return [StdOut, StdErr, ExitCode]
runProg(path, 1): use WshShell.Exec, can get output by .StdOut.ReadAll(), or .StdErr.ReadAll()
runProg([path, WindowStyle, WaitonReturn],2): use WshShell.Run
runProg(script path, remote computer): use WshRemote
runProg(path, remote computer): use WMI

TODO:
runProg([path, Verb],3): use Shell.Application InvokeVerb
runProg([path, arg1, arg2,..]): use Shell.Application.ShellExecute


example:
WScript.Echo(runProg('%COMSPEC% /U /c ""C:\\Program Files\\WinRAR\\Rar.exe" vt -scuc "F:\\CLAMP 01.rar""')[0]);


WshShell.Run(command, [WindowStyle 0-10], [WaitonReturn false: nowait & return 0, true: wait & return error code])
WshShell.Exec(),objFolderItem.InvokeVerb()
WshShell.Run('command /k ' + ドライブ +' | cd /D '+ パス);// cd で他ドライブへ移れないので。
*/
//runProg[generateCode.dLK]='initialization_WScript_Objects';
function runProg(p,r){try{
 var s;
 if(!r||r===1||r===2)if(typeof (s=new ActiveXObject('WScript.Shell'))=='object'){
  if(typeof p=='object'&&r===2)
   r=s.Run(p[0],p[1],p[2]);
  else if(s=s.Exec(p),r)r=s;
  else with(s){
   while(!Status)WScript.Sleep(80);
   r=[StdOut.ReadAll(),StdErr.ReadAll(),ExitCode];
  }
  return r;
 }else return;

 if(/^[^ ]+\.(j|vb)s$/i.test(p)){
  s=(WScript.CreateObject('WSHController')).CreateScript(p,r);
  s.Execute();
  return s;
 }

 s=GetObject("winmgmts:{impersonationLevel=impersonate}//"+(r||'.')+"/root/cimv2:Win32_Process");
 //if(/^[^ ]+\.(j|vb)s$/i.test(p))p="wscript.exe "+p;
 return s.Create(p/*,null,null,intProcessID*/);	//	Create 方法會讓這個指令碼在「遠端電腦」上執行。
}catch(e){
 //popErr(e);
 return e;
}}	//	function runProg




return (
	_// JSDT:_module_
);
}


);

