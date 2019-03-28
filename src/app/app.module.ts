import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData, APP_BASE_HREF } from '@angular/common';

import localeFrCa from '@angular/common/locales/fr-CA';
registerLocaleData(localeFrCa, 'fr-CA');

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CoreModule, AppRoutingModule],
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
