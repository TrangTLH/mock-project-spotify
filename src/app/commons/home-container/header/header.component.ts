import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false;

  username: string = 'Huyen Trang';

  btnSignup: string = 'Sign up';

  btnLogin: string = 'Log in';

  btnUpgrade: string = 'Upgrade';

  btnAccount: string =  'Account';

  btnProfile: string = 'Profile';

  btnLogout: string =  'Logout';

  constructor() {
  }

  ngOnInit(): void {
  }

  login() {
  }
}

