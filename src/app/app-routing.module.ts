import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PdvComponent } from './pdv/pdv.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'pdv', component: PdvComponent,  },
  { path: '', component: LoginComponent},
  { path: 'login', component:LoginComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
 }
 