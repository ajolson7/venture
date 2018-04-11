import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDbProvider } from "../../providers/angular-fire-database/angular-fire-db";
import { AuthProvider } from "../../providers/auth/auth";
import { LoginSignupPage } from "../loginSignup/loginSignup";
import {Camera, CameraOptions, PictureSourceType} from "@ionic-native/camera";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireDbProvider: AngularFireDbProvider, private auth: AuthProvider, private camera: Camera) {
  }

  addRental() {
    if (this.auth.getCurrentUser()) {
      console.log('logged in');

      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      };

      this.camera.getPicture(options).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.picture = base64Image;
        console.log("base64Image: ", base64Image);
        this.angularFireDbProvider.addRental(this.item, this.price, this.generalLocation, this.address, this.category, this.availability, this.email, this.description, this.picture, this.deposit);
      }, (err) => {
        console.log("err: ", err);
      });
    } else {
      console.log('not logged in');
      this.navCtrl.push(LoginSignupPage);
    }
  }

}
