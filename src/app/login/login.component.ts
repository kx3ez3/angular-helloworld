import { Component, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, FormControl,FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private loginService:LoginService) { }
  
  pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

  myForm = new FormGroup({
    emailField: new FormControl('',[Validators.required,Validators.email]),
    passwordField: new FormControl('',[Validators.required,Validators.min(8),Validators.pattern(this.pattern)]),
  })

  // validateEmail():ValidatorFn{
  //   return (control: AbstractControl): { string: any } | null => {
  //     return null
  //   }
  // }

  submitForm(){
    let emailFiledController = this.myForm.controls.emailField 
    let passwordFiledController = this.myForm.controls.passwordField 
    if(emailFiledController.valid && passwordFiledController.valid){
      console.log('form Succss')
      if(emailFiledController.value == 'admin@gmail.com' && passwordFiledController.value!.toString() == 'Admin@1234'){
        // this.router.navigate(['dashboard'])
        this.loginService.checkData(emailFiledController.value!.toString(),emailFiledController.value!.toString())
      }else{
        alert('Username or Password is Invalid!')
      }
    }else{
      alert('Form Is Invalid!')
    }
  }


  ngOnInit(): void {

  }

}
