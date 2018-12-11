import { Injectable } from '@angular/core';

@Injectable()
export class UtilsProvider {

  constructor() {
    
  }

  urlApi(){
    return 'http://192.168.0.12:4500/';
  }

}
