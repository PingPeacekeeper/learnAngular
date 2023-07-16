import {Component} from '@angular/core';
import {MyServiceService} from "../../service/my-service.service";

@Component({
    selector: 'app-alice',
    templateUrl: './alice.component.html',
    styleUrls: ['./alice.component.css']
})
export class AliceComponent {
    active=[''];

    constructor(private service: MyServiceService) {
    }

    ngOnInit() {
        this.active=this.service.active;
    }
    makeInactive(id:number){
        this.service.makeInactive(id);
    }

}
