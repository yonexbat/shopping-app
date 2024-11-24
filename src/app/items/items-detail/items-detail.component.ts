import { Component, EventEmitter, input, Output } from '@angular/core';
import { ItemDetailComponent } from '../../item-detail/item-detail.component';
import { Item } from '../../model/item';
import { ListChangedEvent } from '../../model/list-changed-event';
import { CartChangedEvent } from '../../model/cart-changed-event';

@Component({
    selector: 'app-items-detail',
    imports: [ItemDetailComponent],
    templateUrl: './items-detail.component.html',
    styleUrl: './items-detail.component.scss'
})
export class ItemsDetailComponent {
  public items = input<Item[]>();    
  @Output() public onListChanged = new EventEmitter<ListChangedEvent>();
  @Output() public onCartChanged = new EventEmitter<CartChangedEvent>();

  public selectItem(event: ListChangedEvent){
    this.onListChanged.emit(event);
  }

  public selectOnCart(event: CartChangedEvent){
    this.onCartChanged.emit(event);
  }
}