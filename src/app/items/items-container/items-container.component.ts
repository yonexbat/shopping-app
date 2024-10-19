import { Component, effect, OnInit, Signal } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';
import { ItemsDetailComponent } from '../items-detail/items-detail.component';
import { Item } from '../../model/item';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemWithMeta } from '../../model/itemwithmeta';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-items-container',
  standalone: true,
  imports: [ItemsDetailComponent, JsonPipe],
  templateUrl: './items-container.component.html',
  styleUrl: './items-container.component.scss',
})
export class ItemsContainerComponent {
  public items: Signal<Item[] | undefined>;
  public items2: Signal<ItemWithMeta[] | undefined>;
  public form: FormGroup;

  public constructor(private shoppingListService: ShoppingListService, private fb: FormBuilder) {
    this.items = shoppingListService.items;
    this.items2 = shoppingListService.items2;
    this.form = this.fb.group({items: this.fb.array([])});
    effect(() => {
      const items = this.items2(); // run this effect when items change
      this.patchForm(items ?? []);
    });

  }

  private patchForm(items: ItemWithMeta[]){
    console.log('update form');    
    const modifiedItems = items.filter(x => x.changeType === 'modified');
    const addedItems = items.filter(x => x.changeType === 'added');
    const deletedItems = items.filter(x => x.changeType === 'removed');

    const fa = this.form.get('items') as FormArray;
    
    // patch
    const modifiedItems2 = modifiedItems.map(x => x.item);
    modifiedItems2.forEach(m => {
      const contol = this.findById(m.id);
      contol?.patchValue(m);
    });

    // add
    addedItems.forEach(item => {
      const subform = this.fb.group({
        id: [item.item.id],
        name: [item.item.name],
        onlist: [item.item.onList],
        sort: [item.item.sort]
      });
      fa.push(subform);
    });    
    
  }

  findById(id: string): AbstractControl | undefined {
    const fa = this.form.get('items') as FormArray;
    const res =  fa.controls.find(x => x.get('id')?.value === id);
    return res;
  }

}
