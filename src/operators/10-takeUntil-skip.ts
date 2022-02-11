import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

const button = document.createElement('button');
button.innerHTML = 'Detener Timer';

document.querySelector('body').append( button );

const counter$ = interval(1000);
// const clickBtn$ = fromEvent( button, 'click');
const clickBtn$ = fromEvent( button, 'click').pipe(
    tap(() => console.log('Antes')),
    skip(2),
    tap(() => console.log('Después'))
)

counter$.pipe(
    takeUntil( clickBtn$ )
)
.subscribe({
    next: val => console.log('val', val),    
    complete: () => console.log('complete'),    
});