import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private zone: NgZone,
        private snack: MatSnackBar
  ) { }

  showSuccess(message:string){
    this.zone.run(()=> {
      this.snack.open(message, 'close', {
        duration: 4000
      });
    })
  }

  showWarning(message:string){
    this.zone.run(()=>{
      this.snack.open(message, 'close', {
        duration: 6000
      })
    })
  }

  showError(message:string){
    this.zone.run(()=> {
      this.snack.open(message, 'close', {
        duration: 4000
      })
    })
  }
}