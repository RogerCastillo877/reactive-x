import { fromEvent, interval, of } from "rxjs";
import { map, mergeMap, take, takeUntil } from 'rxjs/operators';

const letters$ = of('a','b', 'c');

letters$.pipe(
    mergeMap( (letter) => interval(1000).pipe(
        map( i => letter + 1 ),
        take(3)
    ) )
)
// .subscribe({
//     next: val => console.log('val', val),    
//     complete: () => console.log('complete')
// });

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil(mouseUp$)
    ) )
)
.subscribe(console.log);