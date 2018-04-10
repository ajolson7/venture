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
  //rentItemClicked: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
    this.rental = navParams.data;
    //this.rentItemClicked = false;
  }

  rentItem() {
    if (this.auth.getCurrentUser()) {
      console.log('logged in');
      this.auth.logout();

      /*this.rentItemClicked = true;

      console.log("this.auth.getCurrentUser().email: ", this.auth.getCurrentUser().email);
      this.auth.getCurrentUser().sendEmailVerification();*/
    } else {
      this.navCtrl.push(LoginSignupPage);
    }
  }
}
