import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],schemas:[CUSTOM_ELEMENTS_SCHEMA],exports:[]
})
export class DashboardModule { }
