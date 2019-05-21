export default class Home extends HTMLElement {
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
    return `<h2>Home</h2>
            <p>
              Hello from Home!
            </p>`;
  }
}

customElements.define("my-home", Home);
