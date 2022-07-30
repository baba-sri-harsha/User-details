import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  userList: Users[];
  constructor(private _userService: UserService) {}

  ngOnInit() {
    this._userService.getAllUsers().subscribe((data: Users[]) => {
      this.userList = data;
    });
  }
  getTheUserId(event: Event) {}
}
