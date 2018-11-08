import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { UtilsProvider } from '../utils/utils';

@Injectable()
export class UsersProvider {

	constructor(public http: Http, private utilProv: UtilsProvider) {}

	newUser(obj){

		let body = {
			name: obj['name'],
			email: obj['email'],
			cpf_cnpj: obj['cpf_cnpj'],
			phone_prefix: obj['phone_prefix'],
			phone: obj['phone'],
			iugu_id: obj['iugu_id'],
			profile: obj['profile'],
			address: obj['address'],
			password: obj['password']
		};

		let headers = new Headers();

		headers.append('Content-Type', 'application/json');

		return new Promise((resolve, reject) => {
			this.http.post(this.utilProv.urlApi()+'user', JSON.stringify(body), {headers: headers})
				.subscribe((result: any) => {
					resolve(result.json());
				},
				(error) => {
					reject(error);
				});
		});
	}

}