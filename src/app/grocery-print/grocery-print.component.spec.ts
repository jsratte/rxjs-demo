import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryPrintComponent } from './grocery-print.component';

describe('GroceryPrintComponent', () => {
  let component: GroceryPrintComponent;
  let fixture: ComponentFixture<GroceryPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
