import { Component, EventEmitter, input, Output } from '@angular/core';
import { Item } from '../../model/item';
import { CartChangedEvent } from '../../model/cart-changed-event';
import { ItemShopperDetailComponent } from '../../item-shopper-detail/item-shopper-detail.component';

@Component({
  selector: 'app-items-shopper-detail',
  standalone: true,
  imports: [ItemShopperDetailComponent],
  templateUrl: './items-shopper-detail.component.html',
  styleUrl: './items-shopper-detail.component.scss'
})
export class ItemsShopperDetailComponent {
  public items = input<Item[]>();  
  @Output() public onCartChanged = new EventEmitter<CartChangedEvent>();

  onCartCheckedChange(event: CartChangedEvent) {
    this.onCartChanged.emit(event);
  }

}
