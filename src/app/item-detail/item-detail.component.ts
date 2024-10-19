import { Component, Input, model } from '@angular/core';
import { Item } from '../model/item';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss'
})
export class ItemDetailComponent {
  @Input()  item!: Item;  
  
  onShoppingList = model(false);
}
