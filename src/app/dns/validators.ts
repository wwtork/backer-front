import { ValidatorFn, AbstractControl} from "@angular/forms";

interface ValidationResult {
	[key: string]: any
}

export class Validators {
	static ipv4(): ValidatorFn {
		return (control: AbstractControl): ValidationResult => {
			const match: boolean = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm.test(control.value);
			return match
				? null
				: {'ipv4': {value: control.value}};
		};
	}

	static ipv6(): ValidatorFn {
		return (control: AbstractControl): ValidationResult => {
			const match: boolean = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(control.value);
			return match
				? null
				: {'ipv6': {value: control.value}};
		};
	}

	static int(min?: number, max?: number): ValidatorFn {
		return (control: AbstractControl): ValidationResult => {
			const match = /^\d{1,5}$/.test(control.value);
			if (match){
				let val = parseInt(control.value);
				if (min === undefined || val >= min){
					if (max === undefined || val <= max){
						return null;
					}
				}
			}
			return {'int': {value: control.value}};
		};
	}

	static domain(ascii: boolean = true): ValidatorFn {
		return (control: AbstractControl): ValidationResult => {
			if (ascii){
				const match = /^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]?\.(xn--)?([a-z0-9\-]{1,61}|[a-z0-9-]{1,30}\.[a-z]{2,})$/i.test(control.value);
				return match
					? null
					: {'domain': {value: control.value}};
			} else {
				return null; //////
			}
		};
	}

	static regexp(regexp: RegExp): ValidatorFn {
		return (control: AbstractControl): ValidationResult => {
			const match = regexp.test(control.value);
			return match
				? null
				: {'regexp': {value: control.value}};
		};
	}
}
