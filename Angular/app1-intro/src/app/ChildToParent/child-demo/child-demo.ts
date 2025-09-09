import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  imports: [],
  templateUrl: './child-demo.html',
  styleUrl: './child-demo.css',
})
export class ChildDemo {
  @Output() sendInfo = new EventEmitter();
  welcomeMsgChild: string = 'Welcome to Angular Component Communication - Child';

  sendMessageToParent() {
    this.sendInfo.emit(this.welcomeMsgChild);
  }
}
