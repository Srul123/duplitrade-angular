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
}
