export default class FourOhFour extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get $$tag() {
    return "my-four-oh-four";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = this.template;
  }

  get template() {
    return `<h2>404</h2>
            <p>
              Page not found!
            </p>`;
  }
}

customElements.define(FourOhFour.$$tag, FourOhFour);
