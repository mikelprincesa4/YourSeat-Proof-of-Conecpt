import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {
  isVisible = false;
  constructor() { }

  ngOnInit() {
  }

  changeVis(){
    this.isVisible = !this.isVisible;
    console.log(this.isVisible);
  }

}
