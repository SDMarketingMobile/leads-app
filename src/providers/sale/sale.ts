import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { UtilsProvider } from '../utils/utils';

@Injectable()
export class SaleProvider {

	constructor(public http: Http, private utilProv: UtilsProvider) {}

	getAll(offset, limit, params){
		let url = this.utilProv.urlApi() + "sales";
		
		if(params == null)
			params = [];
		
		params.push({
			key: "offset",
			value: offset
		});
		
		params.push({
			key: "limit",
			value: limit
		});

		if(params != null && params.length > 0) {
			params.forEach((param, index) => {
			  if(index == 0)
				url += "?";
			  else
				url += "&";
	  
			  url += param.key + "=" + param.value;
			});
		}

		return new Promise((resolve, reject) => {
			this.http.get(url)
				.subscribe((result: any) => {
					resolve(result.json());
				},
				(error) => {
					reject(error);
				});
		});
	}

	saveSale(postData){
		var headers = new Headers();
		headers.append("Accept", 'application/json');
		headers.append('Content-Type', 'application/json')
		const requestOptions = new RequestOptions({ headers: headers })

		console.log(postData);
		console.log(requestOptions);
			
		return new Promise((resolve, reject) => {
			this.http.post(this.utilProv.urlApi()+'sale', postData, requestOptions)
				.subscribe((result: any) => {
					resolve(result.json());
				},
				(error) => {
					reject(error.json());
				});
		});		
	}
	
}