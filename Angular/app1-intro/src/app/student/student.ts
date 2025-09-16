import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
interface StudentInterface {
  fname: string;
  lname: string;
  email: string;
}

@Component({
  selector: 'app-student',
  imports: [FormsModule, CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  editIndex: any = null; // To store the Index
  allStudents: StudentInterface[] = [
    { fname: 'murali', lname: 'krishna', email: 'murali@gmail.com' },
    { fname: 'murali1', lname: 'krishna1', email: 'murali1@gmail.com' },
    { fname: 'murali2', lname: 'krishna2', email: 'murali2@gmail.com' },
    { fname: 'murali3', lname: 'krishna3', email: 'murali3@gmail.com' },
  ];
  addStudent(studentForm: NgForm) {
    this.allStudents.push(studentForm.value);
    studentForm.reset();
  }
  handleDelete(item: StudentInterface) {
    console.log(item);
    const newStudents = this.allStudents.filter((std) => {
      return std.email !== item.email;
    });
    this.allStudents = newStudents;
  }

  handleEdi(item: StudentInterface, studentForm: NgForm, i: number) {
    studentForm.setValue(item);
    this.editIndex = i;
  }
  updateStudent(studentForm: NgForm) {
    this.allStudents[this.editIndex] = studentForm.value ;
    studentForm.reset();
    this.editIndex = null;
  }
}
