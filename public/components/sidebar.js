export class Sidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template;
  }

  get template() {
    return `<style>@import './components/sidebar.css';</style>
      <div class="sidebar">  
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>`;
  }
}

customElements.define("my-sidebar", Sidebar);
