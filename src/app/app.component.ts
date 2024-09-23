import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SticksComponent} from "./sticks/sticks.component";
import {ChartExampleComponent} from "./chart-example/chart-example.component";
import {SmokeTextComponent} from "./smoke-text/smoke-text.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SticksComponent, ChartExampleComponent, SmokeTextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-common-quest';
}
