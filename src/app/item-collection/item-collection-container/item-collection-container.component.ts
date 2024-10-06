import { Component } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-item-collection-container',
  standalone: true,
  imports: [],
  templateUrl: './item-collection-container.component.html',
  styleUrl: './item-collection-container.component.scss'
})
export class ItemCollectionContainerComponent {
  public constructor(private shoppingListService: ShoppingListService){
    
  }

}
