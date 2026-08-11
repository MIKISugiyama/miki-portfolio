import './scss/style.scss';
import { initHeroGlow } from './js/heroGlow.js';
import { copyEmail } from './js/copyEmail.js';


document.addEventListener('DOMContentLoaded', () => {
  // 挙動制御
  copyEmail();
  
  // 演出・アニメーション系
  initHeroGlow();
});