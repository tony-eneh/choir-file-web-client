import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionsService {
  selections = [{id: 1, name: 'chai'}, {id: 2, name: 'another selection'}];
  currentSelection;
  
  constructor() { }

  getSelections() {
    return this.selections;
  }

  getSelection(id) {
    return this.selections.find((el) => el.id === id);
  }
}
