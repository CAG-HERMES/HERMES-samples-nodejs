const express = require("express");
const consumeMessagesFromQueue = require('./messageQueue');
const listenToTopic = require('./listenToTopic');
const app = express();
const port = 3000;

// Start the Express server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// Consume messages from the queue
const { SOLACE_QUEUE_NAME, SOLACE_TOPIC_NAME } = process.env;
consumeMessagesFromQueue(SOLACE_QUEUE_NAME);
listenToTopic(SOLACE_TOPIC_NAME)