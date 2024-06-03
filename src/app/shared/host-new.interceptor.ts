import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HostNewInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const url = 'http://localhost:3001';
    const resource = request.url;
    if (request.url.includes('http'))
      return next.handle(request)
    console.log('hello')
    const urlsReq= request.clone({ url: `${url}/${resource}`})
    console.log('urlsReq:',urlsReq);
    return next.handle(urlsReq)
  }
}
