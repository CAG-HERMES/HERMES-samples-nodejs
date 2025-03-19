const express = require("express");
const consumeMessagesFromQueue = require('./messageQueue');
const listenToTopic = require('./listenToTopic');
const sendMessageToTopic = require('./sendToTopic');
const app = express();
const port = 3000;

// Start the Express server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
const { SOLACE_QUEUE_NAME, SOLACE_TOPIC_NAME } = process.env;

// send message to topic
sendMessageToTopic(SOLACE_TOPIC_NAME, 'hello')
// Consume messages from the queue
consumeMessagesFromQueue(SOLACE_QUEUE_NAME);
// subscribe to topic
listenToTopic(SOLACE_TOPIC_NAME)