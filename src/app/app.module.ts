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
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './Components/update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookingComponent,
    NavBarComponent,
    ProfileComponent,
    ViewComponent,
    UpdateComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
