const template = `
<div x-data="navApp()">
<nav class="navbar brdr-b" role="navigation" aria-label="main navigation">
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-brand">
      <a class="navbar-item">
        <strong class="ml">Vite Alpinejs Starter</strong>
      </a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-secondary mr" href="https://github.com/dashpilot/vite-alpinejs" target="_blank">
            Docs
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</div>
`

export default () => {
  return {
    template: template,
    init() {
      console.log('navbar component loaded');
    }
  }
}