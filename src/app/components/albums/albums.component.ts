import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';
import { UserDetails } from '../models/userDetails';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  // userDetailsList: UserDetails[];
  constructor() {}
  // private _userService: UserService,
  // private _route: ActivatedRoute

  ngOnInit() {
    // this._route.params.subscribe((id) => {
    //   let userId: number = Number(id);
    //   if (id) {
    //     this._userService.getUserDetails(userId).subscribe((userDetails) => {
    //       this.userDetailsList = userDetails;
    //     });
    //   }
    // });
  }
}
