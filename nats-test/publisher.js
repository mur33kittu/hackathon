const nats = require ('node-nats-streaming');

const stan = nats.connect ('cart', 'abc', {
  url: 'http://localhost:4222',
});

stan.on ('connect', () => {
  console.log ('Publisher connected to NATS');

  const data = JSON.stringify ({
    id: '123',
    title: 'concert',
    price: 20,
  });
  stan.publish ('cart:added', data);
});

// kubectl port-forward nats-depl-pod 4222:4222
