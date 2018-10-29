import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService extends ErrorHandler {

  constructor() { super(); }

  public handleError(error) {

    let title: string;
    if (error instanceof HttpErrorResponse) {
      title = 'Http Error: ' + error.status;
    } else {
      title = 'Application Error: ';
    }
    console.log(error.message);
  }
}
