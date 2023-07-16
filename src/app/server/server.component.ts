import {Component, inject} from '@angular/core';
import {MyServiceService} from "../service/my-service.service";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverId = 10;
    serverStatus = "offline";
    serverName ="";
    people = ['Alice', 'Bob'];
    // constructor(private myService:MyServiceService) {
    //
    // }
    // serviceData=this.myService.getData();
    private service:MyServiceService
    constructor() {
        this.service=inject(MyServiceService);
    }
    serviceData='';
    ngOnInit(){
        this.serviceData=this.service.getData();
    }

    getServerStatus() {
        return this.serverStatus;
    }

    onClick() {
        this.serverStatus = "online";
    }
    onUpdate(event:Event){
        this.serverName=(<HTMLInputElement>event.target).value;

    }
}
