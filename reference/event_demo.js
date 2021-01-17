const EventEmitter = require('events');
const { extname } = require('path');


class MyEmitter extends EventEmitter{}


const myEmitter  = new MyEmitter();

myEmitter.on('event',()=>console.log('event fired'))


myEmitter.emit('event');
