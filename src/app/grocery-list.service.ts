import {Injectable} from '@angular/core';
import {GroceryItem} from "./grocery-item";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class GroceryListService {

  private _items : BehaviorSubject<Array<GroceryItem>> = new BehaviorSubject(new Array<GroceryItem>());
  public readonly items : Observable<Array<GroceryItem>> = this._items.asObservable();

  constructor() {
  }

  public addItem(item : GroceryItem) : void {
    let newItems = this._items.getValue();
    newItems.push(item);
    this._items.next(newItems);
  }
}
