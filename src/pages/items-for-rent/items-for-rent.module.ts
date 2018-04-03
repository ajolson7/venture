import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemsForRentPage } from './items-for-rent';

@NgModule({
  declarations: [
    ItemsForRentPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemsForRentPage),
  ],
})
export class ItemsForRentPageModule {}
