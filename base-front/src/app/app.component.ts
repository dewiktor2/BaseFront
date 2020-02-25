import { Component, HostListener, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Store } from "@ngxs/store";
import { RouterActions } from "./common/state/router/router.actions";
import { LocalStorageService } from "./core/services/local-storage/local-storage.service";
import { LoginService } from "./core/services/login/login.service";
export const LANG_STATE = "lang_state";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "baseFront";
  get loggedIn() {
    return this.login.isLoggedIn();
  }

  constructor(
    private translate: TranslateService,
    private store: Store,
    private localStorage: LocalStorageService,
    private login: LoginService
  ) {}

  ngOnInit() {
    this.store.dispatch(new RouterActions.ListenNavigationEvent());
    this.setLang();
  }

  logout() {
    this.login.logout();
  }

  private setLang() {
    let memoryLang = this.localStorage.getItem(LANG_STATE);
    memoryLang ? this.changeLang(memoryLang) : this.changeLang("en");
  }

  private changeLang(lang: string) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
}
