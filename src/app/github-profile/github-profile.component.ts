import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  userData:any = []

  error = ''

  userInput = ''


  constructor(private loginService:LoginService) { }

  ngOnInit(): void {

    // this.loginService.gitHubInit().then((res)=>
    this.loginService.fetchUser('kx3ez1').then(
      (val)=>{
        this.userData = val.data
        console.log(val.data)
        this.error = ''
      },
      (err)=>{
        this.error = this.userInput +' - '+'no user found!'
        console.log('no user found!');
      },
    )
  } 

}
