import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { registerLocaleData, APP_BASE_HREF } from '@angular/common';

import localeFrCa from '@angular/common/locales/fr-CA';
registerLocaleData(localeFrCa, 'fr-CA');

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { SortPipe } from './pipes/sort.pipe';

import { BasketGuard } from './guards/basket.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'basket', component: BasketComponent, canActivate: [BasketGuard] },
];

@NgModule({
  declarations: [AppComponent, MenuComponent, ProductComponent, HomeComponent, BasketComponent, SortPipe],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    {
      provide: 'appTitle',
      useValue: 'Bienvenue sur Zenika E-Commerce',
    },
    {
      provide: LOCALE_ID,
      useValue: 'fr-CA',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
