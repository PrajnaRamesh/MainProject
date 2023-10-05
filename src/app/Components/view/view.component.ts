import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { Meeting } from 'src/app/Models/meeting';
import { MeetingServiceService } from 'src/app/Services/meeting-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  id:number | null=0;
  selectedMeeting : Meeting= {} as Meeting;
  constructor(private myService:MeetingServiceService,private activatedRoute:ActivatedRoute){
  }
ngOnInit(): void {
  //alert(this.selectedMeeting)
  debugger;
      this.activatedRoute.paramMap.subscribe((parameters:ParamMap)=>{
      this.id=parseInt(parameters.get("id")!);
      this.myService.getMeetingById(this.id).subscribe((data:Meeting)=>{
        this.selectedMeeting=data;
      })
    })
}
}
