export class Main extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.route = null;
  }

  static get observedAttributes() {
    return ["route"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "route") {
      this.route = newValue;
      this.render();
    }
  }

  render() {
    import(`./pages/${this.route}.js`).then(({ default: DynamicPage }) => {
      const dynamicPage = new DynamicPage();
      this.shadowRoot.innerHTML = "";
      this.shadowRoot.appendChild(dynamicPage);
    });
  }
}

customElements.define("my-main", Main);
