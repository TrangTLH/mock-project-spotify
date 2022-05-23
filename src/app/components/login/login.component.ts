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
  constructor() {
  }

  ngOnInit() {
  }
}
