import { Component } from '@angular/core';
import { Meeting } from 'src/app/Models/meeting';
import { MeetingServiceService } from 'src/app/Services/meeting-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.css']
})
export class AddMeetingComponent {
  newMeeting: Meeting ={} as Meeting;
  constructor(private meetService:MeetingServiceService,private router:Router){}
  onNewMeet(){
   this.meetService.addMeeting(this.newMeeting).subscribe((mee)=>{
     alert("Room added successfully");
     this.router.navigate(["/"]);
   });
  }
}
