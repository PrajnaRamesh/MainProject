import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/Models/room';
import { RoomServicesService } from 'src/app/Services/room-services.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent  {
   newRoom: Room ={} as Room;
   constructor(private roomService:RoomServicesService,private router:Router){}
   onNewRoom(){
    this.roomService.addRoom(this.newRoom).subscribe((room)=>{
      alert("Room added successfully");
      this.router.navigate(["/"]);
    });
   }
}

