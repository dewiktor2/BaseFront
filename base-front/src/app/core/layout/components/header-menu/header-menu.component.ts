import { Component, OnInit, Renderer2, Inject } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { tap, filter } from 'rxjs/operators';
import { RouterState } from '@common/state/router/router.state';
import { LayoutActions } from '@common/state/layout/layout.actions';
import { WINDOW } from '@ng-web-apis/common';

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
    @Inject(WINDOW) private window: Window,
    private store: Store,
    private renderer2: Renderer2) {
  }

  ngOnInit() {
    this.handleToggle();
    this.windowResizeListener();
    this.navigationUrlListener();
  }

  handleToggleChange() {
    this.toggle = !this.toggle;
  }

  windowResizeListener() {
    this.renderer2.listen(this.window, 'resize', () => {
      this.handleToggle();
    })
  }

  navigationUrlListener() {
    this.navigationUrl$.pipe(
      filter(() => this.toggle && this.window.innerWidth <= HeaderMenuComponent.HAMBURGER_TOGGLE_WIDTH),
      tap(() => this.toggle = false)
    ).subscribe();
  }

  handleToggle() {
    this.currentWidth = this.window.innerWidth;
    this.toggle = this.currentWidth > HeaderMenuComponent.HAMBURGER_TOGGLE_WIDTH ? true : false;
    !this.toggle && this.store.dispatch(new LayoutActions.CollapseMenu(false));
  }
}
