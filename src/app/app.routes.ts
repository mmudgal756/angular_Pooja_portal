import { Routes } from '@angular/router';
import { PoojaComponent } from './pooja/puja';
import { SamagriOrderComponent } from './samagri-order/samagri-order';

export const routes: Routes = [
  {
    path: '',
    component: PoojaComponent,
  },
  {
    path: 'samagri-order',
    component: SamagriOrderComponent,
  },
];
