import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isLogin: boolean = true;

  title: string = 'Spotify';

  btnHome: string = 'Home';

  btnSearch: string = 'Search';

  btnLibrary: string = 'Your Library';

  btnCreatePlaylist: string = 'Create Playlist';

  btnLikedSongs: string = 'Liked Songs'

  btnDownload: string = 'Download'
  playlists = [
    {title: 'My playlist #1'},
    {title: 'My playlist #2'},
    {title: 'My playlist #3'},
    {title: 'My playlist #4'},
    {title: 'My playlist #5'},
    {title: 'My playlist #6'},
    {title: 'My playlist #7'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
