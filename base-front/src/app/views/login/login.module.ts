import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./container/login/login.component";
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AntdBaseModule } from 'src/app/shared/antd-modules/antd-base.module';
@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [ CommonModule
    , SharedModule
    , AntdBaseModule
    , ReactiveFormsModule
    , LoginRoutingModule]
})
export class LoginModule {}
