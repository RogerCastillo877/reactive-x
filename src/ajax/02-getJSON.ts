import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON( url, {
    'Content-Type': 'application/json',
    'xtoken': 'adfa8e0q8w909ads9'
});

obs$
.subscribe(data => console.log('data', data))