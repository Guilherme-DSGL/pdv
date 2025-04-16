import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdvComponent } from './pdv.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PdvComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'client',
        loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
      },
      {
        path: 'sale',
        loadChildren: () => import('./sale/sale.module').then(m => m.SaleModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdvRoutingModule { }
