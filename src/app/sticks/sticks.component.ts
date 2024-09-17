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


  ngOnInit(): void {

  }


}
