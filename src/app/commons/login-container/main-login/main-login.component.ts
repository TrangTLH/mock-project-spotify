import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.scss']
})
export class MainLoginComponent implements OnInit {
  txtPremium = 'SPOTIFY PREMIUM';

  txtLine1 = 'Ends soon: 3 months of Premium for free';

  txtLine2 = 'Don\'t miss ad-free music listening, offline playback, and more. Cancel anytime.';

  btnGetMonth = 'Get 3 months free';

  txtFooter1 = 'Individual plan only. 59,000₫/month after. ';
  txtFooter2 = 'Terms and conditions apply.';
  txtFooter3 = ' Open only to users who haven\'t already tried Premium. Offer ends 19 May 2022.';

  image = 'assets/images/login/login.jpg';

  txtLine3 = 'Looking for music?';

  txtLine4 = 'Start listening to the best new releases.';

  btnOpenWeb = 'Open Web Player'
  constructor() {
  }

  ngOnInit(): void {
  }


}
