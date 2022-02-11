import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';
const errorManage = (resp: AjaxError) => {
    console.warn('error', resp.message);
    return of({
        ok: false,
        users: []
    });
}

// const obs$ = ajax.getJSON( url, {
//     'Content-Type': 'application/json',
//     'xtoken': 'adfa8e0q8w909ads9'
// }).pipe(
//     catchError( errorManage)
// );
// const obs2$ = ajax(url).pipe(
//     catchError( errorManage)
// );

const obs$ = ajax.getJSON( url, {
    'Content-Type': 'application/json',
    'xtoken': 'adfa8e0q8w909ads9'
});
const obs2$ = ajax(url);

// obs2$.subscribe(data => console.log('data', data))
obs$.pipe(
    catchError(errorManage)
)
.subscribe({
    next: val => console.log('val', val),
    error:  err => console.log('error en subs', err),
    complete: () => console.log('complete')
});