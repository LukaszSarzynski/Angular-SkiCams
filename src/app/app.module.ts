import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './helper-modules/material-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './http/auth-interceptor';
import { PageRoutingModule } from './helper-modules/page-routing.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SkicamsComponent } from './pages/skicams/skicams.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    SkicamsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PageRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
