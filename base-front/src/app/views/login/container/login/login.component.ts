import { Component, OnInit } from "@angular/core";
import { Router} from "@angular/router";
import { LoginService } from "src/app/core/services/login/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private login: LoginService
  ) {}

  ngOnInit() {
 
  }

  loginProcess(formData: any) {
    this.login.login(formData);
    this.router.navigateByUrl('');
  }
}
