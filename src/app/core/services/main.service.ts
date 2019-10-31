import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { UtilityService } from './utility.service';
import { ApiUri } from '../common/api.uri.constants';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private dataService: DataService, private unitiyservice: UtilityService) { }

  GetMenu() {
    var promise = new Promise((resolve, reject) => {
      let uri = ApiUri.GET_HOME_MENU + "?culture=" + encodeURIComponent("vi-vn") +
        "&appID=" + encodeURIComponent("0");
      this.dataService.get(uri).subscribe((response: any[]) => {
        resolve(response);
      }, error => {

        reject(error);

        this.dataService.handleError(error);
        
      });
    });
    return promise;
  }
}
