import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsTableComponent } from './products-table/products-table.component';


export const routes: Routes = [
  { path: 'products-form', component: ProductsFormComponent },
  { path: 'products-form/:id', component: ProductsFormComponent},
  { path: 'products-table', component: ProductsTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
