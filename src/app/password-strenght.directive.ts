import {Directive, ElementRef, inject, InjectionToken, Input} from '@angular/core';

type PasswordStrength = 'weak' | 'medium' | 'strong';

type PasswordEvaluatorFn = (password: string) => PasswordStrength;

export const EVALUATOR_FN_TOKEN = new InjectionToken<
  PasswordEvaluatorFn
>(
  'PasswordEvaluatorFn',
);


export function providePasswordEvaluatorFn(
  evaluatorFn: PasswordEvaluatorFn,
) {
  return [{
    provide: EVALUATOR_FN_TOKEN,
    useValue: evaluatorFn,
  }];
}

export const defaultEvaluatorFn: PasswordEvaluatorFn = (
  password: string,
): PasswordStrength => {
  if (password.length < 6) {
    return 'weak';
  } else if (password.length < 10) {
    return 'medium';
  }
  return 'strong';
}


@Directive({
  selector: 'input[type="password"]',
  exportAs: 'passwordStrength',
  standalone: true,
  host: {
    '(input)': 'onInput($event)',
  },
})
export class PasswordStrenghtDirective {
  @Input()   evaluatorFn = inject(
    EVALUATOR_FN_TOKEN,
    { optional: true },
  ) ?? defaultEvaluatorFn;
  @Input() noStrengthCheck = false;

  // property to capture in the template
  strength: PasswordStrength = 'weak';


  onInput(event: InputEvent) {
    if (this.noStrengthCheck) {
      return;
    }
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.strength = this.evaluatorFn(value);

  }


}
