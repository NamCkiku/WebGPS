import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';
import { NotificationService } from '../core/services/notification.service';
import { Router } from '@angular/router';
import { UrlConstants } from '../core/common/url.constants';
import { MessageContstants } from '../core/common/message.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  model: any = {};
  returnUrl: string;

  constructor(private authenService: AuthenticationService,
    private notificationService: NotificationService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;
    this.authenService.login(this.model.username, this.model.password)
    .then(data => {
     this.router.navigate([UrlConstants.ONLINE]);
    }).catch(error=>{
      this.loading = false;
    });
  }

  
}
