import { Component, OnInit, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Store } from "@ngxs/store";
import { ToastActions } from "../../../common/state/toast/toast.actions";
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { LANG_STATE } from '@app/app.component';
import { MessageSeverity } from '@app/models/toast/message-severity.type';

interface LanguageModel {
  text: string;
  src: string;
}

@Component({
  selector: "app-language",
  templateUrl: "./language.component.html",
  styleUrls: ["./language.component.scss"]
})
export class LanguageComponent implements OnInit {
  @Input() theme: string;
  languages: LanguageModel[] = [];
  currentLang: string;

  get languageColor() {
    return this.theme === 'dark'
      ? { 'background-color': 'white', 'color': '#001529' }
      : { 'background-color': '#1890ff' }
  }

  constructor(private translate: TranslateService
    , private localStorage: LocalStorageService
    , private store: Store) {
  }

  ngOnInit() {
    this.setupLanguage();
  }

  setupLanguage() {
    this.currentLang = this.translate.currentLang;
    this.languages = [
      { text: 'en', src: './assets/icons/flags/usa.png' },
      { text: 'pl', src: './assets/icons/flags/poland.png' }
    ]
  }

  languageSelection(lang: LanguageModel) {
    this.changeLang(lang.text);
    this.notify();
  }

  private changeLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    this.localStorage.addItem(LANG_STATE, lang);
  }

  private notify() {
    this.store.dispatch(
      new ToastActions.AddMessage({
        toastType: MessageSeverity.SUCCESS,
        toastHeader: "",
        toastText: this.translate.instant("language.changed")
      })
    );
  }
}
