import { Component, input } from '@angular/core';
import { Item } from '@angular/fire/analytics';

@Component({
  selector: 'app-item-collection-detail',
  standalone: true,
  imports: [],
  templateUrl: './item-collection-detail.component.html',
  styleUrl: './item-collection-detail.component.scss'
})
export class ItemCollectionDetailComponent {
  public items = input<Item[]>();    
}
