export class SpotifyService {
  title = 'mock-project-spotify';
  clientId: string = '6226f6eb3905465e885f3d60e4b60638';
  clientSecret: string = 'edd3124c34a049f2bf9657d0b2bface7';
  redirectUri: string = 'http://localhost:4200/callback';
  scopes: string = 'user-read-private user-read-email playlist-read-private streaming app-remote-control';
  playlists: any;
  deviceId: string = '';

  login() {
    let url: string = `https://accounts.spotify.com/authorize?response_type=token&client_id=${this.clientId}&scope=${this.scopes}&redirect_uri=${this.redirectUri}`;
    window.location.href = url;
  }

}
