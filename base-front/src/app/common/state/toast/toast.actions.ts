import { ToastMessage } from '@app/models/toast/message.interface';


export namespace ToastActions {
    export class AddMessage {
        static readonly type = '[Toast] AddMessage'
        constructor(public message: ToastMessage) {
        }
    }
    export class CloseMessage {
        static readonly type = '[Toast] CloseMessage'
    }
}