var Bacon = require("baconjs");

Bacon
    .interval(1000)
    .take(5) //  lets us listen to only the first x events on the
             // EventStream.
    .map(()=>new Date())
    .onValue((currentDate)=>console.log(currentDate));


    // Our new code is that simple. We don't need to change the stream source, the mapping
    // function, nor the subscription function; we just need to take only five events from the
    // stream.This is the idea of adding operators between event streams & 
    // observables. 








