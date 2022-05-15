import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isPlay: boolean = false;

  song: string = 'Time';

  artist: string = 'Pink Floyd';

  start: string = '0:25';

  end: string = '6:53';

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    if (this.isPlay) {
      return 'far fa-play-circle';
    }
    else{
      return 'far fa-circle-pause';
    }
  }

  playOrPause(){
    this.isPlay = !this.isPlay;
  }

}
