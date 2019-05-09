var amqp = require("amqplib/callback_api");

var amqpURL =
  "amqp://dfphquwm:3rfY8-meIsZOEzZl9TnaAUBtI6G0tAKr@macaw.rmq.cloudamqp.com/dfphquwm";

amqp.connect(amqpURL, function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = "CloudAMQP";
    var args = process.argv.slice(2);
    var msg = args.slice(0).join(" ") || "Wetter in Gummersbach 14 C°.";

    ch.assertQueue(q, { durable: false });

    ch.sendToQueue(q, Buffer.from(msg));
  });

  setTimeout(function() {
    conn.close();
    process.exit(0);
  }, 500);
});
