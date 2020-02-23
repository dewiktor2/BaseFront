import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { RouterActions } from './common/state/router/router.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'baseFront';
  visibleScroll = false;

  constructor(private translate: TranslateService, private store: Store) {
    this.store.dispatch(new RouterActions.ListenNavigationEvent());
  }

  ngOnInit() {
    this.setLang(this.translate);
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
