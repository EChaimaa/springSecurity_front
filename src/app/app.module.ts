import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { RegisterModule } from './modules/register/register.module';
import { AuthenticationService } from './services/authentication.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    HttpClientModule,
  ],
  providers: [   
    ErrorInterceptorService, InterceptorService, AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
