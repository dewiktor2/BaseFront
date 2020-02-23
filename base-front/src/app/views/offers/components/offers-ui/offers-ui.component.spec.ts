import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersUiComponent } from './offers-ui.component';

describe('OffersUiComponent', () => {
  let component: OffersUiComponent;
  let fixture: ComponentFixture<OffersUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
