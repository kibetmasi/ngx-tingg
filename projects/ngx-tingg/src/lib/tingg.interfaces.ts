import { FormControl, FormGroup } from "@angular/forms"

export interface token {
    grant_type: string
    client_id: string
    client_secret: string
    apikey: string
    isProduction: boolean
}


export interface tokenRequest {
    grant_type: string,
    client_id: string,
    client_secret: string
}


export interface IchargeRequest {
    charge_msisdn: string
    charge_amount: string
    country_code: string
    currency_code: string
    merchant_transaction_id: string
    service_code: string
    payment_mode_code: string
    payment_option_code: string
}
export interface IchargeRequestF extends FormGroup {
    value: IchargeRequest,
    controls: {
        charge_msisdn: FormControl
        charge_amount: FormControl
        country_code: FormControl
        currency_code: FormControl
        merchant_transaction_id: FormControl
        service_code: FormControl
        payment_mode_code: FormControl
        payment_option_code: FormControl
    }
}