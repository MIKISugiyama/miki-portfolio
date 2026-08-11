export function slideInAnimation() {
    const scrollEffect = document.querySelectorAll('.slide-left, .slide-right');
    const windowHeight = window.innerHeight;

    for (let i = 0; i < scrollEffect.length; i++) {
        const target = scrollEffect[i].getBoundingClientRect().top;
        
        if (target < windowHeight * 0.95) {
            scrollEffect[i].classList.add('show');
        }
    }
    
    // 初回読み込み時は、ブラウザの描画準備を待つために遅らせて発火させる
    setTimeout(() => {
        slideInAnimation();
    }, 300);

    // スクロール時にも発火
    document.addEventListener('scroll', slideInAnimation);
}