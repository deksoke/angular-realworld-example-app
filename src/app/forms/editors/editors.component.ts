import { Component, OnInit } from '@angular/core';

declare var $:any, CKEDITOR:any;

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.css']
})
export class EditorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Replace the <textarea id="editor1"> with a CKEditor
    // instance, using default configuration.
    CKEDITOR.replace('editor1');
    //bootstrap WYSIHTML5 - text editor
    $('#editor2').wysihtml5();
  }

}
