import { Component, OnInit } from '@angular/core';

export class dataModel {
  name: string;
  percent: number;
}

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.css']
})
export class DataTablesComponent implements OnInit {

  datas: dataModel[];

  constructor() { }

  ngOnInit() {
    this.datas = [
      { name: 'Update software', percent: 50 },
      { name: 'Cleanup database', percent: 70 },
      { name: 'Cron job running', percent: 30 },
      { name: 'Fix and squish bugs', percent: 90 }
    ];
  }

  setProgressStyle(data: dataModel){
    let styles = {
      width: data.percent.toString() + '%'
    }
    return styles;
  }

  setProgressClass(data: dataModel){
    let classs = {
      'progress-bar': true,
      'progress-bar-danger': data.percent < 40,
      'progress-bar-yellow': data.percent >= 40 && data.percent < 60,
      'progress-bar-primary': data.percent >= 60 && data.percent < 80,
      'progress-bar-success': data.percent >= 80
    }
    return classs;
  }

  setBadgeClass(data: dataModel){
    let classs = {
      'badge': true,
      'bg-red': data.percent < 40,
      'bg-yellow': data.percent >= 40 && data.percent < 60,
      'bg-light-blue': data.percent >= 60 && data.percent < 80,
      'bg-green': data.percent >= 80
    }
    return classs;
  }

}
