import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;
create="create";
userDetails;
details
buttonName="Register"
  constructor(private fb:FormBuilder,private router: Router,private httpService:HttpServiceService) {
   this.details= this.router.getCurrentNavigation().extras.state;
   
if(this.details){
this.userDetails=this.details.details
console.log(this.userDetails)
  this.create =this.details.type
  this.buttonName="Update"
}

  }
imageSrc:any;

  patchValues(){
    this.registerForm.patchValue({
      email:this.userDetails.email,
      phone_number:this.userDetails.phone_number,
      name:this.userDetails.name,
      image:this.userDetails.image
            })

            // this.create="update";
  }

  ngOnInit(): void {
    this.registerForm= this.fb.group({
      email:new FormControl("",Validators.required),
      phone_number:new FormControl("",Validators.required),
      name:new FormControl("",Validators.required),
      image: new FormControl('', [Validators.required,this.requiredFileType('jpeg'),this.requiredFileType('jpg'),this.requiredFileType('png')]),
      
      });
      
this.patchValues()
  }


  register(){
    if(this.create=="create"){
    console.log(this.registerForm.value)
    this.httpService.registerEmployee(this.registerForm.value).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
    }
    else{
console.log(this.create)
console.log(this.registerForm.value)
      // this.
     this.httpService.updateEmployee(this.userDetails._id,this.registerForm.value).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
     
    }
    this.router.navigate(['dashboard/employee/list'])
  }
  
  //validating file type
    requiredFileType( type: string ) {


    return function (control: FormControl) {
      const file = control.value;
      if ( file ) {
        const extension = file.split('.')[1].toLowerCase();
        if ( type.toLowerCase() !== extension.toLowerCase() ) {
          return {
            requiredFileType: true
          };
        }
        
        return null;
      }
  
      return null;
    };
  }

}
