const nats = require ('node-nats-streaming');

const stan = nats.connect ('cart', 'abc', {
  url: 'http://localhost:4222',
});

stan.on ('connect', () => {
  console.log ('Publisher connected to NATS');

  const subscription = stan.subscribe ('cart:added');

  subscription.on ('message', msg => {
    const data = msg.getData ();
    if (typeof data === 'string') {
      console.log (
        `Received Event #${msg.getSequence ()} with data ${JSON.parse (data)}`
      );
    }
  });
});

// kubectl port-forward nats-depl-pod 4222:4222
