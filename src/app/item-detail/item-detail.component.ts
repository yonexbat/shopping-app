import { Component, effect, EventEmitter, Input, model, Output } from '@angular/core';
import { Item } from '../model/item';
import { JsonPipe } from '@angular/common';
import { update } from '@angular/fire/database';
import { ListChangedEvent } from '../model/list-changed-event';
import { CartChangedEvent } from '../model/cart-changed-event';

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.component.html',
    styleUrl: './item-detail.component.scss'
})
export class ItemDetailComponent {
  
  private _item!: Item;
  onShoppingList = model(false);
  onShoppingCar = model(false);
  
  @Output() public onListChanged = new EventEmitter<ListChangedEvent>();
  @Output() public onCartChanged = new EventEmitter<CartChangedEvent>();

  constructor() {  }
  
  @Input()  set item(item: Item){    
    this._item = item;
    this.onShoppingList.set(item.onList);
    this.onShoppingCar.set(item.done);
  }

  get item(): Item | undefined {
    return this._item;
  }  

  onCheckedChange(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.onShoppingList.set(isChecked);
    this.onListChanged.emit({id: this.item!.id, onShoppingList: isChecked});
  }

  onCartCheckedChange(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.onShoppingCar.set(isChecked);
    this.onCartChanged.emit({id: this.item!.id, onShoppingCart: isChecked});
  }
}
