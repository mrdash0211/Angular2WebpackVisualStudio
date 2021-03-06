import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http } from '@angular/http';
import { TestDataService } from '../services/testDataService';


@Component({
    selector: 'homecomponent',
    template: require('./home.component.html'),
    directives: [CORE_DIRECTIVES],
    providers: [TestDataService]
})

export class HomeComponent implements OnInit {

    public message: string;
    public values: any[];

    constructor(private _dataService: TestDataService) {
        this.message = "Hello from HomeComponent constructor";
    }

    ngOnInit() {
        this._dataService
            .GetAll()
            .subscribe(data => this.values = data,
            error => console.log(error),
            () => console.log('Get all complete'));
    }
}
