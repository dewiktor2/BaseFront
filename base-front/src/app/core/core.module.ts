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
import { HeaderMenuComponent } from './layout/components/header-menu/header-menu.component';
import { AntdBaseModule } from '../shared/antd-modules/antd-base.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { PageHeaderTitleComponent } from './layout/container/page-header-title/page-header-title.component';
@NgModule({
  declarations: [
    LeftSideNavigationComponent
    , LanguageComponent
    , LeftNavigationComponent
    , MessageInfoComponent
    , HeaderMenuComponent, PageHeaderTitleComponent
  ],
  imports: [
    CommonModule
    , RouterModule
    , TranslateModule
    , NzMessageModule
    , NzBreadCrumbModule
    , NzDropDownModule
    , NzMenuModule
    , AntdBaseModule
    , NzPageHeaderModule
  ],
  exports: [  
    PageHeaderTitleComponent
  , MessageInfoComponent
  , LeftSideNavigationComponent
  , NzBreadCrumbModule
  , NzMenuModule
  , NzMessageModule]
})
export class CoreModule { 
}
