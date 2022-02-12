import { fromEvent, of } from "rxjs";
import { map, tap, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const body = document.querySelector('body')

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const sumitbBtn = document.createElement('button');

const httpLoginRequest = ( userPass ) =>
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
        .pipe(
            pluck('response', 'token'),
            catchError( err => of('Datos invalidos') )
        )

inputEmail.type = 'email';
inputEmail.placeholder = 'email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'password';
inputPass.value = 'pistol';

sumitbBtn.innerHTML = 'Ingresar';

form.append( inputEmail, inputPass, sumitbBtn );
body.append(form);

const submitForm$ = fromEvent( form, 'submit').pipe(
    tap( e => e.preventDefault()),
    map( e => ({
        email: e.target[0].value,
        password: e.target[1].value
    })),
    // mergeMap( httpLoginRequest ) //  Realiza todas las peticiones simultaneamente
    // switchMap( httpLoginRequest )    // Solo regresa la ùltima peticiòn
    exhaustMap( httpLoginRequest )  //  Solo dispara una peticiòn
)

submitForm$.subscribe( token => {
    console.log(token);
});