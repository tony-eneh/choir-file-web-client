import {Component} from '@angular/core';
import { SelectionsService } from '../selections.service';

@Component({
    selector: 'app-selections-list',
    templateUrl: './selections-list.component.html',
    styleUrls: ['./selections-list.component.css']
})
export class SelectionsListComponent {
    constructor(private selectionsService: SelectionsService){}

    selections = this.selectionsService.getSelections();

    viewSelection(id){
        this.selectionsService.currentSelection = this.selectionsService.getSelection(id);
        console.log`${this.selectionsService.currentSelection}`;
    }
}
