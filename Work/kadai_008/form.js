$(function () {
    // id属性がcheckの要素がクリックされたら
    $('.btn').on('click', function () {
        // クリックしました！とテキストボックスに表示する
        $('.text-box').val('クリックしました！');
    });
});