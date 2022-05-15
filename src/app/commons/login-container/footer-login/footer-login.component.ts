import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-login',
  templateUrl: './footer-login.component.html',
  styleUrls: ['./footer-login.component.scss']
})
export class FooterLoginComponent implements OnInit {

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
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
