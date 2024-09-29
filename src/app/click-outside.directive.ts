import {Directive, ElementRef, EventEmitter, inject, Output} from '@angular/core';

@Directive({
  selector: '[clickAway]',
  standalone: true,
  host: {
    '(window:click)': 'handleKeyDown($event)',
  }
})
export class ClickOutsideDirective {
  private readonly elRef: ElementRef<HTMLElement> = inject(ElementRef);

  @Output() clickAway = new EventEmitter<void>();

  handleKeyDown($event: KeyboardEvent) {
    if (!this.elRef.nativeElement.contains(event?.target as HTMLElement)) {
      this.clickAway.emit();
    }
  }



}
