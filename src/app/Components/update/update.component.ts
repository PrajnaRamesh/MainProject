import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';
import { Meeting } from 'src/app/Models/meeting';
import { MeetingServiceService } from 'src/app/Services/meeting-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateMeeting: Meeting= {} as Meeting;
  id:number|null=0;
  //router:any;
  constructor(private myService:MeetingServiceService,private activatedRoute:ActivatedRoute, private router:Router){
  }
ngOnInit(): void {
  //alert(this.selectedMeeting)
  debugger;
      this.activatedRoute.paramMap.subscribe((parameters:ParamMap)=>{
      this.id=parseInt(parameters.get("id")!);
      this.myService.getMeetingById(this.id).subscribe((data:Meeting)=>{
        this.updateMeeting=data;
      })
    })
}

onSubmit() {
  debugger;
  this.myService.updateMeeting(this.updateMeeting).subscribe((emp)=> {
    alert(this.updateMeeting.meetingDetails);
    this.router.navigate(["/"]);
  })
}
}

