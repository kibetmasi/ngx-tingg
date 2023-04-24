import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TINGG_CONFIGS } from '../../tingg.configs';

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {

  constructor(
    @Inject(TINGG_CONFIGS) private token:any
  ){}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'apikey': this.token.apikey
      }
    });
  return next.handle(request)
  }
}