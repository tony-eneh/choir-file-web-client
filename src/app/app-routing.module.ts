import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SelectionsListComponent } from './selections-list/selections-list.component';
import { SelectionDetailsComponent } from './selection-details/selection-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChoirsListComponent } from './choirs-list/choirs-list.component';
import { ChoirsDetailsComponent } from './choirs-details/choirs-details.component';
import { SongListComponent } from './song-list/songs.component';
import { SongDetailsComponent } from './song-details/song-details.component';


const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'selections', component: SelectionsListComponent},
  {path: 'selections/:id', component: SelectionDetailsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'choirs', component: ChoirsListComponent},
  {path: 'choirs/:id', component: ChoirsDetailsComponent},
  {path: 'songs', component: SongListComponent},
  {path: 'songs/:id', component: SongDetailsComponent},
  {path: '', component: WelcomeComponent, pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
