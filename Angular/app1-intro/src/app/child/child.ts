import { Component, Input } from '@angular/core';
import { Person, User } from '../parent/parent';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() receiveMessage: string = '';
  @Input() receivePerson: Person = {
    firstName: '',
    lastName: '',
    age: 0,
    isDeveloper: true,
  };
  @Input() recieveUsers: User[] = [];

  handleClick(usr: User) {
    console.log(usr);
  }
}
