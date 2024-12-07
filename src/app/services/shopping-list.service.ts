import {
  computed,
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
  doc,
  getDoc,
  setDoc,
} from '@angular/fire/firestore';
import { Item } from '../model/item';
import { AuthenticationService } from './authentication.service';
import { docChanges, DocumentChangeType } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private shoppingListId = 'LSE3gE8S7VLPGnL9NgRV';
  private unsubscribe: Unsubscribe | undefined;

  public items: WritableSignal<Item[] | undefined> = signal<Item[] | undefined>(
    undefined
  );

  public itemsSortedForListCreator = computed(() => {
    let items = this.items();
    if (items) {
      items = [...items];
      this.sortForListCreator(items);
    }
    return items;
  });

  public itemsSortedForShopper = computed(() => {
    let items = this.items();
    if (items) {
      items = items.filter((item) => item.onList);
      this.sortForShopper(items);
    }
    return items;
  });

  constructor(
    private firestore: Firestore,
    private authService: AuthenticationService
  ) {
    effect(() => {
      const isLoggedIn = authService.isLoggedIn();
      if (isLoggedIn === true) {
        if (this.unsubscribe) {
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
      /*
      const itmesFromStore = this.items() ?? [];
      change.docChanges().forEach((docChange) => {
        const changeType: DocumentChangeType = docChange.type;
        console.log(docChange.type)
        const item = docChange.doc.data() as Item;
        if(changeType == "added"){
          itmesFromStore.push(item);
        }        
        if(changeType == "modified")
        {
          const currentItem = itmesFromStore.find(x => x.id == item.id);
          if(currentItem) {
            currentItem.done = item.done;
          }
        }
      });
      this.items.set(itmesFromStore);*/

      const items: Item[] = [];
      change.forEach((doc) => {
        const item = doc.data() as Item;
        item.id = doc.id;
        items.push(item);
      });
      this.items.set(items);
    });
  }

  sortForListCreator(items: Item[]): Item[] {
    items.sort((a: Item, b: Item) => {
      // first sort for on list or not on list
      if (a.onList === b.onList) {
        return (a.name ?? '').localeCompare(b.name ?? '');
      }
      if (a.onList === true) {
        return -1;
      }
      return 1;
    });

    return items;
  }

  sortForShopper(items: Item[]): Item[] {
    items.sort((a: Item, b: Item) => {
      // first sort for on list or not on list
      if (a.done === b.done) {
        return (a.name ?? '').localeCompare(b.name ?? '');
      }
      if (a.done === true) {
        return 1;
      }
      return -1;
    });

    return items;
  }

  public async setItemOnList(id: string, isOnList: boolean) {
    await this.updateItem(id, (item: Item) => {
      item.onList = isOnList;
    });
  }

  public async setItemOnOnShoppingCar(id: string, isOnShoppingCar: boolean) {
    await this.updateItem(id, (item: Item) => {
      item.done = isOnShoppingCar;
    });
  }

  private async updateItem(id: string, fn: (item: Item) => void) {
    const itemDocRev = doc(
      this.firestore,
      `/shoppinglists/${this.shoppingListId}/items/${id}`
    );
    const itemDocSnap = await getDoc(itemDocRev);
    const item = itemDocSnap.data() as Item;
    fn(item);
    await setDoc(itemDocRev, item);
  }
}
