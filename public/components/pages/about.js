export default class About extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = this.template;
  }

  get template() {
    return `<h2>About</h2>
            <p>
              Hello from About!
            </p>`;
  }
}

customElements.define("my-about", About);
