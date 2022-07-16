import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-counter-actions',
  templateUrl: './my-counter-actions.component.html',
  styleUrls: ['./my-counter-actions.component.scss']
})
export class MyCounterActionsComponent implements OnInit {
  @Output() emitIncrement =  new EventEmitter();
  @Output() emitDecrement =  new EventEmitter();
  @Output() emitReset =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.emitIncrement.emit();
  }

  decrement() {
    this.emitDecrement.emit();
  } 

  reset() {
    this.emitReset.emit();
  }

}
