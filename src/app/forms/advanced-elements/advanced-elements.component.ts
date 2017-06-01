import { Component, OnInit } from '@angular/core';

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
  }

  toggleEnabledState() {
    this.isEnabled = !this.isEnabled;
  }

  onValueChange($event:any) {
		console.log("Multi select option changed: ", $event);
	}
}
