import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
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
        return `${environment.api}/${url}`;
    }
}