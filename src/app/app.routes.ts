import { Routes } from '@angular/router';
import { authGuard } from './services/authguard';
import { ItemCollectionContainerComponent } from './item-collection/item-collection-container/item-collection-container.component';
import { ItemsContainerComponent } from './items/items-container/items-container.component';
import { ItemCollectionShopperContainerComponent } from './item-collection-shopper/item-collection-shopper-container/item-collection-shopper-container.component';

export const routes: Routes = [
  { path: 'item-collection', component: ItemCollectionContainerComponent, canActivate: [authGuard] },
  { path: 'items', component: ItemsContainerComponent, canActivate: [authGuard] },
  { path: 'items-shop', component: ItemCollectionShopperContainerComponent, canActivate: [authGuard] }
];
