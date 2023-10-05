import { Component, OnInit,Input } from '@angular/core';
import { EventEmitter,Output } from '@angular/core';
import { Meeting } from 'src/app/Models/meeting';
import { MeetingServiceService } from 'src/app/Services/meeting-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { compileNgModule } from '@angular/compiler';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  //id: number;
  Meetinglist : Meeting[] = [];
  selectedMeeting:Meeting={} as Meeting;
  router: any;
  constructor(private myService: MeetingServiceService,private activatedRoute: ActivatedRoute){

  }
  ngOnInit(): void {
    this.myService.getAllMeeting().subscribe((data : Meeting[]) => {
      this.Meetinglist=data;
      //console.log(data); // Check its adding or not
    })  
   
  }
  
  onDelete(id : number) {
    this.myService.deleteMeeting(id).subscribe((emp)=> {
      alert(id);
      this.router.navigate(["/"]);
    })
  }

  }
  
  


