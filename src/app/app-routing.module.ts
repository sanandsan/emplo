import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './models/dashboard/dashboard.component';
import { LoginComponent } from './models/login/login.component';


const routes: Routes = [{
  path:"login",component:LoginComponent,
},
{
  path:"",component:LoginComponent,
  

},{ path:"dashboard",component:DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
