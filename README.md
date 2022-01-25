# Vite Alpine.js

<img src="/favicon.svg" height="75" /><img src="/alpine.svg" height="75" />

Starter template to use Vite with Alpinejs

Allows you to create modular Alpine.js components using ES Modules and bundle then using Vite.js

## How to install?
Click "use this template" or run: `npx degit https://github.com/dashpilot/vite-alpinejs`

then run `npm install` and `npm run dev`

to bundle: `npm run build` > output will be in the `dist` folder

## Example component

```
/* define the template inside the module */

const template = `
<div class="container" x-data="cardApp()">
  <div class="box">
    <h1>Welcome, <span x-text="name"></span></h1>
    <label class="label mt">Your name:</label>
    <input class="input" type="text" x-model="name">
    <button class="button is-info mt" @click="test">Test</button>
  </div>
</div>
`

export default () => {
  return {
    template: template, // add the template to the component's data
    name: '',
    init() {
      console.log('card component loaded');
    },
    test() {
      alert('Hi ' + this.name)
    }
  }
}
```

In main.js, import the module and add the template to the page:
```
import card from './components/card.js';
window.cardApp = card;
document.querySelector('#app').innerHTML += cardApp().template;
```
