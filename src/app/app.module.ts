import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterLink, ActivatedRouteSnapshot } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SelectionsListComponent } from './selections-list/selections-list.component';
import { SelectionsService } from './selections.service';
import { SelectionDetailsComponent } from './selection-details/selection-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SelectionsListComponent,
    SelectionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SelectionsService, ActivatedRouteSnapshot],
  bootstrap: [AppComponent]
})
export class AppModule { }
