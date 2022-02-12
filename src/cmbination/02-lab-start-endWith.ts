import { ajax } from 'rxjs/ajax';
import { startWith } from 'rxjs/operators';

const loadDiv = document.createElement('div');
loadDiv.classList.add('loading');
loadDiv.innerHTML = 'Cargando...';

const body = document.querySelector('body');

ajax.post('https://reqres.in/api/users/2?delay=3')
.pipe(
    startWith(true)
)
.subscribe(resp => {
    
    if( resp === true ) {
        body.append( loadDiv )
    } else {
        document.querySelector('.loading').remove();
    }
    console.log(resp);
})