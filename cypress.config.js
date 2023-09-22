module.exports = (on, config) => {
  config.e2e = {
    setupNodeEvents() {
      // Implement node event listeners here
      const EventEmitter = require('events');
      const customEmitter = new EventEmitter();

      // Listener 1
      const listener1 = (arg1, arg2) => {
        console.log(`Listener 1: ${arg1} and ${arg2}`);
      };

      // Listener 2
      const listener2 = () => {
        console.log('Listener 2: Event was emitted');
      };

      // Register the listeners
      customEmitter.on('customEvent', listener1);
      customEmitter.on('customEvent', listener2);

      // Emit the event
      customEmitter.emit('customEvent', 'Hello', 'World');
    },
  };

  // Return the updated configuration object
  return config;
};
