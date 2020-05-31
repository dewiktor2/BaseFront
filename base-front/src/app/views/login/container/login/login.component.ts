import { Component, OnInit } from "@angular/core";
import { tap, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LocalStorageService } from '@app/core/services/local-storage/local-storage.service';
import { LoginService, AUTH_KEY } from '@app/core/services/login/login.service';

interface TokenAuth {
  token: string;
  refreshToken: string;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  loginInProcess = false;

  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private login: LoginService
  ) { }

  ngOnInit() {

  }

  afterLoginIn = (result: TokenAuth) => {
    this.localStorage.addItem(AUTH_KEY, JSON.stringify(result));
    this.router.navigateByUrl('');
  };

  loginIn(formData: any) {
    this.loginInProcess = true;
    this.localStorage.addItem(AUTH_KEY, JSON.stringify({token: 'xd', refreshToken: 'haha'}));
    this.afterLoginIn({token: 'xd', refreshToken: 'haha'})
    // this.login.login(formData).pipe(
    //   tap(this.afterLoginIn),
    //   finalize(() => this.loginInProcess = false)
    // ).subscribe();
  }
}
