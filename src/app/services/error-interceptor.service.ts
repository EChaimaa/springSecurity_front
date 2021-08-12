import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import Swal from "sweetalert2";
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthenticationService, private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(catchError(err => {
          
            if (err.status === 401) {

                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: 'Connectez vous SVP !',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.authService.logout()
            } else if (err.status === 403) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: 'Accès non authorisé',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.authService.logout()
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}
