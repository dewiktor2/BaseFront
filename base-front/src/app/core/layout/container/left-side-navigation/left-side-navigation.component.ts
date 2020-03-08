import { Component, ViewChild, AfterViewInit, ViewEncapsulation} from "@angular/core";
import { LoginService } from "src/app/core/services/login/login.service";
import { Router } from "@angular/router";
import { Select, Store } from '@ngxs/store';
import { LayoutState } from 'src/app/common/state/layout/layout.state';
import { Observable } from 'rxjs';
import { LayoutActions } from 'src/app/common/state/layout/layout.actions';
import { HeaderMenuComponent } from '../../components/header-menu/header-menu.component';

@Component({
  selector: "app-left-side-navigation",
  templateUrl: "./left-side-navigation.component.html",
  styleUrls: ["./left-side-navigation.component.scss"]
})
export class LeftSideNavigationComponent  {
  @ViewChild(HeaderMenuComponent, { static: true })
  headerMenuComponent: HeaderMenuComponent;
  @Select(LayoutState.collapsed) collapsed$: Observable<boolean>;
  @Select(LayoutState.theme) theme$: Observable<string>

  get collapsed() {
    return this.store.selectSnapshot(LayoutState.collapsed);
  }
  get menuStyles() {
    const theme = this.store.selectSnapshot(LayoutState.theme);
    return this.collapsed ? `left-side-collapsed ${theme}`  : `left-side ${theme}`;
  }
  get toggleClass() {
    return this.collapsed ? 'fas fa-toggle-off' : 'fas fa-toggle-on';
  }
  get dividerColor() {
    const theme = this.store.selectSnapshot(LayoutState.theme);
    return theme === 'dark' ? '#fed766' : '#1890ff';
  }
  get themeMode() {
    return 'fas fa-moon';
  }

  constructor(
    private login: LoginService,
    private store: Store,
    private router: Router
  ) {}

  logout() {
    this.login.logout();
    this.router.navigateByUrl("/login");
  }

  changeTheme() {
    this.store.dispatch(new LayoutActions.ChangeTheme());
  }

  toggleCollapsed(): void {
    this.store.dispatch(new LayoutActions.CollapseMenu(!this.collapsed));
  }
}
