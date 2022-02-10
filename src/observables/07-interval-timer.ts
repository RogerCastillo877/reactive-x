import { interval, timer } from "rxjs"


const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete')
}

const todayIn5 = new Date();
todayIn5.setSeconds( todayIn5.getSeconds() + 5);

const interval$ = interval(1000);
const timer$ = timer(2000);
const timer1$ = timer(0);
const timer3$ = timer(2000, 1000);
const timer4$ = timer(todayIn5);

console.log('inicio');
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('fin');