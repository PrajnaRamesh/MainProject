import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee/employee.module';
import { EmoloyeeloginService } from 'src/app/Services/employeelogin.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  newEmployee : Employee = {} as Employee;
  newEmp : Employee = {} as Employee;
  constructor(private myService : EmoloyeeloginService, private router : Router) {
  }
  admform: FormGroup = new FormGroup({
    //adminId: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(1000)]),
    employeeName : new FormControl("", [Validators.required]),
    employeeEmail: new FormControl("", [Validators.required]),
    employeePassword: new FormControl(0, [Validators.required]),
    employeePhone: new FormControl("", [Validators.required]) //Formcontrol(intialvalue,validators)
  });
  get employeeName() {
    return this.admform.get("employeeName");
  }
  get employeeEmail() {
    return this.admform.get("employeeEmail");
  }
  get employeePassword() {
    return this.admform.get("employeePassword");
  }
  get employeePhone() {
    return this.admform.get("employeePhone");
  }
   onNewEmployee(){
    debugger;
    this.myService.addEmployee(this.newEmployee).subscribe((emp) => {
      this.router.navigate(['/']);
    });
    alert("Admin added successfully");
  }
}
