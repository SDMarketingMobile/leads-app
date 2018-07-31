
import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactPage } from '../../pages/contact/contact';
import { HomePage } from '../../pages/home/home';
import { AboutPage } from '../../pages/about/about';

/*
  Generated class for the PageUtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PageUtilProvider {

  constructor(private navCtrl: NavController) {
    console.log('Hello PageUtilProvider Provider');
  }

  goToPage(page){
    this.navCtrl.push(page);
  }

}
