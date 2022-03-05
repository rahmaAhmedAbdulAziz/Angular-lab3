import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
icon:string[]=[]
  constructor() { }
  
  ngOnInit(): void {
  }
addIteam(newvar:string){
  this.icon.push(newvar);
  console.log(this.icon)
}
}
