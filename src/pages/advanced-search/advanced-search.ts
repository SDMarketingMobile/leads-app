import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { ResultPage } from '../result/result';

@IonicPage()
@Component({
	selector: 'page-advanced-search',
	templateUrl: 'advanced-search.html',
})
export class AdvancedSearchPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

	}

	public busca = [];


	ionViewDidLoad(){
		this.busca = this.navParams.data.busca;
	}

	goToResultPage(){
		if (this.busca['destino']){
			this.navCtrl.push(ResultPage, {'busca':this.busca});
		}
		else{
			const alert = this.alertCtrl.create({
				title: 'Atenção!',
				subTitle: 'Favor, informe um destino',
				buttons: ['OK']
			});
			alert.present();
		}
	}

}
