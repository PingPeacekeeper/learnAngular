import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-path-var',
    templateUrl: './path-var.component.html',
    styleUrls: ['./path-var.component.css']
})
export class PathVarComponent {
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params=> {
            console.log(params.get('id'))
            console.log(params.get('color'))
        })
    }

}
