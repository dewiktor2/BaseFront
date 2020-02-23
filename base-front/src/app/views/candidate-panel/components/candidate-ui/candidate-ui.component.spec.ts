import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateUiComponent } from './candidate-ui.component';

describe('CandidateUiComponent', () => {
  let component: CandidateUiComponent;
  let fixture: ComponentFixture<CandidateUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
