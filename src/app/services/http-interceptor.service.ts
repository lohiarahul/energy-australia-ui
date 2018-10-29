import { Injectable } from '@angular/core';
import { HttpRequest, HttpEvent, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvConfigurationService } from './env-configuration.service';
import { Config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  config: Config;
  constructor(private envconfigService: EnvConfigurationService) {
    if (!this.config) { this.config = this.envconfigService.config; }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Point base URL to FI if user landed up on hapra verification
    const baseUrl = this.config.apiServer + this.config.versionNumber;

    const fullReq = req.clone({ url: baseUrl.concat(req.url) });

    // Pass on the cloned request instead of the original request.
    return next.handle(fullReq);
  }
}

