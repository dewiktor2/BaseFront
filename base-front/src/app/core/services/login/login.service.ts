import { Injectable } from "@angular/core";
import { LocalStorageService } from "../local-storage/local-storage.service";

export const AUTH_KEY = "auth_key";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private localStorage: LocalStorageService) {}

  login(payload: { username: string; password: string }) {
    this.localStorage.addItem(AUTH_KEY, JSON.stringify(payload));
  }

  logout() {
    this.localStorage.removeItem(AUTH_KEY);
  }

  isLoggedIn() {
    return this.localStorage.getItem(AUTH_KEY) ? true : false;
  }
}
