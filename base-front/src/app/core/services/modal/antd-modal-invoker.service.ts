import { Injectable } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: "root"
})
export class AntdModalInvokerService {

    get defaultOkTranslation() {
        return this.translate.instant('modal.yes');
    }
    get defaultCancelTranslation() {
        return this.translate.instant('modal.cancel');
    }

    constructor(private modal: NzModalService,
        private translate: TranslateService) { }

    showConfirm(nzTitle: string,
        nzContent: string,
        nzOnOk: () => Observable<any>,
        nzOkText: string = '',
        nzCancelText: string = ''): NzModalRef {
        nzOkText = nzOkText ? nzOkText : this.defaultOkTranslation;
        nzCancelText = nzCancelText ? nzCancelText : this.defaultCancelTranslation;
        return this.modal.confirm({
            nzTitle,
            nzContent,
            nzOnOk: nzOnOk,
            nzOkText,
            nzCancelText,
        });
    }

    info(nzTitle: string, nzContent: string): NzModalRef {
        return this.modal.info({
            nzTitle,
            nzContent,
            nzOkText: this.translate.instant('modal.close')
        });
    }
}