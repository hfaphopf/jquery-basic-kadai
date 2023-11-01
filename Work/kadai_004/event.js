// ドキュメントが読み込み完了した場合、「loadイベントが発生しました」と出力する
 $(window).on('load', function(){
   console.log('loadイベントが発生しました');
 });

// 画面をスクロールしたときに「scrollイベントが発生しました」と出力する
$(window).on('scroll', function(){
  console.log('scrollイベントが発生しました');
  });