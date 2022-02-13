import { ajax } from 'rxjs/ajax';
import { switchMap, map } from 'rxjs/operators';
import { zip, of } from 'rxjs';

(() =>{

    const SW_API = 'https://swapi.dev/api';                     
    const getRequest = ( url: string ) => ajax.getJSON<any>(url);
    const text = 'spices';
    const search = 'people/1/';

    getRequest( `${SW_API}/${search}` ).pipe(
        // switchMap( resp => getRequest( resp.species) )
        switchMap( resp => zip( of(resp), getRequest( resp.starships[0]) ) ),
        map( ([personaje, nave]) => ({nave, personaje}))
    ).subscribe( console.log )
})();

		
