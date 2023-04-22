import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }

  async login(user: any){
    const result = await this.http.post<any>(`${environment.api}/auth/signin`, user).toPromise()
    
    if(result && result.access_token){
      window.localStorage.setItem('token', result.access_token)
      return true
    }
    
    return false
  }

  getTokenExpirationDate(token: string): Date | null{
    const decoded: any = jwt_decode(token)

    if(decoded.exp === undefined){
      return null
    }
    const date = new Date(0)
    date.setUTCSeconds(decoded.exp)

    return date
  }

  isTokenExpired(token?: string): boolean {
    if(!token){
      return true
    }
    const date = this.getTokenExpirationDate(token)
    if(date === undefined){
      return false
    }
    
    return (date!.valueOf() > new Date().valueOf())
  }

  isUserLogged(){
    const token = window.localStorage.getItem('token')
    if (token){
      return true

    }else if (this.isTokenExpired(token!)){
      return false
    }

    return true
  }

}
