import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {catchError} from "rxjs/internal/operators";
import { LgaMessageService } from "../services/message/lga-message.service";
import { TokenStorage } from "./token.storage";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class Interceptor implements HttpInterceptor {

constructor(private messageService: LgaMessageService,
    private token: TokenStorage) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> | Observable<HttpEvent<any>> {
        console.log("intercepted request ... ");

        let authReq = req;
        if (this.token.getToken() != null) {
            //authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token.getToken()) });
        }

        req.headers.append('accept', 'application/json');

        return next.handle(authReq)
         .pipe(catchError((error, caught) => {
            this.messageService.showErrorMessage(error ? error.message : "Error")
            return of(error.error ? error.message : "Error");
        }) as any)
    }

}
