import { NgModule } from "@angular/core";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { MenuFoldOutline, MenuUnfoldOutline, DashOutline, DeleteFill } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule } from 'ng-zorro-antd/modal';
const icons: IconDefinition[] = [ MenuFoldOutline, MenuUnfoldOutline, DashOutline, DeleteFill ];
@NgModule({
  declarations: [],
  imports: [
    NzButtonModule
    , NzDividerModule
    , NzAvatarModule
    , NzIconModule
    , NzInputModule
    , NzCheckboxModule
    , NzModalModule
    , NzModalModule
  ],
  exports: [
    NzButtonModule
    , NzDividerModule
    , NzAvatarModule
    , NzIconModule
    , NzInputModule
    , NzCheckboxModule
    , NzModalModule
  ],
  providers: [{ provide: NZ_ICONS, useValue: icons }]
})
export class AntdBaseModule {}
