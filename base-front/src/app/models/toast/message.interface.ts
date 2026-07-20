import { TemplateRef } from '@angular/core';
import { MessageSeverity } from './message-severity.type';

export interface ToastMessage {
    toastHeader?: string;
    toastText: string | TemplateRef<void>
    toastType: MessageSeverity;
}