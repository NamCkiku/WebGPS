import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineComponent } from './online.component';
import { Routes,RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  { path: '', component: OnlineComponent },
  { path: 'index', component: OnlineComponent }

];

@NgModule({
  declarations: [OnlineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule
  ]
})
export class OnlineModule { }
