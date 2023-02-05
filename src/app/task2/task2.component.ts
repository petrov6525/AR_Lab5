import { Component } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component extends AppComponent {
  quotes:string[]=[
  "If you think your teacher is tough, wait till you get a boss",
  "Life is not fair — get used to it!",
  "Success is a lousy teacher. It seduces smart people into thinking they can’t lose",
  "Be nice to nerds. Chances are you’ll end up working for one"
    ]
}
