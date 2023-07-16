import {EventEmitter, Injectable} from '@angular/core';
import {initializeAutocomplete} from "@angular/cli/src/utilities/completion";

@Injectable({
    providedIn: 'root'
})
export class MyServiceService {


    constructor() {
    }

    active = ['Jerry'];
    inactive = ['Tom'];

    makeInactive(id: number) {
        let name = this.active[id];
        console.log(name);
        this.inactive.push(this.active[id]);
        this.active.splice(id,1);
        console.log(this.inactive);
        console.log(this.active);
    }

    makeActive(id: number) {
        let name = this.inactive[id];
        console.log(name);
        this.active.push(name);
        this.inactive.splice(id,1);
        console.log(this.inactive);
        console.log(this.active);
    }

    getData() {
        return "some data"
    }

    trigger = new EventEmitter();


}
