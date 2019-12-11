import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing.module';
import { OnlineModule } from './online/online.module';
import { RouteModule } from './route/route.module';
import { ListVehicleOnlineModule } from './list-vehicle-online/list-vehicle-online.module';
import { SidebarMenuComponent } from '../shared/sidebar-menu/sidebar-menu.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { TopMenuComponent } from '../shared/top-menu/top-menu.component';
import { SidebarRightComponent } from '../shared/sidebar-right/sidebar-right.component';
import { UrlAvatarPipe } from '../core/pipe/url-avatar.pipe';


@NgModule({
  declarations: [
    MainComponent,
    SidebarMenuComponent,
    TopMenuComponent,
    FooterComponent,
    SidebarRightComponent,
    UrlAvatarPipe],
  imports: [
    CommonModule,
    MainRoutingModule,
    OnlineModule,
    RouteModule,
    ListVehicleOnlineModule
  ]
})
export class MainModule { }
