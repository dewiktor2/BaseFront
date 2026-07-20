import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Injectable } from '@angular/core';
import { MenuItem } from '@core/services/app-config/models/menu-item.model';
import { LoadMenuItems } from './config.actions';

export class StateModel {
  menuItems: MenuItem[];
  constructor() {
    this.menuItems = [];
  }
}

@State<StateModel>({
  name: "config",
  defaults: new StateModel()
})
@Injectable()
export class ConfigState {
  constructor() {}

  @Selector() static menuItems({menuItems}: StateModel) {
    return menuItems;
  }
 
  @Action(LoadMenuItems)
  collapseMenu({ patchState }: StateContext<StateModel>, { payload: { menuItems } }: LoadMenuItems) {
    patchState({ menuItems });
  }
}
