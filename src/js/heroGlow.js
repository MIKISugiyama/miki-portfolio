/**
 * Heroセクションのマウス追従グラデーションアニメーション
 */
export function initHeroGlow() {
  const heroSection = document.getElementById('hero');

  if (!heroSection) return;

  // マウス進入時：中央のグラデーション(layer1)を消しつつ、カーソル位置のグラデーション(layer2)を同時に出現させる
  heroSection.addEventListener('mouseenter', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    heroSection.style.setProperty('--glow2-x', `${x}px`);
    heroSection.style.setProperty('--glow2-y', `${y}px`);
    heroSection.style.setProperty('--glow1-opacity', '0');
    heroSection.style.setProperty('--glow2-opacity', '1');
  });

  // マウス移動時：追従用グラデーション(layer2)の位置をリアルタイム更新
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    heroSection.style.setProperty('--glow2-x', `${x}px`);
    heroSection.style.setProperty('--glow2-y', `${y}px`);
  });

  // マウス離脱時：カーソル位置のグラデーション(layer2)を消しつつ、中央のグラデーション(layer1)を同時に出現させる
  heroSection.addEventListener('mouseleave', () => {
    heroSection.style.setProperty('--glow1-opacity', '1');
    heroSection.style.setProperty('--glow2-opacity', '0');
  });
}
