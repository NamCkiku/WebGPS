import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';


const routes: Routes = [
    { path: '', component:MainComponent,children:[
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'online', loadChildren: './online/online.module#OnlineModule' },
        { path: 'route', loadChildren: './route/route.module#RouteModule' },
        { path: 'listvehicleonline', loadChildren: './list-vehicle-online/list-vehicle-online.module#ListVehicleOnlineModule' },
        { path: 'user', loadChildren: './user/user.module#UserModule' },
    ] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
