import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  OnInit,
  Renderer2,
  signal
} from '@angular/core';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss'
})
export class BoxComponent implements OnInit {
  @Input() imgUrl = '';
  protected renderer = inject(Renderer2);
  protected elementRef = inject(ElementRef);
  sticks: HTMLElement[]=[];
  active = signal(false);

  @HostListener('click') onClick() {
    this.active.update(value => !value);
    this.sticks.forEach(function (span) {
      span.style.setProperty('--x', Math.floor(Math.random() * 400 - 200) + 'px');
    })
    this.sticks.forEach(function (span) {
      span.style.setProperty('--r', Math.floor(Math.random() * 360 - 0) + 'deg');
    })


 //   transform: translate(var(--x)) rotate(var(--r));
  }


  ngOnInit(): void {
    for (let i = 0; i < 200; i++) {
      const stick = this.renderer.createElement('span') as HTMLElement;
      this.sticks.push(stick);
      stick.style.top = `${i * 1.5}px`;
      stick.style.backgroundPositionY = `${i * -1.5}px`;
      stick.style.transitionDelay = (Math.random() * 1.5) + 0 + 's';
      stick.style.backgroundImage = `url(${this.imgUrl})`;
      this.renderer.appendChild(this.elementRef.nativeElement, stick);
    }


  }



}
