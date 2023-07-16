import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CounterActions } from "../actions/counter.actions";
import { map, mergeMap, timer } from "rxjs";


@Injectable()
export class CounterEffects {

    constructor(private actions$: Actions) {
    }

    async_incr_effect = createEffect(() => {
        return this.actions$.pipe(// 所有的action都会触发的数据流，action$为observable对象
            ofType(CounterActions.asyncIncr),   // 筛选需要处理的数据流
            mergeMap(() =>
                // 对于当前的action，触发一个延迟事件，最终返回需要操作的incr操作
                timer(2000).pipe(map(() => CounterActions.increment()))
            )
        )
    })
}
