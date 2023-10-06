import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Meeting } from '../Models/meeting';
@Injectable({
  providedIn: 'root'
})
export class MeetingServiceService {
 baseUrl: string='http://localhost:5298/api/Meeting';
  constructor(private http: HttpClient) { 

  }
  public getAllMeeting():Observable<Meeting[]>{
    return this.http.get<Meeting[]>(this.baseUrl);
  }
  public getMeetingById(id:number):Observable<Meeting>{
    let tempUrl=this.baseUrl+"/"+id;
    return this.http.get<Meeting>(tempUrl);
  }
  public addMeeting(meet:Meeting):Observable<Meeting>{
    return this.http.post<Meeting>(this.baseUrl, meet);
  }
  public updateMeeting(meet:Meeting) : Observable<Meeting>{
    let tempUrl = this.baseUrl + "/" + meet.meetingId;
    return this.http.put<Meeting>(tempUrl, meet); 

  }
  public deleteMeeting(id:number) : Observable<string> {
    let tempUrl=this.baseUrl+"/"+id;
    return this.http.delete<string>(tempUrl);
  }
}
