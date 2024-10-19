import { Routes } from '@angular/router';
import { authGuard } from './services/authguard';
import { ItemCollectionContainerComponent } from './item-collection/item-collection-container/item-collection-container.component';
import { ItemsContainerComponent } from './items/items-container/items-container.component';

export const routes: Routes = [
  { path: 'item-collection', component: ItemCollectionContainerComponent, canActivate: [authGuard] },
  { path: 'items', component: ItemsContainerComponent, canActivate: [authGuard] },
];
