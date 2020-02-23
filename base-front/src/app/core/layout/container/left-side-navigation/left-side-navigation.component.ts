import { Component, OnInit, ViewChild } from "@angular/core";
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
  constructor(private login: LoginService, private router: Router) {}

  logout() {
    this.login.logout();
    this.router.navigateByUrl('/login');
  }
}
