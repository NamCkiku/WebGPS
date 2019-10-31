import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UtilityService } from 'src/app/core/services/utility.service';
import { LoggedInUser } from 'src/app/core/domain/loggedin.user';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(private authenService: AuthenticationService, private unitiyservice: UtilityService) { }
  userInfo: LoggedInUser;
  ngOnInit() {
    this.getUserInfo();
  }
  Logout() {
    this.authenService.logout();
    this.unitiyservice.navigateToLogin();
  }
  getUserInfo() {
    let user = this.authenService.getLoggedInUser();
    if (user) {
      console.log(user);
      this.userInfo = user;
    }
  }


}
