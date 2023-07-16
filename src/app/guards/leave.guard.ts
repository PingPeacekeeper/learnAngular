import { CanDeactivateFn } from '@angular/router';

export interface CanLeave {
    canLeave(): boolean
}

export const leaveGuard: CanDeactivateFn<CanLeave> =
    (component,
     currentRoute,
     currentState,
     nextState) => {
        if (component.canLeave()) {
            return true
        }
        return confirm("leave?")
    };
