import { Component } from '@angular/core';
import { First } from "../first/first";
import { Second } from '../second/second';

@Component({
  selector: 'app-main',
  imports: [First,Second],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
