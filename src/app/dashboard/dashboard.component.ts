import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
