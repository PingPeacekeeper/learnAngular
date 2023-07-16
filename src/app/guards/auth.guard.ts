import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router)

    return router.navigate(['home'])
    return true
    return false
    return router.createUrlTree(['home'])
};
