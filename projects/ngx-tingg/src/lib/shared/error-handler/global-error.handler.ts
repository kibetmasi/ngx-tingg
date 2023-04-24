import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { NotificationService } from "./error.notification.service";
import { ErrorService } from "./error.service";
import { LoggingService } from "./error-logger.service";


type NewType = Error | HttpErrorResponse;

@Injectable()
export class GlobalErrorHndler implements ErrorHandler{

    constructor(
        private injector: Injector
    ){}

    handleError(error: NewType) {
        const errorService = this.injector.get(ErrorService)
        const logger = this.injector.get(LoggingService)
        const notifier = this.injector.get(NotificationService)

        let message
        let stackTrace:any
        if (error instanceof HttpErrorResponse){
            message = errorService.getServerErrorMessage(error)
            notifier.showError(message)
        } else {
            message = errorService.getClientErrorMessage(error)
            notifier.showError(message)
        }
        logger.logError(message, stackTrace)
    }
}