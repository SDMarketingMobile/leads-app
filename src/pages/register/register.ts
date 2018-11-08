import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App, ViewController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { UsersProvider } from './../../providers/users/users';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public alertCtrl: AlertController,
		public userProv: UsersProvider,
		public appCtrl: App,
		public formBuilder: FormBuilder,
		public viewCtrl: ViewController
	){
		this.newUserForm = formBuilder.group({
			name:			['', Validators.required],
			email:			['', Validators.required],
			password :		['', Validators.required],
			cpfCnpj:		['', Validators.required],
			phonePrefix:	['', Validators.required],
			phone:			['', Validators.required],
			street:			['', Validators.required],
			number:			['', Validators.required],
			district:		['', Validators.required],
			city:			['', Validators.required],
			state:			['', Validators.required],
			zipCode:		['', Validators.required],
			complement: 	[''],
		});
	}

	public newUserForm : any;

	public errorName 		= false;
	public errorEmail 		= false;
	public errorPassword 	= false;
	public errorCpfCnpj 	= false;
	public errorPhonePrefix = false;
	public errorPhone 		= false;
	public errorStreet		= false;
	public errorNumber		= false;
	public errorDistrict	= false;
	public errorCity		= false;
	public errorState 		= false;
	public errorZipCode		= false;

	public newUserObj = {};

	newUser(){
		if(this.validaCampos()){
			let { 	name, email, password, 
				cpfCnpj, phonePrefix, phone, 
				street, number, district, 
				city, state, zipCode, complement
			} = this.newUserForm.controls;

			this.newUserObj = {
				"name": name.value,
				"email": email.value,
				"password": password.value,
				"cpf_cnpj": cpfCnpj.value,
				"phone_prefix": phonePrefix.value,
				"phone": phone.value,
				"address": {
					"street": street.value,
					"number": number.value,
					"district": district.value,
					"city": city.value,
					"state": state.value,
					"zip_code": zipCode.value,
					"complement": complement.value
				},
				"iugu_id": "",
				"profile": "customer"
			}

			this.userProv.newUser(this.newUserObj)
				.then(resp => {
					this.dismissModal(this.newUserObj);
				});
		} else {
			const alert = this.alertCtrl.create({
				title: '',
				subTitle: 'Preencha todos os campos obrigatórios para continuar!',
				buttons: ['OK']
			});
			alert.present();
			return false;
		}
	}

	validaCampos(){
		let isValid = false;
		let { 	name, email, password, 
				cpfCnpj, phonePrefix, phone, 
				street, number, district, 
				city, state, zipCode 
			} = this.newUserForm.controls;

		if (!this.newUserForm.valid) {

			if (!name.valid){
				this.errorName = true;
				isValid = false;
			} else {
				this.errorName = false;
			}
				
			if (!email.valid){
				this.errorEmail = true;
				isValid = false;
			} else {
				this.errorEmail = false;
			}
			
			if (!password.valid){
				this.errorPassword = true;
				isValid = false;
			} else {
				this.errorPassword = false;
			}

			if (!cpfCnpj.valid){
				this.errorCpfCnpj = true;
				isValid = false;
			} else {
				this.errorCpfCnpj = false;
			}

			if (!phonePrefix.valid){
				this.errorPhonePrefix = true;
				isValid = false;
			} else {
				this.errorPhonePrefix = false;
			}

			if (!phone.valid){
				this.errorPhone = true;
				isValid = false;
			} else {
				this.errorPhone = false;
			}

			if(!street.valid){
				this.errorStreet = true;
				isValid = false;
			} else {
				this.errorStreet = false;
			}
			
			if(!number.valid){
				this.errorNumber = true;
				isValid = false;
			} else {
				this.errorNumber = false;
			}

			if(!district.valid){
				this.errorDistrict = true;	
				isValid = false;
			} else {
				this.errorDistrict = false;
			}

			if(!city.valid){
				this.errorCity = true;
				isValid = false;
			} else {
				this.errorCity = false;
			}

			if(!state.valid){
				this.errorState = true;
				isValid = false;
			} else {
				this.errorState = false;
			}

			if(!zipCode.valid){
				this.errorZipCode = true;
				isValid = false;
			} else {
				this.errorZipCode = false;
			}
			
		} else {
			isValid = true;
		}

		if (isValid)
			return true;
		else
			return false;
	}

	dismissModal(data) {
		this.viewCtrl.dismiss(data);
	}

}
