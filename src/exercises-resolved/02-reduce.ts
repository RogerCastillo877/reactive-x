import { from } from 'rxjs';
import { filter, reduce } from 'rxjs/operators';
(() =>{


    const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];
  
    from(datos).pipe(
        filter<any>( val => !isNaN(val) ),
        reduce( (acc, cur) => acc + cur )
    ).subscribe( console.log )
  
  
})();