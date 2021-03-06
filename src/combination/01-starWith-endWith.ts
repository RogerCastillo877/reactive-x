import { of } from "rxjs";
import { endWith, startWith } from "rxjs/operators";

const numbers$ = of(1,2,3).pipe(
    startWith('a','b','c'),
    endWith('z','x','y')
);

numbers$.subscribe(console.log)