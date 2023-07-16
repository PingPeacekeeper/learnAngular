import { Component } from '@angular/core';
import { Router, Routes } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { CanLeave } from "../leave.guard";

@Component({
    selector: 'app-test-leave',
    templateUrl: './test-leave.component.html',
    styleUrls: ['./test-leave.component.css']
})
export class TestLeaveComponent implements CanLeave {
    constructor(private router: Router) {
    }

    jump() {
        this.router.navigate(["/testResolver"])
    }

    form = new FormGroup({
        username: new FormControl()
    })

    canLeave(): boolean {
        return !this.form.dirty
    }


}
