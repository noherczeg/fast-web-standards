import { getPage } from "../routes.js";

export class Main extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.page = getPage();
  }

  static get $$tag() {
    return 'my-main';
  };

  static get observedAttributes() {
    return ["page"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "page" && oldValue !== newValue) {
      this.page = newValue;
      this.render();
    }
  }

  render() {
    import(`./pages${this.page}.js`).then(({ default: DynamicPage }) => {
      const dynamicPage = new DynamicPage();
      this.shadowRoot.innerHTML = "";
      this.shadowRoot.appendChild(dynamicPage);
    });
  }
}

customElements.define(Main.$$tag, Main);
