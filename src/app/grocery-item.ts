export class GroceryItem {

  private _name : string = "";
  private _quantity : number = 0;

  constructor(name : string, quantity : number) {
    this._name = name;
    this._quantity = quantity;
  }

  public get name() : string {
    return this._name;
  }

  public get quantity() : number {
    return this._quantity;
  }
}
