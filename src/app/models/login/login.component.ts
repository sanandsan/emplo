import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;

  constructor(private fb:FormBuilder,private httpService:HttpServiceService,private router:Router) { }

  ngOnInit(): void {
   this.loginForm= this.fb.group({
    email:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
    });
  }


  login(){
    console.log("login called")
console.log(this.loginForm.value)

this.httpService.login(this.loginForm.value).subscribe((res:any)=>{
  console.log(res)
  localStorage.setItem('accessToken',res.token)
  this.router.navigate(['dashboard'])
},(err)=>{
  console.log(err)
})
  }
}
