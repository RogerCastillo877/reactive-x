import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

const numbers = [1,2,3,4,5];

const totalAcc = (acc, cur) => acc + cur;

from(numbers).pipe(
    reduce( totalAcc, 0 )
)
.subscribe(console.log);

from(numbers).pipe(
    scan( totalAcc, 0 )
)
.subscribe(console.log);

interface User {
    id?:string,
    auth?: boolean,
    token?: string,
    age?: number
}

const user: User[] = [
    {id: 'Rocas', auth: true, token: null },
    {id: 'Rocas', auth: false, token: 'ABC' },
    {id: 'Rocas', auth: true, token: 'ABC123' },
];

const state$ = from(user).pipe(
    scan<User>( (acc, cur) => {
        return { ...acc, ...cur }
    }, { age:33 })
);

const id$ = state$.pipe(
    map( state => state.id )
)

id$.subscribe( console.log );