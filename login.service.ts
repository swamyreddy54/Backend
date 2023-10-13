import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

login(loginuser:any){
  console.log(loginuser)

  return this.http.post('http:localhost:4100/users/login',loginuser);
  
}
  
}
