import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-list/employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute , private employeeService:EmployeeServiceService) { }

  id:any;
  data:any = null;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.searchById()
  }

  searchById(){
    this.employeeService.getEmployeeById(this.id).subscribe((res)=>{
      this.data = res
    })
  }

}
