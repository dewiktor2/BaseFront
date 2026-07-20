import { Component, ViewChild, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Select, Store, Actions, ofActionSuccessful } from '@ngxs/store';
import { Observable, of, Subscription } from 'rxjs';
import { HeaderMenuComponent } from '../../components/header-menu/header-menu.component';
import { tap, delay, filter } from 'rxjs/operators';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { TranslateService } from '@ngx-translate/core';
import { AntdModalInvokerService } from '@core/services/modal/antd-modal-invoker.service';
import { LayoutState } from '@common/state/layout/layout.state';
import { LoginService } from '@core/services/login/login.service';
import { LayoutActions } from '@common/state/layout/layout.actions';
import { ConfigState } from '@common/state/config/config.state';
import { MenuItem } from '@core/services/app-config/models/menu-item.model';


@Component({
  selector: "app-left-side-navigation",
  templateUrl: "./left-side-navigation.component.html",
  styleUrls: ["./left-side-navigation.component.scss"]
})
export class LeftSideNavigationComponent implements OnInit, OnDestroy {

  @ViewChild(HeaderMenuComponent, { static: true }) headerMenuComponent: HeaderMenuComponent;
  @Select(LayoutState.collapsed) collapsed$: Observable<boolean>;
  @Select(LayoutState.theme) theme$: Observable<string>
  @Select(ConfigState.menuItems) menuItems$: Observable<MenuItem[]>;

  menuSubscription: Subscription;
  menuCollapseSubscription: Subscription;
  menuClass: string;
  toggleClass: string;
  menuIcon: string;

  get theme() {
    return this.store.selectSnapshot(LayoutState.theme);
  }

  get dividerColor() {
    return this.theme === 'dark' ? '#fed766' : '#1890ff';
  }

  get collapsed() {
    return this.store.selectSnapshot(LayoutState.collapsed);
  }

  constructor(
    private login: LoginService,
    private actions$: Actions,
    private translate: TranslateService,
    private store: Store,
    private router: Router,
    private antdModalService: AntdModalInvokerService
  ) { }

  ngOnInit() {
    this.changeMenuStyle();
    this.collapseActionListener();
  }

  ngOnDestroy() {
    this.menuSubscription && this.menuSubscription.unsubscribe();
    this.menuCollapseSubscription && this.menuCollapseSubscription.unsubscribe();
  }

  changeTheme() {
    this.store.dispatch(new LayoutActions.ChangeTheme());
  }

  logout() {
    this.menuCollapseSubscription = this.confirmLogout().afterClose.pipe(
      tap(console.log),
      filter(result => result),
      tap(() => {
        this.login.logout();
        this.router.navigateByUrl("/login");
      })
    ).subscribe();
  }

  private confirmLogout(): NzModalRef<any, any> {
    const translations: Record<string, string> = {
      'nzTitle': this.translate.instant('modal.logout.logoutConfirmation'),
      'nzContent': this.translate.instant('modal.operationConfirm'),
    }
    return this.antdModalService.showConfirm(
      translations['nzTitle'],
      translations['nzContent'],
      () => of(true)
    );
  }

  toggleCollapsed(): void {
    this.store.dispatch(new LayoutActions.CollapseMenu(!this.collapsed));
  }

  collapseActionListener() {
    this.menuSubscription = this.actions$.pipe(
      ofActionSuccessful(
        LayoutActions.CollapseMenu,
        LayoutActions.ChangeTheme
      ),
      delay(0),
      tap(this.changeMenuStyle)
    ).subscribe();
  }

  private changeMenuStyle = () => {
    this.changeMenuClass();
    this.changeToggleClass();
    this.changeMenuIcon();
  }

  private changeToggleClass() {
    this.toggleClass = this.collapsed
      ? 'fas fa-toggle-off'
      : 'fas fa-toggle-on';
  }

  private changeMenuIcon() {
    this.menuIcon = this.collapsed
      ? 'menu-unfold'
      : 'menu-fold'
  }

  private changeMenuClass() {
    this.menuClass = this.collapsed
      ? `left-side-collapsed ${this.theme}`
      : `left-side ${this.theme}`;
  }
}