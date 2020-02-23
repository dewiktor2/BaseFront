import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationMessagesComponent } from './application-messages.component';

describe('ApplicationMessagesComponent', () => {
  let component: ApplicationMessagesComponent;
  let fixture: ComponentFixture<ApplicationMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
