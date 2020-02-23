import { Component, OnInit, ViewChild } from '@angular/core';
import { HamburgerMenuComponent } from '../hamburger-menu/hamburger-menu.component';
import {NavigationLink} from '../left-side-navigation/model/navigation-link.model'
@Component({
  selector: 'app-left-side-navigation',
  templateUrl: './left-side-navigation.component.html',
  styleUrls: ['./left-side-navigation.component.scss']
})
export class LeftSideNavigationComponent implements OnInit {
  @ViewChild(HamburgerMenuComponent) hamburgerMenuComponent: HamburgerMenuComponent;
  navigationLinks: NavigationLink[] = [];
  constructor() { }
  ngOnInit() {
    this.navigationLinks = NavigationLink.leftSideNavigationLinks();
  }
}
