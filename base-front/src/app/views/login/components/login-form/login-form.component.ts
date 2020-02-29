import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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
  get usernameControl() { return this.loginForm.controls['username']}
  get passwordControl() { return this.loginForm.controls['password']}
  get isValid() { return this.loginForm.valid}
  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.submitted = false;
      return;
    }
    this.loginProcess.emit(this.loginForm.value);
    this.submitted = false;
  }
}