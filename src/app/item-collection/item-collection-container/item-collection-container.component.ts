import { Component, Signal } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Item } from '@angular/fire/analytics';
import { JsonPipe } from '@angular/common';
import { ItemCollectionDetailComponent } from '../item-collection-detail/item-collection-detail.component';

@Component({
    selector: 'app-item-collection-container',
    imports: [JsonPipe, ItemCollectionDetailComponent],
    templateUrl: './item-collection-container.component.html',
    styleUrl: './item-collection-container.component.scss'
})
export class ItemCollectionContainerComponent {

  public items: Signal<Item[] | undefined>;
  
  public constructor(private shoppingListService: ShoppingListService){
    this.items = shoppingListService.items;
  }

}
