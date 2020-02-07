import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private sApiKeyName = 'X-Mashape-Key';
  private sApiKeyValue = '8784b47d1dmshd2b1f3365c3f811p129e67jsn80e7fd89998a';

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({
      headers: req.headers.set(
        this.sApiKeyName,
        this.sApiKeyValue
      )
    });

    return next.handle(authReq);
  }
}
