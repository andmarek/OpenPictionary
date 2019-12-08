const events = require(‘events’);
const emitter = new events.EventEmitter();
emitter.on(‘fire’, () => {
  console.log(‘Fire!’)
});
console.log(‘Ready!’);
console.log(‘Aim!’);
emitter.emit(‘fire’);
