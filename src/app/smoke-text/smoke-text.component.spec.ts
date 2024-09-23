import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokeTextComponent } from './smoke-text.component';

describe('SmokeTextComponent', () => {
  let component: SmokeTextComponent;
  let fixture: ComponentFixture<SmokeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmokeTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmokeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
