import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddUnderscore]'
})
export class AddUnderscoreDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = this.el.nativeElement as HTMLInputElement;
    let trimmedValue = input.value.replace(/_/g, '').replace(/\s+/g, ''); // Remove existing underscores and spaces
    let formattedValue = '';

    // Add underscore after every fifth character
    for (let i = 0; i < trimmedValue.length; i++) {
      if (i > 0 && i % 5 === 0) {
        formattedValue += '_';
      }
      formattedValue += trimmedValue.charAt(i);
    }

    input.value = formattedValue;

    // Hide underscore if a character is entered
    if (trimmedValue.length > 0) {
      this.renderer.addClass(input, 'hide-underscore');
    } else {
      this.renderer.removeClass(input, 'hide-underscore');
    }
  }

}
