import { LitElement, css, html, unsafeCSS } from 'lit';
import { buttonStyles } from './lit-button.styles';

export class LitButton extends LitElement {
  static override styles = css`${unsafeCSS(buttonStyles)}`;

  static override properties = {
    label: { type: String },
    variant: { type: String },
    disabled: { type: Boolean }
  };

  declare label: string;
  declare variant: 'primary' | 'ghost';
  declare disabled: boolean;

  constructor() {
    super();
    this.label = 'Button';
    this.variant = 'primary';
    this.disabled = false;
  }

  private emitClick() {
    if (!this.disabled) {
      this.dispatchEvent(
        new CustomEvent('lit-click', {
          bubbles: true,
          composed: true
        })
      );
    }
  }

  override render() {
    return html`
      <button 
        class=${this.variant === 'ghost' ? 'ghost' : ''} 
        ?disabled=${this.disabled}
        @click=${this.emitClick}>
        ${this.label}
      </button>
    `;
  }
}

customElements.define('lit-button', LitButton);
