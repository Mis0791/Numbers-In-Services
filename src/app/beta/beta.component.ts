import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  beta: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.beta = this._dataService.retrieveBeta();
  }

  pushTwo() {
    this._dataService.myBeta(Math.floor(Math.random() * 100))
  }

}
