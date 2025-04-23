class FlyerLink extends HTMLElement {
    static get observedAttributes() {
        return ['href', 'icon', 'label', 'random', 'colorclass', 'title'];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const href = this.getAttribute('href') || '#';
        const icon = this.getAttribute('icon') || 'fas fa-link';
        const label = this.getAttribute('label') || 'Link';
        const title = this.getAttribute('title') || '';
        const offset = this.getAttribute('offset') || "false";

        var margin = offset === "true" ? Math.random() * (15 - 5) + 5 : 0;
        var direction =  Math.random() < 0.5 ? '-' : '';


        this.innerHTML = `
        <div class="flyer-wrapper" style="margin-left: ${direction}${margin}%">
        <a class="flyer" href="${href}" target="_blank" title="${title}">
          <i class="${icon}"></i>
          ${label}
        </a>
        </div>
      `;
    }
}

customElements.define('flyer-link', FlyerLink);




