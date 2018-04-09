import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { PutItemUpForRentPage } from "../put-item-up-for-rent/put-item-up-for-rent";
import { ItemsForRentPage } from "../items-for-rent/items-for-rent";
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  putItemUpForRent = PutItemUpForRentPage;
  itemsForRent = ItemsForRentPage;
  homePage = HomePage;

  constructor() {

  }

}
