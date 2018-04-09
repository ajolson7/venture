import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { LoginSignupPage } from "../loginSignup/loginSignup";

@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {

  rental: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
    this.rental = navParams.data;
  }

  rentItem() {
    if (this.auth.getCurrentUser()) {
      console.log('logged in');
      this.auth.logout();
    } else {
      this.navCtrl.push(LoginSignupPage);
    }
  }
}
