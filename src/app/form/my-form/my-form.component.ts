import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-my-form',
    templateUrl: './my-form.component.html',
    styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
    defaultCountry = 'CN';
    city = '';
    @ViewChild('f',) userForm!:NgForm;

    onPatch(){
        this.userForm.form.patchValue({
            username:'Alice',
            email:'alice@gmail.com',
            address:{
                country: 'US',
                city:'NYC'
            }
        })
    }
    onSubmit(form: NgForm) {
        console.log(form)
        console.log(form.value)
        console.log(form.valid)
        this.userForm.resetForm();
    }
}
