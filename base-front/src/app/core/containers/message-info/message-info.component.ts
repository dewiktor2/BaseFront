import { Component, Input, ViewEncapsulation } from "@angular/core";
import { ToastMessage } from "src/app/models/toast/message.interface";
import { NzMessageService } from "ng-zorro-antd/message";
import { MessageSeverity } from "src/app/models/toast/message-severity.type";

@Component({
  selector: "app-message-info",
  templateUrl: "./message-info.component.html",
  encapsulation: ViewEncapsulation.None
})
export class MessageInfoComponent {
  @Input() set toast(toast: ToastMessage) {
    this._toast = toast;
    this.displayToastMessage();
  }
  _toast: ToastMessage;

  get toastMessage() {
    return this._toast;
  }

  constructor(private message: NzMessageService) {}

  displayToastMessage() {
    const { toastText, toastType } = this.toastMessage;
    switch (toastType) {
      case MessageSeverity.SUCCESS:
        this.message.success(toastText);
        break;
      case MessageSeverity.INFO:
        this.message.info(toastText);
        break;
      case MessageSeverity.WARNING:
        this.message.warning(toastText);
        break;
      case MessageSeverity.ERROR:
        this.message.error(toastText);
        break;
    }
  }
}
