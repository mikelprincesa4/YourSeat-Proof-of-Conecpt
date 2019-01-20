import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  isVisible = false;
  constructor() { }

  ngOnInit() {
  }

  changeVisbility(){
    this.isVisible = !this.isVisible;
    console.log(this.isVisible);
  }

}
