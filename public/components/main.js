import { getPage, routes } from "../routes.js";

export class Main extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.page = getPage();
  }

  static get $$tag() {
    return "my-main";
  }

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
    const page = this.pageAvailable ? this.page : "/404";
    import(`./pages${page}.js`).then(({ default: DynamicPage }) => {
      this.shadowRoot.innerHTML = "";
      this.shadowRoot.appendChild(new DynamicPage());
    });
  }

  get pageAvailable() {
    return routes.map(r => r.path).includes(this.page);
  }
}

customElements.define(Main.$$tag, Main);
