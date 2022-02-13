import { concat, interval, timer, combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';

(() =>{

    const letras  = ['a','b','c','d','e'];
    const numeros = [1,2,3,4,5];

    const letras$  = interval(1000).pipe(
        map( i => letras[i] ),
        take( letras.length )
    );
    
    const numeros$ = timer(500,1000).pipe(
        map( i => numeros[i] ),
        take( numeros.length )
    );

    combineLatest(letras$, numeros$).pipe(
        map( ([a,b]) => a+b)
    )
    .subscribe( console.log )
})();