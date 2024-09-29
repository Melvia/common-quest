import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SticksComponent} from "./sticks/sticks.component";
import {ChartExampleComponent} from "./chart-example/chart-example.component";
import {SmokeTextComponent} from "./smoke-text/smoke-text.component";
import {InputFormComponent} from "./input-form/input-form.component";
import {LoaderComponent} from "./loader/loader.component";
import {PanelModule} from "primeng/panel";
import {LoadingDirective} from "./loading.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SticksComponent, ChartExampleComponent, SmokeTextComponent, InputFormComponent, LoaderComponent, PanelModule, LoadingDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  loading = true;

}
