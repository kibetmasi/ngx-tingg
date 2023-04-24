import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { AuthService } from '../../shared/services/auth.service';
import { ApiService } from '../../shared/services/api.service';
import { IchargeRequestF } from '../../tingg.interfaces';
import { DataService } from '../../shared/services/data.service';
import { LoaderService } from '../../shared/services/loader.service';


@Component({
  selector: 'tingg-charge-request',
  templateUrl: './charge-request.component.html',
  styleUrls: ['./charge-request.component.css']
})
export class ChargeRequestComponent implements OnInit, OnDestroy {
  destroyComponent = new Subject<boolean>()
  chargeForm!: FormGroup
  numberRegex: RegExp = /^[0-9]+$/

  @Input() charge_msisdn!: string
  @Input() charge_amount!: string
  @Input() country_code!: string
  @Input() currency_code!: string
  @Input() merchant_transaction_id!: string
  @Input() service_code!: string
  @Input() payment_mode_code: string = "STK_PUSH"
  @Input() payment_option_code: string = "SAFKE"

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private data: DataService,
    private formBuilder: FormBuilder,
    public loadingService: LoaderService,
  ){}

  ngOnInit(): void {
    this.auth.tokenRequest()
    .pipe(takeUntil(this.destroyComponent))
    .subscribe({
      next: (res:any) => {
        console.log("Res is: ", res)
      }, error: (e:any) => {
        throw new Error("Something isn't right!")
      }
    })

    this.chargeForm = this.formBuilder.group({
      charge_msisdn: [this.charge_msisdn, [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern(this.numberRegex)]],
      charge_amount: [this.charge_amount, [Validators.required, Validators.pattern(this.numberRegex)]],
      country_code: [{ value: this.country_code, disabled: true }, [Validators.required]],
      currency_code: [{ value: this.currency_code, disabled: true }, [Validators.required]],
      merchant_transaction_id: [this.generateRandomString(4), [Validators.required]],
      service_code: [this.service_code, [Validators.required]],
      payment_mode_code: [this.payment_mode_code, [Validators.required]],
      payment_option_code: [this.payment_option_code, [Validators.required]],
    }) as IchargeRequestF
  }

  ngOnDestroy(): void {
    this.destroyComponent.next(true)
    this.destroyComponent.complete()
  }

  chargeRequest(): void {
    this.api.chargeRequest(this.chargeForm.getRawValue())
    .pipe(takeUntil(this.destroyComponent))
    .subscribe({
      next: (response: any) => {
        this.data.chargeRequest$.next(response)
        console.log(response, "ssss")
      },
      error: (e:any) => {
        throw new Error(e.error_description)
      }
    })
  }

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }
}
