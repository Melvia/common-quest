import {Directive, ElementRef, EventEmitter, inject, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[scrollIntoView]',
  standalone: true
})
export class ScrollIntoViewDirective implements OnInit, OnDestroy {
  @Input() threshold = 0.25;
  @Output() scrollIntoView = new EventEmitter<void>();
  elRef = inject(ElementRef);
  observer: IntersectionObserver;
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
     this.observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             this.scrollIntoView.emit();
           }
         })
       },
    { threshold: this.threshold }
     )
    this.observer.observe(this.elRef.nativeElement);
  }



}
