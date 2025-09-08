import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Person {
  fname: string;
  lname: string;
  email: string;
  age: number;
}
interface UserInterface {
  name: string;
}
@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  message: string = 'Welcome to User Component !!!';
  person: Person = {
    fname: 'Murali',
    lname: 'Krishna',
    email: 'murali@gmail.com',
    age: 45,
  };
  users: UserInterface[] = [{ name: 'Ram' }, { name: 'Ravi' }, { name: 'Sam' }, { name: 'Kumar' }];

  handleClick(user: UserInterface) {
    // this.users.push();
    console.log(user);
  }
}
