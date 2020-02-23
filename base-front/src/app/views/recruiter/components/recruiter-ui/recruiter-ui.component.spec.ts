import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterUiComponent } from './recruiter-ui.component';

describe('RecruiterUiComponent', () => {
  let component: RecruiterUiComponent;
  let fixture: ComponentFixture<RecruiterUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
