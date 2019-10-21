import {Component, Input} from '@angular/core';
import { SelectionsService } from '../selections.service';

@Component({
    selector: 'app-selections-details',
    templateUrl: './selections-details.component.html',
    styleUrls: ['./selections-details.component.css']
})
export class SelectionsListComponent {
    constructor(private selectionsService: SelectionsService) {}

    selection = this.selectionsService.currentSelection;
}
