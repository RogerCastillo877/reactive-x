import { fromEvent } from "rxjs";
import { first, map, take, tap } from "rxjs/operators";

const click$ = fromEvent<PointerEvent>( document, 'click');

click$.pipe(
    tap( console.log ),
    // first<PointerEvent>( event => event.y >= 150)
    // map<PointerEvent>( event => ({
    //     y: event.y,
    //     x: event.x
    // }))
    map<PointerEvent,any>( ({ y, x}) => ({ y, x })),
    first( event => event.y >= 150)
)
.subscribe({
    next: val => console.log('val', val),
    complete: () => console.log('complete')
})