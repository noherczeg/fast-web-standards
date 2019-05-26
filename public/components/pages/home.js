export default class Home extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get $$tag() {
    return 'my-home';
  };

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = this.template;
  }

  get template() {
    return `<h2>Home</h2>
            <p>
              Hello from Home!
            </p>`;
  }
}

customElements.define(Home.$$tag, Home);
