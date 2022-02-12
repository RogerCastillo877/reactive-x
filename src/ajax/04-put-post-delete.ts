import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// ajax.post(url, {
//     id: 1,
//     name: 'Rocas'
// }, {
//     'x-token': 'A3214adsf'
// }).subscribe( console.log )

ajax({
    url,
    method: 'POST',
    headers: {
        'x-token': 'A3214adsf'
    },
    body: {
        id: 1,
        name: 'Rocas'
    }
}).subscribe( console.log )