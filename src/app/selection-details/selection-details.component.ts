import {Component, Input, OnInit} from '@angular/core';
import { SelectionsService } from '../selections.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-selection-details',
    templateUrl: './selection-details.component.html',
    styleUrls: ['./selection-details.component.css'],
})
export class SelectionDetailsComponent implements OnInit {
    public selection = {};

    constructor(
        private selectionsService: SelectionsService,
        private router: Router,
        private route: ActivatedRoute
        ) {}

    ngOnInit() {
        this.selectionsService.getSelection(this.route.snapshot.paramMap.get('id'))
        .subscribe((selection: Object)=>{this.selection = selection});
      }
}
