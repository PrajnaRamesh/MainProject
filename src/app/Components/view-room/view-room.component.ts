import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { Room } from 'src/app/Models/room';
import { RoomServicesService } from 'src/app/Services/room-services.service';
@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.css']
})
export class ViewRoomComponent implements OnInit {
  id:number | null=0;
  selectedRoom : Room= {} as Room;
  constructor(private roomService:RoomServicesService,private activatedRoute:ActivatedRoute){
  }
ngOnInit(): void {
  //alert(this.selectedMeeting)
  debugger;
      this.activatedRoute.paramMap.subscribe((parameters:ParamMap)=>{
      this.id=parseInt(parameters.get("id")!);
      this.roomService.getRoomById(this.id).subscribe((data:Room)=>{
        this.selectedRoom=data;
      })
    })
}
}
