import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import * as _ from 'underscore';
import * as l from 'lodash';

// Pages
import { PassengerInformationPage } from '../passenger-information/passenger-information';

@IonicPage()
@Component({
  selector: 'page-seat-selection',
  templateUrl: 'seat-selection.html',
})
export class SeatSelectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  public assentos: any;
  public selecionados = [];
  public line: any;

  public arr_seats = [];
  public arr_seats2 = [];

  public data: any;
  public routeSelected: any;
  public lineSelected: any;
  public totalCarrinho = 0;
  
  ionViewDidLoad(){
    let loader = this.loadingCtrl.create({
			content: "Aguarde! Carregando Informações"
		});
    loader.present();
    
    this.data = this.navParams.data;
    this.routeSelected = this.navParams.data.routeSelected;
    this.lineSelected = this.navParams.data.lineSelected;
    var vehicle = this.lineSelected['vehicle'];
    var parcial_assentos = vehicle['seats'] / 2;
      parcial_assentos = parcial_assentos;

    for (let i = 1; i <= parcial_assentos; i++) {
      this.arr_seats.push({assento: i, selected:0});
    }

    for (let i = this.arr_seats.length + 1; i <= vehicle['seats']; i++) {
      this.arr_seats2.push({assento: i, selected:0});
    }

     this.arr_seats = l.chunk(this.arr_seats, 2);
     this.arr_seats2 = l.chunk(this.arr_seats2, 2);
     loader.dismiss();
  }


  selectSeat(item){
    if (item.selected == 0 ) {
      item.selected = 1;
      this.selecionados.push(item);
    } else if (item.selected == 1) {
      item.selected = 0;
      var index = this.selecionados.indexOf(item);
      this.selecionados.splice(index, 1)  ;
    } else {
      return false;
    }

    this.selecionados = _.sortBy(this.selecionados, function(o) { return o.assento; });

    this.calculaTotal();
  }

  calculaTotal(){
    this.totalCarrinho = (this.selecionados.length * this.lineSelected['person_price']);
  }

  goToPagePassengerInf(){
    var select = 0;
    for (let obj of this.arr_seats){
      for(let item of obj){
        if (item['selected'] != undefined && item['selected'] != 0 && item['selected'] == 1) {
          select++;
        }
      }
    }

    for (let obj of this.arr_seats2){
      for(let item of obj){
        if (item['selected'] != undefined && item['selected'] != 0 && item['selected'] == 1) {
          select++;
        }
      }
    }

    if (select > 0){
      this.data['seatsSelecteds'] = this.selecionados;
      this.data['passengerCurrent'] = 0;
      this.navCtrl.push(PassengerInformationPage, this.data);
    }
    else{
    	const alert = this.alertCtrl.create({
  			title: '',
  			subTitle: 'Favor, selecione ao menos um assento para prosseguir',
  			buttons: ['OK']
  		});
  		alert.present();
    }

  }

}
