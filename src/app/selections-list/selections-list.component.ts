import {Component} from '@angular/core';

@Component({
    selector: 'app-selections-list',
    templateUrl: './selections-list.component.html',
    styleUrls: ['./selections-list.component.css']
})
export class SelectionsListComponent {
    selections = [{name: 'chai'}, {name: 'another selection'}];
}
