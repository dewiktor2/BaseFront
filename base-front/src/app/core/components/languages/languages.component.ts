import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from '../../services/toast/toast.service';
import { MessageSeverity } from 'src/app/models/toast/message-severity.type';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  currentLang: string;
  constructor(
       private translateService: TranslateService, private toastService: ToastService) { }

  ngOnInit() {
    this.currentLang = this.translateService.currentLang;
  }

  changLang(lang: string) {
    this.currentLang = lang;
    this.translateService.use(lang);
    localStorage.setItem('lang',lang);
    this.toastService.addMessage('Language.Changed', '', MessageSeverity.SUCCESS);
  }
}
