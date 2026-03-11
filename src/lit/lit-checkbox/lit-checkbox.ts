import { LitElement, css, html, unsafeCSS } from 'lit';
import { checkboxStyles } from './lit-checkbox.styles';

export class LitCheckbox extends LitElement {
  static override styles = css`${unsafeCSS(checkboxStyles)}`;

  static override properties = {
    label: { type: String },
    checked: { type: Boolean, reflect: true }
  };

  declare label: string;
  declare checked: boolean;

  constructor() {
    super();
    this.label = '';
    this.checked = false;
  }

  private onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;
    this.dispatchEvent(
      new CustomEvent('checked-change', {
        detail: this.checked,
        bubbles: true,
        composed: true
      })
    );
  }

  override render() {
    return html`
      <label>
        <input type="checkbox" .checked=${this.checked} @change=${this.onChange} />
        <span class=${this.checked ? 'checked' : ''}>${this.label}</span>
      </label>
    `;
  }
}

customElements.define('lit-checkbox', LitCheckbox);
