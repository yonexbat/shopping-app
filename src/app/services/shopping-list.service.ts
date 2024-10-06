import {
  effect,
  Injectable,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  collection,
  onSnapshot,
  collectionData,
  Firestore,
} from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { Item } from '../model/item';
import { snapshotChanges } from '@angular/fire/compat/database';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private shoppingListId = 'LSE3gE8S7VLPGnL9NgRV';

  public items: WritableSignal<Item[] | undefined> = signal<Item[] | undefined>(
    undefined
  );

  constructor(
    private firestore: Firestore,
    private authService: AuthenticationService
  ) {
    effect(() => {
      const isLoggedIn = authService.isLoggedIn();
      debugger;
      if(isLoggedIn === true && this.items() === undefined)
      {
        this.init();
      }
    });
  }

  init() {
    const list = collection(
      this.firestore,
      `/shoppinglists/${this.shoppingListId}/items`
    );
    onSnapshot(list, (change) => {
      const items: Item[] = [];
      change.forEach((doc) => {
        items.push(doc.data() as Item);
      });
      this.items.set(items);
    });
  }
}
