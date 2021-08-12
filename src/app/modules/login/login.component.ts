import { Component, OnInit } from '@angular/core';
import { UserAuth } from 'src/app/models/user-auth.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  constructor(private authenticationService: AuthenticationService) {
  }
  ngOnInit(): void {
  }
  public signIn(){
  this.authenticationService.login();
  }


  get selected(): UserAuth {
    return this.authenticationService.userLogin;
  }

}
