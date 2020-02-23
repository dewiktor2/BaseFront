import { MessageSeverity } from "./message-severity.type";

export interface ToastMessage {
    toastHeader?: string;
    toastText?: string
    toastType: MessageSeverity;
}