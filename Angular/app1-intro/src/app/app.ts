import { Component, signal } from '@angular/core';
import { Intro } from './intro/intro';
import { Sample } from './sample/sample';
import { User } from './user/user';
import { Parent } from './parent/parent';
import { ParentDemo } from './ChildToParent/parent-demo/parent-demo';

@Component({
  selector: 'app-root',
  imports: [ParentDemo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('app1-intro');
}
