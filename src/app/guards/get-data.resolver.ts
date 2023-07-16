import { ResolveFn } from '@angular/router';

interface userData {
    name: string;
    age: number;
}

export const getDataResolver: ResolveFn<userData> =
    (route,
     state) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(null)
            }, 1000)
        }).then(() => {
            return { name: 'alice', age: 19 }
        });
        // return { name: 'alice', age: 19 }
    };
