import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageSeverity } from 'src/app/models/toast/message-severity.type';
import { Store } from '@ngxs/store';
import { ToastActions } from '../../../common/state/toast/toast.actions';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  languages: string[] = ['en','pl']
  currentLang: string;
  constructor(private translate: TranslateService
    , private store: Store) { 
  }

  ngOnInit() {
    this.currentLang = this.translate.currentLang;
  }

  languageSelection(lang: string) {
    this.changeLang(lang);
    this.notify();
  }

  private changeLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  private notify() {
    this.store.dispatch(new ToastActions.AddMessage({
      toastType: MessageSeverity.SUCCESS,
      toastHeader: '',
      toastText: this.translate.instant('Language.Changed')
    }));
  }
}
