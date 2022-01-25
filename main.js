import './style.css'
import './utils.css'
import Alpine from 'alpinejs';
window.Alpine = Alpine

import nav from './components/nav.js';
window.navApp = nav;
document.querySelector('#app').innerHTML += navApp().template;

import card from './components/card.js';
window.cardApp = card;
document.querySelector('#app').innerHTML += cardApp().template;

import imgUrl from './vite-alpine.png'
document.getElementById('hero-img').src = imgUrl

Alpine.start()