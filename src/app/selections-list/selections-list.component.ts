import {Component} from '@angular/core';
import { SelectionsService } from '../selections.service';

@Component({
    selector: 'app-selections-list',
    templateUrl: './selections-list.component.html',
    styleUrls: ['./selections-list.component.css']
})
export class SelectionsListComponent {
    constructor(private selectionsService: SelectionsService){
      this.selectionsService.getSelections().subscribe((selections: String[])=>{this.selections = selections});
    }

    selections: String[];
}
