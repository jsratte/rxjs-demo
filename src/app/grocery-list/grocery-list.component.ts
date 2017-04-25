import { Component } from '@angular/core';
import {GroceryListService} from "../grocery-list.service";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent {

  constructor(private _groceryListService : GroceryListService) { }

}
