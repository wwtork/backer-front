import {ConnectWizardComponent} from "../connect-wizard/connect-wizard.component";
import {HostingSettings} from "./hosting-settings";
export class HostingStage {
    public hostingSettings:HostingSettings;
    public parentComponent:ConnectWizardComponent;

    onSubmit(){
        this.hostingSettings.stage+=1;
        this.parentComponent.nextStage();
    }
}
