import { Type } from "@angular/core";
import {IHostingStateComponent} from "../interface/hosting-state-component";
export class HostingStateComponent implements IHostingStateComponent{
    constructor(public component:Type<any>, public state:string){

    }
}
