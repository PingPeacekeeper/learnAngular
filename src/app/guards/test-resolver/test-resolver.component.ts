import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-test-resolver',
    templateUrl: './test-resolver.component.html',
    styleUrls: ['./test-resolver.component.css']
})
export class TestResolverComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        console.log(this.route.snapshot.data);
    }

}
