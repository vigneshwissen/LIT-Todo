import { LitElement, css, html, unsafeCSS } from 'lit';
import { textboxStyles } from './lit-textbox.styles';

export class LitTextbox extends LitElement {
  static override styles = css`${unsafeCSS(textboxStyles)}`;

  static override properties = {
    value: { type: String },
    placeholder: { type: String }
  };

  declare value: string;
  declare placeholder: string;

  constructor() {
    super();
    this.value = '';
    this.placeholder = 'Enter todo';
  }

  private onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.dispatchEvent(
      new CustomEvent('value-change', {
        detail: this.value,
        bubbles: true,
        composed: true
      })
    );
  }

  private onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.dispatchEvent(
        new CustomEvent('enter-press', {
          bubbles: true,
          composed: true
        })
      );
    }
  }

  override render() {
    return html`
      <input
        type="text"
        .value=${this.value}
        placeholder=${this.placeholder}
        @input=${this.onInput}
        @keydown=${this.onKeydown}
      />
    `;
  }
}

customElements.define('lit-textbox', LitTextbox);
