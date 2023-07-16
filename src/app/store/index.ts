import { isDevMode } from '@angular/core';
import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import * as fromCounter from './reducers/counter.reducer';


// store中的接口类型
export interface State {
    [fromCounter.counterFeatureKey]: fromCounter.State;
}

// 状态state与reducer的对应关系
export const reducers: ActionReducerMap<State> = {

    [fromCounter.counterFeatureKey]: fromCounter.reducer,
};

function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state, action) {

        let result = reducer(state, action)
        console.log('new state', result)
        console.log('old state', state)
        console.log('action', action)
        return result
    }
}

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [
    logger
] : [];
