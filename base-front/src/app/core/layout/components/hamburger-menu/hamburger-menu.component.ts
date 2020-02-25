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
  @Input() compressedNavigation: boolean;
  toggle = false;
  constructor() {}

  ngOnInit() {
    this.changeToggleEvent();
    this.navigationUrl$.subscribe(() => {
      if (this.toggle && window.innerWidth <= 600) {
        this.toggle = false;
      }
    });
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    if(!this.compressedNavigation) {
      this.changeToggleEvent();
    }
  }

  onToggleChange() {
    this.toggle = !this.toggle;
  }

  changeToggleEvent() {
    this.toggle = window.innerWidth > 600 ? true : false;
  }
}
