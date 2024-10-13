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
@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private shoppingListId = 'LSE3gE8S7VLPGnL9NgRV';
  private unsubscribe: Unsubscribe | undefined;

  public items: WritableSignal<Item[] | undefined> = signal<Item[] | undefined>(
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
    });
  }

  sortByName(items: Item[] ){
    items.sort((a: Item, b: Item) => {
      return (a.name ?? '').localeCompare(b.name ?? '');
    })
  }
}
