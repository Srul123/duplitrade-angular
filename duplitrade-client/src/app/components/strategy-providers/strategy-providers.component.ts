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
    this.tableData = this.appDataService.appData.data.sort(this.compareAndParse);
  }

  compareAndParse(a, b) {
    a.followers = parseInt(a.followers);
    a.win = parseFloat(a.win);
    a.net_pl = parseFloat(a.net_pl);
    a.net_profit = parseFloat(a.net_profit);
    b.followers = parseInt(b.followers);
    b.win = parseFloat(b.win);
    b.net_pl = parseFloat(b.net_pl);
    b.net_profit = parseFloat(b.net_profit);

    return b.followers - a.followers;
  }

  action() {
    alert('action attached');
  }

}
