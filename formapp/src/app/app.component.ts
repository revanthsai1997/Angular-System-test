import { Component, ViewChild } from '@angular/core';
import { TableComponent } from './table/table.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Details';
  employee={name:'',email:'',date:null,gender:''};
  
  @ViewChild("tablecomponent")tablecomponent:TableComponent

  saveEmployee(){
    this.tablecomponent.saveEmployee(this.employee);
  }
  resetEmployee(){
    this.employee={name:'',email:'',date:null,gender:''};
  }
  editEmployee(event){
    this.employee=event;
    
  }
  updateEmployee(){
    this.employee={name:'',email:'',date:null,gender:''};
  }null
}
