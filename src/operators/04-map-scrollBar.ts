import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const text = document.createElement('div');
text.innerHTML = `
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, ducimus reiciendis explicabo et cum illo nobis ipsa ullam animi fugit atque perspiciatis itaque nulla mollitia cupiditate iste. Animi, soluta aut.
<br /><br />
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, ducimus reiciendis explicabo et cum illo nobis ipsa ullam animi fugit atque perspiciatis itaque nulla mollitia cupiditate iste. Animi, soluta aut.
<br /><br />
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, ducimus reiciendis explicabo et cum illo nobis ipsa ullam animi fugit atque perspiciatis itaque nulla mollitia cupiditate iste. Animi, soluta aut.
<br /><br />
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, ducimus reiciendis explicabo et cum illo nobis ipsa ullam animi fugit atque perspiciatis itaque nulla mollitia cupiditate iste. Animi, soluta aut.
<br /><br />
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const calcPercentageScroll = ( event ) => {
    
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;

    return (scrollTop/(scrollHeight - clientHeight ) ) * 100;
}

const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
    // map( event => calcPercentageScroll(event))
    map( calcPercentageScroll),
    tap( console.log )
);

progress$.subscribe( percentage => {
    progressBar.style.width = `${percentage}%`;
})