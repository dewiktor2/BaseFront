import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSideNavigationComponent } from './layouts/left-side-navigation/left-side-navigation.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { HamburgerMenuComponent } from './layouts/hamburger-menu/hamburger-menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { ToastMessagesComponent } from './components/toast-messages/toast-messages.component';
import { LanguagesComponent } from './components/languages/languages.component';

@NgModule({
  declarations: [LeftSideNavigationComponent, MainLayoutComponent, HamburgerMenuComponent, LanguagesComponent, ToastMessagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
  exports: [LeftSideNavigationComponent, MainLayoutComponent, ToastMessagesComponent]
})
export class CoreModule { 
}
