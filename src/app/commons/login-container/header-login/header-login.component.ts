import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.scss']
})
export class HeaderLoginComponent implements OnInit {
  isLogin: boolean = false;

  btnPremium: string = 'Premium';

  btnSupport: string = 'Support';

  btnDownload: string = 'Download';

  btnSignup: string = 'Sign up';

  btnLogin: string = 'Log in';

  btnProfile: string = 'Profile';

  btnAccount: string = 'Account';

  btnLogout: string = 'Log out'

  constructor() {
  }

  ngOnInit(): void {
  }

  login(){}
}


