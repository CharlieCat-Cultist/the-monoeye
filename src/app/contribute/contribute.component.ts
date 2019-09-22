import { Component, OnInit, Renderer } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-contribute',
    templateUrl: './contribute.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ContributeComponent implements OnInit {
    constructor() {}

    ngOnInit() {
    }

}
