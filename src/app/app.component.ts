import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'awm-frontend-task';
  buttonTriggered(evt: any){
    console.log(evt)
  }

  
}
