import {Component, HostListener, signal} from '@angular/core';

@Component({
  selector: 'app-smoke-text',
  standalone: true,
  imports: [],
  templateUrl: './smoke-text.component.html',
  styleUrl: './smoke-text.component.scss'
})
export class SmokeTextComponent {
  active = signal(false);
  @HostListener('mouseover') onMouseOver() {
    this.active.update( value => true);
  }
}
