import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log("called dashboardmodule")
  }

  onClickRegister(){
console.log("clicked register")
    this.router.navigate(["dashboard/employee/register"])
  }
  employees(){
    console.log("clicked register")
        this.router.navigate(["dashboard/employee/list"])
      }

}
