import { Component } from '@angular/core';
import { Common } from '../../common';
import { FirstPersonInterface } from '../first/first';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second',
  imports: [CommonModule],
  templateUrl: './second.html',
  styleUrl: './second.css',
})
export class Second {
  msgDisplay: string = '';
  secondPerson: FirstPersonInterface = {
    fname: '',
    lname: '',
  };
  constructor(private cs: Common) {
    this.cs.sendInfo.subscribe((info) => {
      this.msgDisplay = info;
    });
    this.cs.sendObject.subscribe((obj: FirstPersonInterface) => {
      console.log(obj);
      this.secondPerson = obj;
    });
  }
}
