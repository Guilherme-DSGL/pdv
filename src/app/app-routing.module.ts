import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PdvComponent } from './pdv/pdv.component';

const routes: Routes = [
  { path: 'pdv', component: PdvComponent},
  { path: 'login', component:LoginComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
 }
 