import { FloatbarComponent } from './../floatbar/floatbar.component';
import { Component, OnInit } from '@angular/core';
import { materials } from '../materials';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  materials = materials;
  constructor() { }

  ngOnInit() {
  }

}