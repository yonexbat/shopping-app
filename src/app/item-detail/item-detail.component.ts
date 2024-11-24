import { Component, effect, EventEmitter, Input, model, Output } from '@angular/core';
import { Item } from '../model/item';
import { JsonPipe } from '@angular/common';
import { update } from '@angular/fire/database';
import { UpdateItem } from '../model/updateitem';

@Component({
    selector: 'app-item-detail',
    imports: [JsonPipe],
    templateUrl: './item-detail.component.html',
    styleUrl: './item-detail.component.scss'
})
export class ItemDetailComponent {
  
  private _item!: Item;
  onShoppingList = model(false);
  
  @Output() public onListChanged = new EventEmitter<UpdateItem>();

  constructor() {  }
  
  @Input()  set item(item: Item){    
    this._item = item;
    this.onShoppingList.set(item.onList);
  }

  get item(): Item | undefined {
    return this._item;
  }  

  onCheckedChange(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.onShoppingList.set(isChecked);
    this.onListChanged.emit({id: this.item!.id, onShoppingList: isChecked});
  }
}
