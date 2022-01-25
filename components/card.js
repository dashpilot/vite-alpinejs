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