import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { AUTH_KEY } from '@core/services/login/login.service';
import { AntdModalInvokerService } from '@core/services/modal/antd-modal-invoker.service';
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
    private translate: TranslateService,
    private modalService: AntdModalInvokerService
  ) { }

  ngOnInit() {
    if (!this.localStorage.getItem('theme')) {
      this.modalService.info(this.translate.instant('modal.loginInfo'),
        this.translate.instant('modal.noNeed'))
    }
  }

  afterLoginIn = (result: TokenAuth) => {
    this.localStorage.addItem(AUTH_KEY, JSON.stringify(result));
    this.router.navigateByUrl('');
  };

  loginIn(formData: any) {
    this.loginInProcess = true;
    this.localStorage.addItem(AUTH_KEY, JSON.stringify({ token: 'xd', refreshToken: 'haha' }));
    this.afterLoginIn({ refreshToken: 'haha', token: 'xd' });
  }
}
