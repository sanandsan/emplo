import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [

{
  path:"",component:DashboardComponent,children:[{
  path:"employee",loadChildren:()=>import ('./../dashboard/employee/employee.module').then(m=>m.EmployeeModule)
  }
]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardRoutingModule { }
