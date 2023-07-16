import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-query-param',
    templateUrl: './query-param.component.html',
    styleUrls: ['./query-param.component.css']
})
export class QueryParamComponent implements OnInit {

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.queryParamMap.subscribe(query => {
            console.log(query.get('name') + " " + query.get('age'))
        })
    }
}
