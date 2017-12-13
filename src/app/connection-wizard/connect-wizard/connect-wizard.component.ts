import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import {HostingSettings} from "../model/hosting-settings";
import {GlobalDataService} from "../global-data.service";
import {HostingStateDirective} from "../hosting-state.directive";
import {HostingStateComponent} from "../model/hosting-state-component";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {AuthenticationService} from "../../authentication/authentication.service";
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

    constructor(private spinnerService: Ng4LoadingSpinnerService, private globalData:GlobalDataService, private componentFactoryResolver: ComponentFactoryResolver) {
        let hs:any = this.fromLS();
        if(hs){
            this.hostingSettings = hs;
        }else {
            this.hostingSettings = new HostingSettings();
        }
        this.chooseComponent();
    }

    ngAfterViewInit() {
        this.loadComponent(this.component);
    }

    chooseComponent(){
        if(this.hostingSettings.stage == null && AuthenticationService.getUser().website)
            this.hostingSettings.stage = 'choose-tariff';
        let stageComponent:HostingStateComponent = this.globalData.getStage(this.hostingSettings.stage);
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
        localStorage.setItem('hosting_settings', JSON.stringify(this.hostingSettings));
    }

    fromLS():HostingSettings|boolean{
        let hs:any = localStorage.getItem('hosting_settings');
        if (hs) {
            hs = new HostingSettings().fillFromJSONString(hs);
            return <HostingSettings>hs;
        }
        return false;
    }
}
