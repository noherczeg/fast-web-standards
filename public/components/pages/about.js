export default class About extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get $$tag() {
    return "my-about";
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

customElements.define(About.$$tag, About);
