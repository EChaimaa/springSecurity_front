import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
   currentUser :User = new User();
  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  this.authService.loadInfos();
    this.currentUser = this.authService.authenticatedUser;
    console.log(this.currentUser)
  }

}
