import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterLink, ActivatedRouteSnapshot } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SelectionsListComponent } from './selections-list/selections-list.component';
import { SelectionsService } from './selections.service';
import { SelectionDetailsComponent } from './selection-details/selection-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginAuthenticatorService } from './login-authenticator.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SelectionsListComponent,
    SelectionDetailsComponent,
    PageNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SelectionsService, LoginAuthenticatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
