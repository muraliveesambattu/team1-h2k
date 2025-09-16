import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FirstPersonInterface } from './siblingComponents/first/first';

@Injectable({
  providedIn: 'root',
})
export class Common {
  sendInfo = new BehaviorSubject('');
  sendObject = new BehaviorSubject<FirstPersonInterface>({
    fname: '',
    lname: '',
  });
  getAndSendMessage(msg: string) {
    // Get the Info from the First Component

    // Send the Info To The Second Compoennt
    this.sendInfo.next(msg);
  }

  getAndSendObject(obj: FirstPersonInterface) {
    this.sendObject.next(obj);
    console.log(obj);
  }
}
