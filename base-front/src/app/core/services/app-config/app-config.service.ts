import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, mergeMap } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { LoadMenuItems } from '@common/state/config/config.actions';
import { environment } from 'environments/environment';

@Injectable()
export class AppConfigService {
    constructor(private _httpClient: HttpClient,
        private store: Store) { }

    initAppConfig() {
        return this.loadMenuConfig();
    }

    loadMenuConfig() {
        return this._httpClient.get(`${environment.baseHref}/assets/menu.config.json`).pipe(
            mergeMap( (menuItems: any) => this.store.dispatch(new LoadMenuItems({menuItems})))
        )
    }
}