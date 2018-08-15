import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { UtilityService } from './_services/utility.service';
import { AuthGuard } from './auth.guard';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './layout/authentication/login/login.component';
import { RegisterComponent } from './layout/authentication/register/register.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './_services/api.interceptor';
import { JWTService } from './_services/jwt.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule.forRoot()
  ],
  providers: [
    UtilityService,
    JWTService,
    AuthGuard, {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
