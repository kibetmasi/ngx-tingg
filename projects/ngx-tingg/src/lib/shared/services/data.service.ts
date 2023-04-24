import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public chargeRequest$ = new BehaviorSubject<any>([])

  public dirextCardRequest$ = new BehaviorSubject<any>([])

}
