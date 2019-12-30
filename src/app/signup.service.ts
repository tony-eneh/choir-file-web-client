import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signup(newUser): Observable<any> {
      //return subscription from api registration request
      console.log(newUser);
      return this.http.post(`${env.apiUrl}/users`, newUser);
  }
}
