import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:IDropdownSettings = {};
  ngOnInit() {
    this.dropdownList = [
      { id:1, authority: 'ADMIN' },
      { id: 2, authority: 'PROFESSOR' },
      { id: 3, authority: 'MANAGER' },
      { id: 4, authority: 'STUDENT' },
      { id: 5, authority: 'DIRECTOR' }
    ];
    this.selectedItems = [
      { id: 3, authority: 'ADMIN' },
      { id: 4, authority: 'STUDENT' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'authority',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  constructor(private authenticationService: AuthenticationService) {
  }

  public signUp(){
  this.authenticationService.register();
  }


  get selected(): User {
    return this.authenticationService.userRegister;
  }
}
