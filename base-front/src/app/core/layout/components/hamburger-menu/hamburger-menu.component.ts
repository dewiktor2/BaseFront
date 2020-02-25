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
  @Input() compressed: boolean;
  readonly HAMBURGER_TOGGLE_WIDTH = 600;
  toggle: boolean = false;
  constructor() {}
  ngOnInit() {
    this.changeToggleEvent();
    this.navigationUrl$.subscribe(() => {
      if (this.toggle && window.innerWidth <= this.HAMBURGER_TOGGLE_WIDTH) {
        this.toggle = false;
      }
    });
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    if (!this.compressed) {
      this.changeToggleEvent();
    }
  }

  onToggleChange() {
    this.toggle = !this.toggle;
  }

  changeToggleEvent() {
    this.toggle =
      window.innerWidth > this.HAMBURGER_TOGGLE_WIDTH ? true : false;
  }
}
