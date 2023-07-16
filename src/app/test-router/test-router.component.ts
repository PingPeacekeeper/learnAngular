import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-test-router',
    templateUrl: './test-router.component.html',
    styleUrls: ['./test-router.component.css']
})
export class TestRouterComponent {
    constructor(private router: Router) {

    }

    onRedirect() {
        this.router.navigate(['/newPath']);
    }
}
