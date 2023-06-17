import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumericOnly]'
})
export class NumericOnlyDirective {

  constructor(private el: ElementRef) { }
  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = this.el.nativeElement as HTMLInputElement;
    let trimmedValue = input.value.replace(/\s+/g, ''); // Remove existing spaces
    let formattedValue = '';

    // Add space after every fifth digit
    for (let i = 0; i < trimmedValue.length; i++) {
      if (i > 0 && i % 5 === 0) {
        formattedValue += ' ';
      }
      formattedValue += trimmedValue.charAt(i);
    }

    input.value = formattedValue;
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const isNumericInput = (event.key >= '0' && event.key <= '9') || event.key === 'Backspace' || event.key === 'Delete';

    if (!isNumericInput) {
      event.preventDefault();
    }
  }
}
