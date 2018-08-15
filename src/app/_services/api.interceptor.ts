import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { JWTService } from './jwt.service';
@Injectable()
export class APIInterceptor implements HttpInterceptor {
    constructor(private jwt: JWTService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.jwt.getToken('token');
        request = request.clone({
            setHeaders: {
                Authorization: `JWT ${token}`
            }
        });
        console.log('intercepted');
        return next.handle(request);
    }
}
