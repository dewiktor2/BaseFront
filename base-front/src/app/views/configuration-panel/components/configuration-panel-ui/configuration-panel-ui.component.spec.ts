import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationPanelUiComponent } from './configuration-panel-ui.component';

describe('ConfigurationPanelUiComponent', () => {
  let component: ConfigurationPanelUiComponent;
  let fixture: ComponentFixture<ConfigurationPanelUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationPanelUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationPanelUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
