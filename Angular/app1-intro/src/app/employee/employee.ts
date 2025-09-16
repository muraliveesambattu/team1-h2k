import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface EmployeeInterface {
  fname: string;
  lname: string;
  email: string;
  id: number;
}
@Component({
  selector: 'app-employee',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  employeeForm: FormGroup;
  editIndex: any = null;
  employees: EmployeeInterface[] = [];
  constructor(private _http: HttpClient) {
    this.employeeForm = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''),
    });
    this.getEmployees();
  }

  getEmployees() {
    this._http.get<EmployeeInterface[]>('http://localhost:3000/employees').subscribe((res) => {
      this.employees = res;
    });
  }

  // addEmployee() {
  //   console.log(this.employeeForm.value);
  //   this.employees.push(this.employeeForm.value);
  //   this.employeeForm.reset();
  // }
  addEmployee() {
    this._http.post('http://localhost:3000/employees', this.employeeForm.value).subscribe(() => {
      this.getEmployees();
    });
    this.employeeForm.reset();
  }
  handleEdit(index: number) {
    this.editIndex = index;
    this.employeeForm.setValue(this.employees[index]);
  }
  handleDelete(index: number) {
    this._http
      .delete('http://localhost:3000/employees/' + this.employees[index].id)
      .subscribe(() => {
        this.getEmployees();
      });
  }
  // handleDelete(index: number) {
  //   this.employees.splice(index, 1);
  // }
  // updateEmployee() {
  //   this.employees[this.editIndex] = this.employeeForm.value;
  //   this.employeeForm.reset();
  //   this.editIndex = null;
  // }

  updateEmployee() {
    this._http
      .put(
        'http://localhost:3000/employees/' + this.employees[this.editIndex].id,
        this.employeeForm.value
      )
      .subscribe(() => {
        this.getEmployees();
      });
    this.employeeForm.reset();
    this.editIndex = null;
  }
}
