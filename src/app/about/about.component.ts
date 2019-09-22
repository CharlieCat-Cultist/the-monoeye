import { Component, OnInit, Renderer } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class AboutComponent implements OnInit {
    constructor( ) {}

    ngOnInit() {
    }

}
