import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterEventService {
  $navigationStart: Subject<string> = new Subject<string>();
  constructor() { }

  routerNavigationStartEvent(router: Router): any {
    router.events.subscribe(e => {
        if(e instanceof NavigationStart) {
          this.$navigationStart.next(e.url);
        }
      });
  }
}
