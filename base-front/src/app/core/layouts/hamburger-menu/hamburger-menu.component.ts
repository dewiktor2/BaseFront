import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { RouterEventService } from '../../services/router/router-event.service';
@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {
  toggle = false;
  constructor(private routerEventService: RouterEventService) { }

  ngOnInit() {
    this.changeToggleEvent();
    this.onNavigationStartEvent();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.changeToggleEvent();
  }

  onToggleChange() {
    this.toggle = !this.toggle;
  }

  onNavigationStartEvent() {
    this.routerEventService.$navigationStart.subscribe(res => {
      if (this.toggle && window.innerWidth <= 600) {
        this.toggle = false;
      }
    })
  }

  changeToggleEvent() {
    if (window.innerWidth > 600) {
      this.toggle = true;
      return;
    }
    this.toggle = false;
  }
}
