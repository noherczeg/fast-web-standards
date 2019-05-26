export default class Contacts extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.subRouteChanged = this.subRouteChanged.bind(this);
    this.contacts = [];
  }

  static get $$tag() {
    return 'my-contacts';
  };

  connectedCallback() {
    fetch("api/contacts.json")
      .then(resp => resp.json())
      .then(resp => {
        this.contacts = resp.data;
        this.render();
        this.subRouteChanged();
      });
    window.addEventListener("hashchange", this.subRouteChanged);
  }

  disconnectedCallback() {
    window.removeEventListener("hashchange", this.subRouteChanged);
  }

  render() {
    this.shadowRoot.innerHTML = this.template;
  }

  get template() {
    return `<h2>Contacts</h2>
            <ul>
              ${this.contacts.map(c => `<li><a href="#/contacts/${c.id}">${c.name}</a></li>`).join('')}
            </ul>
            <div id="contact-details"></div>`;
  }

  subRouteChanged() {
    const contactId = this.getContactSelected();
    const host = this.shadowRoot.getElementById('contact-details');
    if (contactId) {
      import("./contact-details.js").then(({ default: ContactDetails }) => {
        let contactDetailsPage = null;
        if (!host.hasChildNodes()) {
          contactDetailsPage = new ContactDetails();
          host.appendChild(contactDetailsPage);
        } else {
          contactDetailsPage = this.shadowRoot.querySelector(ContactDetails.$$tag);
        }
        contactDetailsPage.setAttribute('contact-id', contactId);
      });
    }
  }

  getContactSelected() {
    const contact = window.location.hash.substr(1).match(/\/contacts\/(\d+)/);
    return contact ? contact[1] : null;
  }
}

customElements.define(Contacts.$$tag, Contacts);
