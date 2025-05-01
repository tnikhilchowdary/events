const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('greet', ()=>{
    console.log("Event has been triggered!");
});


eventEmitter.emit('greet');

