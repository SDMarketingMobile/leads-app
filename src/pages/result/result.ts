import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { LinesProvider } from './../../providers/lines/lines';
import { RoutesProvider } from './../../providers/routes/routes';

import { SeatSelectionPage } from '../seat-selection/seat-selection';

import moment from 'moment';

@IonicPage()
@Component({
	selector: 'page-result',
	templateUrl: 'result.html',
})
export class ResultPage {

	constructor(public navCtrl: NavController, 
				public navParams: NavParams, 
				private routesProv: RoutesProvider, 
				private linesProv: LinesProvider, 
				public loadingCtrl: LoadingController) {}

	public busca = [];
	public line = [];
	public list_routes = [];
	public msgError: any;

	ionViewDidLoad(){
		this.busca = this.navParams.data.busca;
		this.getLinesRoutes();
	}

	goToSeatSelectionPage(routeSelected, lineSelected){
		this.navCtrl.push(SeatSelectionPage, {'routeSelected': routeSelected, 'lineSelected': lineSelected});
	}

	getLinesRoutes(){
		let loader = this.loadingCtrl.create({
			content: "Aguarde! Carregando Informações"
		});

		loader.present();

		this.linesProv.getLines(1, 10, this.busca['origem'], this.busca['destino'])
			.then(lines => {
				this.line = lines['records'][0];
				this.routesProv.getRoutes(1, 10, this.busca['dta_ida'], this.busca['dta_volta'], this.line['id'])
					.then(routes => {
						this.list_routes = routes['records'];
						for(let route of this.list_routes){
							route['departure_hour'] = moment(route['departure_date'], 'DD/MM/YYYY HH:mm:ss').format('HH:mm');
							route['departure_date'] = moment(route['departure_date'], 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
							route['arrival_date'] = moment(route['arrival_date'], 'DD/MM/YYYY HH:mm:ss').format('DD/MM HH:mm');
						}
						loader.dismiss();
					})
					.catch((error) => {
						if (error['status'] == 404)
							this.msgError = error['_body'];
						
						loader.dismiss();
						return false;
					});
			})
			.catch((error) => {
				if (error['status'] == 404)
					this.msgError = error['_body'];
				
					loader.dismiss();
				return false;
			});
	}

}