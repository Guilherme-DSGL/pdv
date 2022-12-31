import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientsTableComponent } from './clients-table/clients-table.component';

export const routes: Routes = [
  {path: 'client-form', component:ClientFormComponent},
  {path: 'client-form/:id', component:ClientFormComponent},
  {path: 'client-table', component:ClientsTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
