import { from, of } from "rxjs";

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete')    
};

const myGenerator = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const myIterable = myGenerator();

// for( let id of myIterable ) {
//     console.log(id);
// };
from( myIterable).subscribe( observer );

const source$ = from([1,2,3,4,5]);
const source1$ = of(...[1,2,3,4,5]); // same as from
const source2$ = from('Rocas');
const source3$ = from(fetch('https://api.github.com/users/klerith'));
const source4$ = from('Rocas');

// source3$.subscribe( async(resp) => {
//     console.log(resp.url);
//     const dataResp = await resp.json()
//     console.log(dataResp);      
// })

// source3$.subscribe(observer);