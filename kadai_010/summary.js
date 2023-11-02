$(function() {
    // ボタンがクリックされた場合、文字色が変わる
    $('#change-color').on('click', function(){
        $('#target').css('color','red');
    });
     // ボタンがクリックされた場合、文字内容が変わる
    $('#change-text').on('click', function(){
        $('#target').text('Hello!');
    });
    // ボタンがクリックされた場合、フェードアウトする
   $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });
   // ボタンがクリックされた場合、フェードインする
   $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
});