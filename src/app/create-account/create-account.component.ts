import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements AfterViewInit {

  @ViewChild('name') name: ElementRef
  @ViewChild('email') email: ElementRef
  password = ''
  cnfpassword = ''

  constructor(private loginService:LoginService) { }
  
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  createAccount(){
    // let userData:IUser = <IUser>{
    //   name: this.name.nativeElement.value,
    //   email:this.email.nativeElement.value,
    //   password:this.password,
    // };
    
    // this.loginService.create(userData)
  }
}
