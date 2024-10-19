import {
  effect,
  Injectable,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  collection,
  onSnapshot,
  Firestore,
  Unsubscribe,
} from '@angular/fire/firestore';
import { Item } from '../model/item';
import { AuthenticationService } from './authentication.service';
import { ItemWithMeta } from '../model/itemwithmeta';
@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private shoppingListId = 'LSE3gE8S7VLPGnL9NgRV';
  private unsubscribe: Unsubscribe | undefined;

  public items: WritableSignal<Item[] | undefined> = signal<Item[] | undefined>(
    undefined
  );

  public items2: WritableSignal<ItemWithMeta[] | undefined> = signal<ItemWithMeta[] | undefined>(
    undefined
  );

  constructor(
    private firestore: Firestore,
    private authService: AuthenticationService
  ) {
    effect(() => {
      const isLoggedIn = authService.isLoggedIn();
      if(isLoggedIn === true)
      {
        if(this.unsubscribe){
          this.unsubscribe();
        }
        this.init();
      }
    });
  }

  init() {
    const list = collection(
      this.firestore,
      `/shoppinglists/${this.shoppingListId}/items`
    );
    this.unsubscribe = onSnapshot(list, (change) => {
      const items: Item[] = [];
      change.forEach((doc) => {
        items.push(doc.data() as Item);
      });
      this.sortByName(items);
      this.items.set(items);

      const items2: ItemWithMeta[] = [];
      change.docChanges().forEach((nested) => {
        
        console.log(`nested.type ${nested.type}`);
        const item: ItemWithMeta = {
          changeType: nested.type,
          item: nested.doc.data() as Item
        }
        item.item.id = nested.doc.id;
        items2.push(item);
        
      });
      this.items2.set(items2);

    });
  }

  sortByName(items: Item[] ){
    items.sort((a: Item, b: Item) => {
      return (a.name ?? '').localeCompare(b.name ?? '');
    })
  }
}
