const nats = require ('node-nats-streaming');
const {randomBytes} = require ('crypto');
const Listener = require('./nats-listener');

const stan = nats.connect ('cart', randomBytes (4).toString ('hex'), {
  url: 'http://localhost:4222',
});

stan.on ('connect', () => {
  console.log ('Listener connected to NATS');

  stan.on ('close', () => {
    console.log ('Nats connection closed!');
    process.exit ();
  });

  let listener = new Listener(stan, 'cart:added','cart-service-group');
  listener.listen();
  console.log(listener.onMessage());

  
  listener = new Listener(stan, 'cart:deleted','cart-service-group');
  listener.listen();
  console.log(listener.onMessage())
});

// kubectl port-forward nats-depl-pod 4222:4222
// kubectl port-forward nats-depl-pod 8222:8222
