import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { UtilsProvider } from '../utils/utils';

@Injectable()
export class RoutesProvider {

	constructor(public http: Http, private utilProv: UtilsProvider) {}

	getRoutes(offset:number, limit:number, departure_date:string, arrival_date:string, objId:string){
		var filter = "";

		if (departure_date)
			filter += "&departure_date="+departure_date;

		if (arrival_date)
			filter += "&arrival_date="+arrival_date;

		var line_id = "";
		if (objId) {
			line_id = "&line_id="+ objId;
		}

		return new Promise((resolve, reject) => {
			this.http.get(this.utilProv.urlApi()+'routes?offset='+ offset +'&limit='+ limit + filter + line_id)
				.subscribe((result: any) => {
					resolve(result.json());
				},
				(error) => {
					reject(error);
				});
		});
	}

}
