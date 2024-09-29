import { Component } from '@angular/core';
import {PasswordStrenghtDirective} from "../password-strenght.directive";


@Component({
  selector: 'app-input-form',
  standalone: true,
  templateUrl: './input-form.component.html',
  imports: [
    PasswordStrenghtDirective
  ],
  styleUrl: './input-form.component.scss'
})
export class InputFormComponent {

  protected readonly name = name;
}
