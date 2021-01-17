import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageHeaderTitleComponent } from './page-header-title.component';

describe('PageHeaderTitleComponent', () => {
  let component: PageHeaderTitleComponent;
  let fixture: ComponentFixture<PageHeaderTitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
