import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { ZecommerceRoutingModule } from './zecommerce-routing.module';

import { ZecommerceComponent } from './zecommerce.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductComponent } from './components/product/product.component';
import { BasketComponent } from './components/basket/basket.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, CoreModule, ZecommerceRoutingModule],
  declarations: [
    ZecommerceComponent,
    MenuComponent,
    ProductComponent,
    BasketComponent,
    HomeComponent,
    ProductDetailComponent,
  ],
})
export class ZecommerceModule {}
