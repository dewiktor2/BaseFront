import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input() loginInProcess: boolean;
  loginForm: FormGroup;
  @Output() loginProcess = new EventEmitter<any>();

  get loginControl() { return this.loginForm.controls['login']}
  get passwordControl() { return this.loginForm.controls['password']}
  get isValid() { return this.loginForm.valid}

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // stop here if form is invalid
    if (!this.isValid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.loginProcess.emit(this.loginForm.value);
  }
}