import { Component, signal } from '@angular/core';
import { Intro } from './intro/intro';
import { Sample } from './sample/sample';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [Intro, Sample, User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('app1-intro');
}
