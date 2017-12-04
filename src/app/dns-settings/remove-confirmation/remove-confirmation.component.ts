import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'rr-rem',
	styleUrls: ['./remove-confirmation.component.css'],
	templateUrl: './remove-confirmation.component.html'
})
export class RemoveConfirmationComponent {
	@Input()
	public i: number;
	@Output()
	public onConfirmed = new EventEmitter<number>();

	@ViewChild('popover')
	public popover: NgbPopover;

	private mouseIsHere: boolean = false;

	onBlur(){
		if (!this.mouseIsHere && this.popover.isOpen()){
			this.popover.close();
		}
	}

	toggle(): void {
		if (this.popover.isOpen()) {
			this.popover.close();
		} else {
			this.popover.open({
				resolve: () => {
					this.onConfirmed.emit(this.i);
					this.popover.close()
				},
				reject: () => {
					this.popover.close()
				},
				mouseOn: () => {
					this.mouseIsHere = true;
				},
				mouseOff: () => {
					this.mouseIsHere = false;
				}
			});
		}
	}
}