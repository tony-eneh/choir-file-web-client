import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticatorService {

  constructor(private httpClient: HttpClient) { }

  //authenticates user. returns a boolean telling if the attempted login if from a valid user or not
  login(username: String, password: String):Observable<Boolean> {

    //TODO: when api implements /login route rewrite next two lines to
    //return this.httpClient.post(`${env.apiUrl}/login`, {username, password})
    this.httpClient.post(`${env.apiUrl}/login`, { username, password})
    return of(true);
  }
}
