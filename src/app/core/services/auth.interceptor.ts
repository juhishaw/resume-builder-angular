import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AuthenticatorService } from "./authenticator.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private _auth: AuthenticatorService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const accessToken = this._auth.getAccessToken();
        req = req.clone({
            setHeaders: {
                Authorization: `JWT ${accessToken}` 
            }
        });
        return next.handle(req);
    }
}