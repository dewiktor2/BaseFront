import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { UsersRolesRoutingModule } from './users-roles-routing.module';
import { UsersRolesComponent } from './users-roles.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '@app/shared/shared.module';
import { AntdBaseModule } from '@app/shared/antd-modules/antd-base.module';
@NgModule({
  declarations: [UsersRolesComponent],
  imports: [ CommonModule
    , SharedModule
    , NzListModule
    , NzBadgeModule
    , NzTableModule
    , NzDropDownModule
    , NzCollapseModule
    , NzAvatarModule
    , NzToolTipModule
    , AntdBaseModule
    , UsersRolesRoutingModule]
})
export class UsersRolesModule {}