import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AuthProvider } from "../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-login-signup',
  templateUrl: 'loginSignup.html',
})
export class LoginSignupPage {

  user = {} as User;
  success: boolean;
  errMsg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
    this.success = true;
  }

  async login(user: User) {
    try {
      const result = await this.auth.login(user.email, user.password);
      console.log("result baby: ", result);

      if (result) {
        this.success = true;
        this.navCtrl.pop();
      } else {
        this.success = false;
        this.errMsg = "Invalid email or password";
      }
    } catch (e) {
      this.success = false;
      //this.errMsg = e.message;
      this.errMsg = "Invalid email or password";
    }
    /*this.result = await this.auth.login(user.email, user.password);
    console.log("result baby: ", this.result);

    if (this.result[0]) {
      this.successOrNot = true;
      this.navCtrl.pop();
    } else {
      this.successOrNot = false;
    }*/
  }

  async signup(user: User) {
    try {
      const result = await this.auth.signup(user.email, user.password);
      console.log("result baby 2: ", result);

      if (result) {
        this.success = true;
        this.navCtrl.pop();
      } else {
        this.success = false;
        this.errMsg = "Invalid email or password";
      }
    } catch (e) {
      this.success = false;
      //this.errMsg = e.message;
      this.errMsg = "Invalid email or password."
    }

  }
}
