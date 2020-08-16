import { State, Selector, Action, StateContext } from "@ngxs/store";
import { ToastActions } from "./toast.actions";
import { Injectable } from '@angular/core';
import { ToastMessage } from '@models/toast/message.interface';

export class ToastStateModel {
  toast: ToastMessage;
  constructor() { }
}

@State<ToastStateModel>({
  name: "toast",
  defaults: new ToastStateModel()
})
@Injectable()
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
