import {Directive, ElementRef, HostListener, inject, Input} from '@angular/core';
type FieldRight = 'wrong' |  'right';
type FieldvaluatorFn = (field: string) => FieldRight;

@Directive({
  selector: 'input[type="password"]',
  standalone: true,
  exportAs: 'fieldRight',
})
export class FieldRightDirective {
  @Input() noStrengthCheck = false;
  right: FieldRight = 'wrong';

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    if (this.noStrengthCheck) {
      return;
    }

    const input = event.target as HTMLInputElement;
    const value = input.value;
    const right = this.evaluateFieldRight(value);
    this.el.nativeElement.classList.add(
      `field-${right}`
    );
  }

  private readonly el = inject(ElementRef);

  evaluateFieldRight(answer: string) : FieldRight{
    if  (answer !== 'right-answer') {
      return 'wrong';
    }
    return 'right';
  }
}
