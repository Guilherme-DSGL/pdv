import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleTableComponent } from './sale-table/sale-table.component';
import { SaleFormComponent } from './sale-form/sale-form.component';
import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], children: [
      { path: 'table', component: SaleTableComponent },
      { path: 'form', component: SaleFormComponent },
      { path: 'form/:id', component: SaleFormComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
