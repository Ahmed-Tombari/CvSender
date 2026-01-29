import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        let message = 'Network error';
        if (err.error?.message) message = err.error.message;
        else if (err.status >= 500) message = 'Server error. Try again later.';
        else if (err.status === 0) message = 'No network. Check your connection.';
        else if (err.status >= 400) message = err.statusText || 'Request failed.';
        const payload = { message, original: err };
        return throwError(() => payload);
      })
    );
  }
}
