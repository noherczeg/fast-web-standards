import { getPage, routes } from "../routes.js";

export class Sidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.page = getPage();
    this.routes = routes;
  }

  static get $$tag() {
    return 'my-sidebar';
  };

  static get observedAttributes() {
    return ["page"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "page") {
      this.page = newValue;
      this.render();
    }
  }

  render() {
    this.shadowRoot.innerHTML = this.template;
  }

  get template() {
    return `<style>@import './components/sidebar.css';</style>
            <div class="sidebar">
              ${this.routes
                .map(route => {
                  return `<a class="${
                    route.path === this.page ? "active" : ""
                  }" href="#${route.path}">${route.label}</a>`;
                })
                .join("")}
            </div>`;
  }
}

customElements.define(Sidebar.$$tag, Sidebar);
