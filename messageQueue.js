const initSolaceClient = require('./solaceClient');
const solace = require("solclientjs");

const consumeMessagesFromQueue = (queueName) => {
  const session = initSolaceClient();

  setTimeout(() => {
    try {
      // Create message consumer
      const messageConsumer = session.createMessageConsumer({
        queueDescriptor: {
          name: queueName,
          type: solace.QueueType.QUEUE,
        },
        acknowledgeMode: solace.MessageConsumerAcknowledgeMode.CLIENT, // Enabling Client ack
      });

      messageConsumer.connect();

      messageConsumer.on(
        solace.MessageConsumerEventName.MESSAGE,
        (message) => {
          console.log(
            `Received message: "${message.getBinaryAttachment()}", details:\n${message.dump()}`
          );
          message.acknowledge(); // Explicitly acknowledge the message
        }
      );
    } catch (error) {
      console.error("Failed to create or connect message consumer: ", error.toString());
    }
  }, 5000);
};

module.exports = consumeMessagesFromQueue;
