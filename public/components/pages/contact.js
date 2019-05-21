export default class Contact extends HTMLElement {
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
    return `<h2>Contact</h2>
            <p>
              Hello from Contact!
            </p>`;
  }
}

customElements.define("my-contact", Contact);
