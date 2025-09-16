import { Component, signal } from '@angular/core';
import { Intro } from './intro/intro';
import { Sample } from './sample/sample';
import { User } from './user/user';
import { Parent } from './parent/parent';
import { ParentDemo } from './ChildToParent/parent-demo/parent-demo';
import { Main } from './siblingComponents/main/main';
import { Student } from './student/student';
import { Employee } from './employee/employee';

@Component({
  selector: 'app-root',
  imports: [Employee],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('app1-intro');
}
