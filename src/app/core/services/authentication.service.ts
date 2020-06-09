import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SystemConstants } from '../common/system.constants';
import { LoggedInUser, LoginStatus } from '../domain/loggedin.user';
import { NotificationService } from './notification.service';
import { isNullOrUndefined } from 'util';
import { ApiUri } from '../common/api.uri.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http: HttpClient, private notificationService: NotificationService, ) { }

  login(username: string, password: string) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    var promise = new Promise((resolve, reject) => {
      this._http.post("http://loginbagps.bagroup.vn/api/v1/authentication/login",{
        "userName": encodeURIComponent(username),
        "password": encodeURIComponent(password),
        "appType": 0
      }, { headers: headers })
        .subscribe((response: any) => {
          console.log(response);
          let user = new LoggedInUser(response.data);
          console.log(user);
          if (user != null) {
            switch (user.Status) {
              case LoginStatus.Success:
                if (!isNullOrUndefined(user.AccessToken)) {
                  localStorage.removeItem(SystemConstants.CURRENT_USER);
                  localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(user));
                }
                resolve(true);

                break;

              case LoginStatus.LoginFailed:

                this.notificationService.printErrorMessage("Tài khoản mật khẩu không chính xác");
                reject(false);
                break;
              case LoginStatus.Locked:
                reject(false);
                this.notificationService.printErrorMessage("Tài khoản mật khẩu đang bị khóa");

                break;
              default:
                reject(false);
                break;
            }



          }
          else {
            reject(false);
          }
        }, error => {
          reject(error);
        });
    });
    return promise;
  }


  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
  }



  isUserAuthenticated(): boolean {
    let user = localStorage.getItem(SystemConstants.CURRENT_USER);
    if (user != null) {
      return true;
    }
    else
      return false;
  }


  getLoggedInUser(): LoggedInUser {
    let user: LoggedInUser;
    if (this.isUserAuthenticated()) {
      user= JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
    }
    else
      user = null;
    return user;
  }


  ///Kiểm tra quyền theu funtion
  checkAccess(functionId: string) {
    var user = this.getLoggedInUser();
    var result: boolean = false;
    var permission: any[] = JSON.parse(user.Permissions);
    var roles: any[] = JSON.parse(user.Permissions);
    var hasPermission: number = permission.findIndex(x => x.FunctionId == functionId && x.CanRead == true);
    if (hasPermission != -1 || roles.findIndex(x => x == "Admin") != -1) {
      return true;
    }
    else
      return false;
  }


  //Kiểm tra phân quyền người dùng
  hasPermission(functionId: string, action: string): boolean {
    var user = this.getLoggedInUser();
    var result: boolean = false;
    var permission: any[] = JSON.parse(user.Permissions);
    var roles: any[] = JSON.parse(user.Permissions);
    switch (action) {
      case 'create':
        var hasPermission: number = permission.findIndex(x => x.FunctionId == functionId && x.CanCreate == true);
        if (hasPermission != -1 || roles.findIndex(x => x == "Admin") != -1)
          result = true;
        break;
      case 'update':
        var hasPermission: number = permission.findIndex(x => x.FunctionId == functionId && x.CanUpdate == true);
        if (hasPermission != -1 || roles.findIndex(x => x == "Admin") != -1)
          result = true;
        break;
      case 'delete':
        var hasPermission: number = permission.findIndex(x => x.FunctionId == functionId && x.CanDelete == true);
        if (hasPermission != -1 || roles.findIndex(x => x == "Admin") != -1)
          result = true;
        break;
    }
    return result;
  }
}
