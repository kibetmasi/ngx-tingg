import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  totalRequests: number = 0

  constructor(
    private loadingService: LoaderService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.totalRequests++
    this.loadingService.setLoading(true)

    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--
        if (this.totalRequests === 0) {
          // plz work
          this.loadingService.setLoading(false)
        }
      })
    )
  }
}