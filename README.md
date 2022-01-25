# Vite Alpine.js

<img src="/public/img/vite-alpine.png" height="150" />

Starter template to use Vite with Alpinejs

Allows you to create modular Alpine.js 3 components using ES Modules and bundle then using Vite.js

## Demo
https://vite-alpinejs.vercel.app 

## How to install?

Click "use this template" or run: `npx degit https://github.com/dashpilot/vite-alpinejs`

then run `npm install` and `npm run dev`

to bundle: `npm run build` > output will be in the `dist` folder

## Example module

./modules/card.js:

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

In main.js, import the module and add the template to the page:

    import card from './components/card.js';
    window.cardApp = card;
    document.querySelector('#app').innerHTML += cardApp().template;

## Press the :star: button

Don't forget to press the :star: button to let me know I should continue improving this project.

## Preview
<img src="/public/img/preview.jpg" />
