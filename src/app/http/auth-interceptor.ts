import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private sApiKeyName = 'X-Mashape-Key';
  private sApiKeyValue = '0b8c31dd3a4c1e74b0764d5b510fd5eaac00426c';

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
