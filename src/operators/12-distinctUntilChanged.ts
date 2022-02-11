import { from, of } from "rxjs";
import { distinct, distinctUntilChanged } from 'rxjs/operators';

const numbers$ = of(1,2,3,1,1,2,3,1,5);

numbers$.pipe(
    // distinct()
    distinctUntilChanged()
)
.subscribe( console.log )

interface Person {
    name: string
}

const people: Person[] = [
    {
        name: 'Megaman'
    },
    {
        name: 'X'
    },
    {
        name: 'Zero'
    },
    {
        name: 'Megaman'
    },
    {
        name: 'Zero'
    },
    {
        name: 'Zero'
    },
];

from(people).pipe(
    // distinct( p => p.name )
    distinctUntilChanged( (bef, cur) => bef.name === cur.name )
)
.subscribe(console.log)