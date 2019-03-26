import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import localeFrCa from '@angular/common/locales/fr-CA';
registerLocaleData(localeFrCa, 'fr-CA');

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, ProductComponent],
  imports: [BrowserModule],
  providers: [
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
