var amqp = require("amqplib/callback_api");

var amqpURL =
  "amqp://dfphquwm:3rfY8-meIsZOEzZl9TnaAUBtI6G0tAKr@macaw.rmq.cloudamqp.com/dfphquwm";

amqp.connect(amqpURL, function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = "CloudAMQP";
    ch.assertQueue(q, { durable: false });
    console.log(" <- Waiting for messages in %s, To exit press CTRL+C", q);
    ch.consume(
      q,
      function(msg) {
        console.log(" <- Received %s", msg.content.toString());
      },
      { noAck: true }
    );
  });
});
