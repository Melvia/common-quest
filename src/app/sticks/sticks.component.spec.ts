import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SticksComponent } from './sticks.component';

describe('SticksComponent', () => {
  let component: SticksComponent;
  let fixture: ComponentFixture<SticksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SticksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SticksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
