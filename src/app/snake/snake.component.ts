import { Component } from '@angular/core';
import {ScrollIntoViewDirective} from "../scroll-into-view.directive";

@Component({
  selector: 'app-snake',
  standalone: true,
  imports: [
    ScrollIntoViewDirective
  ],
  templateUrl: './snake.component.html',
  styleUrl: './snake.component.scss'
})
export class SnakeComponent {
  loadMoreContent() {
    console.log('load more content');
  }
}
