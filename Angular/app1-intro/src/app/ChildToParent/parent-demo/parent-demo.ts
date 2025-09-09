import { Component } from '@angular/core';
import { ChildDemo } from '../child-demo/child-demo';

@Component({
  selector: 'app-parent-demo',
  imports: [ChildDemo],
  templateUrl: './parent-demo.html',
  styleUrl: './parent-demo.css',
})
export class ParentDemo {
  messageFromChild: string = '';
  getInfoParent(info: any) {
    this.messageFromChild = info;
  }
}

// Steps To Be Followed To Send Data from Child to Parent
// 1. In Child Compoent Create a Variable with @Output() Decorator And Assign a Event Emitter Class to the Variable -
// @Output() sendInfo = new EventEmitter();
// 2. Create a Variable which is going Contain the Data , which is supposed to be Send to Parent
// welcomeMsgChild: string = 'Welcome to Angular Component Communication - Child';
// 3. Create An Event Handler which triggers the sendInfo.emit()
//     sendMessageToParent() {
//   this.sendInfo.emit(this.welcomeMsgChild);
// }
// 4. Go to Parent Component HTML & Bind the Output Variable to a function which can receive the Data From the Child Component .

// <app-child-demo (sendInfo) = "getInfoParent($event)"></app-child-demo>

// 5. Once you Receive the Data in Parent Component , Create  a variable and Assign the Recieved data to that Variable .

// getInfoParent(info: any) {
//     this.messageFromChild = info;
//   }
