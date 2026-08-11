import './scss/style.scss';
import { copyEmail } from './js/copyEmail.js';
import { slideInAnimation } from './js/slideInAnimation.js';

document.addEventListener('DOMContentLoaded', () => {
  copyEmail();
  slideInAnimation();
});