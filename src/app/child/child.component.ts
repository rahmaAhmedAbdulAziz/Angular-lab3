import { Component,Output, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() newvarEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  addNewvar(value: string) {
    this.newvarEvent.emit(value);
  }
}
