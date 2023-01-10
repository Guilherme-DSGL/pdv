import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdvComponent } from './pdv.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  {path:'pdv', component: PdvComponent, canActivate: [AuthGuard], children:[
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdvRoutingModule { }
