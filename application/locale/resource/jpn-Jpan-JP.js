'use strict';
if (typeof CeL === 'function')
	CeL.application.locale.gettext.set_text({
		'Loading..' : '読み込み中…',
		// for auto_TOC()
		'Contents of [%1]' : '[%1]の目次',
		Contents : '目次',
		'↑Back to TOC' : '↑目次へ',
		show : '表示',
		hide : '隠す',

		// interact.integrate.SVG
		// 入力数値が範囲外です。
		number : '数字',
		'function' : '関数',
		date : '日付',
		time : '時間',
		// 構築子
		constructor : 'コンストラクタ',
		'Illegal %1: [%2]' : '不正な%1：[%2]',

		// application.locale.gettext
		'使用 [%2] (%1) 領域/語系。' : 'ドメイン/言語 [%2] (%1) を使用します。',

		// デバッグレベル @ application.debug.log
		fatal : '致命的エラー',
		err : 'エラー',
		warn : '警告',
		// 強調文
		em : '重要',
		info : '情報',
		log : 'ログ',
		debug : 'デバッグ',
		//詳細なログ
		trace : 'トレース'
	}, 'jpn-Jpan-JP');
