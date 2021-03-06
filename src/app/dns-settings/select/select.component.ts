import { Component, Input, Output, EventEmitter } from "@angular/core";

interface ItemOfSelect {
	value: string|number,
	name: string
}

@Component({
	selector: 'wsr-select',
	styleUrls: ['./select.component.css'],
	templateUrl: './select.component.html'
})
export class SelectComponent
{
	private _options: ItemOfSelect[] = [];

	@Input()
	value: string|number;

	@Input()
	set options(options: any[]){
		if (options.length == 0){
			this._options = [];
			return;
		}
		if (typeof options[0] == 'object'){
			this._options = options;
			return;
		}
		if (typeof options[0] == 'string' || typeof options[0] == 'number'){
			this._options.splice(0, this._options.length);
			for (let option of options){
				this._options.push({
					value: option,
					name: option + ''
				});
			}
		}
	};

	get options(){
		return this._options;
	}

	@Output()
	onChange = new EventEmitter<any>();
}