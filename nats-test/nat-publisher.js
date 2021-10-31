const nats = require ('node-nats-streaming');

class Publisher {
  constructor (clusterID, clientID, subject = '') {
    this.clusterID = clusterID;
    this.clientID = clientID;
    this.subject = subject;
    this.server = null;
    this.connect ();
  }

  connect () {
    this.server = nats.connect (this.clusterID, this.clientID, {
      url: 'http://localhost:4222',
    });

    this.server.on ('connect', () => {
      console.log ('Publisher connected to NATS');

      this.server.on ('close', () => {
        console.log ('NATS connection closed');
        process.exit ();
      });
    });
  }

  publish (data, subject = '') {
    this.subject = subject.length > 0 ? subject : this.subject;
    this.server.once ('connect', () => {
      this.server.publish (this.subject, JSON.stringify(data), (err, data) => {
        console.log ('Event Published ', err, data);
      });
    });
  }
}

// process.on ('SIGINT', () => this.server.close ());
// process.on ('SIGTERM', () => this.server.close ());

module.exports = Publisher;
