import { Component, OnInit } from '@angular/core';
import {BoxMusic} from "../../../dto/box-music";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  titleAlbum: string = 'Recently Played';
  titleArtists: string = 'Artists';
  titleDaily: string = 'Daily Mix';
  albums: BoxMusic[] = [
    {
      title: 'PSY 9th',
      info: 'Studio album by Psy',
      img: 'assets/images/album/Psy_-_Psy_9th.png'
    },
    {
      title: 'Hayden James Presents',
      info: 'Hayden James',
      img: 'assets/images/album/hayden_james.jpg'
    },
    {
      title: 'This is love',
      info: 'Studio album by Taylor Swift',
      img: 'assets/images/album/this-is-love.jpg'
    },
    {
      title: 'Habibi',
      info: 'Ricky Rich, Dardan, DJ Gimi-O',
      img: 'assets/images/album/habibi.jpg'
    },
    {
      title: 'So far so good',
      info: 'The Chainsmokers',
      img: 'assets/images/album/so-far-so-good.jpg'
    },
    {
      title: 'The dark side of the moon',
      info: 'Album by Pink Floyd',
      img: 'assets/images/album/the-dark-side-of-the-moon.jpg'
    }
  ]

  artists: BoxMusic[] = [
    {
      title: 'Super Junior',
      info: 'Kpop band',
      img: 'assets/images/artists/super-junior.jpg'
    },
    {
      title: 'Ailee',
      info: 'Solo artist',
      img: 'assets/images/artists/ailee.jpg'
    },
    {
      title: 'Imagine Dragons',
      info: 'Pop band',
      img: 'assets/images/artists/imagine-dragons.jpg'
    },
    {
      title: 'Post Malone',
      info: 'Rapper',
      img: 'assets/images/artists/post-malone.jpg'
    }
  ]

  dailyMix: BoxMusic[] = [
    {
      title: 'Daily Mix 1',
      info: 'NOX Records, DJ Long Nhat, Yan Nguyễn and more',
      img: 'assets/images/daily-mix/daily-mix-1.jpg'
    },
    {
      title: 'Daily Mix 2',
      info: 'Vũ Kem, Gill, Duy B and more',
      img: 'assets/images/daily-mix/daily-mix-2.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
