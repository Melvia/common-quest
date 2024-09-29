import {computed, Directive, input} from '@angular/core';

type Target = '_blank' | '_self' | '_parent' | '_top' | '';


@Directive({
  selector: 'a:not([noBlank])',
  standalone: true
})
export class ExternalLinkDirective {
  targetRef = input<Target>('');
  href = input.required<string>();
  target = computed<Target>(() => isUrlExternal(this.href()) ? '_blank' : this.targetRef())
}


