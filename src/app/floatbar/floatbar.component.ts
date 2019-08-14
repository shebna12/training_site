import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floatbar',
  templateUrl: './floatbar.component.html',
  styleUrls: ['./floatbar.component.scss']
})
export class FloatbarComponent implements OnInit {
  private _opened: boolean = false;
  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  constructor() { }

  ngOnInit() {
  }

}
