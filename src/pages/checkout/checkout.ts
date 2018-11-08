import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { SaleProvider } from './../../providers/sale/sale';
import { CheckoutSuccessPage } from '../checkout-success/checkout-success';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams, 
		private saleProv: SaleProvider,
		public alertCtrl: AlertController, 
		public loadingCtrl: LoadingController,
		public formBuilder: FormBuilder
	){	
		this.paymentBankSlipForm = formBuilder.group({
			cpf	:['', Validators.required],
			name:['', Validators.required],
		});
		this.paymentCreditCardForm = formBuilder.group({
			numCard	:['', Validators.required],
			secCode :['', Validators.required],
			nameCard :['', Validators.required],
		});
	}
	
	public paymentBankSlipForm: any;
	public errorCPF = false;
	public errorName = false;

	public paymentCreditCardForm: any;
	public errorNumCard = false;
	public errorSecCode = false;
	public errorNameCard = false;

	public data: any;
	public payment = [];
	public customer = [];
	private hideShowCC = false;
	private hideShowBL = false;

	ionViewDidLoad() {
		this.data = this.navParams.data;
		this.customer = JSON.parse(localStorage.getItem('app.leads.user.data'));
	}

	btnActivate(cc, bl, a) {

		switch (a) {
			case 1:
				if(cc._color === 'light'){
					cc.color = 'primary';
					bl.color = 'light';
				}
				else{
					cc.color = 'light';
				}
				this.payment['method'] = 'credit_card';
				break;
			case 2:
				if(bl._color === 'light'){
					bl.color = 'primary';
					cc.color = 'light';
				}
				else{
					bl.color = 'light';
				}
				this.payment['method'] = 'bank_slip';
				break;
			
			default:
				cc.color = 'light';
				bl.color = 'light'; 
				break;
		}

	}

	hideShowBlock(div){
		switch (div) {
			case "ccp":
				this.hideShowCC = !this.hideShowCC;
				this.hideShowBL = false;
				break;
			case "blp":
				this.hideShowBL = !this.hideShowBL;
				this.hideShowCC = false;
				break;
			default:
				this.hideShowBL = false;
				this.hideShowCC = false;
				break;
		}
		
	}

	saveSale(){
		if(this.validaCampos()){
			let loader = this.loadingCtrl.create({
				content: "Aguarde! Finalizando sua compra."
			});
			loader.present();
			var seats = [];
			for(let item of this.data['seatsSelecteds']){
				seats.push(item.assento);
			}
	
			for(let item of this.data['passengers']){
				item['delete'] = false;
			}
	
			var post_data = {
				'customer': this.customer,
				'seats': seats,
				'route': this.data['routeSelected'],
				'passengers': this.data['passengers'],
				'payment_method': this.payment['method'],
				'status': "payment_pending",
				'iugu_id': null
			}
	
			this.saleProv.saveSale(post_data)
				.then(result => {
					this.navCtrl.setRoot(CheckoutSuccessPage);
					loader.dismiss();
				})
				.catch((error) => {
					loader.dismiss();
					return false;
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
		if(this.hideShowBL){
			let isValid = false;
			let { name, cpf } = this.paymentBankSlipForm.controls;
			
			if (!this.paymentBankSlipForm.valid) {
				if (!cpf.valid){
					this.errorCPF = true;
					isValid = false;
				} else {
					this.errorCPF = false;
				}
				if (!name.valid){
					this.errorName = true;
					isValid = false;
				} else {
					this.errorName = false;
				}	
			} else {
				isValid = true;
			}

			if (isValid)
				return true;
			else
				return false;
		} else if(this.hideShowCC){
			let isValid = false;
			let { numCard, secCode, nameCard } = this.paymentCreditCardForm.controls;
			
			if (!this.paymentCreditCardForm.valid) {
				if (!numCard.valid){
					this.errorNumCard = true;
					isValid = false;
				} else {
					this.errorNumCard = false;
				}
				if (!secCode.valid){
					this.errorSecCode = true;
					isValid = false;
				} else {
					this.errorSecCode = false;
				}
				if (!nameCard.valid){
					this.errorNameCard = true;
					isValid = false;
				} else {
					this.errorNameCard = false;
				}
			} else {
				isValid = true;
			}

			if (isValid)
				return true;
			else
				return false;
		}
	}

}