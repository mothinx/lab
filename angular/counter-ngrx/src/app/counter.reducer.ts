import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => {
        if(state <= 0) return initialState;
        return state - 1;
    }),
  on(reset, (state) => 0)
);