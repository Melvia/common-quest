import { Component } from '@angular/core';
import {FieldRightDirective} from "../field-right.directive";

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [
    FieldRightDirective
  ],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.scss'
})
export class InputFormComponent {

}
