import { Action, StateContext, State, Selector} from "@ngxs/store";
import { LayoutActions } from "./layout.actions";

export class LayoutStateModel {
  compressed: boolean;
  constructor() {
    this.compressed = false;
  }
}

@State<LayoutStateModel>({
  name: "layout",
  defaults: new LayoutStateModel()
})
export class LayoutState {
  constructor() {}

  @Selector() static compressed(state: LayoutStateModel) {
    return state.compressed;
  }

  @Action(LayoutActions.CompressNavigation)
  compressNavigation(ctx: StateContext<LayoutStateModel>) {
    const state = ctx.getState();
    ctx.patchState({
      compressed: !state.compressed
    });
  }
}
