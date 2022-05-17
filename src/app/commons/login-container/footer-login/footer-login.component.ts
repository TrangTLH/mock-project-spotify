import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-login',
  templateUrl: './footer-login.component.html',
  styleUrls: ['./footer-login.component.scss']
})
export class FooterLoginComponent implements OnInit {
  txtTitle = 'Upgrade to premium';

  txtBody = 'Try Premium free for 3 months. Listen to your music offline and ad-free. Monthly subscription fee applies after. ' +
    'Open only to users who haven\'t already tried Premium. ' +
    'Offer excludes Family and Duo plans. ';

  txtTerm = 'Terms and conditions apply.';

  txtTime = 'Offer ends in';

  txtDay = '9';

  txtDayUnit = 'Days';

  txtHour = '17';

  txtHourUnit = 'Hours';

  txtMinute = '50';

  txtMinuteUnit = 'Minutes';

  btnGetMonth = 'get 3 months free';

  constructor() {
  }

  ngOnInit(): void {
  }

}
