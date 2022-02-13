import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const GIHHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'klerith';

forkJoin({
    user: ajax.getJSON(`${GIHHUB_API_URL}/${GITHUB_USER}`),
    repos: ajax.getJSON(`${GIHHUB_API_URL}/${GITHUB_USER}/repos`).pipe(catchError( err => of([]))),
    gists: ajax.getJSON(`${GIHHUB_API_URL}/${GITHUB_USER}/gists`),
}).pipe(
    catchError( err => of(err))
)
.subscribe(console.log)