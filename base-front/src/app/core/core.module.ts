import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HamburgerMenuComponent } from './layout/components/hamburger-menu/hamburger-menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageComponent } from './containers/language/language.component';
import { ApplicationMessagesComponent } from './containers/application-messages/application-messages.component';
import { LeftSideNavigationComponent } from './layout/container/left-side-navigation/left-side-navigation.component';
@NgModule({
  declarations: [
    LeftSideNavigationComponent
    , HamburgerMenuComponent
    , ApplicationMessagesComponent
    , LanguageComponent
    , ApplicationMessagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [  
    LeftSideNavigationComponent
    , ApplicationMessagesComponent]
})
export class CoreModule { 
}
