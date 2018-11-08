import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserSalesPage } from './user-sales';

@NgModule({
  declarations: [
    UserSalesPage,
  ],
  imports: [
    IonicPageModule.forChild(UserSalesPage),
  ],
})
export class UserSalesPageModule {}
