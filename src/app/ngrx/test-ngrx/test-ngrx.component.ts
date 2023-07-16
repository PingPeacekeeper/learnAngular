import { Component } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { State } from "../../store";
import { CounterActions } from "../../store/actions/counter.actions";
import { async, Observable } from "rxjs";

@Component({
    selector: 'app-test-ngrx',
    templateUrl: './test-ngrx.component.html',
    styleUrls: ['./test-ngrx.component.css']
})
export class TestNgrxComponent {

    counter: Observable<{ count: number }>
    cnt = 0

    constructor(private store: Store<State>) {
        this.counter = this.store.pipe(select("counter"))
        this.store.pipe(select("counter")).subscribe(value => this.cnt = value.count)
    }

    onIncrement() {
        this.store.dispatch(CounterActions.increment())
    }

    onDecrement() {
        this.store.dispatch(CounterActions.decrement())
    }

    asyncInc() {
        this.store.dispatch(CounterActions.asyncIncr())
    }
}
