import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
 // template: `<p>This is my inline template HTML!</p>`,
 /*styles: [` 
  p { font-weight: bold; }
  div { color: gray; }  
  `]*/ 
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number = 0;

  btnText: string = 'Add an Item';

  goalText: string = 'My first life goal';

  goals = [];

  constructor() { }

  ngOnInit() {

  }
  
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

  removeItem(i) {
  	console.log(i);
    this.goals.splice(i, 1);
  }

}
