//Angular and Ionic stuff
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from "@angular/common/http";
import { CurrencyMaskModule } from "ng2-currency-mask";

//Angular Fire (Firebase stuff)
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

//MyApp and all pages in this app
import { MyApp } from './app.component';
import { TabsPage } from "../pages/tabs/tabs";
import { PutItemUpForRentPage } from "../pages/put-item-up-for-rent/put-item-up-for-rent";
import { ItemsForRentPage } from "../pages/items-for-rent/items-for-rent";
import { ItemPage } from "../pages/item/item";
import { CategoryPage } from "../pages/category/category";
import { LoginSignupPage } from "../pages/loginSignup/loginSignup";

//Providers in this app
import { AngularFireDbProvider } from '../providers/angular-fire-database/angular-fire-db';
import { AuthProvider } from '../providers/auth/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCPx0Q9T8Vtf70nvT5_-KGvtj0WDO7Oniw",
  authDomain: "venture-19ef6.firebaseapp.com",
  databaseURL: "https://venture-19ef6.firebaseio.com",
  projectId: "venture-19ef6",
  storageBucket: "venture-19ef6.appspot.com",
  messagingSenderId: "201377367365"
};

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PutItemUpForRentPage,
    ItemsForRentPage,
    ItemPage,
    CategoryPage,
    LoginSignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    CurrencyMaskModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PutItemUpForRentPage,
    ItemsForRentPage,
    ItemPage,
    CategoryPage,
    LoginSignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDbProvider,
    AuthProvider
  ]
})
export class AppModule {}
