import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelectionsService {
  selections = [
    {id: 1, name: 'chai', date: (new Date()).toDateString(), type: 'Mass Selection'},
    {id: 2, name: 'another selection', date: (new Date()).toDateString(), type: 'Benediction selection' }
  ];

  private apiUrl = 'http://localhost:3000/api';

  constructor(private _http: HttpClient) { }

  getSelections() {
    return this._http.get(`${this.apiUrl}/selections`) as Observable<String[]>;
  }

  getSelection(id) {
    return this._http.get(`${this.apiUrl}/selections/${id}`) as Observable<String[]>;
  }
}
