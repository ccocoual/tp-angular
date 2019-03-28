import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NotFoundComponent],
  exports: [RouterModule],
})
export class CoreModule {}
