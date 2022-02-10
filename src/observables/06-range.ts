import { asyncScheduler, of, range } from "rxjs";

// const src$ = of(1,2,3,4,5);
const src$ = range(45,5);
const src2$ = range(-5,10);
const src3$ = range(5);
const src4$ = range(1,5, asyncScheduler);

console.log('inicio');
src4$.subscribe( console.log );
console.log('fin');