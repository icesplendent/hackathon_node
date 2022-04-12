const uuid = require('uuid');
const eventEmitter = require('events');

class Logger extends eventEmitter {
	log(msg) {
		// Call event
		this.emit('message', {id: uuid.v4(), msg});
	}
}

// module.exports = Logger;

/* 原本在 index.js 裡的
// const Logger = require('./logger');
const logger = new Logger();

// Event Listener
logger.on('message', data => {console.log('Called listener', data)});

logger.log('Hello World');
*/