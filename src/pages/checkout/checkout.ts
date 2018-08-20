import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  private hideShowCC = false;
  private hideShowCD = false;
  private hideShowBL = false;

  btnActivate(cc, cd, bl, a) {

  	switch (a) {
  		case 1:
  			if(cc._color === 'light'){
				cc.color = 'primary';
				cd.color = 'light';
				bl.color = 'light';
			}
			else{
				cc.color = 'light';
			}
  			break;
  		case 2:
  			if(cd._color === 'light'){
				cd.color = 'primary';
				cc.color = 'light';
				bl.color = 'light';
			}
			else{
				cd.color = 'light';
			}
  			break;
  		case 3:
  			if(bl._color === 'light'){
				bl.color = 'primary';
				cd.color = 'light';
				cc.color = 'light';
			}
			else{
				bl.color = 'light';
			}
  			break;
  		
  		default:
  			cd.color = 'light';
			cc.color = 'light';
			bl.color = 'light';
  			break;
  	}
    
  }

  hideShowBlock(div){
  	switch (div) {
  		case "ccp":
  			this.hideShowCC = !this.hideShowCC;
  			this.hideShowCD = false;
  			this.hideShowBL = false;
  			break;

  		case "cdp":
  			this.hideShowCD = !this.hideShowCD;
  			this.hideShowCC = false;
  			this.hideShowBL = false;
  			break;

  		case "blp":
  			this.hideShowBL = !this.hideShowBL;
  			this.hideShowCD = false;
  			this.hideShowCC = false;
  			break;
  		default:
  			this.hideShowBL = false;
  			this.hideShowCD = false;
  			this.hideShowCC = false;
  			break;
  	}
  		
  }

}
