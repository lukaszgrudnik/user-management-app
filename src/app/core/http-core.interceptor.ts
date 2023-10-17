import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest } from '@angular/common/http';
import { SpinnerService } from '../common/spinner/spinner.service';
import { finalize } from 'rxjs';

@Injectable()
export class HttpCoreInterceptor implements HttpCoreInterceptor {
  constructor(private spinnerService: SpinnerService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    this.spinnerService.display.next(true);
    return next
      .handle(req)
      .pipe(finalize(() => this.spinnerService.display.next(false)));
  }
}
