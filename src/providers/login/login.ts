import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { UtilsProvider } from '../utils/utils';

@Injectable()
export class LoginProvider {

	constructor(public http: Http, private utilProv: UtilsProvider) {}

	doLogin(email:string, password:string, profile:string){

		let body = {
			email: email,
			password: password,
			profile: profile
		}

		let headers = new Headers();

		headers.append('Content-Type', 'application/json');

		return new Promise((resolve, reject) => {
			this.http.post(this.utilProv.urlApi()+'user/login', JSON.stringify(body), {headers: headers})
				.subscribe((result: any) => {
					resolve(result.json());
				},
				(error) => {
					reject(error);
				});
		});

	}

}
