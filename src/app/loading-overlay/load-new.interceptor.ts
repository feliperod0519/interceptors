import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadService } from './load.service';

@Injectable()
export class LoadNewInterceptor implements HttpInterceptor {

  private loadService = inject(LoadService);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('hello i')
    console.log('x-loading', request.headers.get('X-LOADING'));
    if (request.headers.get('X-LOADING')==='false'){
      return next.handle(request);
    }
    this.loadService.showLoader();
    return next.handle(request).pipe(finalize(()=>this.loadService.hideLoader()));
  }
}
