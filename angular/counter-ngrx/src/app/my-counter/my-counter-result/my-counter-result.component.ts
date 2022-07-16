import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-counter-result',
  templateUrl: './my-counter-result.component.html',
  styleUrls: ['./my-counter-result.component.scss']
})
export class MyCounterResultComponent implements OnInit {
  @Input() count: Observable<number>; 

  constructor() { }

  ngOnInit(): void {
  }

}
