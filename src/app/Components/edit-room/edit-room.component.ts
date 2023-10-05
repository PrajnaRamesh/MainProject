import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';
import { Room } from 'src/app/Models/room';
import { RoomServicesService } from 'src/app/Services/room-services.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
  updateRoom: Room= {} as Room;
  id:number|null=0;
  //router:any;
  constructor(private roomService:RoomServicesService,private activatedRoute:ActivatedRoute, private router:Router){
  }
ngOnInit(): void {
  //alert(this.selectedMeeting)
  debugger;
      this.activatedRoute.paramMap.subscribe((parameters:ParamMap)=>{
      this.id=parseInt(parameters.get("id")!);
      this.roomService.getRoomById(this.id).subscribe((data:Room)=>{
        this.updateRoom=data;
      })
    })
}

onSubmit() {
  debugger;
  this.roomService.updateRoom(this.updateRoom).subscribe((emp)=> {
    alert(this.updateRoom.roomName);
    this.router.navigate(["/"]);
  })
}
}
