import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


import { TINGG_CONFIGS } from '../../tingg.configs';
import { token, tokenRequest } from '../../tingg.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  env!: URL

  constructor(
    private http: HttpClient,
    @Inject(TINGG_CONFIGS) private token: token
  ){
    this.env = token.isProduction
    ? new URL('https://api.tingg.africa/v1/oauth/token/request') 
    : new URL('https://api-dev.tingg.africa/v1/oauth/token/request')
  }


  tokenRequest(): Observable<any> {
    return this.http.post<tokenRequest>(`${this.env}`, 
    { grant_type: this.token.grant_type,
      client_id: this.token.client_id,
      client_secret: this.token.client_secret 
    }).pipe(map((response:any) => {
      console.log(response)
      sessionStorage.setItem('tingg_token', response.access_token)
      return response
    }))
  }
}
