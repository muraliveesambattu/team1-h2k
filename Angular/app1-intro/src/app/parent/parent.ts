import { Component } from '@angular/core';
import { Child } from '../child/child';

export interface Person {
  firstName: string;
  lastName: string;
  age: number;
  isDeveloper: boolean;
}
export interface User {
  id: number;
  name: string;
  role: string;
}
@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  welcomeMsg: string = 'This is The Message in Parent Component !!!';

  person: Person = {
    firstName: 'Murali VMR',
    lastName: 'Krishna',
    age: 30,
    isDeveloper: true,
  };
  users: User[] = [
    { id: 1, name: 'Ram', role: 'Developer' },
    { id: 2, name: 'Ravi', role: 'Tester' },
    { id: 3, name: 'Kumar', role: 'Manager' },
  ];
}
