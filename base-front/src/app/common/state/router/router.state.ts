import { State, Selector, Action, StateContext } from '@ngxs/store';
import { RouterActions } from './router.actions';
import { Router, NavigationStart } from '@angular/router';
export class RouterStateModel {
    navigationUrl: string;
}

@State<RouterStateModel>({
    name: 'navigationRoute',
    defaults: new RouterStateModel()
})
export class RouterState {

    constructor(private router: Router) {}

    @Selector() static navigationUrl(state: RouterStateModel) {
        return state.navigationUrl;
    }

    @Action(RouterActions.ListenNavigationEvent)
    listenNavigationEvent(ctx: StateContext<RouterStateModel>) {
        this.router.events.subscribe(e => {
            if(e instanceof NavigationStart) {
               ctx.patchState( {
                   navigationUrl: e.url
               });
            }
        });
    }
}