import { Injectable } from '@angular/core';

@Injectable()
export class UtilsProvider {

  constructor() {
    
  }

  urlApi(){
    return 'http://192.168.43.77:3000/';
  }

}
