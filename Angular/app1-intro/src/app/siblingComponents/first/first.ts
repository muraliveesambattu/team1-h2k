import { Component } from '@angular/core';
import { Common } from '../../common';

export interface FirstPersonInterface {
  fname: string;
  lname: string;
}

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {
  // Dependency Injection
  constructor(private cs: Common) {}
  welcomeMessage: string = 'Welcome Message From First Component !!!';

  firstPerson: FirstPersonInterface = {
    fname: 'Murali',
    lname: 'krishna',
  };

  sendMessageToSecond() {
    console.log('sendMessageToSecond Trigged !!');
    this.cs.getAndSendMessage(this.welcomeMessage);
  }
  sendPerson() {
    this.cs.getAndSendObject(this.firstPerson);
  }
}
