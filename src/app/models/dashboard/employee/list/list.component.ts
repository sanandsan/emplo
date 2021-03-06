import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {;

 types={
   inc:"inc",
   dec:"dec"
 }
  employees=[]
  limit=3;
  offset=0;
  empty=false;
   constructor(private httpService:HttpServiceService,private router:Router){

   }

  ngOnInit(): void {
    this.getAllEmployees(this.types.inc)
  }


  getAllEmployees(type?:string){
    if(!this.empty || type!="inc"){
this.httpService.getEmployees(this.limit,this.offset).subscribe((res:any)=>{
  this.employees=res.docs
  this.empty=this.employees.length<3?true:false;
  console.log(this.employees)
  if(this.offset>=0 ){
  if(type=="inc" &&  !this.empty){ 
    this.offset=this.offset+1
  } 
else if(this.offset>0 ){
  this.offset=this.offset-1;
}}
else{

  console.log("negativeoffset")
}
},((err)=>
{
    console.log("error")

  } ))
    }
}
onclickEdit(employee){
  console.log("edit clicked")
this.router.navigate(["/dashboard/employee/register"],{state: { details: employee ,type:"update"} })
}

onclickDelete(employee){
  console.log("delete clicked")
this.httpService.deleteEmployee(employee._id).subscribe(res=>{
  console.log("deleted successfully")
  this.getAllEmployees()
})
}
}
