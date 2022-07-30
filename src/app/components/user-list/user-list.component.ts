import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { Users } from '../models/users';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Output() sendId: EventEmitter<number> = new EventEmitter<number>();
  @Input() userList: Users[];
  constructor(private _router: Router) {}

  ngOnInit() {}

  seeUserDetails = (id: number) => {
    this._router.navigate(['/user-details', id]);
    this.sendId.emit(id);
    console.log(id);
  };
}
