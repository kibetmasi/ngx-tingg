import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { ChargeRequestComponent } from './components/charge-request/charge-request.component';
import { TINGG_CONFIGS } from './tingg.configs';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApikeyInterceptor } from './shared/interceptors/apikey.interceptor';
import { DirectCardRequestComponent } from './components/direct-card-request/direct-card-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GlobalErrorHndler } from './shared/error-handler/global-error.handler';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { DataService } from './shared/services/data.service';



@NgModule({
  declarations: [
    ChargeRequestComponent,
    DirectCardRequestComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    MatSnackBarModule
  ],
  exports: [
    ChargeRequestComponent,
    DirectCardRequestComponent,
  ],
  providers: [
    DataService,
    { provide: HTTP_INTERCEPTORS, useClass: ApikeyInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHndler }
  ]
})
export class NgxTinggModule {
  static forRoot(
    grant_type: string,
    client_id: string,
    client_secret: string,
    apikey: string,
    isProduction: boolean
  ): ModuleWithProviders<NgxTinggModule> {
    return {
      ngModule: NgxTinggModule,
      providers: [
        { provide: TINGG_CONFIGS,
          useValue: {
            grant_type,
            client_id, 
            client_secret,
            apikey,
            isProduction
          } 
        }
      ]
    }
  }
}


