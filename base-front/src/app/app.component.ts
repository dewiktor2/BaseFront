import { Component, OnInit, Inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Store, Select } from "@ngxs/store";
import { Observable, of } from 'rxjs';
import { LoginService } from '@core/services/login/login.service';
import { LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { ToastState } from '@common/state/toast/toast.state';
import { LayoutState } from '@common/state/layout/layout.state';
import { RouterActions } from '@common/state/router/router.actions';
import { ToastMessage } from '@models/toast/message.interface';
import { fader } from '@shared/animations/component-animation';
import { tap } from 'rxjs/operators';
export const LANG_STATE = "lang_state";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [fader]
})
export class AppComponent implements OnInit {
  @Select(ToastState.toast) toąast$: Observable<ToastMessage>;
  title = "baseFront";

  animationDisabled: boolean;

  get loggedIn() {
    return this.login.isLoggedIn();
  }

  get themeClass() {
    return this.store.selectSnapshot(LayoutState.theme) === 'dark' ? 'dark' : 'light';
  }

  constructor(
    private translate: TranslateService,
    private store: Store,
    private localStorage: LocalStorageService,
    private login: LoginService,
  ) { }

  ngOnInit() {
    this.store.dispatch(new RouterActions.ListenNavigationEvent());
    this.setLang();
    this.store.select(LayoutState.collapsed).pipe(
      tap(collapsed => this.animationDisabled = collapsed ? false : true)
    ).subscribe();
  }

  getState(outlet: any) {
    return outlet.activatedRouteData.state;
  }

  private setLang() {
    const memoryLang = this.localStorage.getItem(LANG_STATE);
    memoryLang ? this.changeLang(memoryLang) : this.changeLang("en");
  }

  private changeLang(lang: string) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
}
