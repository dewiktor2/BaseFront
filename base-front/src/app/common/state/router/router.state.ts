import { State, Selector, Action, StateContext } from '@ngxs/store';
import { RouterActions } from './router.actions';
import { Router, NavigationStart } from '@angular/router';
import { NgZone } from '@angular/core';
import { tap, filter } from 'rxjs/operators';
export class RouterStateModel {
    navigationUrl: string;
}

@State<RouterStateModel>({
    name: 'navigationRoute',
    defaults: new RouterStateModel()
})
export class RouterState {

    constructor(private router: Router,
        private ngZone: NgZone) { }

    @Selector() static navigationUrl(state: RouterStateModel) {
        return state.navigationUrl;
    }

    @Action(RouterActions.ListenNavigationEvent)
    listenNavigationEvent(ctx: StateContext<RouterStateModel>) {
        this.ngZone.runOutsideAngular(() => {
            this.router.events.pipe(
                filter(e => e instanceof NavigationStart),
                tap(({ url }: NavigationStart) => ctx.patchState({ navigationUrl: url }))
            ).subscribe();
        });
    }
}