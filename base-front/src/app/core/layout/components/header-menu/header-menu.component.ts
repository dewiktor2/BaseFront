import { Component, OnInit, HostListener, Input } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { RouterState } from "src/app/common/state/router/router.state";
import { Observable } from "rxjs";
import { LayoutActions } from 'src/app/common/state/layout/layout.actions';
@Component({
  selector: "app-header-menu",
  templateUrl: "./header-menu.component.html",
  styleUrls: ["./header-menu.component.scss"]
})
export class HeaderMenuComponent implements OnInit {
  @Select(RouterState.navigationUrl) navigationUrl$: Observable<string>;
  toggle: boolean = false;
  currentWidth = 0;
  readonly HAMBURGER_TOGGLE_WIDTH = 600;
  constructor(private store: Store) {}
  ngOnInit() {
    this.changeToggleEvent();
    this.navigationUrl$.subscribe(() => {
      if (this.toggle && window.innerWidth <= this.HAMBURGER_TOGGLE_WIDTH) {
        this.toggle = false;
      }
    });
  }

  onToggleChange() {
    this.toggle = !this.toggle;
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.changeToggleEvent();
  }

  changeToggleEvent() {
    this.currentWidth = window.innerWidth;
    this.toggle = window.innerWidth > this.HAMBURGER_TOGGLE_WIDTH ? true : false;
    if(!this.toggle) {
      this.store.dispatch(new LayoutActions.CollapseMenu(false));
    }
  }
}
