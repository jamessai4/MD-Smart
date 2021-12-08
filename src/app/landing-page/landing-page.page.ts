import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  constructor(private authser: AuthService) { }

  ngOnInit() {
    this.email = this.authser.user.email
  }
  email:string;

  logout(){
    this.authser.logout()
  }

}

