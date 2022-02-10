import { fromEvent } from "rxjs";

const src1$ = fromEvent<PointerEvent>( document, 'click');
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup');

const observer = {
    next: val => console.log('next', val)    
};

// src1$.subscribe( e => console.log(`Eje x ${e.x}, eje y ${e.y}`));
src1$.subscribe( ({x, y}) => console.log(`Eje x ${x}, eje y ${y}`));

src2$.subscribe( event => console.log(event.key));