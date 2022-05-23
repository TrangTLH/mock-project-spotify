import { Component, OnInit } from '@angular/core';
import axios from 'axios';

declare global {
  interface Window {
    Spotify: any;
    onSpotifyWebPlaybackSDKReady: any;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  txtButton: string = 'Login';

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
        {

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

  ngOnInit(): void {
    window.onSpotifyWebPlaybackSDKReady = async () => {
      const token = localStorage.getItem('token');
      const player = await new window.Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: (cb: any) => {
          cb(token);
        },
      });
      player.connect();
      interface IPlayer {
        device_id: string;
      }
      console.log('player', player);
      await player.addListener('ready', ({ device_id }: IPlayer) => {
        console.log('Ready with Device ID', device_id);
        this.deviceId = device_id;
      });

      // Not Ready
      await player.addListener('not_ready', ({ device_id }: IPlayer) => {
        console.log('Device ID has gone offline', device_id);
      });

    };
    var params = this.getHashParams();
    const token: string = localStorage.getItem('token') ?? 'undefined';
    const isToken = !token.includes('undefined');
    if (!isToken) {
      localStorage.setItem('token', params.access_token);
    }
  }
}
