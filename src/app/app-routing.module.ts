import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'zecommerce',
    pathMatch: 'full',
  },
  {
    path: 'zecommerce',
    loadChildren: './zecommerce/zecommerce.module#ZecommerceModule',
  },
  {
    path: 'admin',
    canActivate: [AuthenticationGuard],
    loadChildren: './admin/admin.module#AdminModule',
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
