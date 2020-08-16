import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./container/login/login.component";
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { SharedModule } from '@shared/shared.module';
@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [ CommonModule
    , SharedModule
    , NzFormModule
    , ReactiveFormsModule
    , LoginRoutingModule]
})
export class LoginModule {}
