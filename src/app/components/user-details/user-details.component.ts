import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';
import { UserDetails } from '../models/userDetails';
import { Users } from '../models/users';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input() userList: Users[];
  userDetails: any;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this._route.params.subscribe((id) => {
      let userId: number = Number(id);
      this.userDetails = this.userList.filter((user) => {
        user.id = userId;
      });
    });
    console.log(this.userDetails);
  }
}
