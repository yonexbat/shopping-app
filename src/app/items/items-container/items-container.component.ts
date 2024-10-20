import { Component, effect, OnInit, Signal } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';
import { ItemsDetailComponent } from '../items-detail/items-detail.component';
import { Item } from '../../model/item';
import { JsonPipe } from '@angular/common';
import { UpdateItem } from '../../model/updateitem';

@Component({
  selector: 'app-items-container',
  standalone: true,
  imports: [ItemsDetailComponent, JsonPipe],
  templateUrl: './items-container.component.html',
  styleUrl: './items-container.component.scss',
})
export class ItemsContainerComponent {
  public items: Signal<Item[] | undefined>;

  public constructor(private shoppingListService: ShoppingListService) {
    this.items = shoppingListService.itemsSortedForListCreator;
  }

  public onListChanged(item: UpdateItem){
    this.shoppingListService.setItemOnList(item.id, item.onShoppingList);
  }

}
