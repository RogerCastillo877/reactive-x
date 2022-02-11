import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const numbers$ = range(1,5);

numbers$.pipe(
    tap( x => {
        console.log('antes', x);
        return 10;
    }),
    map( val => val * 10 ),
    // tap( x => console.log('Después', x) )
    tap({
        next: valor => console.log('Después', valor),
        complete: () => console.log('Se terminó')
    })
).subscribe( val => console.log('subs', val)) 