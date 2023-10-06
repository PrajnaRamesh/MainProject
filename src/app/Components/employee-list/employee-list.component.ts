import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee/employee.module';
import { EmoloyeeloginService } from 'src/app/Services/employeelogin.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  Employeelist : Employee[] = [];
  selectedEmployee:Employee={} as Employee;
  router: any;
  constructor(private myService: EmoloyeeloginService,private activatedRoute: ActivatedRoute){
  }
  ngOnInit(): void {
    this.myService.getAllEmployee().subscribe((data : Employee[]) => {
      this.Employeelist=data;
      this.router.navigate["/"]
      //console.log(data); // Check its adding or not
    })  
   
  }
  onDeleteEmp(id : number) {
    debugger;
    this.myService.deleteEmployee(id).subscribe((emp)=> {
      alert(id);
      //this.router.navigate(["/"]);
    })
  }
}
