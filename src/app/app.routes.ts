import { Routes } from '@angular/router';
import { authGuard } from './services/authguard';

export const routes: Routes = [
  {
    path: 'item-collection',
    loadComponent: () =>
      import(
        './item-collection/item-collection-container/item-collection-container.component'
      ).then((mod) => mod.ItemCollectionContainerComponent),
    canActivate: [authGuard],
  },
  {
    path: 'items',
    loadComponent: () =>
      import(
        './item-collection/item-collection-container/item-collection-container.component'
      ).then((mod) => mod.ItemCollectionContainerComponent),
    canActivate: [authGuard],
  },
  {
    path: 'items-shopper',
    loadComponent: () =>
      import(
        './items-shopper/items-shopper-container/items-shopper-container.component'
      ).then((mod) => mod.ItemsShopperContainerComponent),
    canActivate: [authGuard],
  },
];
