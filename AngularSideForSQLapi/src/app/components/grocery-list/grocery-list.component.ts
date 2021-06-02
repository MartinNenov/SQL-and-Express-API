import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Grocery } from 'src/app/models/Grocery';
import { GroceryListCrudService } from 'src/app/services/grocery-list-crud.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  groceries$: Observable<Grocery[]> | undefined

  constructor(private groceryListCrudService: GroceryListCrudService) { }

  ngOnInit(): void {
    this.groceries$ = this.fetchAll()
  }

  fetchAll(): Observable<Grocery[]> {
    return this.groceryListCrudService.fetchAll();
  }

  post(item: string): void {
    if (!item) { return; }
    item = item.trim();
    let grocery: Partial<Grocery> = { item };

    this.groceries$ = this.groceryListCrudService.post(grocery).pipe(
      tap((_) => {
        this.groceries$ = this.fetchAll()
      })
    );
  }

  update(id:number,newItem:string):void{
    if (!newItem) { return; }
    newItem = newItem.trim();
    let updatedGrocery:Grocery = {item:newItem,id};
    this.groceries$ = this.groceryListCrudService.update(updatedGrocery).pipe(
      tap((_) => {
        this.groceries$ = this.fetchAll()
      })
    );
  }

  delete(id:number):void{
    this.groceries$ = this.groceryListCrudService.delete(id).pipe(
      tap((_) => {
        this.groceries$ = this.fetchAll()
      })
    );
  }

}
