import { Component, OnInit, HostListener, Input } from "@angular/core";
import { Select } from "@ngxs/store";
import { RouterState } from "src/app/common/state/router/router.state";
import { Observable } from "rxjs";
@Component({
  selector: "app-hamburger-menu",
  templateUrl: "./hamburger-menu.component.html",
  styleUrls: ["./hamburger-menu.component.scss"]
})
export class HamburgerMenuComponent implements OnInit {
  @Select(RouterState.navigationUrl) navigationUrl$: Observable<string>;
  toggle: boolean = false;
  readonly HAMBURGER_TOGGLE_WIDTH = 600;
  constructor() {}
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
    this.toggle =
      window.innerWidth > this.HAMBURGER_TOGGLE_WIDTH ? true : false;
  }
}
