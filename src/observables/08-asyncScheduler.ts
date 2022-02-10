import { asyncScheduler } from "rxjs";

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const greeting = () => console.log('Hola');
const greeting2 = name => console.log(`Hola ${name}`);

//  Like setTimeout
asyncScheduler.schedule( greeting, 2000);
asyncScheduler.schedule( greeting2, 2000, 'Rocas');

//  Like setInterval
const subs = asyncScheduler.schedule( function(state) {
    
    console.log('state', state);

    this.schedule( state +1, 1000);

}, 2000, 0);

// setTimeout(() => {
//    subs.unsubscribe(); 
// }, 6000);

asyncScheduler.schedule( () => subs.unsubscribe(), 5000);