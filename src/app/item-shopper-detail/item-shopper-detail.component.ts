import {
  Component,
  effect,
  EventEmitter,
  input,
  InputSignal,
  model,
  Output,
} from '@angular/core';
import { Item } from '../model/item';
import { CartChangedEvent } from '../model/cart-changed-event';
import { SortIconPipe } from '../sort-icon.pipe';

@Component({
  selector: 'app-item-shopper-detail',
  imports: [SortIconPipe],
  templateUrl: './item-shopper-detail.component.html',
  styleUrl: './item-shopper-detail.component.scss',
})
export class ItemShopperDetailComponent {
  public item: InputSignal<Item> = input.required<Item>();
  @Output() public onCartChanged = new EventEmitter<CartChangedEvent>();
  onShoppingCart = model(false);

  constructor() {
    effect(() => {
      const item = this.item();
      this.onShoppingCart.set(item.done);
    });
  }

  toggle() {
    const isChecked = !this.onShoppingCart();
    this.onShoppingCart.set(isChecked);
    this.onCartChanged.emit({ id: this.item().id, onShoppingCart: isChecked });
  }
}
