//Angular and Ionic stuff
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireDbProvider: AngularFireDbProvider, private http: HttpClient) {
    this.atvString = "ATV's";
    this.rvString = "RV's";
    this.canoesPaddleboardString = "Canoes/Paddleboards";
    this.boatString = "Boats";

    this.http.get('http://localhost:3000/rental/get-all-rentals').subscribe(data => {
      console.log('data LENGTH: ', data.length);
      console.log('data[0]: ', data[0]);

      this.atvs = [];
      this.rvs = [];
      this.canoesPaddleboards = [];
      this.boats = [];

      for (let i = 0; i < data.length; i++) {
        console.log('data[i]: ', data[i]);
        console.log('data[i].category: ', data[i].category);

        switch (data[i].category) {
          case this.atvString:
            console.log('data[i] 2: ', data[i]);
            this.atvs.push(data[i]);
            break;

          case this.rvString:
            this.rvs.push(data[i]);
            break;

          case this.canoesPaddleboardString:
            this.canoesPaddleboards.push(data[i]);
            break;

          case this.boatString:
            this.boats.push(data[i]);
            break;
        }
      }

      console.log('this.atvs: ', this.atvs);
      console.log('this.rvs: ', this.rvs);
    });

    // this.rentalsRef = this.angularFireDbProvider.getRentals();
    // this.rentals = this.rentalsRef.snapshotChanges().map(changes => {
    //   return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    // });
    //
    // this.rentals.forEach(rental => {
    //   this.atvs = [];
    //   this.rvs = [];
    //   this.canoesPaddleboards = [];
    //   this.boats = [];
    //
    //   for (let r in rental) {
    //     switch (rental[r].Category) {
    //       case this.atvString:
    //         this.atvs.push(rental[r]);
    //         break;
    //
    //       case this.rvString:
    //         this.rvs.push(rental[r]);
    //         break;
    //
    //       case this.canoesPaddleboardString:
    //         this.canoesPaddleboards.push(rental[r]);
    //         break;
    //
    //       case this.boatString:
    //         this.boats.push(rental[r]);
    //         break;
    //     }
    //   }
    // });
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
}
