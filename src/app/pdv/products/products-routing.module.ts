import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { PdvComponent } from '../pdv.component';
import { AuthGuard } from 'src/app/guard/auth.guard';


export const routes: Routes = [
  {path: 'pdv/products',  canActivate:[AuthGuard], component: PdvComponent, children: [
    { path: 'form', component: ProductsFormComponent },
    { path: 'form/:id', component: ProductsFormComponent},
    { path: 'table', component: ProductsTableComponent}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
