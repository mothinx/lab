import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter-container',
  templateUrl: './my-counter.component.html',
})
export class MyCounterContainerComponent {
  count$: Observable<number> = this.store.select('count');

  constructor(private store: Store<{ count: number }>) {
  }
  
  handleIncrement() {
    this.store.dispatch(increment());
  }

  handleDecrement() {
    this.store.dispatch(decrement());
  }

  handleReset() {
    this.store.dispatch(reset());
  }
}
