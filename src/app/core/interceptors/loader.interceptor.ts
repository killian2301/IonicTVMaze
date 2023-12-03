import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  activeLoaders = 0;
  constructor(public loaderService: LoaderService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.activeLoaders === 0) {
      this.loaderService.show();
    }
    this.activeLoaders++;
    return next.handle(req).pipe(finalize(() => this.stopLoader()));
  }

  stopLoader() {
    this.activeLoaders--;
    if (this.activeLoaders === 0) {
      this.loaderService.hide();
    }
  }
}
