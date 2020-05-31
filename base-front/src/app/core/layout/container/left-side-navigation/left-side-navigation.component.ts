import { Component, ViewChild, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Select, Store, Actions, ofActionCompleted, ofActionSuccessful } from '@ngxs/store';
import { Observable } from 'rxjs';
import { HeaderMenuComponent } from '../../components/header-menu/header-menu.component';
import { LayoutState } from '@app/common/state/layout/layout.state';
import { LoginService } from '@app/core/services/login/login.service';
import { LayoutActions } from '@app/common/state/layout/layout.actions';
import { tap, delay } from 'rxjs/operators';

@Component({
  selector: "app-left-side-navigation",
  templateUrl: "./left-side-navigation.component.html",
  styleUrls: ["./left-side-navigation.component.scss"]
})
export class LeftSideNavigationComponent implements OnInit {

  @ViewChild(HeaderMenuComponent, { static: true }) headerMenuComponent: HeaderMenuComponent;
  @Select(LayoutState.collapsed) collapsed$: Observable<boolean>;
  @Select(LayoutState.theme) theme$: Observable<string>

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
    private store: Store,
    private router: Router
  ) { }

  ngOnInit() {
    this.changeMenuStyle();
    this.collapseActionListener();
  }

  changeTheme() {
    this.store.dispatch(new LayoutActions.ChangeTheme());
  }

  toggleCollapsed(): void {
    this.store.dispatch(new LayoutActions.CollapseMenu(!this.collapsed));
  }

  logout() {
    this.login.logout();
    this.router.navigateByUrl("/login");
  }

  collapseActionListener() {
    this.actions$.pipe(
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