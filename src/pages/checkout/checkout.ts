import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  duration: number;
  cardInfo: number;
  showCheckoutMsg: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.showCheckoutMsg = false;
  }

  checkout() {
    this.showCheckoutMsg = true;
  }

  goToItemsForRentPage() {
    this.navCtrl.popToRoot();
  }

}
