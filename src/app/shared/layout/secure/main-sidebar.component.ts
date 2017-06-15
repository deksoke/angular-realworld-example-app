import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common.service';
import { Observable } from 'RxJs'

@Component({
  selector: 'main-sidebar',
  templateUrl: './main-sidebar.component.html'
})
export class MainSidebarComponent implements OnInit {

  menu_items: any[];

  constructor(
    private common: CommonService
  ) { }

  ngOnInit() {
    this.common.getMenuItems()
      .subscribe(data => {
        this.menu_items = data;
      });
  }

  getMenuIconClass(): any{
    let iconClass = {

    };

    return iconClass;
  }
}
