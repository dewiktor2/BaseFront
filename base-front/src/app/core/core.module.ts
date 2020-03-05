import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HamburgerMenuComponent } from './layout/components/hamburger-menu/hamburger-menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageComponent } from './containers/language/language.component';
import { ApplicationMessagesComponent } from './containers/application-messages/application-messages.component';
import { LeftSideNavigationComponent } from './layout/container/left-side-navigation/left-side-navigation.component';
import { LeftNavigationComponent } from './layout/components/left-navigation/left-navigation.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    LeftSideNavigationComponent
    , HamburgerMenuComponent
    , ApplicationMessagesComponent
    , LanguageComponent
    , ApplicationMessagesComponent, LeftNavigationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TranslateModule,
  ],
  exports: [  
    LeftSideNavigationComponent
    , ApplicationMessagesComponent]
})
export class CoreModule { 
}
