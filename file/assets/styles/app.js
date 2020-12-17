$(function() {
    // DOMの取得
    let $jsPrevBtn = $('.js-prev-btn');
    let $jsNextBtn = $('.js-next-btn');
    let $jsSliderContainer = $('.js-slider-container');
    let $jsSliderItemWidth = $('.js-slider-item').width();

    // 定数定義
    const autoTime = 6000; // 自動でスライドするときの時間間隔
    const speed = 800; // スライドするときの速さ
    const easing = "linear" // アニメーションの挙動

    // 変数定義
    let isSlide = false; // スライド中かどうかを判定する変数
    let timer;

    // 自動スライダー
    const autoPlay = () => {
        // 600ミリ秒ごとに自動でスライドする
        timer = setInterval(() => {
            slideNext();
        },  autoTime);
    }
    autoPlay();

    // Nextボタンが押されたら
    $jsNextBtn.on('click', function() {
        slideNext(); // 次の画像にスライド
    });
    // Prevボタンが押されたら
    $jsPrevBtn.on('click', function() {
        slidePrev(); // 前の画像にスライド
    });

    // 関数定義
    function slideNext() {
        if(!isSlide) { // スライド中でなければ
            isSlide = true; // スライド中に変更
            clearInterval(timer); // 一度タイマーをクリア

            // ulタグを画像1枚分左に移動
            $jsSliderContainer.animate({
                left: -$jsSliderItemWidth
            }, speed, easing, function() { // アニメーションが実行されたあとの処理

                // 左に送った画像をリストの最後の子要素に変更
                $jsSliderContainer.append($('.js-slider-item').eq(0));

                // ulタグを元の位置に戻す
                $jsSliderContainer.css({
                    left: 0
                });

                // 自動スライダー再開
                isSlide = false;
                autoPlay();
            });
        }
    }

    function slidePrev() {
        if(!isSlide) { // スライド中でなければ
            isSlide = true; // スライド中に変更
            clearInterval(timer); // 一度タイマーをクリア

            // リスト内の最後の子要素を先頭に移動
            $jsSliderContainer.prepend($('.js-slider-item').eq(-1));

            $jsSliderContainer.css({
                left: -$jsSliderItemWidth // ulタグを画像1枚分左に移動（これをしないと先頭にきた画像がすぐに表示されてしまう）
            }).animate({
                left: 0 // // ulタグを元の位置に戻す
            }, speed, easing, function(){

                // 自動スライダー再開
                isSlide = false;
                autoPlay();
            });
        }
    }
});