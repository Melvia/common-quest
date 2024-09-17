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
  sticks: HTMLElement[] = [];
  active = signal(true);

  @HostListener('click') onClick() {
    this.active.update(value => !value);
    this.sticks.forEach((stick) => this.stickTransform(stick));
  }


  ngOnInit(): void {
    for (let i = 0; i < 200; i++) {
      const stick = this.renderer.createElement('span') as HTMLElement;
      this.sticks.push(stick);
      this.setProperties(stick, i);
      this.renderer.appendChild(this.elementRef.nativeElement, stick);
      this.stickTransform(stick);
    }
  }

  setProperties(stick: HTMLElement, index: number): void {
    stick.style.top = `${index * 1.5}px`;
    stick.style.backgroundPositionY = `${index * -1.5}px`;
    stick.style.transitionDelay = (Math.random() * 1.5) + 0 + 's';
    stick.style.backgroundImage = `url(${this.imgUrl})`;
  }

  stickTransform(stick: HTMLElement) {
    const translateValue = this.active() ? Math.floor(Math.random() * 400 - 200) + 'px' : '0';
    const rotateValue = this.active() ? Math.floor(Math.random() * 360 - 0) + 'deg' : '0';
    stick.style.transform = `translate(${translateValue}) rotate(${rotateValue})`;
  }

}
