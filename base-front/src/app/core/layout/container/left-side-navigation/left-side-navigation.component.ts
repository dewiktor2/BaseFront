import { Component, OnInit, ViewChild } from '@angular/core';
import {NavigationLink} from '../../models/navigation-link.model'
import { HamburgerMenuComponent } from '../../components/hamburger-menu/hamburger-menu.component';
@Component({
  selector: 'app-left-side-navigation',
  templateUrl: './left-side-navigation.component.html',
  styleUrls: ['./left-side-navigation.component.scss']
})
export class LeftSideNavigationComponent implements OnInit {
  @ViewChild(HamburgerMenuComponent, { static: true }) hamburgerMenuComponent: HamburgerMenuComponent;
  navigationLinks: NavigationLink[] = [];
  constructor() { }
  ngOnInit() {
    this.navigationLinks = NavigationLink.leftSideNavigationLinks();
  }
}
