import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export const LOGO_SRC = './assets/logo/logo.png';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() loginProcess = new EventEmitter<any>();
  submitted: boolean = false;
  loginForm: FormGroup;
  srcLogo = LOGO_SRC;
  get loginControl() { return this.loginForm.controls['login']}
  get passwordControl() { return this.loginForm.controls['password']}
  get isValid() { return this.loginForm.valid}
  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.submitted = false;
      return;
    }
    this.loginProcess.emit(this.loginForm.value);
    this.submitted = false;
  }
}