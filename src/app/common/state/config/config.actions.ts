import { MenuItem } from '@core/services/app-config/models/menu-item.model';

export class LoadMenuItems {
    static readonly type = '[Config] LoadMenuItems]';
    constructor(public payload: { menuItems: MenuItem[] }) {

    }
}