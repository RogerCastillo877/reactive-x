import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    map( ({ x, y }) => ({x, y}) ),
    // takeWhile( ({ y }) => y <= 150)
    takeWhile( ({ y }) => y <= 150, true)
)
.subscribe({
    next: val => console.log('val', val), 
    complete: () => console.log('complete'), 
})