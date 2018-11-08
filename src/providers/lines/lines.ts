import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { UtilsProvider } from '../utils/utils';

@Injectable()
export class LinesProvider {

	constructor(public http: Http, private utilProv: UtilsProvider) {}

	getLines(offset:number, limit:number, city_origin:string, city_destiny:string){
		var filter = "";
		
		if (city_origin)
			filter += "&city_origin="+city_origin;

		if (city_destiny)
			filter += "&city_destiny="+city_destiny;


		return new Promise((resolve, reject) => {
			this.http.get(this.utilProv.urlApi()+'lines?offset='+ offset +'&limit='+ limit + filter)
				.subscribe((result: any) => {
					resolve(result.json());
				},
				(error) => {
					reject(error);
				});
		});
	}

}