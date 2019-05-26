import { singleLineString } from '../../utils/single-line-string.js';

export default class ContactDetails extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.contactId = null;
    this.contact = null;
  }

  static get $$tag() {
    return 'my-contact-details';
  };

  static get observedAttributes() {
    return ["contact-id"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "contact-id" && oldValue !== newValue) {
      this.contactId = newValue;
      fetch(`api/contacts/${this.contactId}.json`).then(r => r.json()).then(resp => {
        this.contact = resp.data;
        this.render();
      });
    }
  }

  render() {
    this.shadowRoot.innerHTML = this.contact ? this.contactTemplate : this.loadingTemplate;
  }

  get loadingTemplate() {
    return '<div>Loading...</div>';
  }

  get contactTemplate() {
    return singleLineString`<h2>${this.contact.name}</h2>
            <div>
              <h4>Rank:</h4>
              <p>${this.contact.rank}</p>
              <h4>Origin:</h4>
              <p>${this.contact.origin}</p>
            </div>`;
  }
}

customElements.define(ContactDetails.$$tag, ContactDetails);
