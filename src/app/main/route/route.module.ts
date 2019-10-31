import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteComponent } from './route.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RouteComponent },
  { path: 'index', component: RouteComponent }

];


@NgModule({
  declarations: [RouteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RouteModule { }
