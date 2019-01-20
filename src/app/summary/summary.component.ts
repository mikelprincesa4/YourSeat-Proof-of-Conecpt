import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  Visible = false;
  constructor() { }

  clickAdvanced(){
    console.log("HELLO");
    this.Visible = !this.Visible;
    console.log(this.Visible);
  }

  ngOnInit() {
  }

}
