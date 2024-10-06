import { Component } from '@angular/core';
import {DragDropModule} from "primeng/dragdrop";

@Component({
  selector: 'app-drag-drop-example',
  standalone: true,
  imports: [DragDropModule],
  templateUrl: './drag-drop-example.component.html',
  styleUrl: './drag-drop-example.component.scss'
})
export class DragDropExampleComponent {

}
