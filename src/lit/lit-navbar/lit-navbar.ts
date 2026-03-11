import { LitElement, css, html, unsafeCSS } from 'lit';
import { navbarStyles } from './lit-navbar.styles';

export class LitNavbar extends LitElement {
  static override styles = css`${unsafeCSS(navbarStyles)}`;

  static override properties = {
    title: { type: String },
    active: { type: String }
  };

  declare title: string;
  declare active: string;

  constructor() {
    super();
    this.title = 'Todo Manager';
    this.active = 'personal';
  }

  private select(view: 'personal' | 'professional') {
    this.dispatchEvent(
      new CustomEvent('view-change', {
        detail: view,
        bubbles: true,
        composed: true
      })
    );
  }

  override render() {
    return html`
      <nav class="bar">
        <div class="brand">${this.title}</div>
        <div class="tabs">
          <button
            class=${this.active === 'personal' ? 'active' : ''}
            @click=${() => this.select('personal')}
          >
            Personal
          </button>
          <button
            class=${this.active === 'professional' ? 'active' : ''}
            @click=${() => this.select('professional')}
          >
            Professional
          </button>
        </div>
      </nav>
    `;
  }
}

customElements.define('lit-navbar', LitNavbar);
