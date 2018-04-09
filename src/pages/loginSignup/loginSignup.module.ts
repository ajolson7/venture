import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginSignupPage } from './loginSignup';

@NgModule({
  declarations: [
    LoginSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginSignupPage),
  ],
})
export class LoginSignupPageModule {}
