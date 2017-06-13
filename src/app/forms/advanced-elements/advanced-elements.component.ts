import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

interface ExampleSelectizeOption {
	label: string;
	value: string;
	code: string;
}
const DEFAULT_DROPDOWN_CONFIG:any = {
	highlight: false,
	create:false,
	persist:true,
	plugins: ['dropdown_direction', 'remove_button'],
	dropdownDirection: 'down'
};
const STATE_TOGGLE_EXAMPLE_CONFIG = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value'
});
const ExampleValues_Frameworks:ExampleSelectizeOption[] = <ExampleSelectizeOption[]>[
	{
		label: 'Angular',
		value: 'angular',
		code: 'NG'
	}, {
		label: 'ReactJS',
		value: 'reactjs',
		code: 'RJS'
	}, {
		label: 'Ember JS',
		value: 'emberjs',
		code: 'emjs'
	}, {
		label: 'Ruby on Rails',
		value: 'ruby_on_rails',
		code: 'ROR'
	}
];
const MULTI_SELECT_CONFIG:any = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	maxItems: 5
});


declare var $:any;
@Component({
  selector: 'app-advanced-elements',
  templateUrl: './advanced-elements.component.html',
  styleUrls: ['./advanced-elements.component.css']
})
export class AdvancedElementsComponent implements OnInit {

  isEnabled:boolean = true;
	config:any = STATE_TOGGLE_EXAMPLE_CONFIG;
	options: any = ExampleValues_Frameworks.slice(0);
	value: string;

  multipleConfig:any = MULTI_SELECT_CONFIG;
  multipleValue: string[];

  constructor() { }

  ngOnInit() {

	//Datemask dd/mm/yyyy
    $("#datemask").inputmask("dd/mm/yyyy", {"placeholder": "dd/mm/yyyy"});
    //Datemask2 mm/dd/yyyy
    $("#datemask2").inputmask("mm/dd/yyyy", {"placeholder": "mm/dd/yyyy"});
    //Money Euro
    $("[data-mask]").inputmask();
	
	//Date picker
    $('#datepicker').datepicker({
      autoclose: true
    });

	//Date range picker
    $('#reservation').daterangepicker();
    //Date range picker with time picker
    $('#reservationtime').daterangepicker({timePicker: true, timePickerIncrement: 30, format: 'MM/DD/YYYY h:mm A'});
    //Date range as a button
    $('#daterange-btn').daterangepicker(
        {
          ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          },
          startDate: moment().subtract(29, 'days'),
          endDate: moment()
        },
        function (start, end) {
          $('#daterange-btn span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }
    );

	//Colorpicker
    $(".my-colorpicker1").colorpicker();
    //color picker with addon
    $(".my-colorpicker2").colorpicker();

    //Timepicker
    $(".timepicker").timepicker({
      showInputs: false
    });
  }

  toggleEnabledState() {
    this.isEnabled = !this.isEnabled;
  }

  onValueChange($event:any) {
		console.log("Multi select option changed: ", $event);
	}
}
