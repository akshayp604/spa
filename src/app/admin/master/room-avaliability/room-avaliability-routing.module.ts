import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomAvaliabilityComponent } from './room-avaliability.component';

const routes: Routes = [{ path: '', component: RoomAvaliabilityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomAvaliabilityRoutingModule { }
