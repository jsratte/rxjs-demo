import {Component, ViewChild} from '@angular/core';
import {GroceryListService} from "../grocery-list.service";
import {GroceryItem} from "../grocery-item";

@Component({
  selector: 'app-grocery-add',
  templateUrl: './grocery-add.component.html',
  styleUrls: ['./grocery-add.component.css']
})
export class GroceryAddComponent {

  @ViewChild('itemName') itemName;
  @ViewChild('itemQuantity') itemQuantity;

  constructor(private _groceryListService : GroceryListService) { }

  public handleForm() : void {

    let groceryItem = this.createGroceryItem();

    this.addGroceryItem(groceryItem);
    this.resetForm();
  }

  private addGroceryItem(item : GroceryItem) : void {
    this._groceryListService.addItem(item);
  }

  private createGroceryItem() : GroceryItem {
    let name : string = this.itemName.nativeElement.value;
    let quantity : number = this.itemQuantity.nativeElement.value;

    return new GroceryItem(name, quantity);
  }

  private resetForm() : void {
    this.itemName.nativeElement.value = "";
    this.itemQuantity.nativeElement.value = "0";
  }
}
