import { Component, ViewChild, Output, EventEmitter } from "@angular/core";
import { HamburgerMenuComponent } from "../../components/hamburger-menu/hamburger-menu.component";
import { LoginService } from "src/app/core/services/login/login.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-left-side-navigation",
  templateUrl: "./left-side-navigation.component.html",
  styleUrls: ["./left-side-navigation.component.scss"]
})
export class LeftSideNavigationComponent {
  @ViewChild(HamburgerMenuComponent, { static: true })
  hamburgerMenuComponent: HamburgerMenuComponent;
  _compressedNavigation = false;

  get compressedNavigation() {
    return this._compressedNavigation;
  }

  get navigationStyle() {
    const mainStyle = "left-side";
    const compressNavigation = "compressed-left-side";
    return this.compressedNavigation
      ? `${compressNavigation}`
      : `${mainStyle}`;
  }

  get pinStyle() {
     const mainStyle = "pin fas"
     return this.compressedNavigation
      ? `${mainStyle} fa-compress-alt`
      : `${mainStyle} fa-compress`;
  }

  constructor(private login: LoginService, private router: Router) {}

  compress() {
    this._compressedNavigation = !this.compressedNavigation;
    if(this._compressedNavigation) {
      this.hamburgerMenuComponent.toggle = false;
    } else {
      this.hamburgerMenuComponent.toggle = true;
    }  
  }

  logout() {
    this.login.logout();
    this.router.navigateByUrl("/login");
  }
}
