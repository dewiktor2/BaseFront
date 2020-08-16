import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { LoginService } from '@core/services/login/login.service';
@Injectable({ providedIn: "root" })
export class AuthGuardService implements CanActivate {
  constructor(public login: LoginService, public router: Router) { }
  canActivate(): boolean {
    if (this.login.isLoggedIn()) {
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }
}
