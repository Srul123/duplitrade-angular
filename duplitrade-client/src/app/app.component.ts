import { Component, OnInit } from '@angular/core';
import { AppDataService } from './services/app-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  errorMessage = '';
  loaded: boolean;
  constructor(private appDataService: AppDataService) { }

  ngOnInit() {
    this.appDataService.appInit()
    .then((data) => {
      this.appDataService.appData = data;
      this.loaded = true;
    }).catch(
      () => {
        console.log('Somthing went wrong )-: ');
        this.errorMessage = 'Somthing went wrong )-: ';
        this.loaded = false;
      });
  }

}
