import {
  Component,
  ElementRef, HostBinding,
  HostListener,
  inject,
  OnInit,
  QueryList,
  Renderer2,
  signal,
  ViewChildren
} from '@angular/core';
import {BoxComponent} from "../box/box.component";

@Component({
  selector: 'app-sticks',
  standalone: true,
  imports: [
    BoxComponent
  ],
  templateUrl: './sticks.component.html',
  styleUrl: './sticks.component.scss'
})
export class SticksComponent implements OnInit {
  @ViewChildren('box') boxes: QueryList<ElementRef>;
  protected renderer = inject(Renderer2);
  protected elementRef = inject(ElementRef);

  sticks: HTMLElement[];

  active = signal(false);

  @HostBinding('class.active') get valid() { return this.active(); }

  @HostListener('click') onClick() {
    this.active.update( value => !value);
  }

  // change() {
  //     this..classList.toggle('active');
  //     spans.forEach(function (span) {
  //       span.style.setProperty('--x', Math.floor(Math.random() * 400 - 200) + 'px');
  //     })
  //     spans.forEach(function (span) {
  //       span.style.setProperty('--r', Math.floor(Math.random() * 360 - 0) + 'deg');
  //     })
  // }

  ngOnInit(): void {
        // for (let i = 0; i < 200; i++) {
        //   const stick = this.renderer.createElement('span') as HTMLElement;
        //   this.sticks.push(stick);
        //   stick.style.top = `${i * 1.5}px`;
        //   stick.style.backgroundPositionY = `${i * -1.5}px`;
        //   stick.style.transitionDelay = (Math.random() * 1.5) + 0 + 's';
        //   this.renderer.appendChild(this.elementRef, stick);
        // }


  }


}
