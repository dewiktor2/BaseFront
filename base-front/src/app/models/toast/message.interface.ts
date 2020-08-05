import { MessageSeverity } from "./message-severity.type";
import { TemplateRef } from '@angular/core';

export interface ToastMessage {
    toastHeader?: string;
    toastText: string | TemplateRef<void>
    toastType: MessageSeverity;
}