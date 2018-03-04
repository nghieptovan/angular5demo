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

  constructor() { }

  ngOnInit() {
  }

}
