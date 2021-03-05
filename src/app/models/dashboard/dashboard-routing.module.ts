import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path:"employee",loadChildren:()=>import ("./../dashboard/employee/employee.module").then((m)=>m.EmployeeModule)
},
{
  path:"",redirectTo:"employee"
},
// loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardRoutingModule { }
