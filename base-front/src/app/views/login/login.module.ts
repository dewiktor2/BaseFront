import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./container/login/login.component";
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [ CommonModule, SharedModule, ReactiveFormsModule, LoginRoutingModule]
})
export class LoginModule {}
