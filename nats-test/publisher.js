const nats = require ('node-nats-streaming');
const Publisher = require ('./nat-publisher');

console.clear ();

// const stan = nats.connect ('cart', 'abc', {
//   url: 'http://localhost:4222',
// });

// stan.on ('connect', () => {
//   console.log ('Publisher connected to NATS');

//   stan.on ('close', () => {
//     console.log ('NATS connection closed');
//     process.exit ();
//   });
//   const data = JSON.stringify ({
//     id: '123',
//     title: 'concert',
//     price: 20,
//   });
//   stan.publish ('cart:added', data, () => {
//     console.log ('Event published');
//   });
// });

// // kubectl port-forward nats-depl-pod 4222:4222

// process.on('SIGINT', () => stan.close());
// process.on('SIGTERM', () => stan.close());

let publisher = new Publisher ('cart', '123', 'cart:added');
publisher.publish ({id: '123', title: 'hello', concert: 'hello'});
publisher = new Publisher ('cart', '124', 'cart:deleted');
publisher.publish ({id: '123', title: 'hello', concert: 'hello'});
