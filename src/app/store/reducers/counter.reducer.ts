import { createReducer, on } from '@ngrx/store';
import { CounterActions } from "../actions/counter.actions";
import { state } from "@angular/animations";
//状态名称
export const counterFeatureKey = 'counter';

// 状态类型接口
export interface State {
    count: number,
}

// 初始状态
export const initialState: State = {
    count: 0,
};

// 创建 reducer 函数
export const reducer = createReducer(
    initialState,
    on(CounterActions.increment,
        state => ({
            ...state,
            count: state.count + 1
        })),
    on(CounterActions.decrement,
        state => ({
            ...state,
            count: state.count - 1
        })),
);

