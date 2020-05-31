import { Component, OnInit, HostListener, Input, Renderer2, NgZone } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { LayoutActions } from '@app/common/state/layout/layout.actions';
import { RouterState } from '@app/common/state/router/router.state';
@Component({
  selector: "app-header-menu",
  templateUrl: "./header-menu.component.html",
  styleUrls: ["./header-menu.component.scss"]
})
export class HeaderMenuComponent implements OnInit {
  private static readonly HAMBURGER_TOGGLE_WIDTH = 600;
  @Select(RouterState.navigationUrl) navigationUrl$: Observable<string>;
  toggle = false;
  currentWidth = 0;
  constructor(
    private store: Store,
    private renderer2: Renderer2) {
  }

  ngOnInit() {
    this.changeToggleEvent();
    this.windowResizeListener();
    this.navigationUrlListener();
  }

  onToggleChange() {
    this.toggle = !this.toggle;
  }

  windowResizeListener() {
    this.renderer2.listen(window, 'resize', () => {
      this.changeToggleEvent();
    })
  }

  navigationUrlListener() {
    this.navigationUrl$.subscribe(() => {
      if (this.toggle && window.innerWidth <= HeaderMenuComponent.HAMBURGER_TOGGLE_WIDTH) {
        this.toggle = false;
      }
    });
  }

  changeToggleEvent() {
    this.currentWidth = window.innerWidth;
    this.toggle = window.innerWidth > HeaderMenuComponent.HAMBURGER_TOGGLE_WIDTH ? true : false;
    if (!this.toggle) {
      this.store.dispatch(new LayoutActions.CollapseMenu(false));
    }
  }
}
