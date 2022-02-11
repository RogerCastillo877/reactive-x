import { fromEvent, interval } from "rxjs";
import { takeUntil } from "rxjs/operators";

const button = document.createElement('button');
button.innerHTML = 'Detener Timer';

document.querySelector('body').append( button );

const counter$ = interval(1000);
const clickBtn$ = fromEvent( button, 'click');

counter$.pipe(
    takeUntil( clickBtn$ )
)
.subscribe({
    next: val => console.log('val', val),    
    complete: () => console.log('complete'),    
});