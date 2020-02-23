import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ToastMessage } from "src/app/models/toast/message.interface";
import { MessageSeverity } from "src/app/models/toast/message-severity.type";
import { Select, Store } from "@ngxs/store";
import { ToastState } from "../../../common/state/toast/toast.state";
import { ToastActions } from "../../../common/state/toast/toast.actions";

@Component({
  selector: "app-application-messages",
  templateUrl: "./application-messages.component.html",
  styleUrls: ["./application-messages.component.scss"]
})
export class ApplicationMessagesComponent implements OnInit {
  @Select(ToastState.toast) toast$: Observable<ToastMessage>;
  toastType = MessageSeverity;
  constructor(private store: Store) {}

  ngOnInit() {}

  closeToast() {
    this.store.dispatch(new ToastActions.CloseMessage());
  }
}
