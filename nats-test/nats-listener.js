class Listener {
  constructor (stan, subject, queueGroupName) {
    this.subject = subject;
    this.queueGroupName = queueGroupName;
    this.client = stan;
    this.ackWait = 5 * 1000;
    this.msg = null;
  }

  subscriptionOptions () {
    return this.client
      .subscriptionOptions ()
      .setDeliverAllAvailable ()
      .setManualAckMode (true)
      .setAckWait (this.ackWait)
      .setDurableName (this.queueGroupName);
  }

  listen () {
    const subscription = this.client.subscribe (
      this.subject,
      this.queueGroupName,
      this.subscriptionOptions ()
    );

    subscription.on ('message', msg => {
      console.log (
        `Message received: ${this.subject} / ${this.queueGroupName}`
      );

      const parsedData = this.parseMessage (msg);
      this.msg = parsedData;
      msg.ack();
    });
  }

  parseMessage (msg) {
    const data = msg.getData ();
    return typeof data === 'string' ? JSON.parse (data) : data;
  }

  onMessage (data, msg) {
    console.log ('Message received: ', data);
    return this.msg;
  }
}

module.exports = Listener;
