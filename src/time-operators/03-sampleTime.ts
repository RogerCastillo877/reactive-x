import { map, sampleTime } from "rxjs/operators";
import { fromEvent } from 'rxjs';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    sampleTime(2000),       //  Less memory
    map( ({ x, y }) => ({x,y}) )
    // sampleTime(2000)     //  More memory
)
.subscribe(console.log)
