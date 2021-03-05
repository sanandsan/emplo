import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [{
  path:"list",component:ListComponent,pathMatch:"full"
  
},{
  path:"",component:ListComponent,pathMatch:"full"
  
},{
  path:"register",component:RegisterComponent,pathMatch:"full"
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
