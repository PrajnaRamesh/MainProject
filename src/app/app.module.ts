import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { BookingComponent } from './Components/booking/booking.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ViewComponent } from './Components/view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './Components/update/update.component';
import { RommnavbarComponent } from './Components/rommnavbar/rommnavbar.component';
import { RoomDashboardComponent } from './Components/room-dashboard/room-dashboard.component';
import { AddRoomComponent } from './Components/add-room/add-room.component';
import { ViewRoomComponent } from './Components/view-room/view-room.component';
import { EditRoomComponent } from './Components/edit-room/edit-room.component';
import { AddMeetingComponent } from './Components/add-meeting/add-meeting.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { ViewEmployeeComponent } from './Components/view-employee/view-employee.component';
import { EditEmployeeComponent } from './Components/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookingComponent,
    NavBarComponent,
    ProfileComponent,
    ViewComponent,
    UpdateComponent,
    RommnavbarComponent,
    RoomDashboardComponent,
    AddRoomComponent,
    ViewRoomComponent,
    EditRoomComponent,
    AddMeetingComponent,
    EmployeeListComponent,
    ViewEmployeeComponent,
    EditEmployeeComponent,
    AddEmployeeComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
