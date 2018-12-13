import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ItemPage} from "../item/item";

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  category: string;
  rentals: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rentals = navParams.data;
    // this.category = this.rentals[0].Category;
    console.log('this.rentals: ', this.rentals);
    this.category = this.rentals[0].category;
  }

  goToItemPage(rental: any) {
    //this.navCtrl.setRoot(ItemPage, rental);
    this.navCtrl.push(ItemPage, rental);
  }
}
