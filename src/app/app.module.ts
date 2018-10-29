import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTreeModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarshowComponent } from './components/carshow/carshow.component';
import { onAppInit, EnvConfigurationService } from './services/env-configuration.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CarshowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTreeModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: onAppInit,
      multi: true,
      deps: [EnvConfigurationService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
