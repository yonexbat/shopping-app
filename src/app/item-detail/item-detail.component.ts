import {
  Component,
  effect,
  EventEmitter,
  input,
  Input,
  InputSignal,
  model,
  Output,
} from '@angular/core';
import { Item } from '../model/item';
import { ListChangedEvent } from '../model/list-changed-event';
import { CartChangedEvent } from '../model/cart-changed-event';
import { SortIconPipe } from '../sort-icon.pipe';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss',
  imports: [SortIconPipe],
})
export class ItemDetailComponent {  

  @Output() public onListChanged = new EventEmitter<ListChangedEvent>();
  @Output() public onCartChanged = new EventEmitter<CartChangedEvent>();

  constructor() {}

  public item: InputSignal<Item> = input.required<Item>();

  toggle() {
    const isOnList = this.item().onList;
    this.onListChanged.emit({ id: this.item().id, onShoppingList: !!!isOnList });
  }
}
