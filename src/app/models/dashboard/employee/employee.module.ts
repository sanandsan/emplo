import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import {RouterModule} from '@angular/router'

import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [RegisterComponent, ListComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,ReactiveFormsModule,MatIconModule,
    MatInputModule,MatFormFieldModule,MatButtonModule
  ]
})
export class EmployeeModule { }
