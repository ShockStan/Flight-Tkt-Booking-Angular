import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../service/loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class SpinloaderInterceptor implements HttpInterceptor {

  constructor(private loader: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.show();
    return next.handle(request).pipe(
      finalize(() => {
        setTimeout(()=>{this.loader.hide()},3000)
        
      })
    );
  }
}
