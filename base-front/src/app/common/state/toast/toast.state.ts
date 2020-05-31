import { State, Selector, Action, StateContext } from "@ngxs/store";
import { ToastActions } from "./toast.actions";
import { ToastMessage } from '@app/models/toast/message.interface';

export class ToastStateModel {
  toast: ToastMessage;
  constructor() { }
}

@State<ToastStateModel>({
  name: "toast",
  defaults: new ToastStateModel()
})
export class ToastState {
  constructor() { }
  @Selector() static toast(state: ToastStateModel) {
    return state.toast;
  }

  @Action(ToastActions.AddMessage)
  addMessage({ patchState }: StateContext<ToastStateModel>, { toast }: ToastActions.AddMessage) {
    patchState({ toast });
  }

  @Action(ToastActions.CloseMessage)
  closeMessage({ patchState }: StateContext<ToastStateModel>) {
    patchState({ toast: undefined });
  }
}
