import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { AngularFireDbProvider } from "../../providers/angular-fire-database/angular-fire-db";
import { LoginSignupPage } from "../loginSignup/loginSignup";
import { CheckoutPage } from "../checkout/checkout";

@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {

  rental: any;
  //rentItemClicked: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider, private angularFireDbProvider: AngularFireDbProvider) {
    this.rental = navParams.data;
    //this.rentItemClicked = false;
  }

  rentItem() {
    if (this.auth.getCurrentUser()) {
      console.log('logged in');
      //this.auth.logout();

      /*this.rentItemClicked = true;

      console.log("this.auth.getCurrentUser().email: ", this.auth.getCurrentUser().email);
      this.auth.getCurrentUser().sendEmailVerification();*/

      this.navCtrl.push(CheckoutPage);
    } else {
      this.navCtrl.push(LoginSignupPage);
    }
  }

  deleteItem() {
    console.log('delete item');
    console.log(this.rental);
    console.log(this.rental.key);
    this.angularFireDbProvider.removeRental(this.rental.key);
    this.navCtrl.popToRoot();
  }
}
