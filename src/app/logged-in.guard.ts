import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './service/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private authService:AuthService, private router:Router) {
    }

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
        const isLoggedIn = this.authService.isLoggedIn();
        console.log(isLoggedIn);
        if(!isLoggedIn){
            this.router.navigate(['/login']);
        }
        return isLoggedIn;
    }
}