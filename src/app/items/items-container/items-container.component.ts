import { Component, effect, OnInit, Signal } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';
import { ItemsDetailComponent } from '../items-detail/items-detail.component';
import { Item } from '../../model/item';
import { JsonPipe } from '@angular/common';
import { ListChangedEvent } from '../../model/list-changed-event';
import { CartChangedEvent } from '../../model/cart-changed-event';

@Component({
    selector: 'app-items-container',
    imports: [ItemsDetailComponent],
    templateUrl: './items-container.component.html',
    styleUrl: './items-container.component.scss'
})
export class ItemsContainerComponent {
  public items: Signal<Item[] | undefined>;

  public constructor(private shoppingListService: ShoppingListService) {
    this.items = shoppingListService.itemsSortedForListCreator;
  }

  public onListChanged(item: ListChangedEvent){
    this.shoppingListService.setItemOnList(item.id, item.onShoppingList);
  }

  public onShoppingCartChanged(item: CartChangedEvent){
    this.shoppingListService.setItemOnOnShoppingCar(item.id, item.onShoppingCart);
  }

  public onFilterChanged(filter: string)
  {
    this.shoppingListService.creatorFilter.set(filter);
  }

}
