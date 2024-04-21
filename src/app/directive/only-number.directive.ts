import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {
  constructor() {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Chỉ cho phép các phím từ 0 đến 9, phím Backspace và phím Delete
    if (
      (event.key !== 'Backspace' && event.key !== 'Delete') &&
      (event.key < '0' || event.key > '9')
    ) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    // Kiểm tra giá trị được dán vào ô input
    if (event.clipboardData) {
      const pastedText = event.clipboardData.getData('text/plain');
      if (!this.isNumber(pastedText)) {
        event.preventDefault();
      }
    }
  }

  // Kiểm tra xem chuỗi có phải là số hay không
  private isNumber(value: string): boolean {
    return /^\d+$/.test(value);
  }

}
