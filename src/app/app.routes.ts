import { Routes } from '@angular/router';
import { ItemCollectionComponent } from './item-collection/item-collection.component';
import { authGuard } from './services/authguard';

export const routes: Routes = [
  { path: 'item-collection', component: ItemCollectionComponent, canActivate: [authGuard] },
];
