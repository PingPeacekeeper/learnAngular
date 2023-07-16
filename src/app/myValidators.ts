import { AbstractControl, ValidationErrors } from "@angular/forms";

export class MyValidators {
    static noSpace(control: AbstractControl): ValidationErrors | null {
        let str = control.value
        if (str.includes(' ')) {
            return {
                noSpace: true
            }
        }
        return null;
    }

    static beUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Alice') {
                    resolve({ beUnique: true })
                } else {
                    resolve(null)
                }
            }, 1000)
        })
    }
}