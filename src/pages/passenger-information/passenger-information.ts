import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { PassengerConfirmationPage } from '../passenger-confirmation/passenger-confirmation';
//import { PassengerInformaionPage } from '../passenger-information/passenger-information';

@IonicPage()
@Component({
  selector: 'page-passenger-information',
  templateUrl: 'passenger-information.html',
})
export class PassengerInformationPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public formBuilder: FormBuilder)
	{
		this.passengersForm = formBuilder.group({
			gender	:['', Validators.required],
			first_name	:['', Validators.required],
			last_name :['', Validators.required],
			rg		:['', Validators.required],
			cpf		:['', Validators.required],
			birth_date	:['', Validators.required],
		});
	}

	public passengerCurrent	= 0;
	public passengersForm	:any;
	public seats			= [];
	public passengers		= [];
	public data				:any; 

	public errorGender		= false;
	public errorName		= false;
	public errorLastName	= false;
	public errorRG			= false;
	public errorCPF			= false;
	public errorDtaNasc		= false;

	public nextPassenger 	= false;
	public nextPage 		= false;
	public passengerData 	= [];

	ionViewDidLoad() {
		this.data = this.navParams.data;
		this.seats = this.navParams.data.seatsSelecteds;
		if(this.navParams.data.passengers)
			this.passengers = this.navParams.data.passengers;

		this.passengerCurrent = this.navParams.data.passengerCurrent;
		if(this.passengerCurrent == (this.seats.length -1)){
			this.nextPage = true;
		} else {
			this.nextPassenger = true;
		}

		if(this.passengers.length > 0 && this.passengers[this.passengerCurrent]){
			this.passengerData = this.passengers[this.passengerCurrent];
		}
	}

	goToConfirmationPage(passengerData){
		if (this.validaCampos()) {
			if(this.passengers[this.passengerCurrent]){
				this.passengers[this.passengerCurrent] = passengerData;
			}
			else{
				var passenger = Object.assign({}, passengerData)
				this.passengers.push(passenger);
			}
			this.data['seatsSelecteds'] = this.seats;
			this.data['passengers'] = this.passengers;
			this.navCtrl.push(PassengerConfirmationPage, this.data);
		} else {
			const alert = this.alertCtrl.create({
	  			title: '',
	  			subTitle: 'Preencha todos os campos obrigatórios para continuar!',
	  			buttons: ['OK']
	  		});
	  		alert.present();
		}
	}

	goToNextPassenger(passengerData){
		if (this.validaCampos()) {
			if(this.passengers[this.passengerCurrent]){
				this.passengers[this.passengerCurrent] = passengerData;
			}
			else{
				var passenger = Object.assign({}, passengerData)
				this.passengers.push(passenger);
			}

			this.passengerCurrent = (this.passengerCurrent + 1);
			this.data['seatsSelecteds'] = this.seats;
			this.data['passengers'] = this.passengers;
			this.data['passengerCurrent'] = this.passengerCurrent;
			this.navCtrl.push(PassengerInformationPage, this.data);
			this.passengerCurrent = this.passengerCurrent - 1;
		} else {
			const alert = this.alertCtrl.create({
	  			title: '',
	  			subTitle: 'Preencha todos os campos obrigatórios para continuar!',
	  			buttons: ['OK']
	  		});
	  		alert.present();
		}

	}

	validaCampos(){
		let isValid = false;
		let { first_name, last_name, rg, cpf } = this.passengersForm.controls;

		if (!this.passengersForm.valid) {

			if (!first_name.valid){
				this.errorName = true;
				isValid = false;
			} else {
				this.errorName = false;
			}
				
			if (!last_name.valid){
				this.errorLastName = true;
				isValid = false;
			} else {
				this.errorLastName = false;
			}

			/*if (!gender.valid){
				this.errorGender = true;
				isValid = false;
			} else {
				this.errorGender = false;
			}*/
			
			if (!rg.valid){
				this.errorRG = true;
				isValid = false;
			} else {
				this.errorRG = false;
			}
				
			if (!cpf.valid){
				this.errorCPF = true;
				isValid = false;
			} else {
				this.errorCPF = false;
			}
				
			/*if (!birth_date.valid){
				this.errorDtaNasc = true;
				isValid = false;
			} else {
				this.errorDtaNasc = false;
				isValid = true;
			}*/
				
		} else {
			isValid = true;
		}

		if (isValid)
			return true;
		else
			return false;
	}

}
