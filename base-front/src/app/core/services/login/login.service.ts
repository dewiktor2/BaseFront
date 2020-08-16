import { Injectable } from "@angular/core";
import { AuthService } from '@common/endpoints/auth/auth.endpoint';
import { LocalStorageService } from '../local-storage/local-storage.service';
export const AUTH_KEY = "auth_key";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(
    private authService: AuthService,
    private localStorage: LocalStorageService) { }

  login = (payload: { login: string; password: string }) => this.authService.login(payload);

  logout = () => this.localStorage.removeItem(AUTH_KEY);

  isLoggedIn = () => this.localStorage.getItem(AUTH_KEY) ? true : false;
}
