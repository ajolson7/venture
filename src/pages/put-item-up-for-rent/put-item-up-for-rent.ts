import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDbProvider } from "../../providers/angular-fire-database/angular-fire-db";

@IonicPage()
@Component({
  selector: 'page-put-item-up-for-rent',
  templateUrl: 'put-item-up-for-rent.html',
})
export class PutItemUpForRentPage {

  rentalID: number;
  item: string;
  generalLocation: string;
  address: string;
  category: string;
  availability: string;
  price: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireDbProvider: AngularFireDbProvider) {
  }

  addRental() {
    this.angularFireDbProvider.addRental(this.item, this.price, this.generalLocation, this.address, this.category, this.availability);
  }

}
