const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, age) => {
  console.log(`User: ${name}, Age: ${age}`);
});

customEmitter.emit('response', 'Nikhil', 25);
