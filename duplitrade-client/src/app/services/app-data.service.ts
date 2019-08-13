import { Injectable } from '@angular/core';

import { ApiService } from './api.service';



@Injectable({
  providedIn: 'root'
})


export class AppDataService {
  appData: any;
  constructor(private apiSerive: ApiService) { }

   appInit() {
    return new Promise((resolve, reject) => {
      this.apiSerive.getData()
        .subscribe((next: object) => {
          resolve(next);
      },
      (error) => {
        console.log('error', error);
        reject();
      });
    });
  }

  parseData() {
    this.appData.data.forEach(element => {
      element.followers = parseInt(element.followers);
      element.win = parseFloat(element.win);
      element.net_pl = parseFloat(element.net_pl);
      element.net_profit = parseFloat(element.net_profit);
      element.factor = parseFloat(element.factor);
      element.trades = parseFloat(element.trades);
      element.weeks = parseFloat(element.weeks);
    });
  }


}
