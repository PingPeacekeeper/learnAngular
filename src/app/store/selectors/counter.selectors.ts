import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State as counterState,counterFeatureKey } from "../reducers/counter.reducer";
import { State } from "../index";


export const selectCounter = createFeatureSelector<State,counterState>(counterFeatureKey)
export const selectCount=createSelector(selectCounter,state=>state.count)
