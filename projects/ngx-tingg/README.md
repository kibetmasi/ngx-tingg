
# ngx-tingg

An Angular library that abstracts the complexity of using Cellulant's Tingg APIs.

*This is still a work in progress



## Documentation

API reference: 
[Documentation](https://dev-portal.tingg.africa/docs/checkout/1/routes/v3/checkout-api/charge/request/post)








## Features

- Gracefully handle errors
- Post a charge request


## Run on your Project

Clone the project

```bash
  npm i ngx-tingg
```

Install dependencies

```bash
  ng add @angular/material
```

On your ```app.module.ts``` or the component to be used, import the following:

```typescript
  import { NgxTinggModule } from 'ngx-tingg';

  @NgModule({
  declarations: [
    MyComponent
  ],
  imports: [
    BrowserModule,

    //import this
    NgxTinggModule.forRoot(
      grant_type: string,
      client_id: string,
      client_secret: string,
      apikey: string,
      isProduction: boolean
    )
  ],
```

Finally on your HTML file, 

```html
  <tingg-charge-request></tingg-charge-request>
```

A payment form will be loaded on your view.


Run your app

```bash
  ng serve
```


## API Reference

For table  only

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `@Input(): country_code` = `KEN` | `string` | Country code |
| `@Input(): currency_code` = `KES` | `string` |  Currency code |
| `@Input(): service_code` = `undefined` | `string` |  Service code |
| `@Input(): merchant_transaction_id` = `random` | `string` |  Merchant ID code |
| `@Input(): charge_amount` = `undefined` | `number` |  Amount |
| `@Input(): charge_msisdn` = `undefined` | `number` |  Phone number |
| `@Input(): payment_mode_code` = `STK_PUSH` | `string` |  Payment mode code |
| `@Input(): payment_option_code` = `SAFKE` | `string` |  Payment payment_option_code code |





## Running Tests

To run tests, run the following command

```bash
  ng e2e
```

