import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ToastMessage } from 'src/app/models/toast/message.interface';
import { MessageSeverity } from 'src/app/models/toast/message-severity.type';


@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toast$: Subject<ToastMessage> = new Subject<ToastMessage>();
  constructor(private translateService: TranslateService) { }

  async addMessage(header?: string, messageText?: string, messageType?: MessageSeverity) {
    const toastMessage: ToastMessage = {
      toastHeader: this.translateService.instant(header),
      toastText: messageText,
      toastType: messageType
    }
    this.toast$.next(toastMessage);
  }
}
