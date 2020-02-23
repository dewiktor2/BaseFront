import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ToastMessage } from '../../../models/toast/message.interface';
import { MessageSeverity } from '../../../models/toast/message-severity.type';
import { ToastService } from 'src/app/core/services/toast/toast.service';

@Component({
  selector: 'app-toast-messages',
  templateUrl: './toast-messages.component.html',
  styleUrls: ['./toast-messages.component.scss']
})
export class ToastMessagesComponent implements OnInit, OnDestroy {
  toastVisible  = false;
  toastMessageSubscription: Subscription;
  timerSubscription: Subscription;
  toast: ToastMessage;
  toastType = MessageSeverity;
  constructor(private toastService: ToastService) { }

  ngOnInit() {
    this.startToastSubscription();
  }

  ngOnDestroy() {
    if(this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  startToastSubscription() {
    this.toastMessageSubscription = this.toastService.toast$
      .subscribe( (toast: ToastMessage) => {
        this.showToast(toast);
    });
  }
  
  showToast(toast: ToastMessage) {
    this.toast = toast;
    this.toastVisible = true;
    this.timerSubscription = timer(1500).subscribe( () => {
      this.toastVisible = false;
    });
  }
}
