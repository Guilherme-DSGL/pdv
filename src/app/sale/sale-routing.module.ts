import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleTableComponent } from './sale-table/sale-table.component';
import { SaleFormComponent } from './sale-form/sale-form.component';

const routes: Routes = [
  {path: 'sale-table', component: SaleTableComponent},
  {path: 'sale-form', component: SaleFormComponent},
  {path: 'sale-form/:id', component: SaleFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
