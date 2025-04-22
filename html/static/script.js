window.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');
    const flyers = Array.from(board.children);

    // Zufällige Reihenfolge
    flyers.sort(() => Math.random() - 0.5);

    // Neu anordnen
    flyers.forEach(flyer => board.appendChild(flyer));

    // Zufällige Verzögerung und Animation für jedes Flyer
    flyers.forEach(flyer => {
        const delay = (Math.random() * 4).toFixed(2); // 0–4 Sekunden
        const duration = (3 + Math.random() * 2).toFixed(2); // 3–5 Sekunden

        flyer.style.animation = `wobble ${duration}s ease-in-out ${delay}s infinite alternate`;
    });
});


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
        const random = this.getAttribute('random') || '0.5';
        const colorClass = this.getAttribute('colorclass') || '';
        const title = this.getAttribute('title') || '';

        this.innerHTML = `
        <a class="flyer ${colorClass}" href="${href}" target="_blank" title="${title}" style="--random: ${random}">
          <i class="${icon}"></i>
          ${label}
        </a>
      `;
    }
}

customElements.define('flyer-link', FlyerLink);




