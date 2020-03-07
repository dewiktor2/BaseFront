import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HamburgerMenuComponent } from './layout/components/hamburger-menu/hamburger-menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageComponent } from './containers/language/language.component';
import { LeftSideNavigationComponent } from './layout/container/left-side-navigation/left-side-navigation.component';
import { LeftNavigationComponent } from './layout/components/left-navigation/left-navigation.component';
import { SharedModule } from '../shared/shared.module';
import { MessageInfoComponent } from './containers/message-info/message-info.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
@NgModule({
  declarations: [
    LeftSideNavigationComponent
    , HamburgerMenuComponent
    , LanguageComponent
    , LeftNavigationComponent
    , MessageInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TranslateModule
    ,NzMessageModule
  ],
  exports: [  
    MessageInfoComponent,
    LeftSideNavigationComponent]
})
export class CoreModule { 
}
