import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDbProvider } from "../../providers/angular-fire-database/angular-fire-db";
import { AuthProvider } from "../../providers/auth/auth";
import { LoginSignupPage } from "../loginSignup/loginSignup";
import {Camera, CameraOptions, PictureSourceType} from "@ionic-native/camera";
import { HttpClient } from "@angular/common/http";

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
  email: string;
  description: string;
  picture: string;
  deposit: number;
  rentalToDelete: string;
  rentalToBeUpdated: string;
  rentalID: string;
  ownerID: string;

  username: string;
  password: string;
  name_first: string;
  name_middle: string;
  name_last: string;
  email2: string;
  phone: string;
  userToDelete: string;
  userToBeUpdated: string;
  userID: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireDbProvider: AngularFireDbProvider, private auth: AuthProvider, private camera: Camera, private http: HttpClient) {
  }

  addRental() {
    // if (this.auth.getCurrentUser()) {
    //   console.log('logged in');
    //
    //   const options: CameraOptions = {
    //     quality: 100,
    //     destinationType: this.camera.DestinationType.DATA_URL,
    //     encodingType: this.camera.EncodingType.JPEG,
    //     mediaType: this.camera.MediaType.PICTURE,
    //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    //   };
    //
    //   this.camera.getPicture(options).then((imageData) => {
    //     let base64Image = 'data:image/jpeg;base64,' + imageData;
    //     this.picture = base64Image;
    //     console.log("base64Image: ", base64Image);
    //     this.angularFireDbProvider.addRental(this.item, this.price, this.generalLocation, this.address, this.category, this.availability, this.email, this.description, this.picture, this.deposit);
    //   }, (err) => {
    //     console.log("err: ", err);
    //   });
    // } else {
    //   console.log('not logged in');
    //   this.navCtrl.push(LoginSignupPage);
    // }

    console.log('testingzzzzzzzzzzzzz');

    this.picture = "../../assets/imgs/rv.png";

    let newRentalData = {
      "owner_id": "f95e6440-dbb0-11e8-a223-1d20643ca777",
      "address": this.address,
      "availability": this.availability,
      "category": this.category,
      "deposit": this.deposit,
      "description": this.description,
      "general_location": this.generalLocation,
      "item": this.item,
      "picture": this.picture,
      "price": this.price
    };

    this.http.post('http://localhost:3000/rental/create-rental', newRentalData).subscribe(data => {
      console.log('rental created: ', data);
    });
  }

  addUser() {
    let newUserData = {
      "username": this.username,
      "password": this.password,
      "name_first": this.name_first,
      "name_middle": this.name_middle,
      "name_last": this.name_last,
      "email": this.email2,
      "phone": this.phone
    };

    this.http.post('http://localhost:3000/user/create-user', newUserData).subscribe(data => {
      console.log('user created: ', data);
    });
  }

  updateRental() {
    let rentalUpdated = {
      "id": this.rentalID,
      "owner_id": this.ownerID,
      "address": this.address,
      "availability": this.availability,
      "category": this.category,
      "deposit": this.deposit,
      "description": this.description,
      "general_location": this.generalLocation,
      "item": this.item,
      "picture": this.picture,
      "price": this.price
    };

    this.http.put('http://localhost:3000/rental/update-rental', rentalUpdated).subscribe(data => {
      console.log('rental updated: ', data);
    });
  }

  updateUser() {
    let userUpdated = {
      "id": this.userID,
      "username": this.username,
      "password": this.password,
      "name_first": this.name_first,
      "name_middle": this.name_middle,
      "name_last": this.name_last,
      "email": this.email2,
      "phone": this.phone
    };

    this.http.put('http://localhost:3000/user/update-user', userUpdated).subscribe(data => {
      console.log('user update: ', data);
    });
  }

  deleteRental() {
    let rentalDeleted = {
      "id": this.rentalToDelete
    };

    this.http.post('http://localhost:3000/rental/delete-rental', rentalDeleted).subscribe(data => {
      console.log('rental deleted: ', data);
    })
  }

  deleteUser() {
    let userDeleted = {
      "id": this.userToDelete
    };

    this.http.post('http://localhost:3000/user/delete-user', userDeleted).subscribe(data => {
      console.log('user deleted: ', data);
    })
  }

}
