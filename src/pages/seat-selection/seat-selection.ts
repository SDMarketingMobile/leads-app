import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as _ from 'underscore';

// Pages
import { PassengerInformationPage } from '../passenger-information/passenger-information';


/**
 * Generated class for the SeatSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seat-selection',
  templateUrl: 'seat-selection.html',
})
export class SeatSelectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public assentos: any;
  public selecionados = [];

  public arr_seats = [
      {assento: 1, selected:2},
      {assento: 2, selected:0},
      {assento: 3, selected:0},
      {assento: 4, selected:0},
      {assento: 5, selected:2}
  ];

  selectSeat(item){
    if (item.selected == 0 ) {
      item.selected = 1;

    } else if (item.selected == 1) {
      item.selected = 0;
    } else {
      return false;
    }
    this.selecionados = _.where(this.arr_seats, {selected : 1});

  }

  goToPagePassengerInf(){
    var select = 0;
    for (let item of this.arr_seats){
      if (item['selected'] != undefined && item['selected'] != 0 && item['selected'] == 1) {
        select++;
      }
    }

    if (select > 0)
      this.navCtrl.push(PassengerInformationPage, {seatsSelected:this.arr_seats});
    else
      alert('Selecione ao menos um assento');

  }

}
