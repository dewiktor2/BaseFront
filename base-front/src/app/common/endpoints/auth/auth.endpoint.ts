import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpFactory} from '../http-factory'

export class AuthUrls {
    static LOGIN_POST: string = 'api/login';
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private httpFactory: HttpFactory) {
    }
    login(payload: {login: string, password: string}): Observable<any> {
        return this.httpFactory.post(`${AuthUrls.LOGIN_POST}`, payload);
    }
}


