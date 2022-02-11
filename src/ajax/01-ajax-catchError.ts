import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, pluck } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

const fetchPromes = fetch(url);

const errManage = (resp: Response) => {
    if( !resp.ok ) {
        throw new Error( resp.statusText )
    }
    return resp;
}

const gotError = (err:AjaxError) => {
    console.warn('error en:', err)
    return of([]);        
}

// fetchPromes
//     .then(res => res.json())
//     .then(data => console.log('data', data))
//     .catch( err => console.warn('error en los usuarios', err))
    
// fetchPromes
//     .then( errManage )
//     .then(res => res.json())
//     .then(data => console.log('data', data))
//     .catch( err => console.warn('error en los usuarios', err))

ajax( url ).pipe(
    // map( res => res.response)
    pluck('response'),
    catchError( gotError )
)
.subscribe(users => console.log('Usuarios:', users))