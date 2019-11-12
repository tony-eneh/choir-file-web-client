import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectionsService {
  selections = [{id: 1, name: 'chai', date: Date.now(), type: 'Mass Selection'}, {id: 2, name: 'another selection', date: (Date.now() + 2), type: 'Benediction selection' }];

  constructor() { }

  getSelections() {
    return this.selections;
  }

  getSelection(id) {
    return this.selections.find((el) => el.id === id);
  }
}
