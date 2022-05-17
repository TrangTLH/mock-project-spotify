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

  btnOpenWeb = 'Open Web Player';

  txtCompany = 'Company';

  company = [
    {txt: 'About'},
    {txt: 'Jobs'},
    {txt: 'For the Record'}
  ];

  txtCommunities = 'Communities';

  communities = [
    {txt: 'For Artists'},
    {txt: 'Developers'},
    {txt: 'Advertising'},
    {txt: 'Investors'},
    {txt: 'Vendors'}
  ];

  txtLink = 'Useful links';

  links = [
    {txt: 'Support'},
    {txt: 'Web Player'},
    {txt: 'Free Mobile App'}
  ];

  txtCountry = 'Vietnam (English)';

  bottomLinks = [
    {txt: 'Legal'},
    {txt: 'Privacy Center'},
    {txt: 'Privacy Policy'},
    {txt: 'Cookies'},
    {txt: 'About Ads'}
  ];

  txtVer = '© 2022 Spotify AB';
  constructor() {
  }

  ngOnInit(): void {
  }


}
