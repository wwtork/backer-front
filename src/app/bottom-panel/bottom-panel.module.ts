import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InstructionComponent} from "./instruction/instruction.component";
import {EmergencyHelpComponent} from "./emergency-help/emergency-help.component";
import {BottomPanelComponent} from "./bottom-panel.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BottomPanelComponent,
        InstructionComponent,
        EmergencyHelpComponent
    ],
    exports: [
        BottomPanelComponent
    ]
})
export class BottomPanelModule {
}
