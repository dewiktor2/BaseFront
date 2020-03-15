import { State, Selector, Action, StateContext } from "@ngxs/store";
import { ToastActions } from "./toast.actions";
import { ToastMessage } from '@app/models/toast/message.interface';

export class ToastStateModel {
  toast: ToastMessage;
  constructor() {}
}

@State<ToastStateModel>({
  name: "toast",
  defaults: new ToastStateModel()
})
export class ToastState {
  constructor() {}
  @Selector() static toast(state: ToastStateModel) {
    return state.toast;
  }

  @Action(ToastActions.AddMessage)
  addMessage(ctx: StateContext<ToastStateModel>, action: ToastActions.AddMessage) {
    ctx.patchState({
      toast: action.message
    });
  }
  @Action(ToastActions.CloseMessage)
  closeMessage(ctx: StateContext<ToastStateModel>) {
    ctx.patchState({
      toast: undefined
    });
  }
}
