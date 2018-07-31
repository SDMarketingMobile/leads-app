import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AdvancedSearchPage } from '../advanced-search/advanced-search';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToAdvancedSearchPage(){
    this.navCtrl.push(AdvancedSearchPage);
  }

  goToAboutPage(){
    this.navCtrl.setRoot(AboutPage);
  }

}
