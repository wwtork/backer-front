import {FormBuilder} from "@angular/forms";
import {ResourceRecordComponent} from "./resource-record.component";

export interface ResourceRecordComponentConstructor
{
	new(builder: FormBuilder): ResourceRecordComponent;
	getFormFields(): {};
}