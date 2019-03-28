import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZecommerceComponent } from './zecommerce.component';
import { HomeComponent } from './components/home/home.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BasketGuard } from './guards/basket.guard';

const routes: Routes = [
  {
    path: '',
    component: ZecommerceComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'basket', component: BasketComponent, canActivate: [BasketGuard] },
      { path: 'product/:id', component: ProductDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZecommerceRoutingModule {}
