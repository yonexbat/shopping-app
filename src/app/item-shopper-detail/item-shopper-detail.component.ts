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

@Component({
  selector: 'app-item-shopper-detail',
  imports: [],
  templateUrl: './item-shopper-detail.component.html',
  styleUrl: './item-shopper-detail.component.scss',
})
export class ItemShopperDetailComponent {
  public item: InputSignal<Item> = input.required<Item>();
  @Output() public onCartChanged = new EventEmitter<CartChangedEvent>();
  onShoppingCar = model(false);

  constructor() {
    effect(() => {
      const item = this.item();
      this.onShoppingCar.set(item.done);
    });
  }

  onCartCheckedChange(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.onShoppingCar.set(isChecked);
    this.onCartChanged.emit({ id: this.item().id, onShoppingCart: isChecked });
  }
}
