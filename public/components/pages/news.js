export default class News extends HTMLElement {
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
    return `<h2>News</h2>
            <p>
              Hello from News!
            </p>`;
  }
}

customElements.define("my-news", News);
