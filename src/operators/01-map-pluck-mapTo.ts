import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";


// range(1,5)
//     .pipe(
//         map<number, number>( val => val * 10)
//     )
//     .subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map( event => event.code)
);

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('Presionada')
);

// keyupCode$.subscribe( val => console.log( 'map1', val) );
keyup$.subscribe( console.log );
keyup$.subscribe( val => console.log( 'map', val.code) );
keyupPluck$.subscribe( code => console.log( 'Pluck', code) );
keyupMapTo$.subscribe( code => console.log( 'Pluck', code) );