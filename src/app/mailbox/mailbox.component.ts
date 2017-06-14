import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {

  constructor() { }

  ngAfterContentInit(){
    window.scroll(0,0);
  }

  ngOnInit() {
  }

}
