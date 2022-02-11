import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";

const numbers$ = of(1,2,3,1,1,2,3,5);

numbers$.pipe(
    distinct()
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
];

from(people).pipe(
    distinct( p => p.name )
)
.subscribe(console.log)