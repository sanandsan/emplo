import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [RegisterComponent, ListComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
