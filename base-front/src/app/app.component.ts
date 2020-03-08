import { Component, HostListener, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Store, Select } from "@ngxs/store";
import { RouterActions } from "./common/state/router/router.actions";
import { LocalStorageService } from "./core/services/local-storage/local-storage.service";
import { LoginService } from "./core/services/login/login.service";
import { ToastState } from './common/state/toast/toast.state';
import { Observable } from 'rxjs';
import { ToastMessage } from './models/toast/message.interface';
export const LANG_STATE = "lang_state";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @Select(ToastState.toast) toast$: Observable<ToastMessage>;
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