import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './models/dashboard/dashboard.component';
import { LoginComponent } from './models/login/login.component';
import { AuthenticationService } from './services/authentication.service';


const routes: Routes = [{
  path:"login",component:LoginComponent,
},
{
  path:"",redirectTo:"login",pathMatch:"full"

},{ path:"dashboard",loadChildren:()=>import("./models/dashboard/dashboard.module").then(m=>m.DashboardModule),canActivate:[AuthenticationService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
