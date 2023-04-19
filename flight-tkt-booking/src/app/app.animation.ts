import { trigger, transition, style, animate } from '@angular/animations';
export const fadeAnimation = trigger('fadeAnimation', [
    transition(':enter', [
        style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]
    ),
    transition(':leave',
        [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]
    )
]);
export const inOutAnimation = trigger('inOutAnimation', [
    transition(':enter', [style({ height: 0, opacity: 0 }), animate('0s ease-out', style({ height:0, opacity: 1 }))]),
    transition(':leave', [style({ height: 0, opacity: 1 }), animate('0s ease-in', style({ height:0, opacity: 0 }))])
]);
