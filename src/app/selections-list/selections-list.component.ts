import {Component} from '@angular/core';
import { SelectionsService } from '../selections.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-selections-list',
    templateUrl: './selections-list.component.html',
    styleUrls: ['./selections-list.component.css']
})
export class SelectionsListComponent {
    constructor(private selectionsService: SelectionsService, private router: Router){
      this.selectionsService.getSelections().subscribe((selections: String[])=>{this.selections = selections});
    }

    selections: String[];

    viewSelection(id){
        this.router.navigate(['selections', id]);
    }
}
