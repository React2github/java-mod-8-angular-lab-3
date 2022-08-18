import { Component } from '@angular/core';


interface athlete{
  personName : string
  sportName : string,
  active: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sports All-stars';
  disablesNewMessage = true;

    personName!: string;
    sportName!: string;
    active!: boolean;

  athletes: athlete []=[];

  players = [
    {
      name: "Michael Jordan",
      sport: "Basketball",
      active: false
    },
    {
      name: "Juan Soto",
      sport: "Baseball",
      active: true
    },
    {
      name: "Tirunesh Dibaba",
      sport: "Runner",
      active: true
    }
  ]


  onSendPlayer() {
  this.athletes.push({
      personName: this.personName,
      sportName: this.sportName,
      active: true
    })
  }

  constructor() {
    console.log("Initiating Angular AppComponent Class");
    setTimeout(() => {
      this.disablesNewMessage = !this.disablesNewMessage;
    }
    , 2000)
  }
}
