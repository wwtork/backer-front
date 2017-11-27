import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'rr-rem',
	styles: [`
		.delete-button {
			background: url(../../assets/image/delete_rr.png) no-repeat;
			border: none;
			width: 28px;
			height: 28px;
		}
		.delete-button:focus,
		.delete-button:active {
			outline: none;
		}
	`],
	template: `
		<ng-template #content let-resolve="resolve" let-reject="reject" let-mouseOn="mouseOn" let-mouseOff="mouseOff">
			<div (mouseenter)="mouseOn()" (mouseleave)="mouseOff()" style="margin: -9px -14px; padding: 9px 14px;">
			<button type="button" class="btn btn-block btn-danger" (click)="resolve()">Yes</button>
			<button type="button" class="btn btn-block btn-default" (click)="reject()">No</button>
			</div>
		</ng-template>
		<button type="button"
			class="delete-button"
			[ngbPopover]="content"
			#popover="ngbPopover"
			popoverTitle="Really remove?"
			triggers="manual"
			placement="left"
			(click)="toggle()"
			(blur)="onBlur()">
			
		</button>
	`
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