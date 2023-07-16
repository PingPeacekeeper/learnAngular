import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler)
        : Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            retry(2),
            catchError((error)=>throwError(error))
        )
    }
}
