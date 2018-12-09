import { Injectable } from '@angular/core';

@Injectable()
export class UtilsProvider {

  constructor() {
    
  }

  urlApi(){
    return 'http://186.226.56.5:4500/';
  }

}
