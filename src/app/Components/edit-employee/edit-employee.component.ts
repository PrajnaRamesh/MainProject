import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee/employee.module';
import { EmoloyeeloginService } from 'src/app/Services/employeelogin.service';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  updatedEmployee: Employee= {} as Employee;
  id:number|null=0;
  //router:any;
  constructor(private myService:EmoloyeeloginService,private activatedRoute:ActivatedRoute, private router:Router){
  }
ngOnInit(): void {
  //alert(this.selectedMeeting)
  debugger;
      this.activatedRoute.paramMap.subscribe((parameters:ParamMap)=>{
      this.id=parseInt(parameters.get("id")!);
      this.myService.getEmployeebyid(this.id).subscribe((data:Employee)=>{
        this.updatedEmployee=data;
      })
    })
}

onSubmit() {
  debugger;
  this.myService.updateEmployee(this.updatedEmployee).subscribe((emp)=> {
    alert(this.updatedEmployee.employeeId);
    this.router.navigate(["/"]);
  })
}
}


