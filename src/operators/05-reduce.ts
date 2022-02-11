import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const numbers = [1,2,3,4,5];

const totalReducer = (accumalate: number , currentValue: number ) => {
    return accumalate + currentValue;
}

const total = numbers.reduce( totalReducer, 0);
console.log('Total arr', total);

interval(1000)
    .pipe(
        take(4),
        tap( console.log ),
        reduce( totalReducer, 5 )
    )
    .subscribe({
        next: val => console.log('val', val),
        complete: () => console.log('complete')        
    })