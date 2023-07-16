import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MyValidators } from "../../myValidators";

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
    genders = ['male', 'female'];

    myForm: FormGroup<any> = new FormGroup({
        'username': new FormControl('defaultName', MyValidators.noSpace, MyValidators.beUnique),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'gender': new FormControl('male'),
        'address': new FormGroup({
            'country': new FormControl(null, Validators.required),
            'city': new FormControl(null)
        }),
        'education': new FormArray([])
    });


    onSubmit() {
        console.log(this.myForm);
        console.log(this.myForm.value)

    }

    onAddEdu() {
        let eduSect = new FormGroup({
            'schoolName': new FormControl(null),
            'degree': new FormControl(null)
        });
        this.education.push(eduSect);
        console.log(this.education.length);
    }

    onDelEdu(index: number) {
        this.education.removeAt(index);
    }

    get education() {
        return <FormArray>this.myForm.get('education');
    }


    contactForm = new FormGroup({
        contacts: new FormArray([])
    })

    get contacts() {
        return <FormArray>this.contactForm.get('contacts')
    }

    addContacts() {
        let contact = new FormGroup({
            name: new FormControl("",
                [Validators.required, Validators.minLength(3)]),
            phone: new FormControl()
        })
        this.contacts.push(contact)
    }

    deleteContact(index: number) {
        this.contacts.removeAt(index)
    }

    submitContact() {
        console.log(this.contactForm.value)
        console.log(this.contactForm.value.contacts)
        this.contactForm.valid

    }


    fbForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.fbForm = fb.group({
            fullName: fb.group({
                firstName:["dafault",[Validators.required],[MyValidators.beUnique]],
                lastName:['']
            }),
            phone:[],
            address:fb.array([])
        })
    }

}
