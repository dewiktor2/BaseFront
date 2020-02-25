import { State, Selector, Action, StateContext, Store } from "@ngxs/store";
import { ToastMessage } from "src/app/models/toast/message.interface";
import { ToastActions } from "./toast.actions";
import { timer } from "rxjs";
import { tap } from "rxjs/operators";

export class ToastStateModel {
  toast: ToastMessage;
  constructor() {}
}

@State<ToastStateModel>({
  name: "toast",
  defaults: new ToastStateModel()
})
export class ToastState {
  constructor(private store: Store) {}
  @Selector() static toast(state: ToastStateModel) {
    return state.toast;
  }

  @Action(ToastActions.AddMessage)
  addMessage(ctx: StateContext<ToastStateModel>, action: ToastActions.AddMessage) {
    ctx.patchState({
      toast: action.message
    });
    this.automaticToastClose();
  }
  @Action(ToastActions.CloseMessage)
  closeMessage(ctx: StateContext<ToastStateModel>) {
    ctx.patchState({
      toast: undefined
    });
  }

  private automaticToastClose() {
    timer(2000).pipe(
        tap(() => this.store.dispatch(new ToastActions.CloseMessage()))
    ).subscribe();
  }
}
