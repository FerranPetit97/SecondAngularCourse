import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeaver() {
    this.element.nativeElement.style.fontWeight = '';
  }

  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.fontWeight = 'bold';
  }
}
