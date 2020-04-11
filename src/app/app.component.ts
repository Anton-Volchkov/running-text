import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReadText';
  Text:string = "";
  speed:number=1;
  b:boolean = true;

  lol(obj:any)
  {
   console.log(obj);
  }
  Change()
{
  this.b = !this.b;
 setTimeout(() => {
  this.b = !this.b;
 },100);
}
}


