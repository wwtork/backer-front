import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PanelComponent} from "../panel/panel.component";
import {RouterModule} from "@angular/router";
import {SidePanelComponent} from "../side-panel/side-panel.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
        PanelComponent,
      SidePanelComponent
  ],
  exports: [
      PanelComponent,
      SidePanelComponent
  ]
})
export class SharedModule { }
