import { State, Selector, Action, StateContext } from '@ngxs/store';
import { ToastMessage } from 'src/app/models/toast/message.interface';
import { ToastActions } from './toast.actions';

export class ToastStateModel {
    toast: ToastMessage;
    constructor() {
    }
}

@State<ToastStateModel>({
    name: 'toast',
    defaults: new ToastStateModel()
})
export class ToastState {

    @Selector() static toast(state: ToastStateModel) {
        return state.toast;
    }

    @Action(ToastActions.AddMessage)
    addMessage(ctx: StateContext<ToastStateModel>, action: ToastActions.AddMessage) {
        ctx.patchState( {
            toast: action.message
        });
    }
    @Action(ToastActions.CloseMessage)
    closeMessage(ctx: StateContext<ToastStateModel>) {
        ctx.patchState( {
            toast: undefined
        });
    }
}