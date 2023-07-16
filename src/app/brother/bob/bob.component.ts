import {Component} from '@angular/core';
import {MyServiceService} from "../../service/my-service.service";

@Component({
    selector: 'app-bob',
    templateUrl: './bob.component.html',
    styleUrls: ['./bob.component.css']
})

export class BobComponent {
    inactive=[""]

    constructor(private service: MyServiceService) {

    }
    ngOnInit(){
        this.inactive=this.service.inactive
    }
    makeActive(id:number){
        this.service.makeActive(id);
    }


}
