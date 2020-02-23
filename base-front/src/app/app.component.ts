import { Component, HostListener, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Store } from "@ngxs/store";
import { RouterActions } from "./common/state/router/router.actions";
import { LocalStorageService } from "./core/services/local-storage/local-storage.service";
import { LoginService } from "./core/services/login/login.service";
export const LANG_STATE = 'lang_state';
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
  ) {
    this.store.dispatch(new RouterActions.ListenNavigationEvent());
  }

  ngOnInit() {
    this.setLang(this.translate);
  }

  logout() {
    this.login.logout();
  }

  private setLang(translate: TranslateService) {
    let memoryLang =  this.localStorage.getItem(LANG_STATE);
    if (memoryLang) {
      translate.setDefaultLang(memoryLang);
      translate.use(memoryLang);
    } else {
      translate.setDefaultLang("en");
      translate.use("en");
    }
  }
}
