import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./container/login/login.component";
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AntdBaseModule } from '@app/shared/antd-modules/antd-base.module';
import { SharedModule } from '@app/shared/shared.module';
export const dwa = 'xd';
@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [ CommonModule
    , SharedModule
    , AntdBaseModule
    , ReactiveFormsModule
    , LoginRoutingModule]
})
export class LoginModule {}
