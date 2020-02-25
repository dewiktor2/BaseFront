import { Component, ViewChild} from "@angular/core";
import { HamburgerMenuComponent } from "../../components/hamburger-menu/hamburger-menu.component";
import { LoginService } from "src/app/core/services/login/login.service";
import { Router } from "@angular/router";
import { Select, Store } from "@ngxs/store";
import { LayoutState } from "src/app/common/state/layout/layout.state";
import { Observable } from "rxjs";
import { LayoutActions } from "src/app/common/state/layout/layout.actions";
@Component({
  selector: "app-left-side-navigation",
  templateUrl: "./left-side-navigation.component.html",
  styleUrls: ["./left-side-navigation.component.scss"]
})
export class LeftSideNavigationComponent {
  @ViewChild(HamburgerMenuComponent, { static: true })
  hamburgerMenuComponent: HamburgerMenuComponent;
  @Select(LayoutState.compressed) compressed$: Observable<boolean>;

  get compressedNavigation() {
    return this.store.selectSnapshot(LayoutState.compressed);
  }

  get navigationStyle() {
    const mainStyle = "left-side";
    const compressNavigation = "compressed-left-side";
    return this.compressedNavigation ? `${compressNavigation}` : `${mainStyle}`;
  }

  get pinStyle() {
    const mainStyle = "pin fas";
    return this.compressedNavigation
      ? `${mainStyle} fa-compress-alt`
      : `${mainStyle} fa-compress`;
  }

  constructor(
    private login: LoginService,
    private store: Store,
    private router: Router
  ) {}

  compress() {
    this.store.dispatch(new LayoutActions.CompressNavigation());
    this.hamburgerMenuComponent.toggle = this.compressedNavigation
      ? false
      : true;
  }

  logout() {
    this.login.logout();
    this.router.navigateByUrl("/login");
  }
}
