import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private router:Router) {
    }

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
        const isLoggedIn = AuthenticationService.isLoggedIn();
        if(!isLoggedIn){
            this.router.navigate(['/login']);
        }
        return isLoggedIn;
    }
}