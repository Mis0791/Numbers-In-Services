import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  difference: number;

  constructor(private _dataService: DataService) { }

  ngOnInit() {

  }

  find() {
    this.difference = this._dataService.findDifference();
  }

}
