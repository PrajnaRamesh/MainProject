import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './Components/booking/booking.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ViewComponent } from './Components/view/view.component';
import { UpdateComponent } from './Components/update/update.component';
import { EditRoomComponent } from './Components/edit-room/edit-room.component';
import { ViewRoomComponent } from './Components/view-room/view-room.component';
import { AddRoomComponent } from './Components/add-room/add-room.component';
import { RoomDashboardComponent } from './Components/room-dashboard/room-dashboard.component';
import { RommnavbarComponent } from './Components/rommnavbar/rommnavbar.component';
const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'booking',component:BookingComponent},
 // {path:'booking',component:BookingComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'profile',component:ProfileComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'updateRoom/:id',component:EditRoomComponent},
  {path:'ViewRoom/:id',component:ViewRoomComponent},
  {path:'addRoom',component:AddRoomComponent},
  {path:'roomdash',component:RoomDashboardComponent},
  {path:'roomnav',component:RommnavbarComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
