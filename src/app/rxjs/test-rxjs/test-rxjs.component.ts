import { Component, OnInit } from '@angular/core';
import {
    BehaviorSubject, from, fromEvent,
    interval,
    map,
    Observable,
    range,
    ReplaySubject,
    Subject,
    take,
    takeUntil,
    timer
} from "rxjs";

@Component({
    selector: 'app-test-rxjs',
    templateUrl: './test-rxjs.component.html',
    styleUrls: ['./test-rxjs.component.css']
})
export class TestRxjsComponent implements OnInit {

    ngOnInit(): void {
        const box = <HTMLElement>document.getElementById("box")
        // fromEvent<MouseEvent>(box, "mousedown")
        //     .pipe(map(event => ({
        //         xCord: event.clientX - event.target.offsetLeft,
        //         yCord: event.clientY - event.target.offsetTop
        //     })))
        //     .subscribe(console.log)
        // // .subscribe(event => console.log(event.clientX))

    }


}
