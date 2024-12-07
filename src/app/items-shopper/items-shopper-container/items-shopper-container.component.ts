import { Component, Signal } from '@angular/core';
import { ItemsShopperDetailComponent } from '../items-shopper-detail/items-shopper-detail.component';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Item } from '../../model/item';
import { CartChangedEvent } from '../../model/cart-changed-event';

@Component({
  selector: 'app-items-shopper-container',
  standalone: true,
  imports: [ItemsShopperDetailComponent],
  templateUrl: './items-shopper-container.component.html',
  styleUrl: './items-shopper-container.component.scss'
})
export class ItemsShopperContainerComponent {
  public items: Signal<Item[] | undefined>;
  
  public constructor(private shoppingListService: ShoppingListService) {
    this.items = shoppingListService.itemsSortedForShopper;
  }

  onCartChanged(event: CartChangedEvent){
    this.shoppingListService.setItemOnOnShoppingCar(event.id, event.onShoppingCart);
  }
}
