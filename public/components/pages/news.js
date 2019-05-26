export default class News extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get $$tag() {
    return 'my-news';
  };

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

customElements.define(News.$$tag, News);
