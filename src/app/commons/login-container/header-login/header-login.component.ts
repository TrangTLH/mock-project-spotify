import {Component, OnInit} from '@angular/core';
import axios from "axios";
import {Routing} from "@enums/routing.enum";
import {Router} from "@angular/router";

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

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    var params = this.getHashParams();
    const token: string = localStorage.getItem('token') ?? 'undefined';
    const isToken = !token.includes('undefined');
    if (!isToken) {
      localStorage.setItem('token', params.access_token);
    }

  }

  clientId: string = '6226f6eb3905465e885f3d60e4b60638';
  clientSecret: string = 'edd3124c34a049f2bf9657d0b2bface7';
  redirectUri: string = 'http://localhost:4200/callback';
  scopes: string = 'user-read-private user-read-email playlist-read-private streaming app-remote-control';
  playlists: any;
  deviceId: string = '';

  generateRandomString(length: number) {
    let text = '';
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  login() {
    let url: string = `https://accounts.spotify.com/authorize?response_type=token&client_id=${this.clientId}&scope=${this.scopes}&redirect_uri=${this.redirectUri}`;
    window.location.href = url;
    this.isLogin = true;
    this.router.navigate([`/${Routing.Home}`])
  }

  getHashParams() {
    let hashParams: any = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  async getPlayList() {
    try {
      const response = await axios.get(
        'https://api.spotify.com/v1/me/playlists',
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      );
      this.playlists = response.data;
    } catch (error: any) {
      localStorage.setItem('token', 'undefined');
    }
  }

  async play() {
    console.log("deviceId", this.deviceId)
    try {
      const response = await axios.put(
        `https://api.spotify.com/v1/me/player/play?&device_id=${this.deviceId}`,
        {
          context_uri: 'spotify:playlist:37i9dQZF1E38xwnJHPRquA',
          offset: {
            position: 0
          },
          position_ms: 0
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          }
        }
      );
      console.log('play', response);
    } catch (error: any) {
      localStorage.setItem('token', 'undefined');
    }
  }

  async pause() {
    console.log("deviceId", this.deviceId)
    try {
      const response = await axios.put(
        `https://api.spotify.com/v1/me/player/pause?&device_id=${this.deviceId}`,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          }
        }
      );
      console.log('play', response);
    } catch (error: any) {
      localStorage.setItem('token', 'undefined');
    }
  }
}


