import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {
  }

  loginUser(data: any):Observable<any>{
    // localStorage.setItem('currentUser',`${data.email}`)
    return this.http.post('http://localhost:3000/api/v1/users/login', data)
  }

  registerUser(data: any):Observable<any>{
    return this.http.post('http://localhost:3000/api/v1/users/signup', data)
  }

  logout() {  
    localStorage.removeItem('currentUser');  
  }  
  public get loggedIn(): boolean {  
    return (localStorage.getItem('currentUser') !== null);  
  }


}
