import { Routes } from '@angular/router';
import { authGuard } from './services/authguard';
import { ItemCollectionContainerComponent } from './item-collection/item-collection-container/item-collection-container.component';

export const routes: Routes = [
  { path: 'item-collection', component: ItemCollectionContainerComponent, canActivate: [authGuard] },
];
