import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Octokit } from 'octokit';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  githubToken = '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'

  url = 'https://cdn-api.co-vin.in/api/v2'

  octokit:any = ''

  constructor( private http : HttpClient) { 
    this.octokit = this.gitHubInit()
   }

  gitHubInit(){
    return new Octokit({
      auth: this.githubToken,
    })
  }

  async fetchUser(username:string){
    return await this.octokit.request(`GET /users/${username}`, {
      username: 'kx3ez1'
    })
  }

  checkData(email:string,password:string){
    return this.http.request('post',
      'http://172.20.4.84:8000/e/',
      {body:{'email':email,'password':password}
    }
    )
  }

}
