import { Component, OnInit, Renderer } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-omachy',
    templateUrl: './omachy.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class OmachyComponent implements OnInit {
    constructor( ) {}

    ngOnInit() {
    }

}
