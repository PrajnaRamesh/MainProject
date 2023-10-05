import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../Models/room';
@Injectable({
  providedIn: 'root'
})
export class RoomServicesService {
baseUrl:string='http://localhost:5298/api/Room_'
  constructor(private http:HttpClient) { }

public GetAllRoom() : Observable<Room[]>{
    return this.http.get<Room[]>(this.baseUrl);
}
public addRoom(room : Room) : Observable<Room>{
  return this.http.post<Room>(this.baseUrl, room);
}
public getRoomById(id:number):Observable<Room>{
  let tempUrl=this.baseUrl+"/"+id;
  return this.http.get<Room>(tempUrl);
}
public updateRoom(room:Room) : Observable<Room>{
  let tempUrl = this.baseUrl + "/" + room.roomId;
  return this.http.put<Room>(tempUrl, room); 

}
public deleteRoom(id:number) : Observable<string> {
  let tempUrl=this.baseUrl+"/"+id;
  return this.http.delete<string>(tempUrl);
}
}