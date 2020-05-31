import { State, Selector, Action, StateContext } from "@ngxs/store";
import { LayoutActions } from './layout.actions';

export class LayoutStateModel {
  collapsed: boolean;
  theme: string;
  constructor() {
    this.collapsed = true;
    this.theme = 'dark';
  }
}

@State<LayoutStateModel>({
  name: "layout",
  defaults: new LayoutStateModel()
})
export class LayoutState {
  constructor() { }
  @Selector() static collapsed(state: LayoutStateModel) {
    return state.collapsed;
  }
  @Selector() static theme(state: LayoutStateModel) {
    return state.theme;
  }

  @Action(LayoutActions.CollapseMenu)
  collapseMenu({ patchState }: StateContext<LayoutStateModel>, {collapsed}: LayoutActions.CollapseMenu) {
    patchState({ collapsed });
  }

  @Action(LayoutActions.ChangeTheme)
  changeTheme(ctx: StateContext<LayoutStateModel>) {
    const state = ctx.getState();
    ctx.patchState({ theme: state.theme === 'dark' ? 'light' : 'dark' });
  }
}
