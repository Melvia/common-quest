import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SticksComponent} from "./sticks/sticks.component";
import {ChartExampleComponent} from "./chart-example/chart-example.component";
import {SmokeTextComponent} from "./smoke-text/smoke-text.component";
import {InputFormComponent} from "./input-form/input-form.component";
import {LoaderComponent} from "./loader/loader.component";
import {PanelModule} from "primeng/panel";
import {LoadingDirective} from "./loading.directive";
import {ClickOutsideDirective} from "./click-outside.directive";
import {ScrollIntoViewDirective} from "./scroll-into-view.directive";
import {DragDropExampleComponent} from "./drag-drop-example/drag-drop-example.component";
import {BarComponent} from "./d3/bar/bar.component";
import {GridComponent} from "./grid/grid.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SticksComponent, ChartExampleComponent, SmokeTextComponent, InputFormComponent, LoaderComponent, PanelModule, LoadingDirective, ClickOutsideDirective, ScrollIntoViewDirective, DragDropExampleComponent, BarComponent, GridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  loading = true;
  onOutsideClick(){
    console.log('click outside');
  }
  loadMoreContent() {
    console.log('load more content');
  }
}
