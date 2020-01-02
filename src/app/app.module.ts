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
import { DockerComponent } from './docker/docker.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SongListComponent } from './song-list/songs.component';
import { SongDetailsComponent } from './song-details/song-details.component';
import { ChoirsListComponent } from './choirs-list/choirs-list.component';
import { ChoirsDetailsComponent } from './choirs-details/choirs-details.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SelectionsListComponent,
    SelectionDetailsComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    DockerComponent,
    DashboardComponent,
    SongListComponent,
    SongDetailsComponent,
    ChoirsListComponent,
    ChoirsDetailsComponent,
    ProfileComponent
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
