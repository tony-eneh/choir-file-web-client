import {Component, Input, OnInit} from '@angular/core';
import { SelectionsService } from '../selections.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-selection-details',
    templateUrl: './selection-details.component.html',
    styleUrls: ['./selection-details.component.css']
})
export class SelectionDetailsComponent implements OnInit {
    selection = this.selectionsService.currentSelection;
    
    constructor(
        private selectionsService: SelectionsService,
        private router: Router,
        private route: ActivatedRouteSnapshot
        ) {}

    ngOnInit() {
        this.selection = this.selectionsService.getSelection(this.route.params.get('id'));
      }
}
