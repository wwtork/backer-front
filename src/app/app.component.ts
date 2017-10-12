import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
    Ng4FilesService,
} from 'angular4-files-upload/src/app/ng4-files/services';
import {
    Ng4FilesConfig,
} from 'angular4-files-upload/src/app/ng4-files/declarations';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(private router:Router,
                private ng4FilesService:Ng4FilesService) {
    }

    private testConfig:Ng4FilesConfig = {
        acceptExtensions: [],
        maxFilesCount: 5,
        maxFileSize: 55120000,
        totalFilesSize: 510120000
    };

    ngOnInit() {
        this.ng4FilesService.addConfig(this.testConfig);
    }
}
