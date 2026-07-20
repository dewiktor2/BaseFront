import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LoginFormComponent implements OnInit {

  @Input() loginInProcess: boolean;
  loginForm: UntypedFormGroup;
  @Output() loginProcess = new EventEmitter<any>(); 
  get loginControl() { return this.loginForm.controls['login']}
  get passwordControl() { return this.loginForm.controls['password']}
  get isValid() { return this.loginForm.valid}

  constructor(private formBuilder: UntypedFormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      remember: false
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