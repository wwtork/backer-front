import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[rr-form-host]',
})
export class FormHostDirective {
	constructor(
		public viewContainerRef: ViewContainerRef
	) {}
}
