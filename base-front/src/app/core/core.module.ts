import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageComponent } from './containers/language/language.component';
import { LeftSideNavigationComponent } from './layout/container/left-side-navigation/left-side-navigation.component';
import { LeftNavigationComponent } from './layout/components/left-navigation/left-navigation.component';
import { MessageInfoComponent } from './containers/message-info/message-info.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { HeaderMenuComponent } from './layout/components/header-menu/header-menu.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [
    LeftSideNavigationComponent
    , LanguageComponent
    , LeftNavigationComponent
    , MessageInfoComponent
    , HeaderMenuComponent
  ],
  imports: [
    CommonModule
    , RouterModule
    , TranslateModule
    , NzMessageModule
    , NzBreadCrumbModule
    , NzDividerModule
    , NzMenuModule
    , NzButtonModule
    , NzIconModule
    , NzSwitchModule
    , NzDropDownModule
  ],
  exports: [  
    MessageInfoComponent
  , LeftSideNavigationComponent
  , NzBreadCrumbModule
  , NzMenuModule
  , NzButtonModule
  , NzIconModule
  , NzSwitchModule
  , NzDropDownModule
  , NzDividerModule]
})
export class CoreModule { 
}
