import { fromEvent, range } from "rxjs";
import { map } from "rxjs/operators";


// range(1,5)
//     .pipe(
//         map<number, number>( val => val * 10)
//     )
//     .subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map( event => event.code)
)

keyup$.subscribe( val => console.log( 'map', val.code) );
keyupCode$.subscribe( val => console.log( 'map1', val) );