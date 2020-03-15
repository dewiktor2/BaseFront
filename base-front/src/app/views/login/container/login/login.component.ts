import { Component, OnInit } from "@angular/core";
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LocalStorageService } from '@app/core/services/local-storage/local-storage.service';
import { LoginService, AUTH_KEY } from '@app/core/services/login/login.service';

export interface TokenAuth {
  token: string;
  refreshToken: string;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private login: LoginService
  ) { }

  ngOnInit() {

  }

  loginProcess(formData: any) {
    this.login.login(formData).pipe(
      tap((result: TokenAuth) => this.loginSucced(result))
    ).subscribe();
  }

  private loginSucced(result: TokenAuth) {
    this.localStorage.addItem(AUTH_KEY, JSON.stringify(result));
    this.router.navigateByUrl('');
  }
}
