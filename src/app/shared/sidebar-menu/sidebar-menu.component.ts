import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/core/services/utility.service';
import { DataService } from 'src/app/core/services/data.service';
import { ApiUri } from 'src/app/core/common/api.uri.constants';
import { MenuItem } from 'src/app/core/domain/menu.item';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  menu: MenuItem[];
  constructor(private dataService: DataService, private unitiyservice: UtilityService) { }

  ngOnInit() {
    this.GetMenu();
  }


  GetMenu() {
    let uri = ApiUri.GET_HOME_MENU + "?culture=" + encodeURIComponent("vi-vn") +
      "&appID=" + encodeURIComponent("0");
    this.dataService.get(uri).subscribe((response: any[]) => {
      this.menu = response;
    }, error => this.dataService.handleError(error));
  }
}
