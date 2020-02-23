import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router, RouteReuseStrategy } from "@angular/router";
import { LoginService } from "src/app/core/services/login/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  get usernameControl() { return this.loginForm.controls['username']}
  get passwordControl() { return this.loginForm.controls['password']}

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private login: LoginService
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
      return;
    }

    this.loading = true;
    this.login.login(this.loginForm.value);
    this.router.navigateByUrl('');
  }
}
