import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './Components/booking/booking.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ViewComponent } from './Components/view/view.component';
import { UpdateComponent } from './Components/update/update.component';
const routes: Routes = [
  {path:'',redirectTo:'booking',pathMatch:'full'},
  {path:'booking',component:BookingComponent},
 // {path:'booking',component:BookingComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'profile',component:ProfileComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'update/:id',component:UpdateComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
