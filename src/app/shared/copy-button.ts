import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-copy-button',
  template: `
    <button type="button" class="btn" (click)="copy()" [attr.aria-label]="label() + 'をコピー'">
      {{ done() ? 'コピーしました' : 'コピー' }}
    </button>
  `,
  styles: `
    .btn {
      min-height: 28px;
      min-width: 6.5em;
      padding: 2px 10px;
      font-size: 0.82rem;
    }
  `,
})
export class CopyButton {
  readonly text = input.required<string>();
  readonly label = input('');
  protected readonly done = signal(false);
  private timer?: ReturnType<typeof setTimeout>;

  protected async copy() {
    try {
      await navigator.clipboard.writeText(this.text());
      this.done.set(true);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.done.set(false), 1800);
    } catch {
      // クリップボードが使えない環境では何もしない (文字は選択してコピーできる)
    }
  }
}
