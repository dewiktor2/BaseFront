import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class HttpFactory {
    constructor(private httpClient: HttpClient) {
    }

    get(url: string, params?: any){    
        return this.httpClient.get(this.generateUrl(url), params);
    }

    post(url: string, body: any, params?: any): Observable<any> {
        return this.httpClient.post(this.generateUrl(url), body, params);
    }

    private generateUrl(url: string) {
        return `${environment.baseHref}/${url}`;
    }
}