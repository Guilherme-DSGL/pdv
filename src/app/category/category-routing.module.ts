import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { CategoriesTableComponent } from './categories-table/categories-table.component';

const routes: Routes = [
  {path: 'categories-form', component:CategoriesFormComponent},
  {path: 'categories-form/:id', component:CategoriesFormComponent},
  {path: 'categories-table', component:CategoriesTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
