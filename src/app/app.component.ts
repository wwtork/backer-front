import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    wizard;

    constructor(private router:Router) {

        this.wizard = this.router.url === '/connection-wizard' || this.router.url ===  '/';
    }

    ngOnInit() {

    }
}
