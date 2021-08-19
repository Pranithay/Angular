var Bacon = require("baconjs");

var myCustomEventStream = Bacon.fromBinder(function(push){
    push('some value');
    push('other value');
    push('Now the stream will finish');
    push(new Bacon.End());  // tells to close the event stream 
});

myCustomEventStream
    .onValue((value)=>
    console.log(value)
); 

// Observables from other sources/ aribitary sources. 




