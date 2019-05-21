export class Sidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.route = null;
    this.routes = [];
  }

  static get observedAttributes() {
    return ["route"];
  }

  connectedCallback() {
    import("../routes.js").then(({ routes }) => {
      this.routes = routes;
      this.render();
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "route") {
      this.route = newValue;
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
                    route.path === this.route ? "active" : ""
                  }" href="#${route.path}">${route.label}</a>`;
                })
                .join("")}
            </div>`;
  }
}

customElements.define("my-sidebar", Sidebar);
