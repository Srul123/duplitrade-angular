import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../../services/app-data.service';

@Component({
  selector: 'app-strategy-providers',
  templateUrl: './strategy-providers.component.html',
  styleUrls: ['./strategy-providers.component.scss']
})
export class StrategyProvidersComponent implements OnInit {
  tableData: any;
  constructor(private appDataService: AppDataService) { }

  ngOnInit() {
    this.tableData = this.appDataService.appData.data.sort(this.compare);
  }

  compare(a, b) {
    return b.followers - a.followers;
  }

  action() {
    alert('action attached');
  }

}
