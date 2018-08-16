import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../services/userservice';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adminside',
  templateUrl: './adminside.component.html',
  styleUrls: ['./adminside.component.css']
})
export class AdminsideComponent implements OnInit {

  public usersList: any[] = [];
  public usersListString = '';

  constructor(public userService: UserService,
              private router: Router) {}

  public  ngOnInit() {
    this.getUsers();
  }

  // request to backend for users list
  public getUsers() {
    const urlParams = '?page=1&limit=10';
    this.userService.getUsers(urlParams).subscribe(
      (resp: any) => {
        console.log('getUsers resp', resp);
        this.usersList = resp.rows;
        this.usersListString = JSON.stringify(this.usersList, null, 2);
        console.log('usersListString', this.usersList);
      },
      (err: any) => {
        console.log('err', err);
      },
    );
  }
  // Route to userEdit by id
  public goToDetails(id) {
    this.router.navigate(['', 'adminedit', id]);
  }
  // Route to userEdit for create User
  public createUser() {
    this.router.navigate(['admin', 'adminedit', 'newUser']);
  }
}
