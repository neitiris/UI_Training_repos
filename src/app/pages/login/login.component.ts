import {Component, OnInit} from '@angular/core';
import {IAuthData} from '../../../shared/interfaces';
import {AuthService} from '../../../services/authservice';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: IAuthData = {email: '', password: ''};
  constructor(
    private authservice: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  auth(user) {
    this.authservice.authenticate(user);
  }
  rUser() {
    this.router.navigate(['', 'registration']);
  }
}
