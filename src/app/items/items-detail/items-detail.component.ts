import { Component, EventEmitter, input, Output } from '@angular/core';
import { ItemDetailComponent } from '../../item-detail/item-detail.component';
import { JsonPipe } from '@angular/common';
import { Item } from '../../model/item';
import { UpdateItem } from '../../model/updateitem';

@Component({
  selector: 'app-items-detail',
  standalone: true,
  imports: [ItemDetailComponent, JsonPipe],
  templateUrl: './items-detail.component.html',
  styleUrl: './items-detail.component.scss'
})
export class ItemsDetailComponent {
  public items = input<Item[]>();    
  @Output() public onListChanged = new EventEmitter<UpdateItem>();

  public selectItem(event: UpdateItem){
    this.onListChanged.emit(event);
  }
}