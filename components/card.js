const template = `
<div class="container text-center" x-data="cardApp()">
  <div class="box p-50">
    <img src="/img/vite-alpine.png" class="w-35" />
    <h1>Vite & Alpine</h1>
    <p class="tagline mt-10 mb-25">Starter Template</p>
    <label class="label mt-25">Your name:</label>
    <input class="input w-50" type="text" x-model="name">

    <p class="tagline mt-20" x-text="name"></p>
    <div class="mt-20 mb-50">
    <button class="button is-link is-medium mt-20 mr" @click="test">Alert</button>
    <a class="button is-medium mt-20 ml" href="https://github.com/dashpilot/vite-alpinejs" target="_blank">Docs</a>
    </div>
  </div>
</div>
`

export default () => {
  return {
    template: template,
    name: '',
    init() {
      console.log('card component loaded');
    },
    test() {
      alert('Hi ' + this.name)
    }
  }
}