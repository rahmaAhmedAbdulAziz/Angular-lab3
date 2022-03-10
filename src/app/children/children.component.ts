import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  @Input() item:any;
@Output() removeVarEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  delete(value: string){
    this.removeVarEvent.emit(value);
  }
}
