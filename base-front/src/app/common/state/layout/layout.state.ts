import { State, Selector, Action, StateContext } from "@ngxs/store";
import { LayoutActions } from './layout.actions';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '@core/services/local-storage/local-storage.service';

export class LayoutStateModel {
  collapsed: boolean;
  theme: string;
  constructor() {
    this.theme = 'dark';
    this.collapsed = true;
  }
}

@State<LayoutStateModel>({
  name: "layout",
  defaults: new LayoutStateModel()
})
@Injectable()
export class LayoutState {
  private static _localStorageService: LocalStorageService;
  constructor(private localStorageService: LocalStorageService) {
    LayoutState._localStorageService = localStorageService;
  }
  @Selector() static collapsed(state: LayoutStateModel) {
    return state.collapsed;
  }
  @Selector() static theme(state: LayoutStateModel) {
    return LayoutState._localStorageService.getItem('theme');
  }

  @Action(LayoutActions.CollapseMenu)
  collapseMenu({ patchState }: StateContext<LayoutStateModel>, { collapsed }: LayoutActions.CollapseMenu) {
    patchState({ collapsed });
  }

  @Action(LayoutActions.ChangeTheme)
  changeTheme(ctx: StateContext<LayoutStateModel>) {
    const state = ctx.getState();
    const theme = state.theme || LayoutState._localStorageService.getItem('theme');
    const themes: Record<string, string> = {
      'dark': 'light',
      'light': 'dark'
    };

    this.localStorageService.addItem('theme', themes[theme || 'dark']);
    ctx.patchState({ theme: themes[theme || 'dark'] });
  }
}
