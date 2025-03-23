import { Component, OnInit ,OnDestroy } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';
import { TosterService } from '../toster/toster.service';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit,OnDestroy {

  constructor(private employeeService:EmployeeServiceService, private toster:TosterService , private _as:AlertService) { }

  ngOnInit() {
    this.searchAll()
  }

  ngOnDestroy(){
    this._as.alert.unsubscribe();
  }


  payload = {
    "fistName": "",
    "lastName": "",
    "email": "@restapp.com"
  }

  dataSource:any;

  fistNameNew = ""
  lastNameNew = ""
  emailNew = ""
  editId:any;
  onEdit(employee:any){
    this.fistNameNew = employee.fistName
    this.lastNameNew = employee.lastName
    this.emailNew = employee.email
    this.editId = employee.id
  }

  cancle(){
    this.fistNameNew = ""
    this.lastNameNew = ""
    this.emailNew = ""
    this.editId = ""
  }

  searchAll(){
    this.employeeService.getAllEmployee().subscribe((res)=>{
      this.dataSource = res
    })
  }

  updateEmployee(){
    this.employeeService.updateEmployee({
      id: this.editId,
      fistName: this.fistNameNew,
      lastName: this.lastNameNew,
      email: this.emailNew
    }).subscribe((res)=>{
      this.editId = undefined
      let messege = "Employee " + res.fistName + " " + res.lastName + " is Updated Successfully"
      this.toster.showMessege(messege)
      this.searchAll()
    })
  }
  addEmployeeBool:Boolean = false
  changeEmail(){
    this.payload.email = (this.payload.fistName + "@restapp.com").toLowerCase()
  }
  showForm(){
    this.addEmployeeBool = !this.addEmployeeBool
  }
  addEmployee(){
    this.employeeService.addEmployee(this.payload).subscribe((res)=>{
      this.searchAll()
      let messege = "Employee " + res.fistName + " " + res.lastName + " is Added Successfully"
       this.toster.showMessege(messege)
      this.addEmployeeBool = false;
      this.payload = {
        "fistName": "",
        "lastName": "",
        "email": "@restapp.com"
      }
    })
  }

  confirmDelete(employee:any){
    this._as.open(`Do you want to delete the employee ${employee.fistName}`)
    this._as.alert.subscribe((d)=>{
      if(d.selection){
        this.deleteEmployee(employee.id)
      }
    })
  }

  deleteEmployee(id:any){
    this.employeeService.deleteEmployee(id).subscribe((res)=>{
      this.searchAll()
      let messege = "Employee " + res.fistName + " " + res.lastName + " is deleted Successfully"
       this.toster.showMessege(messege)
    })
  }

}
