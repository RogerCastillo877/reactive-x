import { from, of } from "rxjs";
import { map } from "rxjs/operators";

(() =>{

    const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];
  
    const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

    from(nombres).pipe(
        map( capitalizar )
    )
    .subscribe(console.log)
  
})();