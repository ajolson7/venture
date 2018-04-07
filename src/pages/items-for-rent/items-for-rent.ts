//Angular and Ionic stuff
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/Observable";

//Angular Fire stuff
import { AngularFireList } from "angularfire2/database";
import { AngularFireDbProvider } from "../../providers/angular-fire-database/angular-fire-db";

//Pages in this app
import { ItemPage } from "../item/item";
import { CategoryPage } from "../category/category";

@IonicPage()
@Component({
  selector: 'page-items-for-rent',
  templateUrl: 'items-for-rent.html',
})
export class ItemsForRentPage {

  rentalsRef: AngularFireList<any>;
  rentals: Observable<any[]>;
  atvs: any[];
  rvs: any[];
  canoesPaddleboards: any[];
  boats: any[];
  atvString: string;
  rvString: string;
  canoesPaddleboardString: string;
  boatString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireDbProvider: AngularFireDbProvider) {
    this.atvString = "ATV's";
    this.rvString = "RV's";
    this.canoesPaddleboardString = "Canoes/Paddleboards";
    this.boatString = "Boats";

    this.rentalsRef = this.angularFireDbProvider.getRentals();
    this.rentals = this.rentalsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    });

    this.rentals.forEach(rental => {
      this.atvs = [];
      this.rvs = [];
      this.canoesPaddleboards = [];
      this.boats = [];

      for (let r in rental) {
        switch (rental[r].Category) {
          case this.atvString:
            this.atvs.push(rental[r]);
            break;

          case this.rvString:
            this.rvs.push(rental[r]);
            break;

          case this.canoesPaddleboardString:
            this.canoesPaddleboards.push(rental[r]);
            break;

          case this.boatString:
            this.boats.push(rental[r]);
            break;
        }
      }
    });
  }

  goToGroupPage(category: string) {
    switch (category) {
      case this.atvString:
        this.navCtrl.push(CategoryPage, this.atvs);
        break;

      case this.boatString:
        this.navCtrl.push(CategoryPage, this.boats);
        break;

      case this.canoesPaddleboardString:
        this.navCtrl.push(CategoryPage, this.canoesPaddleboards);
        break;

      case this.rvString:
        this.navCtrl.push(CategoryPage, this.rvs);
        break;
    }
  }

  goToItemPage(rental: any) {
    //this.navCtrl.setRoot(ItemPage, rental);
    this.navCtrl.push(ItemPage, rental);
  }

}
