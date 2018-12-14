import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class AngularFireDbProvider {

  constructor(public http: HttpClient, private db: AngularFireDatabase) {

  }

  addRental(
    item: string,
    price: number,
    generalLocation: string,
    address: string,
    category: string,
    availability: string,
    email: string,
    description: string,
    picture: string,
    deposit: number) {
    //this.http.put('https://camping-rental.firebaseio.com/', this.test);
    this.db.database.ref('Rentals/').push({
      Item: item,
      Price: price,
      GeneralLocation: generalLocation,
      Address: address,
      Category: category,
      Availability: availability,
      Email: email,
      Description: description,
      Picture: picture,
      Deposit: deposit
    })
  }

  removeRental(key) {
    console.log('key: ', key);
    let rentalDbString = 'Rentals/' + key;
    console.log(rentalDbString);
    this.db.database.ref(rentalDbString).remove().then(() => {console.log('remove succeeded')}).catch(() => {console.log('remove failed')});
  }

  getRentals() {
    return this.db.list('Rentals');
  }

}
