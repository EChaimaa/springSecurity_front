import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private auth: AuthenticationService) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
       
        if (this.auth.authenticated == false || this.auth.authenticatedUser.username == '') {
               this.router.navigate(['login']);
            return false;
        }
        return true;
    }

}
