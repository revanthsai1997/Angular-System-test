import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  employees=[];
  @Output()
  selectedItem=new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  editEmployee(employee){
    this.selectedItem.emit(employee);
  }
  saveEmployee(employee){
    this.employees.push(employee);
  }
  deleteEmployee(employee){
    this.employees.splice(employee,1);
  }
  
  
}
