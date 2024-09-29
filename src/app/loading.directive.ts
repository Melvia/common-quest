import {
  ComponentRef,
  Directive,
  DoCheck,
  EmbeddedViewRef,
  inject,
  Input, OnChanges, OnInit, SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {LoaderComponent} from "./loader/loader.component";

@Directive({
  selector: '[loading]',
  standalone: true,
})
export class LoadingDirective implements OnInit, DoCheck, OnChanges {
  private readonly templateRef = inject(TemplateRef);
  private readonly vcRef = inject(ViewContainerRef);
  @Input() loading = false;
  templateView: EmbeddedViewRef<any>;
  loaderRef: ComponentRef<LoaderComponent>;

  ngOnInit() {
    this.templateView = this.templateRef.createEmbeddedView({});
    this.loaderRef = this.vcRef.createComponent(LoaderComponent, {
      injector: this.vcRef.injector,
      projectableNodes: [this.templateView.rootNodes],
    })

    this.loaderRef.setInput('loading', this.loading)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loaderRef?.setInput('loading', this.loading);
  }

  ngDoCheck(): void {
    this.templateView?.detectChanges();

  }


}
