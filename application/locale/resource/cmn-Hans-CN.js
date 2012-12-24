'use strict';
if (typeof CeL === 'function')
	CeL.application.locale.gettext.set_text({
		'Loading..' : '载入中…',
		'Loading %1%..' : '已载入 %1%…',

		// for auto_TOC()
		'Contents of [%1]' : '[%1]的目录',
		Contents : '目录',
		'↑Back to TOC' : '↑回到目录',
		//展开/收起
		show : '显示',
		hide : '隐藏',

		// interact.integrate.SVG
		number : '数字',
		'function' : '函式',
		date : '日期',
		time : '时间',
		module : '模块',
		constructor : '建构式',
		// 'class' : '类',
		// 有问题/无效/不合理的
		'Illegal %1: [%2]' : '有问题（无效或不合理）的%1：[%2]',

		// 调试级别 @ application.debug.log
		//致命性错误
		fatal : '致命',
		err : '错误',
		warn : '警告',
		em : '重要',
		info : '信息',
		log : '记录',
		debug : '调试',
		//詳盡記錄
		trace : '追蹤'
	}, 'cmn-Hans-CN');
