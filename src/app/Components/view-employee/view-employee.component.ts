import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { Employee } from 'src/app/Models/employee/employee.module';
import { EmoloyeeloginService } from 'src/app/Services/employeelogin.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  id:number|null=0
  selectedEmp : Employee= {} as Employee;
  constructor(private empService: EmoloyeeloginService,private activatedRoute:ActivatedRoute){}
ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe((parameters:ParamMap)=>{
    this.id=parseInt(parameters.get("id")!);
    this.empService.getEmployeebyid(this.id).subscribe((data:Employee)=>{
      this.selectedEmp=data;
    })
  })
}
}
