import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { TINGG_CONFIGS } from '../../tingg.configs';
import { IchargeRequest, token } from '../../tingg.interfaces';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  env!: URL

  constructor(
    private http: HttpClient,
    @Inject(TINGG_CONFIGS) private token: token
  ) {
    this.env = this.token.isProduction
    ? new URL('https://api.tingg.africa/v3') 
    : new URL('https://api-dev.tingg.africa/v3')
  }

  chargeRequest(data: IchargeRequest): Observable<IchargeRequest> {
    return this.http.post<IchargeRequest>(`${this.env}/charge/request`, data)
  }

  getCountries(): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/all')
  }


}
