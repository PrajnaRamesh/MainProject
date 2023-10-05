import { Component, OnInit,Input } from '@angular/core';
import { EventEmitter,Output } from '@angular/core';
import { Room } from 'src/app/Models/room';
import { RoomServicesService } from 'src/app/Services/room-services.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-room-dashboard',
  templateUrl: './room-dashboard.component.html',
  styleUrls: ['./room-dashboard.component.css']
})
export class RoomDashboardComponent {
  RoomList : Room[] = [];
  selectedMeeting:Room={} as Room;
  router: any;
  constructor(private roomService: RoomServicesService,private activatedRoute: ActivatedRoute){

  }
  ngOnInit(): void {
    this.roomService.GetAllRoom().subscribe((data : Room[]) => {
      this.RoomList=data;
      //console.log(data); // Check its adding or not
    })  
   
  }
  
  onDelete(id : number) {
    this.roomService.deleteRoom(id).subscribe((room)=> {
      alert(id);
      this.router.navigate(["/"]);
    })
  }    
}
