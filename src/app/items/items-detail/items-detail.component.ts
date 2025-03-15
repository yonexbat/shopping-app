import {
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { ItemDetailComponent } from '../../item-detail/item-detail.component';
import { Item } from '../../model/item';
import { ListChangedEvent } from '../../model/list-changed-event';
import { CartChangedEvent } from '../../model/cart-changed-event';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items-detail',
  imports: [ItemDetailComponent, FormsModule],
  templateUrl: './items-detail.component.html',
  styleUrl: './items-detail.component.scss',
})
export class ItemsDetailComponent {
  public items = input<Item[]>();
  @Output() public onListChanged = new EventEmitter<ListChangedEvent>();
  @Output() public onCartChanged = new EventEmitter<CartChangedEvent>();
  @Output() public filterChanged = new EventEmitter<string>();

  public selectItem(event: ListChangedEvent) {
    this.filter = '';
    this.onListChanged.emit(event);
  }

  public selectOnCart(event: CartChangedEvent) {
    this.onCartChanged.emit(event);
  }

  private _filter = '';
  public get filter() {
    return this._filter;
  }

  public set filter(value: string) {
    this._filter = value;
    this.filterChanged.emit(value);
  }
}
