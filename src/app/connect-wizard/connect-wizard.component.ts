import { Component, OnInit, ViewChild, ComponentFactoryResolver, Type, ComponentRef } from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {HostingSettings} from "../model/hosting-settings";
import {GlobalDataService} from "../service/global-data.service";
import {IHostingStateComponent} from "../interface/hosting-state-component";
import {HostingStateDirective} from "../hosting-state.directive";

@Component({
    selector: 'app-connect-wizard',
    templateUrl: './connect-wizard.component.html',
    styleUrls: ['./connect-wizard.component.css']
})
export class ConnectWizardComponent implements OnInit {

    public hostingSettings:HostingSettings;
    public state:string;
    @ViewChild(HostingStateDirective) appHostingState: HostingStateDirective;
    private componentRef;
    private component;

    constructor(private globalData:GlobalDataService, private componentFactoryResolver: ComponentFactoryResolver) {

        this.hostingSettings = new HostingSettings();
        this.chooseComponent();
    }

    ngAfterViewInit() {
        this.loadComponent(this.component);
    }

    chooseComponent(){
        let stageComponent:IHostingStateComponent = this.globalData.getStage(this.hostingSettings.stage);
        console.log(this.hostingSettings.stage);
        console.log(stageComponent);
        this.state = stageComponent.state;
        this.component = stageComponent.component;
    }

    loadComponent(component) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        let viewContainerRef = this.appHostingState.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.hostingSettings = this.hostingSettings;
        this.componentRef.instance.parentComponent = this;
        this.componentRef.changeDetectorRef.detectChanges();

    }

    ngOnInit() {
    }

    nextStage(){
        this.chooseComponent();
        this.loadComponent(this.component);
    }

}
