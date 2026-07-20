import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { LeftSideNavigationComponent } from "./left-side-navigation.component";

describe("LeftSideNavigationComponent", () => {
  let component: LeftSideNavigationComponent;
  let fixture: ComponentFixture<LeftSideNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LeftSideNavigationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
