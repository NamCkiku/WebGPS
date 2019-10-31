import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehicleOnlineComponent } from './list-vehicle-online.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListVehicleOnlineComponent },
  { path: 'index', component: ListVehicleOnlineComponent }

];


@NgModule({
  declarations: [ListVehicleOnlineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ListVehicleOnlineModule { }
