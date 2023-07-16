import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
    selector: 'app-test-http',
    templateUrl: './test-http.component.html',
    styleUrls: ['./test-http.component.css']
})
export class TestHttpComponent implements OnInit {
    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(console.log)
        let params = new HttpParams({ fromObject: { name: "alice", age: "18" } })
        params = params.append("sex", "male");
        let fromString = new HttpParams({ fromString: "name=alice&age=20" })
        this.http.get("https://jsonplaceholder.typicode.com/users", {
                params,
                observe:'body'
            }
        ).subscribe(console.log)


    }
}
