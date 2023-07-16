import { Component } from '@angular/core';

@Component({
    selector: 'app-test-pipe',
    templateUrl: './test-pipe.component.html',
    styleUrls: ['./test-pipe.component.css']
})
export class TestPipeComponent {
    date = new Date();
    money = 100;
    title = 'pipe'
    test = {
        person: [
            { name: 'alice', age: 18 },
            { name: 'bob', age: 20 }
        ]
    }
    text='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
}
