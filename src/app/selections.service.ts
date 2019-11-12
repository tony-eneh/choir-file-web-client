import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectionsService {
  selections = [
    {id: 1, name: 'chai', date: (new Date()).toDateString(), type: 'Mass Selection'},
    {id: 2, name: 'another selection', date: (new Date()).toDateString(), type: 'Benediction selection' }
  ];

  constructor() { }

  getSelections() {
    return this.selections;
  }

  getSelection(id) {
    return this.selections.find((el) => el.id === id);
  }
}
