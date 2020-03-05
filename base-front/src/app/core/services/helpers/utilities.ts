import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable()
export class Utilities {

    constructor(public translate: TranslateService) {
    }

    public static checkNoNetwork(response: Response) {
        if (response instanceof Response) {
            return response.status == 0;
        }

        return false;
    }

    public static checkAccessDenied(response: Response) {
        if (response instanceof Response) {
            return response.status == 403;
        }

        return false;
    }

    public static checkNotFound(response: Response) {
        if (response instanceof Response) {
            return response.status == 404;
        }

        return false;
    }
}
