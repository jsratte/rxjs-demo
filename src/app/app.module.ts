import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {GroceryListComponent} from './grocery-list/grocery-list.component';
import {GroceryPrintComponent} from './grocery-print/grocery-print.component';
import {GroceryAddComponent} from './grocery-add/grocery-add.component';
import {GroceryListService} from "./grocery-list.service";

@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent,
    GroceryPrintComponent,
    GroceryAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GroceryListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
