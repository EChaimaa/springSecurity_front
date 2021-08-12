import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import { UserAuth } from '../models/user-auth.model';
import { User } from '../models/User.model';



@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private apiUrl = 'http://localhost:8500';
    public userLogin = new UserAuth();
    public userRegister = new User();
    private _authenticatedUser = new User();
    public authenticated = false;

    constructor(private http: HttpClient, private router: Router) {
    }



    public login() {
        console.log(this.userLogin);
        this.http.post<any>(this.apiUrl+'/login', this.userLogin, {observe: 'response'}).subscribe(
            resp => {
                const jwt = resp.headers.get('Authorization');
                if(jwt !=null)  this.saveToken(jwt);
                this.loadInfos();
                this.router.navigate(['/student']);
            }, error => {
               console.log("error !!!")
            }
        );
    }

    public register() {
        console.log(this.userRegister);
        this.http.post<any>(this.apiUrl+'/ums-api/user/save', this.userRegister, {observe: 'response'}).subscribe(
            resp => {
                console.log(resp)
                this.router.navigate(['/login']);

            }, error => {
               console.log("error !!!")
            }
        );
    }


    public saveToken(token: string) {
        localStorage.setItem('token', token);
    }

    public loadInfos() {
        const helper = new JwtHelperService();

        const tokenDecoded = helper.decodeToken(localStorage.getItem('token') || '{}');
        const username = tokenDecoded.sub;
        const roles = tokenDecoded.roles;
        console.log('User roles ' + roles);
        const passwordChanged = tokenDecoded.passwordChanged;

        this._authenticatedUser.passwordChanged = passwordChanged;
        this._authenticatedUser.username = username;
        this._authenticatedUser.roles = roles;
        this.authenticated = true;

    }

    public logout() {
        localStorage.removeItem('token');
        this.authenticated = false;
        this._authenticatedUser = new User();
        this.router.navigate(['login']);
    }


    public hasRole(role): boolean {
        for (const r of this._authenticatedUser.roles) {
            if (r == role) {
                return true;
            }
        }
        return false;
    }


    get authenticatedUser(): User {
        return this._authenticatedUser;
    }

    set authenticatedUser(value: User) {
        this._authenticatedUser = value;
    }
}
