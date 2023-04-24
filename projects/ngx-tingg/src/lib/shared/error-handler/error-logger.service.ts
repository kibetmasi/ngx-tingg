import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

    constructor(){}

  logError(message:any, stack:string){
    // send the errors to database
    // console.log("LoggingService:" + message)
  }
}