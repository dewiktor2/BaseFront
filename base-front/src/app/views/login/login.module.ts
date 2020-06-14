import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./container/login/login.component";
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AntdBaseModule } from '@app/shared/antd-modules/antd-base.module';
import { SharedModule } from '@app/shared/shared.module';
import { NzFormModule } from 'ng-zorro-antd/form';
@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [ CommonModule
    , SharedModule
    , AntdBaseModule
    , NzFormModule
    , ReactiveFormsModule
    , LoginRoutingModule]
})
export class LoginModule {}
