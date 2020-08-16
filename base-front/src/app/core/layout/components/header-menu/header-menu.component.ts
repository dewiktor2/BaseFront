import { Component, OnInit, Renderer2 } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { tap, filter } from 'rxjs/operators';
import { RouterState } from '@common/state/router/router.state';
import { LayoutActions } from '@common/state/layout/layout.actions';

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

  handleToggleChange() {
    this.toggle = !this.toggle;
  }

  windowResizeListener() {
    this.renderer2.listen(window, 'resize', () => {
      this.changeToggleEvent();
    })
  }

  navigationUrlListener() {
    this.navigationUrl$.pipe(
      filter(() => this.toggle && window.innerWidth <= HeaderMenuComponent.HAMBURGER_TOGGLE_WIDTH),
      tap(() => this.toggle = false)
    ).subscribe();
  }

  changeToggleEvent() {
    this.currentWidth = window.innerWidth;
    this.toggle = window.innerWidth > HeaderMenuComponent.HAMBURGER_TOGGLE_WIDTH ? true : false;
    if (!this.toggle) {
      this.store.dispatch(new LayoutActions.CollapseMenu(false));
    }
  }
}
