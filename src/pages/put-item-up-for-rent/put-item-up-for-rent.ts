import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDbProvider } from "../../providers/angular-fire-database/angular-fire-db";
import { AuthProvider } from "../../providers/auth/auth";
import {LoginSignupPage} from "../loginSignup/loginSignup";

@IonicPage()
@Component({
  selector: 'page-put-item-up-for-rent',
  templateUrl: 'put-item-up-for-rent.html',
})
export class PutItemUpForRentPage {

  item: string;
  generalLocation: string;
  address: string;
  category: string;
  availability: string;
  price: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireDbProvider: AngularFireDbProvider, private auth: AuthProvider) {
  }

  addRental() {
    if (this.auth.getCurrentUser()) {
      console.log('logged in');
      this.angularFireDbProvider.addRental(this.item, this.price, this.generalLocation, this.address, this.category, this.availability);
    } else {
      console.log('not logged in');
      this.navCtrl.push(LoginSignupPage);
    }
  }

}
