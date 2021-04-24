import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  groceries = [
    { id:1,item:'bread'},
    { id:2,item:'corn'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
