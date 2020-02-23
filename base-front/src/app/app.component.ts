import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { RouterEventService } from './core/services/router/router-event.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'recruiter-front';
  visibleScroll = false;

  constructor(private translate: TranslateService, private router: Router
    , private routerEventService: RouterEventService) {
  }

  ngOnInit() {
    this.setLang(this.translate);
    this.routerEventService.routerNavigationStartEvent(this.router);
  }

  scrollToTop() {
    window.scroll(0,0);
  }

  @HostListener("window:scroll", [])
    onWindowScroll() {
        if (window.scrollY > 50) {
            this.visibleScroll = true;
        } else {
          this.visibleScroll = false;
        }
  }

  private setLang(translate: TranslateService) {
    let memoryLang = localStorage.getItem('lang');
    if (memoryLang) {
      translate.setDefaultLang(memoryLang);
      translate.use(memoryLang);
    }
    else {
      translate.setDefaultLang('en');
      translate.use('en');
    }
  }
}
