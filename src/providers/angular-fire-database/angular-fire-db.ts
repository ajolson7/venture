import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class AngularFireDbProvider {

  constructor(public http: HttpClient, private db: AngularFireDatabase) {

  }

  addRental(item: string, price: number, generalLocation: string, address: string, category: string, availability: string, email: string) {
    //this.http.put('https://camping-rental.firebaseio.com/', this.test);
    this.db.database.ref('Rentals/').push({
      Item: item,
      Price: price,
      GeneralLocation: generalLocation,
      Address: address,
      Category: category,
      Availability: availability,
      Email: email
    })
  }

  getRentals() {
    return this.db.list('Rentals');
  }

}
