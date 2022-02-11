import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

const numbers$ = of(1,2,3,4,5)
    .pipe( tap(console.log ));

numbers$.pipe(
    tap( t => console.log( 'tap', t)),
    take(3)
)
    .subscribe({
        next: val => console.log('val', val),
        complete: () => console.log('Complete')        
    })